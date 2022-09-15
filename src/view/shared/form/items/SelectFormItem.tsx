import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { i18n } from "src/i18n";
import { useFormContext } from "react-hook-form";
import FormErrors from "src/view/shared/form/formErrors";

function SelectFormItem(props) {
  const {
    label,
    name,
    hint,
    options,
    required,
    mode,
    placeholder,
    isClearable,
    externalErrorMessage,
  } = props;

  const {
    register,
    errors,
    formState: { touched, isSubmitted },
    setValue,
    watch,
  } = useFormContext();

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touched,
    isSubmitted,
    externalErrorMessage
  );

  const originalValue = watch(name);

  useEffect(() => {
    register({ name });
  }, [register, name]);

  const value = () => {
    const { mode } = props;
    if (mode === "multiple") {
      return valueMultiple();
    } else {
      return valueOne();
    }
  };

  const valueMultiple = () => {
    if (originalValue) {
      return originalValue.map((value) =>
        options.find((option) => option.value === value)
      );
    }

    return [];
  };

  const valueOne = () => {
    const { options } = props;

    if (originalValue != null) {
      return options.find((option) => option.value === originalValue);
    }

    return null;
  };

  const handleSelect = (data) => {
    const { mode } = props;
    if (mode === "multiple") {
      return handleSelectMultiple(data);
    } else {
      return handleSelectOne(data);
    }
  };

  const handleSelectMultiple = (values) => {
    if (!values) {
      setValue(name, [], {
        shouldValidate: true,
        shouldDirty: true,
      });
      props.onChange && props.onChange([]);
      return;
    }

    const newValue = values
      .map((data) => (data ? data.value : data))
      .filter((value) => value != null);

    setValue(name, newValue, {
      shouldValidate: true,
      shouldDirty: true,
    });
    props.onChange && props.onChange(newValue);
  };

  const handleSelectOne = (data) => {
    if (!data) {
      setValue(name, null, {
        shouldValidate: true,
        shouldDirty: true,
      });
      props.onChange && props.onChange(null);
      return;
    }

    setValue(name, data.value, {
      shouldValidate: true,
      shouldDirty: true,
    });
    props.onChange && props.onChange(data.value);
  };

  return (
    <div className='form__select'>
      {Boolean(label) && (
        <label className={`col-form-label ${required ? "required" : null}`}>
          {label}
        </label>
      )}
      <select
        value={value()}
        onChange={(event) => {
          props.onChange && props.onChange(event.target.value);
        }}
        onBlur={(event) => {
          props.onBlur && props.onBlur(event);
        }}
        ref={register}
        id={name}
        name={name}
        placeholder={placeholder || ""}>
        {options.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
      <div className='invalid-feedback'>{errorMessage}</div>

      {Boolean(hint) && <small className='form-text text-muted'>{hint}</small>}
    </div>
  );
}

SelectFormItem.defaultProps = {
  required: false,
  isClearable: true,
};

SelectFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  externalErrorMessage: PropTypes.string,
  mode: PropTypes.string,
  isClearable: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default SelectFormItem;

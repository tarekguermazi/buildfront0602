import React, { useEffect } from "react";
import PropTypes from "prop-types";
import FormErrors from "src/view/shared/form/formErrors";
import { useFormContext } from "react-hook-form";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
function RadioFormItem(props) {
  const {
    label,
    name,
    hint,
    options,
    externalErrorMessage,
    required,
    IconName,
    iconType,
    className,
  } = props;

  const {
    register,
    errors,
    formState: { touched, isSubmitted },
    setValue,
    watch,
  } = useFormContext();

  useEffect(() => {
    register({ name });
  }, [register, name]);

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touched,
    isSubmitted,
    externalErrorMessage
  );

  return (
    <section className='contentTypes'>
      <span>{label}</span>
      <Splide
        className='splide'
        options={{
          gap: ".2rem",
          perPage: 5,
          pagination: false,
          Wheel: true,
          width: "100%",
        }}>
        {options.map((option) => (
          <SplideSlide>
            <label key={option.value} htmlFor={option.label}>
              <input
                type='radio'
                className={className}
                id={`${option.value}`}
                name={`${name}-${option.value}`}
                value={option.value}
                checked={String(option.value) === String(watch(name))}
                onChange={(e) => {
                  setValue(name, e.target.value, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                  props.onChange && props.onChange(e.target.value);
                }}
              />
              <div className='TypeCard'>
                <i className='fa-thin fa-camera'></i>
                {/* <IconName className='icon' /> */}
                <span>{option.label}</span>
              </div>
            </label>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

RadioFormItem.defaultProps = {
  required: false,
};

RadioFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  externalErrorMessage: PropTypes.string,
  className: PropTypes.string,
};

export default RadioFormItem;

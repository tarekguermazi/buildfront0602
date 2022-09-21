import React, { useEffect } from "react";
import PropTypes from "prop-types";
import FormErrors from "src/view/shared/form/formErrors";
import { useFormContext } from "react-hook-form";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { GrTextAlignFull } from "react-icons/gr";
import { IoVideocamOutline } from "react-icons/io5";
import { CgLink, CgSoftwareUpload } from "react-icons/cg";
import { BsCamera } from "react-icons/bs";
import { BiMicrophone, BiStats } from "react-icons/bi";
import { AiOutlineQuestion } from "react-icons/ai";
import { VscGraphScatter } from "react-icons/vsc";
function RadioFormItem(props) {
  const {
    label,
    name,
    hint,
    options,
    externalErrorMessage,
    required,
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
          <SplideSlide key={option.value}>
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
                {
                  {
                    Texte: <GrTextAlignFull className='icon' fontSize={20} />,
                    audio: <BiMicrophone className='icon' fontSize={20} />,
                    vidéo: <IoVideocamOutline className='icon' fontSize={20} />,
                    "lien web": <CgLink className='icon' fontSize={20} />,
                    photo: <BsCamera className='icon' fontSize={20} />,
                    infographie: (
                      <VscGraphScatter className='icon' fontSize={20} />
                    ),
                    statistiques: <BiStats className='icon' fontSize={20} />,
                    autre: <AiOutlineQuestion className='icon' fontSize={20} />,
                  }[option.label]
                }
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

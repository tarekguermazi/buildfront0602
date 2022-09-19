import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import FileUploader from "src/modules/shared/fileupload/fileUploader";
import Errors from "src/modules/shared/error/errors";
import { i18n } from "src/i18n";
import ImagesUploaderWrapper from "src/view/shared/styles/ImageUploaderWrapper";
import ImageModal from "src/view/shared/modals/ImageModal";
import ButtonIcon from "src/view/shared/ButtonIcon";
import { emptyImage } from "../../../assets/images";

function ImagesUploader(props) {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<any>(null);
  const input = useRef<any>();

  const value = () => {
    const { value } = props;

    if (!value) {
      return [];
    }

    return Array.isArray(value) ? value : [value];
  };

  const fileList = () => {
    return value().map((item) => ({
      uid: item.id || undefined,
      name: item.name,
      status: "done",
      url: item.downloadUrl,
    }));
  };

  const handleRemove = (id) => {
    props.onChange(value().filter((item) => item.id !== id));
  };

  const handleChange = async (event) => {
    try {
      const files = event.target.files;

      if (!files || !files.length) {
        return;
      }

      let file = files[0];

      FileUploader.validate(file, {
        storage: props.storage,
        image: true,
      });

      setLoading(true);

      file = await FileUploader.upload(file, {
        storage: props.storage,
        image: true,
      });

      input.current.value = "";

      setLoading(false);
      props.onChange([...value(), file]);
    } catch (error) {
      input.current.value = "";
      console.error(error);
      setLoading(false);
      Errors.showMessage(error);
    }
  };

  const doPreviewImage = (image) => {
    setImage({
      src: image.downloadUrl,
      alt: image.name,
    });
  };

  const doCloseImageModal = () => {
    setImage(null);
  };

  const { max, readonly } = props;

  const uploadButton = (
    <label className='profile__'>
      <div className='profile__avatar' style={{ cursor: "pointer" }}>
        <img
          src={emptyImage}
          style={{
            width: "130px",
            height: "130px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
          className='lazyload'
        />
        <ButtonIcon loading={loading} iconClass='fas fa-plus' />
        <div className='avatar__camera'>
          <i className='fa-solid fa-camera'></i>
          <input
            style={{ display: "none" }}
            disabled={loading || readonly}
            accept='image/*'
            type='file'
            onChange={handleChange}
            ref={input}
          />
        </div>
      </div>
    </label>
  );

  return (
    <ImagesUploaderWrapper>
      {readonly || (max && fileList().length >= max) ? null : uploadButton}
      {value() && value().length ? (
        <div className='d-flex flex-row flex-wrap'>
          {value().map((item) => {
            return (
              <div className='profile__' key={item.id}>
                <div className='profile__avatar'>
                  <img
                    alt={item.name}
                    src={item.downloadUrl}
                    style={{
                      width: "130px",
                      height: "130px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className='img-buttons rounded-bottom'>
                  <button
                    type='button'
                    className='btn btn-link'
                    onClick={() => doPreviewImage(item)}>
                    <i className='fas fa-search'></i>
                  </button>

                  {!readonly && (
                    <button
                      type='button'
                      className='btn btn-link ml-2'
                      onClick={() => handleRemove(item.id)}>
                      <i className='fas fa-times'></i>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : null}

      {image && (
        <ImageModal
          src={image.src}
          alt={image.alt}
          onClose={() => doCloseImageModal()}
        />
      )}
    </ImagesUploaderWrapper>
  );
}

ImagesUploader.propTypes = {
  readonly: PropTypes.bool,
  max: PropTypes.number,
  storage: PropTypes.object,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default ImagesUploader;

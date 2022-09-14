import React, { useState } from "react";
import { Link } from "react-router-dom";
// ICONS
import { GrTextAlignFull } from "react-icons/gr";
import { IoVideocamOutline } from "react-icons/io5"
import { CgLink, CgSoftwareUpload } from "react-icons/cg"
import { BsCamera } from "react-icons/bs"
import { BiMicrophone } from "react-icons/bi"
import { AiOutlineQuestion } from "react-icons/ai"

// SPLIDE
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// RICH TEXT EDITOR (DRAFT.JS)
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

// FORM HANDLING
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormError from "../styles/FormError";

// FORM SCHEMA
const schema = yup.object().shape({
  categories: yup.string().required('Veuillez choisir une catégorie'),
  contentTypeRadio: yup.string().required('Veuillez indiquer le type du contenu')
});

export default function Suggest() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  // state for conditionally rendering form fields according to chosen content type
  const [contentType, setContentType] = useState('Text');

  const handleChange = event => {
    setContentType(event.target.value);
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  const handleFormSubmission = data => {
    console.table(data);
  }

  return (
    <div className='app__profile'>
      <div className='profile'>
        <div className="mainFlex">
          <Link to='/profile' className="backTigger">
            <i className="fa-solid fa-arrow-left" />
            <span>Retour</span>
          </Link>
          <section className="suggestionsPanel">
            <div className="mainContent">
              <div className='archieve__header'>
                <h2>Suggérer&nbsp;DU&nbsp;contenu</h2>
                <div className='communiquer__bar'></div>
              </div>


              <form onSubmit={handleSubmit(handleFormSubmission)}>
                {/* DESCRIPTION */}
                <section className="description">
                  Description lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis voluptates deserunt optio maxime ad vero voluptatum quibusdam laborum nulla architecto recusandae nam, nihil quos. Rerum incidunt tenetur accusantium rem voluptates, voluptas iste nihil, ipsam
                </section>

                {/* CATEGORIES */}
                <section className="contentCategory">
                  <span>Catégorie</span>

                  <select ref={register} name="categories">
                    <option value="">Select category...</option>
                    <option value="manifestation">Manifestation</option>
                    <option value="placeholder">placeholder</option>
                  </select>
                  {
                    errors.categories &&
                    <FormError message={errors.categories?.message} />
                  }
                </section>

                {/* CONTENT TYPE */}
                <section className="contentTypes">
                  <span>Type de contenu</span>

                  <Splide className="splide" options={{
                    gap: '.2rem',
                    perPage: 5,
                    pagination: false,
                    Wheel: true,
                    width: '100%'
                  }}>

                    <SplideSlide>
                      <label htmlFor="Text">
                        <input
                          type="radio"
                          ref={register}
                          value="Text"
                          name="contentTypeRadio"
                          className="contentTypeRadio"
                          id="Text"
                          onChange={handleChange}
                        />
                        <div className="TypeCard">
                          <GrTextAlignFull className="icon" />
                          <span>Text</span>
                        </div>
                      </label>
                    </SplideSlide>

                    <SplideSlide>
                      <label htmlFor="Audio">
                        <input
                          type="radio"
                          ref={register}
                          value="Audio"
                          name="contentTypeRadio"
                          className="contentTypeRadio"
                          id="Audio"
                          onChange={handleChange}
                        />
                        <div className="TypeCard">
                          <BiMicrophone className="icon" />
                          <span>Audio</span>
                        </div>
                      </label>
                    </SplideSlide>

                    <SplideSlide>
                      <label htmlFor="Video">
                        <input
                          type="radio"
                          ref={register}
                          value="Video"
                          name="contentTypeRadio"
                          className="contentTypeRadio"
                          id="Video"
                          onChange={handleChange}
                        />
                        <div className="TypeCard">
                          <IoVideocamOutline className="icon" />
                          <span>Video</span>
                        </div>
                      </label>
                    </SplideSlide>

                    <SplideSlide>
                      <label htmlFor="Lien">
                        <input
                          type="radio"
                          ref={register}
                          value="Lien"
                          name="contentTypeRadio"
                          className="contentTypeRadio"
                          id="Lien"
                          onChange={handleChange}
                        />
                        <div className="TypeCard">
                          <CgLink className="icon" />
                          <span>Lien</span>
                        </div>
                      </label>
                    </SplideSlide>

                    <SplideSlide>
                      <label htmlFor="Photo">
                        <input
                          type="radio"
                          ref={register}
                          value="Photo"
                          name="contentTypeRadio"
                          className="contentTypeRadio"
                          id="Photo"
                          onChange={handleChange}
                        />
                        <div className="TypeCard">
                          <BsCamera className="icon" />
                          <span>Photo</span>
                        </div>
                      </label>
                    </SplideSlide>

                    <SplideSlide>
                      <label htmlFor="PLACEHOLDER">
                        <input
                          type="radio"
                          ref={register}
                          value="PLACEHOLDER"
                          name="contentTypeRadio"
                          className="contentTypeRadio"
                          id="PLACEHOLDER"
                          onChange={handleChange}
                        />
                        <div className="TypeCard">
                          <AiOutlineQuestion className="icon" />
                          <span>N.A</span>
                        </div>
                      </label>
                    </SplideSlide>

                  </Splide>
                  {
                    errors.contentTypeRadio &&
                    <FormError message={errors.contentTypeRadio?.message} />
                  }
                </section>

                {/* SUPPORT (Audio, Video, Photo)*/}
                {
                  (contentType === "Audio" || contentType === "Video" || contentType === "Photo") &&
                  <section className="support">
                    <span>Support</span>

                    <div className="dragAndDropAreaFlex">
                      <div className="DADControls">
                        <CgSoftwareUpload className="icon" />
                        <span>Drop files here</span>
                        <span>or</span>
                        <label htmlFor="file-upload" className="customFileUpload">
                          <input type="file" id="file-upload" />
                          Select files
                        </label>
                      </div>
                    </div>
                  </section>
                }

                {/* DESCRIPTION (Text, Link)*/}
                {
                  (contentType === "Text" || contentType === "Lien") &&
                  <section className="description">
                    <span>Description</span>
                    <Editor editorState={editorState} onChange={setEditorState} />
                  </section>
                }
                {/* ACTION BUTTONS */}
                <section className="formActions">
                  <input type="reset" value="Annuler" />
                  <input type="submit" value="Valider" />
                </section>

              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

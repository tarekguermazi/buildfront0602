import React, { useState } from "react";
import { Link } from "react-router-dom";
import TypeCard from '../styles/TypeCard';
// ICONS
import { GrTextAlignFull } from "react-icons/gr";
import { IoVideocamOutline } from "react-icons/io5"
import { CgLink, CgSoftwareUpload } from "react-icons/cg"
import { BsCamera } from "react-icons/bs"
import { BiMicrophone } from "react-icons/bi"

// SPLIDE
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// RICH TEXT EDITOR (DRAFT.JS)
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';


export default function Suggest() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
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
              {/* DESCRIPTION */}
              <section className="description">
                Description lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis voluptates deserunt optio maxime ad vero voluptatum quibusdam laborum nulla architecto recusandae nam, nihil quos. Rerum incidunt tenetur accusantium rem voluptates, voluptas iste nihil, ipsam
              </section>

              {/* CATEGORIES */}
              <section className="contentCategory">
                <span>Catégorie</span>

                <select name="categories" >
                  <option value="manifestation">Manifestation</option>
                  <option value="placeholder">placeholder</option>
                </select>
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
                    <TypeCard>
                      <GrTextAlignFull className="icon" />
                      <span>TEXT</span>
                    </TypeCard>
                  </SplideSlide>

                  <SplideSlide>
                    <TypeCard>
                      <BiMicrophone className="icon" />
                      <span>Audio</span>
                    </TypeCard>
                  </SplideSlide>

                  <SplideSlide>
                    <TypeCard>
                      <IoVideocamOutline className="icon" />
                      <span>Video</span>
                    </TypeCard>
                  </SplideSlide>

                  <SplideSlide>
                    <TypeCard>
                      <CgLink className="icon" />
                      <span>Lien</span>
                    </TypeCard>
                  </SplideSlide>

                  <SplideSlide>
                    <TypeCard>
                      <BsCamera className="icon" />
                      <span>Photo</span>
                    </TypeCard>
                  </SplideSlide>

                  <SplideSlide>
                    <TypeCard>
                      <BsCamera className="icon" />
                      <span>PLACEHOLDER</span>
                    </TypeCard>
                  </SplideSlide>

                </Splide>
              </section>

              {/* SUPPORT */}
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

              {/* DESCRIPTION */}
              <section className="description">
                <span>Description</span>
                <Editor editorState={editorState} onChange={setEditorState} />
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authAxios from "src/modules/shared/axios/authAxios";
import AuthCurrentTenant from 'src/modules/auth/authCurrentTenant';

// ICONS
import { GrTextAlignFull } from "react-icons/gr";
import { IoVideocamOutline } from "react-icons/io5"
import { CgLink, CgSoftwareUpload } from "react-icons/cg"
import { BsCamera } from "react-icons/bs"
import { BiMicrophone, BiStats } from "react-icons/bi"
import { AiOutlineQuestion } from "react-icons/ai"
import { VscGraphScatter } from "react-icons/vsc"

// SPLIDE
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// FORM HANDLING
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormError from "../styles/FormError";
import toast, { Toaster } from 'react-hot-toast';

// FORM SCHEMA
const schema = yup.object().shape({
  description: yup.string().required('Veuillez fournir une description'),
  category: yup.string(),
  contentType: yup.string()
});

export default function Suggest() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmission = async (data, event) => {
    let now: Date = new Date();
    const obj = {
      "data": {
        "thematique": null,
        "categorie": (data.categories) ? data.categories : "autre",
        "type": (data.contentTypeRadio) ? data.contentTypeRadio : "autre",
        "supports": [
          {
            "name": (data.support.length) ? data.support[0].name : "N.A",
            "sizeInBytes": (data.support.length) ? data.support[0].size : 0,
            "privateUrl": "N.A",
            "publicUrl": "N.A",
            "new": true
          }
        ],
        "descriptionFR": data.description,
        "statut": "en_attente",
        "date": now.toISOString().split('T')[0]
      }
    }
    try {
      event?.preventDefault();
      const currentTenantID = AuthCurrentTenant.get();
      const response = await authAxios.post(
        `/tenant/${currentTenantID}/publication/`,
        obj
      )
      if (response.status === 200) {
        reset();
        toast.success('Suggestion ajoutée avec succès!')
      }
    } catch (error) {
      console.log(error);
    }
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
              <Toaster />
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

                  <select name="categories" ref={register}>
                    <option value="">Select category...</option>
                    <option value="manifestation">Manifestation</option>
                    <option value="article scientifique">article scientifique</option>
                    <option value="article journalistique">article journalistique</option>
                    <option value="rapport">rapport</option>
                    <option value="entretien">entretien</option>
                    <option value="données numériques">données numériques</option>
                    <option value="autre">autre</option>
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
                      <label htmlFor="Text">
                        <input
                          type="radio"
                          ref={register}
                          value="Texte"
                          name="contentTypeRadio"
                          className="contentTypeRadio"
                          id="Text"
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
                          value="audio"
                          name="contentTypeRadio"
                          className="contentTypeRadio"
                          id="Audio"
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
                          value="vidéo"
                          name="contentTypeRadio"
                          className="contentTypeRadio"
                          id="Video"
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
                          value="lien web"
                          name="contentTypeRadio"
                          className="contentTypeRadio"
                          id="Lien"
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
                          value="photo"
                          name="contentTypeRadio"
                          className="contentTypeRadio"
                          id="Photo"
                        />
                        <div className="TypeCard">
                          <BsCamera className="icon" />
                          <span>Photo</span>
                        </div>
                      </label>
                    </SplideSlide>

                    <SplideSlide>
                      <label htmlFor="Infographie">
                        <input
                          type="radio"
                          ref={register}
                          value="infographie"
                          name="contentTypeRadio"
                          className="contentTypeRadio"
                          id="Infographie"
                        />
                        <div className="TypeCard">
                          <VscGraphScatter className="icon" />
                          <span>Infographie</span>
                        </div>
                      </label>
                    </SplideSlide>

                    <SplideSlide>
                      <label htmlFor="Statistiques">
                        <input
                          type="radio"
                          ref={register}
                          value="statistiques"
                          name="contentTypeRadio"
                          className="contentTypeRadio"
                          id="Statistiques"
                        />
                        <div className="TypeCard">
                          <BiStats className="icon" />
                          <span>Statistiques</span>
                        </div>
                      </label>
                    </SplideSlide>

                    <SplideSlide>
                      <label htmlFor="Autre">
                        <input
                          type="radio"
                          ref={register}
                          value="autre"
                          name="contentTypeRadio"
                          className="contentTypeRadio"
                          id="Autre"
                        />
                        <div className="TypeCard">
                          <AiOutlineQuestion className="icon" />
                          <span>Autre</span>
                        </div>
                      </label>
                    </SplideSlide>

                  </Splide>
                </section>

                {/* SUPPORT (Audio, Video, Photo)*/}
                <section className="support">
                  <span>Support</span>

                  <div className="dragAndDropAreaFlex">
                    <div className="DADControls">
                      <CgSoftwareUpload className="icon" />
                      <span>Drop files here</span>
                      <span>or</span>
                      <label htmlFor="file-upload" className="customFileUpload">
                        <input
                          type="file"
                          id="file-upload"
                          name="support"
                          ref={register}
                        />
                        Select files
                      </label>
                    </div>
                  </div>
                </section>

                {/* DESCRIPTION (Text, Link)*/}
                <section className="description">
                  <span>Description</span>
                  <textarea
                    cols={30}
                    rows={10}
                    placeholder="Description...."
                    name="description"
                    ref={register}
                  ></textarea>
                  {
                    errors.description &&
                    <FormError message={errors.description?.message} />
                  }
                </section>

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

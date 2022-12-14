import React, { useEffect, useMemo, useState } from "react";
import Breadcrumb from "../shared/Breadcrumb";
import { i18n } from "../../i18n";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Image from "../shared/Image";
import { BsPlayFill } from "react-icons/bs";
import { Facebook, Instagramm, Linkedin, Twitter } from "../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import action from "src/modules/evenement/view/evenementViewActions";
import { useRouteMatch } from "react-router-dom";
import selector from "src/modules/evenement/view/evenementViewSelectors";
import Date from "../shared/Date";
import Youtube from "../shared/Youtube";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import EvenementAvenir from "./EvenementAvenir";
import ImageModal from "../shared/modals/ImageModal";
import Translate from "../shared/Translate";
function EvenementDetaill() {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const selectRows = useSelector(selector.selectRecord);
  const selectLoading = useSelector(selector.selectLoading);
  const [image, setImage] = useState<any>(null);
  useEffect(() => {
    dispatch(action.doFind(match.params.id));
  }, [dispatch]);
  const center = useMemo(() => ({ lat: 44, lng: -40 }), []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDRX@D21tjCpNmpABQp8bnfNyA99pscQrM",
  });

  const containerStyle = {
    width: "398px",
    height: "386px",
  };
  if (!isLoaded) return <div>Loading ... </div>;

  const doPreviewImage = (image) => {
    setImage({
      src: image.downloadUrl,
      alt: image.name,
    });
  };

  const doCloseImageModal = () => {
    setImage(null);
  };
  return (
    <>
      {selectLoading && <h1>Loading</h1>}
      {!selectLoading && (
        <>
          {" "}
          <Breadcrumb
            items={[[i18n("dashboard.menu"), "/"], [i18n("common.Evènements")]]}
          />
          <div className='page__evenement'>
            <div className='evenment__header'>
              <Image
                width={1170}
                height={404}
                src={selectRows?.supports[0]?.downloadUrl}
                alt='Placeholder'
              />

              <div className='evenement__message'>
                <div className='messageEvenement__left'>
                  <div className='left__number'>
                    {Date.Day(selectRows?.date)}
                  </div>
                  <div className='left__months'>
                    {Date.Month(selectRows?.date)}
                  </div>
                </div>
                <div className='messageEvenement__right'>
                  <div className='messageEvenement__title'>
                    {Translate.Trans("title", selectRows)}
                  </div>
                  <div className='messageEvenement__description'>
                    <div>
                      <AiOutlineCalendar /> {Date.date(selectRows?.date)}
                    </div>
                    <div>
                      <MdLocationOn />
                      {Translate.TransEmplacement(selectRows)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='detaill__evenement'>
              <div className='detaillEvenement__left'>
                <div className='left__description'>
                  <div className='title__detaillEvenemet'>
                    {i18n("common.Description")}
                  </div>
                  <div
                    className='description__detaillEvenement'
                    dangerouslySetInnerHTML={{
                      __html: Translate.Trans("description", selectRows),
                    }}></div>
                </div>
                <div className='left__date'>
                  <div className='title__detaillEvenemet'>
                    {i18n("common.Date")}
                  </div>
                  <div className='description__detaillEvenement'>
                    <b> {Date.DetaillDate(selectRows?.date)} </b> <br />
                    {i18n("common.horraire")} :{" "}
                    <b>{Date.Hour(selectRows?.date)}</b>
                  </div>
                </div>

                <div className='left__photos'>
                  <div className='title__detaillEvenemet'>
                    {i18n("common.Photos")}
                  </div>
                  <div className='photos__gallery'>
                    {selectRows?.supports?.map((item) => (
                      <>
                        <Image
                          width={165}
                          height={159}
                          src={item.downloadUrl}
                          alt='Placeholder'
                        />

                        <button
                          type='button'
                          className='btn btn-link'
                          onClick={() => doPreviewImage(item)}>
                          <i className='fas fa-search'></i>
                        </button>
                      </>
                    ))}
                  </div>

                  {image && (
                    <ImageModal
                      src={image.src}
                      alt={image.alt}
                      onClose={() => doCloseImageModal()}
                    />
                  )}
                  <div className='plus__button'>{i18n("common.voirPlus")}</div>
                </div>

                <div className='left__videos'>
                  <div className='title__detaillEvenemet'>
                    {i18n("common.Videos")}
                  </div>

                  <div className='photos__gallery'>
                    {selectRows?.videos?.map((item) => (
                      <div className='videos__list'>
                        <Youtube link={item?.link} />
                      </div>
                    ))}
                  </div>
                  <div className='plus__button'>{i18n("common.voirPlus")}</div>
                </div>

                <div className='left__contact'>
                  <div className='title__detaillEvenemet'>
                    {i18n("common.Contact")}
                  </div>

                  <div
                    className='description__detaillEvenement'
                    dangerouslySetInnerHTML={{
                      __html: selectRows?.contact2,
                    }}></div>
                </div>
              </div>
              <div className='detailEvenement__right'>
                <div className='title__detaillEvenemet'>
                  {i18n("common.Lieu")}
                </div>
                <div>
                  <GoogleMap
                    zoom={10}
                    center={center}
                    mapContainerStyle={containerStyle}>
                    <Marker position={center} />
                  </GoogleMap>
                </div>
                <div className='detaillEvenement__socialMedia'>
                  <div className='socialMedia__title'>
                    {i18n("common.Partager")} :
                  </div>
                  <Image src={Facebook} />
                  <Image src={Twitter} />
                  <Image src={Instagramm} />
                  <Image src={Linkedin} />
                </div>
                <div className='left__contact'>
                  <div className='title__detaillEvenemet'>
                    {i18n("common.Contact")}
                  </div>
                  <div
                    className='description__detaillEvenement'
                    dangerouslySetInnerHTML={{
                      __html: selectRows?.contact1,
                    }}></div>
                </div>
              </div>
            </div>
            <EvenementAvenir />
          </div>{" "}
        </>
      )}
    </>
  );
}

export default EvenementDetaill;

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AproposService from 'src/modules/Apropos/AproposService'
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";


export default function Content() {

  const [propsText, setPropsText] = useState([]);
  const [currentlySelectedLanguage, setCurrentlySelectedLanguage] = useState('fr');
  const [aboutIsLoading, setaboutIsLoading] = useState(true);

  const getAboutText = () => {
    setCurrentlySelectedLanguage(localStorage.getItem('language') ?? 'fr');
    AproposService.getApropos()
      .then((res: any) => {
        setPropsText(propsText => propsText.concat(res));
        setaboutIsLoading(false);
      })
      .catch(err => console.error(err))
  }
  useEffect(() => {
    getAboutText();
  }, [])

  return (
    <ContentLayout>
      {
        (aboutIsLoading === true)
          ?
          <>
            {[...Array(5)].map((x, i) =>
              <Skeleton key={i} height={20} className="Skeleton" />
            )}
          </>
          :
          <>
            {
              {
                fr: (<p> {(propsText[0]['rows'][0]['aboutFR'])} </p>),
                en: (<p> {(propsText[0]['rows'][0]['aboutEN'])} </p>),
                ar: (<p> {(propsText[0]['rows'][0]['aboutAR'])} </p>)
              }[currentlySelectedLanguage]
            }
          </>
      }
    </ContentLayout>
  )
}


const ContentLayout = styled.section`
  max-width: 100%;
  margin: 2rem auto;

  p{
    font-size: 1rem;
    line-height: 1.5;
    color: var(--violet);
    text-align: justify;
    margin-bottom: 2rem;
  }

  .Skeleton{
    margin-top: 1rem;
  }
`;
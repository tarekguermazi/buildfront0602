import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// SERVICES
import PublicationService from "src/modules/publication/publicationService";
// COMPONENTS
import Header from "./components/Header";
import Main from "./components/Main";
import RelatedContent from "./RelatedContent";

export default function Index() {
  // STATES AND VARS
  let ID = useParams().id;
  const [PublicationDetails, setPublicationDetails] = useState({});
  const [data, setData] = useState([]);

  // Get the details of that one publication
  const getPublicationDetails = (PUBLICATION_ID) => {
    PublicationService.find(PUBLICATION_ID)
      .then((response: any) => {
        setPublicationDetails(response);
        // loadig photos to be used in the grid
        if (response.photos.length >= 1) {
          response.photos.map((p) => {
            setData((data) => data.concat(p.downloadUrl));
          });
        }
        if (response.supports.length >= 1) {
          response.supports.map((supp) => {
            setData((data) => data.concat(supp.downloadUrl));
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  // FETCH ON LOAD
  useEffect(() => {
    getPublicationDetails(ID);
  }, []);

  // TEMPLATE
  return (
    <MainLayout>
      <Header
        PUBLICATION_TITLE={PublicationDetails ?? "N.A"}
        PUBLICATION_CREATED_AT={PublicationDetails["updatedAt"] ?? "N.A"}
        PUBLICATION_TYPE={PublicationDetails["thematique"] ?? "N.A"}
      />
      <Main PUBLICATION={PublicationDetails} data={data} />
      <RelatedContent type={PublicationDetails["type"] ?? "N.A"} />
    </MainLayout>
  );
}

const MainLayout = styled.section`
  width: 1170px;
  height: 100%;
  margin: 1rem auto;
`;

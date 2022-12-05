import React from "react";
import { BsBox } from "react-icons/bs";
import styled from "styled-components";
import Image from "../Image";
import { notfoundsearch } from "../../../assets/images";

function Empty() {
  return (
    <Not>
      <div className='app__empty'>
        <div className='empty'>
          <Image src={notfoundsearch} height={100} width={100} />
          <h4 id='noDataFound'>&nbsp;Aucun résultat !</h4>

          <p>
            - Vérifiez que vous n'avez pas fait de faute de frappe : , "Lirves"
            au lieu de "Livres" <br />- Essayez avec un autre mot clé ou
            synonyme <br /> - Essayez d'effectuer une recherche plus générale,
            vous pourrez ensuite filtrer les résultats obtenus
          </p>
        </div>
      </div>
    </Not>
  );
}

export default Empty;

const Not = styled.div`
  .app__empty {
    width: 100%;
    height: 100%;
    max-width: 1170px;
    margin: auto;
  }

  .empty {
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 1rem;
    justify-content: center;
    width: 100%;
    height: 60vh;
  }
`;

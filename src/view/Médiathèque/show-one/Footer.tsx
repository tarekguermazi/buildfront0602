import React from "react";
import styled from "styled-components";

// ICONS
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function FooterSection({ userIsLoading, user }) {
  return (
    <FooterLayout>
      <div className='data'>
        <div className='socials'>
          <span>Partager :</span>
          <button>
            <BsFacebook />
          </button>
          <button>
            <BsTwitter />
          </button>
          <button>
            <BsInstagram />
          </button>
          <button>
            <BsLinkedin />
          </button>
        </div>
      </div>
    </FooterLayout>
  );
}

const FooterLayout = styled.section`
  margin-top: 5rem;

  @media (max-width: 767px) {
    width: 100%;
    padding: 0 0.5rem;
  }
`;

import styled from "styled-components";

const ImagesUploaderWrapper = styled.div`
  .img-card:hover .img-buttons {
    display: block;
  }

  .img-buttons {
    display: none;
  }
  .profile__:hover .img-buttons {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 100%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.7s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .img-buttons > * {
    color: var(--white);
    background-color: transparent;
  }
`;

export default ImagesUploaderWrapper;

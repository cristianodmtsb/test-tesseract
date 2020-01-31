import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (max-width: 650px) {
    padding: 0 15px;
  }
  .linkBack {
    color: #dfdf;
    font-size: 16px;
    margin: 10px;
  }
`;

export const ShowLoading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  img {
    width: 30%;
    height: 30%;
  }
`;

export const User = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  text-align: center;
  margin-top: 7em;

  justify-content: center;
  flex-direction: column;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25);
  h2 {
    margin: 15px 0 10px 0;
  }
  .infos {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    span {
      display: flex;
      align-items: center;
      margin: 10px;
      svg {
        margin-right: 5px;
      }
    }
  }
`;

export const Thumb = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-top: -75px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

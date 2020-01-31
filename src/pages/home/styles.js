import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 950px;
  margin: 10em auto 2em auto;
  display: flex;
  align-items: flex-start;
  @media (max-width: 650px) {
    max-width: 100%;
    flex-direction: column;
    align-items: stretch;
    padding: 0 15px;
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

export const Organization = styled.div`
  width: 100%;
  max-width: 320px;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  text-align: center;

  justify-content: center;
  flex-direction: column;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25);

  @media (max-width: 650px) {
    max-width: 100%;
    margin: 15px 0;
  }
  h2 {
    margin: 15px 0 10px 0;
  }
  .links {
    display: flex;
    justify-content: center;
    margin: 10px 0;
    a {
      padding: 6px;
      color: #1a7296;
      transition: all 0.7s;
      &:hover {
        background-color: #1a7296;
        color: #fff;
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

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  input {
    background: #fff;
    border: 1px solid #f5f5f5;
    height: 45px;
    color: #454545;
    border-radius: 4px;
    transition: border 0.7s;
    padding: 0 15px;
    margin: 0 15px 15px 15px;
    &:focus {
      border: 1px solid #1a7296;
    }
  }

  @media (max-width: 650px) {
    max-width: 100%;
    margin: 15px 0;
    margin-left: 0;
    input {
      margin: 0 0 15px 0;
    }
  }
`;

export const Users = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  list-style: none;
  margin: 0 15px;
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    margin: 0;
  }
  li {
    background-color: #fff;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
    border-radius: 2px;
    margin-top: 70px;
    border-radius: 4px;

    header {
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .user-info {
        display: block;
        margin-top: 15px;
        font-size: 16px;
        font-weight: bold;
      }
    }
    a {
      color: #3f4c6b;
      font-size: 14px;
      text-decoration: none;
      display: block;
      text-align: center;
      padding: 8px;
      border-top: 1px solid #dfdfdf;
      margin-top: 15px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.07);
      }
    }
  }
`;

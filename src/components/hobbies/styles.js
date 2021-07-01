import styled from "styled-components";

export const Container = styled.div`
  width: 80%;

  margin-top: 15px;

  .headerButton {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    form {
      border: solid 1px var(--grey);
      width: 80%;
      background-color: var(--grey);
      height: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      input{
          width: 80%;
      }

      .errors{
          width: 80%;
          height: 20px;
          color: var(--red);
          margin-bottom: 15px;
      }
    }

    .hidden {
      display: none;
      width: 100%;
    }

    .add {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }

  .hobbieCard {
    border: 1px solid var(--grey);
    margin-top: 5px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--green);
    font-weight: bold;

    span {
      color: var(--dark-grey);
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  header {
    height: 25vh;
    width: 90%;
    border-bottom: solid 1px var(--blue);

    h1 {
      color: var(--blue);
      font-size: 3.5rem;
      height: 40%;
    }

    h2 {
      font-size: 1.5rem;
      height: 30%;
    }

    .buttonBox {
      margin-top: 5px;
      height: 30%;
    }
  }

  main {
    height: fit-content;
    min-height: 75vh;
    width: 90%;
    display: flex;
    justify-content: center;

    .hobbiesBox {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .titles {
        height: 110px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        h3 {
          font-size: 1.5rem;
          color: var(--green);
          font-weight: bold;
          padding-top: 10px;
        }

        .describe {
          color: var(--dark-green);
          font-size: 0.7rem;
          width: 60%;
        }
      }

      select {
        width: 50%;
        font-size: 0.7rem;
      }
    }

    .secretsBox {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .titles {
        height: 110px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        h3 {
          font-size: 1.5rem;
          color: var(--red);
          font-weight: bold;
          padding-top: 10px;
        }

        .describe {
          color: var(--maroon);
          font-size: 0.7rem;
          width: 60%;
        }
      }
    }
  }

  @media (max-width: 500px) {
    header {
      height: 50vh;

      h1 {
        font-size: 3rem;
        margin-top: 30px;
        height: 40%;
      }

      h2 {
        font-size: 1.5rem;
        height: 20%;
      }

      .buttonBox {
        margin-top: 8px;
      }
    }

    main {
      min-height: 50vh;

      .hobbiesBox,
      .secretsBox {
        width: 100%;
      }
    }
  }
`;

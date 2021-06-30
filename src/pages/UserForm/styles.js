import styled from "styled-components";
import back from "../../assets/background.jpg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${back});
  background-size: cover;
  background-repeat: no-repeat;

  .transparentBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--transparent-black);
    box-shadow: 0 0 0 20px white;

    a {
      height: 15%;
      h1 {
        font-size: 6rem;
        height: 15%;
        width: 100%;
      }
    }

    .buttonBox {
      h3 {
        color: var(--white);
        font-weight: bold;
      }
    }

    .whiteBox {
      height: 85%;
      width: 100%;
      display: flex;

      .signUpBox {
        height: 100%;
        width: ${(props) => {
          if (props.windowWidth < "500") {
            return "100%";
          } else {
            return "50%";
          }
        }};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .loginBox {
        height: 100%;
        width: ${(props) => {
          if (props.windowWidth < "500") {
            return "100%";
          } else {
            return "50%";
          }
        }};
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

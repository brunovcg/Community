import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  h2 {
    color: var(--blue);
    font-size: 5rem;
    height: 40%;
    display: flex;
    align-items: flex-end;
  }

  a{
    height: 60%;
    figure {
        display: flex;
        justify-content: center;

    img {
      width: 60vh;
    }
  }
  }

  

  @media (max-width: 500px){
      
      h2{
          font-size: 3rem;
          width: 50%;
      }
  }
`;

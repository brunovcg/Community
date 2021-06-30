import styled from "styled-components";

export const Container = styled.div`
  width:  ${(props) => {
            if (props.windowWidth < "500") {
                return "100%";
            } else {
                return "70%";
            }
          }};
  max-width: 450px;
  height: 80%;
  background-color: var(--white);

  h2{
      height: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;
      color: var(--blue)
  }

  form{
        height: 80%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .formBox{
            height: 80%;
            width: 80%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;

            input{
                height: 35px;         
                border-bottom: solid 1px var(--blue);    
                width: 90%;
                ::placeholder{
                    font-size: 0.9rem;
                }
            }

            .formError{
                height: 30px;
                color: var(--dark-red);
                width: 90%;
                padding-left: 5px;
            
                p{
                    font-size: 0.7rem;
                    text-align: justify;
                }       
            }
        }

        .buttonBox{
            height: 20%;
        }
    }


`;

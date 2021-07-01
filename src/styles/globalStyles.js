import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --transparent-black: rgba(80, 82, 81, 0.766) ;
        --red: #ff8484;
        --dark-red: #f20505;
        --green: #7FC15E;
        --dark-green: rgb(35, 82, 59); ;
        --yellow:#e9e394;
        --white: #ffffff;
        --maroon: #a85454;
        --grey: #e6e5e5;
        --dark-grey: #444444;
        --blue: #70B5F9;
    }
/* 
    #mainBody{

        margin: 0 auto;
       height: available;
    } */

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        
    } 

    h1 {
        font-family: 'Jomhuria', cursive;
        color: var(--white);
    }
    
    h2 {
        font-family: 'Yellowtail', cursive;
    }

    body, input, button, h3, h4, h5, h6, p{
        font-family: 'Open Sans', sans-serif;
    }

    body, input, button, p{
        font-size: 1rem;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

`;

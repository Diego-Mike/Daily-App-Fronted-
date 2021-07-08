import styles from "styled-components";

import { Link } from "react-router-dom";

const ResponsiveNavbar = {
  responsive1: `@media screen and (max-width: 1100px)`,
  responsive2: `@media screen and (max-width: 900px)`,
  responsive3: `@media screen and (max-width: 700px)`,
  responsive4: `@media screen and (max-width: 500px)`,
  responsive5: `@media screen and (max-width: 400px)`
};

export const Header = styles.section`

width: 100%;
background: hsl(0, 0%, 5%);

`;

export const HeaderContainer = styles.div`

width: 87%;
height: 12vh;
margin: auto;

display: flex;
align-items: center;
justify-content: space-between;

div{
height: 10vh;
display:flex;
align-items: center;
justify-content: center;

}

div img{
    width: 65px;
}

div h1{
    font-family: 'Ranchers', cursive;
    font-size: 6rem;
    color: white;
    font-weight: 500;
    padding-left: 1.5rem;
}

div h1 span{
    font-family: 'Ranchers', cursive;
    color: rgb(161, 255, 239);
}

${ResponsiveNavbar.responsive1}{
    div img{
        width: 58px;
    }
    div h1{
        font-size: 4.5rem;
    }
}

${ResponsiveNavbar.responsive2}{
    div img{
        width: 50px;
    }
    div h1{
        font-size: 3.8rem;
    }
}


${ResponsiveNavbar.responsive3}{
    width: 100%;
    div{
        padding-left: 2rem;
    }
}

${ResponsiveNavbar.responsive4}{
    div{
        padding-left: 1rem;
    }
    div img{
        width: 45px;
    }
    div h1{
        font-size: 3.4rem;
    }
}

${ResponsiveNavbar.responsive5}{

    div h1{
        font-size: 0rem;
    }
}

`;

export const SignIn = styles.div`

`;

export const ToLogin = styles(Link)`

color: white;

    font-size: 3.5rem;
    font-weight: 400;
    
    cursor: pointer;

    text-decoration: none;
    outline: none;

    ${ResponsiveNavbar.responsive1}{
        font-size: 3.3rem;
    }
    
    ${ResponsiveNavbar.responsive2}{
        font-size: 3.2rem;
    }
    
    
    ${ResponsiveNavbar.responsive3}{
        font-size: 3rem;
        padding-right: 2rem;
    }
    
    ${ResponsiveNavbar.responsive4}{
        font-size: 2.7rem;
    }
    
    ${ResponsiveNavbar.responsive5}{
        font-size: 2.5rem;
    }

`;

// Auth

export const Auth = styles.section`

width: 47%;

display: flex;
align-items: center;
justify-content: space-between;

text-align: center;

h2{

    color: white;

    font-size: 3rem;
    font-weight: 500;

    padding: 1rem 0rem;

}

span{

    color: white;

    font-size: 3rem;
    font-weight: 200;

    padding: 1rem 0rem;

    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
}

${ResponsiveNavbar.responsive1}{
    h2{
        font-size: 2.5rem;
    }

    span{
        font-size: 2.5rem;
    }

}

${ResponsiveNavbar.responsive3}{

    width: 50%;
    padding-right: 2rem;

    h2{
      font-size:  2rem;
    }
    span{
        font-size: 2rem;
    }
}

${ResponsiveNavbar.responsive4}{

    width: 53%;

    h2{
      font-size:  1.7rem;
    }
    span{
        font-size: 1.7rem;
    }
}

${ResponsiveNavbar.responsive5}{
    width: 65%;
}

`;

import styles from "styled-components";
import { Link } from "react-router-dom";

const ResponsiveAuth = {
  responsive1: `@media screen and (max-width:1080px)`,
  responsive2: `@media screen and (max-width:1000px)`,
  responsive3: `@media screen and (max-width:750px)`,
  responsive4: `@media screen and (max-width: 570px)`,
  responsive5: `@media screen and (max-width: 470px)`,
  responsive6: `@media screen and (max-width: 350px)`
};

export const Auth = styles.section`

width: 100%;
min-height: 100vh;

background: rgb(22, 22, 22);

display: flex;
align-items: center;
justify-content: center;

`;

export const AuthForm = styles.form`

width: 50%;
margin: auto;

margin: 3rem 0rem;

border-radius: .3rem;

display: flex;
align-items: center;
justify-content: center;

transition: .3s ease;

&:hover{
    box-shadow: .5px .5px 10px rgb(112, 255, 188);
}

${ResponsiveAuth.responsive1}{
    width: 60%;
}

${ResponsiveAuth.responsive2}{
    width: 70%;
    margin: 3.5rem 0rem;
}

${ResponsiveAuth.responsive3}{
    width: 80%;
    margin: 4rem 0rem;
}

${ResponsiveAuth.responsive4}{
    width: 92%;
}


`;

export const AuthInside = styles.div`

width: 95%;
margin: auto;

margin: 2rem 0rem;

display: flex;
align-items: center;
justify-content: center;

flex-direction: column;

h2{

    font-size: 5.5rem;
    font-weight: 400;
    color: rgb(198, 255, 236);

    padding-top: 2rem;
    padding-bottom: 3.5rem;

}

input{
    
    width: 90%;

    color: white;
    font-size: 2.2rem;
    font-weight: 300;
    
    padding: 1.3rem 1.7rem;

    margin-top: 2rem;
    margin-bottom: 3rem;

    border: none;
    border-radius: 2.3rem;

    background: none;
    outline: none;

    transition: .3s ease;

    &:hover{
        box-shadow: .5px .5px 6px rgb(198, 255, 236);
    }

}

${ResponsiveAuth.responsive2}{
    h2{
        font-size: 5rem;
    }
    input{
        font-size: 2rem;
    }
}

${ResponsiveAuth.responsive3}{
    h2{
        font-size: 4.5rem;
    }
    input{
        font-size: 1.7rem;
    }
}

${ResponsiveAuth.responsive4}{
input{
    width: 95%;
}
    h2{
        font-size: 4.2rem;
    }
    input{
        font-size: 1.5rem;
    }
}

${ResponsiveAuth.responsive5}{
    h2{
        font-size: 4rem;
    }
}

`;

export const AuthButtons = styles.div`

    width: 90%;
    margin-top: 4rem;
    margin-bottom: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    flex-direction: row; 

    ${ResponsiveAuth.responsive4}{
     width: 100%;
    }

    ${ResponsiveAuth.responsive5}{
        flex-direction: column;
        justify-content: center;
       }

`;

export const LoginAccount = styles.button`

color: white;
font-size: 2rem;

padding: .9rem 3.5rem;

border: 2px solid rgba(29, 255, 165);
border-radius: .8rem;

cursor: pointer;

background: none;
outline: none;

transform: scale(.95);
    
    transition: .3s ease;
    
    &:hover{
        transform: scale(1)
    }

    ${ResponsiveAuth.responsive2}{
        font-size: 1.7rem;
    }

    ${ResponsiveAuth.responsive3}{
        font-size: 1.5rem;
    }

    ${ResponsiveAuth.responsive4}{
        padding: .9rem 3.2rem;
        margin-left: 1rem;
    }

    ${ResponsiveAuth.responsive5}{
        width: 100%;
        margin: 1rem 0rem;
       }

`;

export const RegisterAccount = styles(Link)`

color: white;
font-size: 2rem;

padding: .9rem 3.2rem;

background: rgba(255, 17, 0);
border-radius: .8rem;

cursor: pointer;

border: none;
outline: none;
text-decoration: none;

transform: scale(.95);
    
    transition: .3s ease;
    
    &:hover{
        transform: scale(1)
    }

    ${ResponsiveAuth.responsive2}{
        font-size: 1.7rem;
    }

    ${ResponsiveAuth.responsive3}{
        font-size: 1.5rem;
    }

    ${ResponsiveAuth.responsive4}{
        
        margin-right: 1rem;
    }

    ${ResponsiveAuth.responsive5}{
        width: 100%;
        margin: 1rem 0rem;
        text-align: center;
       }

`;

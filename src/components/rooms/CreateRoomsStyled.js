import styles from "styled-components";

// Button Create

const ResponsiveCreate = {
  responsive1: `@media screen and (max-width:1000px)`,
  responsive1: `@media screen and (max-width:600px)`
};

//

export const ShowForm = styles.span`

    font-size: 2.5rem;
    font-weight: 500;
    color: white;
    
    cursor: pointer;
    padding: .7rem 3rem;

    margin: 6rem 0rem;
    
    border: 2px solid rgb(124, 255, 205);
    border-radius: .5rem;
    
    
    transform: scale(.95);
    
    transition: .3s ease;
    
    &:hover{
        transform: scale(1)
    };

    ${ResponsiveCreate.responsive1}{
        font-size: 2.2rem;
    }

    ${ResponsiveCreate.responsive2}{
        font-size: 1.9rem;
    }

`;

// Responsive Rooms

const ResponsiveCreateRooms = {
  responsive1: `@media screen and (max-width:1200px)`,
  responsive2: `@media screen and (max-width:850px)`,
  responsive3: `@media screen and (max-width:600px)`,
  responsive4: `@media screen and (max-width:450px)`
};

//

export const CreateRoom = styles.form`

width: 70%;

section{
    width: 95%;
    margin: auto;
    padding: 2rem 0rem;
}

section h2{

font-size: 3.5rem;
font-weight: 600;

padding-bottom: 4rem;

color: rgba(215, 255, 239);

}

section input{
    
    width: 100%;
    font-size: 2rem;
    font-weight: 300;
    color: white;

    padding: 0.7rem 0rem;
    border-bottom: 1px solid white;

    background: none;
    border-top: none;
    border-right: none;
    border-left: none;
    outline: none;

    margin-bottom: 5rem;

}

section div{
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    margin-bottom: 4rem;
}

${ResponsiveCreateRooms.responsive1}{
    width: 75%;

    section h2{
        font-size:3.3rem;
        padding-bottom: 5rem;
    };

    section input{
        font-size: 1.8rem;
    }

}

${ResponsiveCreateRooms.responsive2}{
    width: 80%;

    section h2{
        font-size:3rem;
    };

    section input{
        font-size: 1.7rem;
    }

}

${ResponsiveCreateRooms.responsive3}{
    width: 87%;

    section h2{
        font-size:2.8rem;
    };

    section input{
        font-size: 1.6rem;
    }

}

${ResponsiveCreateRooms.responsive4}{
    width: 90%;

    section h2{
        font-size:2.6rem;
    };

    section div{
        justify-content: space-around;
    }

}

`;

export const Start = styles.button`

color: white;
font-size: 2rem;
font-weight: 500;

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

    ${ResponsiveCreateRooms.responsive1}{
        font-size: 1.8rem;
    }

    ${ResponsiveCreateRooms.responsive3}{
        font-size: 1.6rem;
    }

    ${ResponsiveCreateRooms.responsive4}{
        font-size: 1.5rem;
        padding: .7rem 3.2rem;
    }

`;

export const Cancel = styles.button`

color: white;
font-size: 2rem;
font-weight: 500;

padding: .9rem 3.2rem;

background: rgba(255, 38, 0);
border-radius: .8rem;

cursor: pointer;

border: none;
outline: none;

transform: scale(.95);
    
    transition: .3s ease;
    
    &:hover{
        transform: scale(1)
    }

    ${ResponsiveCreateRooms.responsive1}{
        font-size: 1.8rem;
    }

    ${ResponsiveCreateRooms.responsive3}{
        font-size: 1.6rem;
    }

    ${ResponsiveCreateRooms.responsive4}{
        font-size: 1.5rem;
        padding: .7rem 3rem;
    }

`;

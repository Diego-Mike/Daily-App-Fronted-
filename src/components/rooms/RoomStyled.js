import styles, { css } from "styled-components";
import { CalendarEdit } from "@styled-icons/boxicons-regular/CalendarEdit";
import { Trash } from "@styled-icons/open-iconic/Trash";
import { Open } from "@styled-icons/ionicons-outline/Open";

// Haven't Registered

const ResponsiveNotRegistered = {
  responsive1: `@media screen and (max-width:1100px)`,
  responsive2: `@media screen and (max-width:780px)`,
  responsive3: `@media screen and (max-width:530px)`,
  responsive4: `@media screen and (max-width:440px)`
};

export const Alert = styles.h1`

color: white;

font-size: 5rem;
font-weight: 500;
text-align: center;


padding-bottom: 12rem;

span{
    color: rgb(161, 255, 239);
}

${ResponsiveNotRegistered.responsive1}{
    font-size: 4rem;
}

${ResponsiveNotRegistered.responsive2}{
    font-size: 3rem;

    padding-left: 2rem;
    padding-right: 2rem;
}

${ResponsiveNotRegistered.responsive3}{
    font-size: 2.5rem;

    padding-left: 3rem;
    padding-right: 3rem;
}

${ResponsiveNotRegistered.responsive4}{
    font-size: 2rem;
}

`;

export const MainBackgroundRegister = styles.section`

width: 100%;
min-height: 88vh;
background: hsl(0, 0%, 5%);

    display: flex;
    align-items: center;
    justify-content: center;


z-index: 5;

`;

//

const ResponsiveRooms = {
  short1: `@media screen and (max-width:1200px)`,
  short2: `@media screen and (max-width:800px)`,
  short3: `@media screen and (max-width:650px)`,
  short4: `@media screen and (max-width:500px)`,
  short5: `@media screen and (max-width:430px)`
};

export const MainBackground = styles.section`

width: 100%;
min-height: 88vh;
background: hsl(0, 0%, 5%);

display: flex;


z-index: 5;

`;

export const Container = styles.div`

width: 87%;
min-height: 60vh;
margin: auto;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

flex-wrap: wrap;

z-index: 5;

${ResponsiveRooms.short1}{
    width: 90%;
}

${ResponsiveRooms.short2}{
    width: 92%;
}


`;

export const Rooms = styles.div`

width: 100%;

box-shadow: 1px 1px 8px rgb(29, 255, 206);

display: flex;
align-items: center;
justify-content: center;

margin-top: 7rem;

margin-bottom: 5rem;

section{
    width: 95%;
    margin: auto;

    margin: 1rem 0rem;

    display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

}

${ResponsiveRooms.short2}{
section{    width: 96%;}
}


`;

export const RoomStuff = styles.div`
width: 100%;

margin-bottom: 2rem;

h2{
    color: white;
    font-size: 3.5rem;
    font-weight: 600;
    padding: 2.5rem 2.5rem;
    text-align: center;
};

${ResponsiveRooms.short1}{
    h2{font-size: 3.2rem}
}

${ResponsiveRooms.short2}{
    h2{font-size: 3rem}
}

${ResponsiveRooms.short4}{
    h2{
        font-size: 2.7rem;
        padding: 3rem 2.8rem;
    }
}

${ResponsiveRooms.short5}{
    h2{
        font-size: 2.4rem;
    }
}

`;

export const User = styles.div`

width: 100%;

display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;

margin-bottom: 1rem;

${ResponsiveRooms.short4}{
    margin-bottom: 2.8rem;
}

${ResponsiveRooms.short5}{
    margin-bottom: 4rem;
}

`;

export const CreatedTime = styles.h3`

color: white;

font-size: 2rem;
font-weight: 500;

padding: .5rem 2rem;

span{
    font-weight: 300;
}

${ResponsiveRooms.short2}{
    font-size: 1.8rem;
}

${ResponsiveRooms.short3}{
    font-size: 1.6rem;
}

${ResponsiveRooms.short4}{
    padding: 1rem 2rem;
}

`;

export const OpenItUp = styles(Open)`

width: 35px;
color: rgb(237, 255, 247);

transform: scale(.9);
    
    transition: .3s ease;
    
    &:hover{
        transform: scale(1)
    }

    ${ResponsiveRooms.short2}{
        width: 32px;
    }
    
    ${ResponsiveRooms.short3}{
        width: 30px;
    }

    ${ResponsiveRooms.short4}{
        width: 28px;
    }

`;

export const RoomsButtons = styles.div`

width: 100%;

display: flex;
align-items: center;
justify-content: space-evenly;

margin: 1.5rem 0rem;

${ResponsiveRooms.short4}{
    margin-top: 2.8rem;
}

${ResponsiveRooms.short5}{
    margin-top: 4rem;
}

`;

export const RoomsButtonEdit = styles(CalendarEdit)`

color: rgb(29, 255, 142);
width: 27px;

cursor: pointer;

transform: scale(.95);
    
    transition: .3s ease;
    
    &:hover{
        transform: scale(1.15)
    }

    ${ResponsiveRooms.short2}{
        width: 25px;
    }

    ${ResponsiveRooms.short3}{
        width: 23px;
    }

`;

export const RoomsButtonDelete = styles(Trash)`

color: rgb(255, 93, 65);
width: 24px;

cursor: pointer;

transform: scale(.9);
    
    transition: .3s ease;
    
    &:hover{
        transform: scale(1.1)
    }

    ${ResponsiveRooms.short2}{
        width: 22px;
    }

    ${ResponsiveRooms.short3}{
        width: 20px;
    }

`;

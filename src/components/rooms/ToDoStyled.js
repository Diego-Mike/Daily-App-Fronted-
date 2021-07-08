import styles, { css } from "styled-components";
import { CloseCircleOutline } from "@styled-icons/evaicons-outline/CloseCircleOutline";
import { Trash } from "@styled-icons/open-iconic/Trash";
import { DoneAll } from "@styled-icons/material/DoneAll";
import { Cancel } from "@styled-icons/typicons/Cancel";

// TODO Part

// Responsive Desing For Todo

const ResponsiveTodo = {
  responsive1: `@media screen and (max-width:1050px)`,
  responsive2: `@media screen and (max-width:900px)`,
  responsive3: `@media screen and (max-width:700px)`,
  responsive4: `@media screen and (max-width:450px)`
};

//

export const TodoMain = styles.section`

width: 100%;

background: rgb(27, 27, 27);

overflow-x: hidden;
overflow-y: auto;

position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;

z-index: 100;

`;

export const Todo = styles.div`

width: 95%;
min-height: 100vh;
margin: auto;

margin-top: 2.5rem;
margin-bottom: 2.5rem;

display: flex;
align-items: center;
justify-content: start;
flex-direction: column;

`;

export const Close = styles.div`

width: 100%;
min-height: 5vh;

margin-bottom: 2rem;

display: flex;
align-items: flex-start;
justify-content: flex-end;

`;

export const CloseIcon = styles(CloseCircleOutline)`

color: white;

width: 40px;

cursor: pointer;

transform: scale(.9);
    
    transition: .3s ease;
    
    &:hover{
        transform: scale(1.1)
    }

    ${ResponsiveTodo.responsive1}{
      width: 35px;
    }

    ${ResponsiveTodo.responsive2}{
      width: 32px;
    }

    ${ResponsiveTodo.responsive3}{
      width: 30px;
    }

`;

export const RoomName = styles.div`

width: 100%;
margin-bottom: 2.5rem;

text-align: center;

h2{
    color: white;
    font-size: 3.5rem;
    font-weight: bold;
    padding: 2rem 0rem;
}

${ResponsiveTodo.responsive2}{
  h2{
    font-size: 3.2rem;
  }
}

${ResponsiveTodo.responsive3}{
  h2{
    font-size: 3rem;
  }
}

${ResponsiveTodo.responsive4}{
  h2{
    font-size: 2.8rem;
  }
}

`;

// Container of my todo's

export const TodoContainer = styles.div`

width: 100%;

margin-top: 2.5rem;
margin-bottom: 2.5rem;

display: flex;
align-items: center;
justify-content: start;
flex-direction: column-reverse;

`;

export const HomeworkContainer = styles.div`

width: 90%;
min-height: 40vh;

display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;

margin-top: 3rem;
margin-bottom: 7rem;

${ResponsiveTodo.responsive1}{
  width: 92%;
}

${ResponsiveTodo.responsive2}{
  width: 95%;
}


`;

export const HomeworkHeader = styles.div`

width: 100%;
min-height: 13vh;

box-shadow: .5px .5px 6px rgba(255,255,255);

display: flex;
align-items: center;
justify-content: space-between;

margin-bottom: 3rem;

`;

export const HomeworkHeaderName = styles.h2`

color: white;
font-size: 2.3rem;
font-weight: 600;

padding: 0rem 2rem;

span{
    font-weight: 300;
}

${ResponsiveTodo.responsive1}{
  font-size: 2rem;
}

${ResponsiveTodo.responsive2}{
  font-size: 1.8rem;
}

${ResponsiveTodo.responsive3}{
  font-size: 1.7rem;
}

${ResponsiveTodo.responsive4}{
 font-size: 1.6rem;
}

`;

export const HomeworkButtonDelete = styles(Trash)`

color: rgb(255, 88, 59);
width: 27px;

cursor: pointer;

transform: scale(.9);
    
    transition: .3s ease;
    
    &:hover{
        transform: scale(1.1)
    }

    ${ResponsiveTodo.responsive1}{
      width: 25px;
    }

    ${ResponsiveTodo.responsive2}{
      width: 23px;
    }

    ${ResponsiveTodo.responsive3}{
      width: 20px;
    }

    ${ResponsiveTodo.responsive4}{
      width: 18px;
    }

`;

export const AllTodoStuff = styles.div`

width: 100%;
min-height: 8vh;

// For The Principal Header

${({ white }) =>
  white &&
  css`
    box-shadow: 0.5px 0.5px 6px rgba(255, 255, 255);
  `};

//   To Change The Task

${({ Uncompleted }) =>
  Uncompleted &&
  css`
    box-shadow: 0.5px 0.5px 5px rgba(255, 93, 64);
  `};

  ${({ Completed }) =>
    Completed &&
    css`
      box-shadow: 0.5px 0.5px 5px rgba(58, 255, 133);
    `}

border-radius: .7rem;


${({ BigSpace }) =>
  BigSpace &&
  css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.5rem 0rem;
  `}

//   Check If The Day Is Over Or Not

${({ DayNotOver }) =>
  DayNotOver &&
  css`
    box-shadow: 0.5px 0.5px 8px rgba(144, 255, 222);
  `}

  ${({ DayOver }) =>
    DayOver &&
    css`
      box-shadow: none;
    `}

${({ Centered }) =>
  Centered &&
  css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3.7rem 0rem;
  `};

`;

export const SpanTodoStuff = styles.span`

color: white;
 
// For all except the day is over or not over

    ${({ Default }) =>
      Default &&
      css`
        font-size: 2.2rem;
        font-weight: 400;

        padding-left: 2rem;
        padding-right: 4rem;

        ${ResponsiveTodo.responsive1} {
          font-size: 2rem;
        }

        ${ResponsiveTodo.responsive2} {
          font-size: 1.8rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }

        ${ResponsiveTodo.responsive3} {
          font-size: 1.5rem;
        }

        ${ResponsiveTodo.responsive4} {
          font-size: 1.4rem;
        }
      `}

// Is day over or not over

      ${({ Day }) =>
        Day &&
        css`
          font-size: 3rem;
          font-weight: 500;
          padding: 1.5rem 0rem;

          cursor: pointer;

          transform: scale(0.9);

          transition: 0.3s ease;

          &:hover {
            transform: scale(1);
          }

          ${ResponsiveTodo.responsive1} {
            font-size: 2.7rem;
          }

          ${ResponsiveTodo.responsive2} {
            font-size: 2.4rem;
          }

          ${ResponsiveTodo.responsive3} {
            font-size: 2.1rem;
          }

          ${ResponsiveTodo.responsive4} {
            font-size: 2rem;
          }
        `}

`;

// The comment

export const CommentContainer = styles.div`

width: 100%;
min-height: 8vh;

margin-top: 2rem;
margin-bottom: .8rem;

display: flex;
align-items: center;
justify-content: flex-start;

box-shadow: 0px 15px 10px -16px rgba(65, 255, 239); 

form{
  width: 100%;

  display: flex;
align-items: center;
justify-content: center;

}

form input{

  width: 100%;
  color: white;

  font-size: 2rem;
  font-weight: 300;

  outline: none;
  border: none;
  background: none;

  ${ResponsiveTodo.responsive1}{
    font-size: 1.8rem;
  }

  ${ResponsiveTodo.responsive2} {
    font-size: 1.6rem;
  }

  ${ResponsiveTodo.responsive3} {
    font-size: 1.4rem;
  }

  ${ResponsiveTodo.responsive4} {
    font-size: 1.35rem;
  }

}

div{
  margin: 2rem 0rem;
}

div button{

  font-size: 2rem;
  font-weight: 500;
  color: white;
  
  cursor: pointer;
  padding: .7rem 3rem;
  
  border: 2px solid rgb(124, 255, 205);
  border-radius: .5rem;
  
  background: none;
  outline: none;
  
  transform: scale(.95);
  
  transition: .3s ease;
  
  &:hover{
      transform: scale(1)
  };

  ${ResponsiveTodo.responsive1}{
    font-size: 1.8rem;
  }

  ${ResponsiveTodo.responsive2} {
    font-size: 1.6rem;
    padding: .5rem 2.7rem;
  }

  ${ResponsiveTodo.responsive3} {
    font-size: 1.5rem;
    padding: .4rem 2.5rem;
  }

  ${ResponsiveTodo.responsive3} {
    font-size: 1.4rem;
    padding: .4rem 2.4rem;
  }

}

`;

// Complete and Uncompleted

export const IconDone = styles(DoneAll)`

width: 35px;
color: rgb(58, 255, 133);

cursor: pointer;

transform: scale(.9);
    
    transition: .3s ease;
    
    &:hover{
        transform: scale(1.1)
    }

    ${ResponsiveTodo.responsive1}{
      width: 32px;
    }

    ${ResponsiveTodo.responsive2} {
      width: 30px;
    }

    ${ResponsiveTodo.responsive3} {
      width: 27px;
    }

    ${ResponsiveTodo.responsive4} {
      width: 25px;
    }

`;

export const IconCancel = styles(Cancel)`

width: 35px;
color:  rgb(255, 88, 59);

cursor: pointer;

transform: scale(.9);
    
    transition: .3s ease;
    
    &:hover{
        transform: scale(1.1)
    }

    ${ResponsiveTodo.responsive1}{
      width: 32px;
    }

    ${ResponsiveTodo.responsive2} {
      width: 30px;
    }

    ${ResponsiveTodo.responsive3} {
      width: 27px;
    }

    ${ResponsiveTodo.responsive4} {
      width: 25px;
    }

`;

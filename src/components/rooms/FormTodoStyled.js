import styles, { css } from "styled-components";
import { CloseCircleOutline } from "@styled-icons/evaicons-outline/CloseCircleOutline";
import { AddToQueue } from "@styled-icons/boxicons-regular/AddToQueue";
import { Minus } from "@styled-icons/boxicons-regular/Minus";

const ResponsiveForm = {
  responsive1: `@media screen and (max-width:1150px)`,
  responsive2: `@media screen and (max-width:900px)`,
  responsive3: `@media screen and (max-width:650px)`,
  responsive4: `@media screen and (max-width:470px)`
};

// Form To Do

export const FormTasks = styles.div`

width: 100%;
min-height: 100vh;

background: rgba(0,0,0, 0.8);

overflow-y: auto;

position: fixed;
top:0;
bottom:0;
left:0;
right:0;

z-index: 100;

`;

export const TheForm = styles.form`

width: 75%;
min-height: 90vh;

margin: auto;
margin-top: 2rem;
margin-bottom: 2rem;

background: rgba(0,0,0, 0.9);

border-radius: .7rem;

display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;

border: 1px solid white;

transition: .3s ease;

&:hover{
    box-shadow: .5px .5px 18px rgba(255,255,255);
}

${ResponsiveForm.responsive1}{
width: 80%;
}

${ResponsiveForm.responsive2}{
  width: 85%;
  }

  ${ResponsiveForm.responsive3}{
    width: 87%;
    }

`;

export const FormContain = styles.div`

width: 95%;

margin: 2rem 0rem;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;



`;

export const ContainIcon = styles.div`

width: 95%;

display: flex;
align-items: center;
justify-content: flex-end;
flex-direction: row;

margin-top 1rem;

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

    ${ResponsiveForm.responsive2}{
      width: 35px;
      }

      ${ResponsiveForm.responsive3}{
        width: 32px;
        }

        ${ResponsiveForm.responsive4}{
          width: 30px;
          }

`;

export const ContainStuff = styles.div`

width: 100%;
margin: 1rem 0rem;

${({ goodMargin }) =>
  goodMargin &&
  css`
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
  `}

${({ space }) =>
  space &&
  css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `}

  ${({ centered }) =>
    centered &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

`;

export const TitleForm = styles.h2`

color: white;
font-size: 3.5rem;
font-weight: 600;

text-align: center;

padding: 2rem 1rem;

${ResponsiveForm.responsive1}{
  font-size: 3.2rem;
  }

  ${ResponsiveForm.responsive2}{
    font-size: 3rem;
    padding: 2rem 3rem;
    }

    ${ResponsiveForm.responsive3}{
      font-size: 2.8rem;
      padding: 2rem 3.5rem;
      }

      ${ResponsiveForm.responsive4}{
        font-size: 2.6rem;
        padding: 2rem 3.7rem;
        }  

`;

export const AddIcon = styles(AddToQueue)`

color: rgba(139, 255, 203);

width: 30px;

cursor: pointer;

cursor: pointer;

transform: scale(.9);
    
    transition: .3s ease;
    
    &:hover{
        transform: scale(1.15)
    };

    ${ResponsiveForm.responsive2}{
      width: 27px;
      }

      
    ${ResponsiveForm.responsive3}{
      width: 25px;
      }

      ${ResponsiveForm.responsive4}{
        width: 23px;
        }

`;

export const MinusIcon = styles(Minus)`

color: rgba(255, 171, 165);

width: 30px;

cursor: pointer;

cursor: pointer;

transform: scale(.9);
    
    transition: .3s ease;
    
    &:hover{
        transform: scale(1.4)
    };

    ${ResponsiveForm.responsive2}{
      width: 27px;
      }

      ${ResponsiveForm.responsive3}{
        width: 25px;
        }

        ${ResponsiveForm.responsive4}{
          width: 23px;
          }

`;

export const ContainInputs = styles.div`

width: 70%;

margin: 2rem 0rem;

${ResponsiveForm.responsive1}{
  width: 75%;
  }

  ${ResponsiveForm.responsive3}{
    width: 80%;
    }

`;

export const Inputs = styles.input`

color: white;
font-size: 2rem;
font-weight: 200;

width: 100%;
padding: 1.2rem 1rem;
margin: 1.5rem 0rem;

border-bottom: 1px solid rgba(139, 255, 203);

border-top:none;
border-right:none;
border-left:none;
outline:none;
background:none;

${ResponsiveForm.responsive1}{
  font-size: 1.7rem;
  }

  ${ResponsiveForm.responsive2}{
    font-size: 1.5rem;
    }

`;

export const Button = styles.button`

color: rgba(202, 255, 237);
box-shadow: .5px .5px 8px rgba(54, 255, 178);

font-size: 2.5rem;
font-weight: 600;
padding: 1.2rem 3.8rem;

border-radius: .7rem;

background: none;
outline: none;
border: none;

cursor: pointer;

transform: scale(.9);
    
    transition: .3s ease;
    
    &:hover{
        transform: scale(1)
    };

    ${ResponsiveForm.responsive1}{
      font-size: 2.2rem;
      }

      ${ResponsiveForm.responsive2}{
        font-size: 2rem;
        }

        ${ResponsiveForm.responsive3}{
          font-size: 1.8rem;
          }

          ${ResponsiveForm.responsive4}{
            font-size: 1.7rem;
            padding: 1.2rem 3.5rem;
            }
`;

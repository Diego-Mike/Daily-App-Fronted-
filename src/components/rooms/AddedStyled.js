import styles, { css } from "styled-components";

const ResponsiveAnimated = {
  responsive1: `@media screen and (max-width: 1000px)`,
  responsive2: `@media screen and (max-width: 750px)`,
  responsive3: `@media screen and (max-width: 500px)`,
  responsive4: `@media screen and (max-width: 400px)`
};

export const AddedModalWindow = styles.section`

width: 100%;
height: 23vh;
margin:  0 auto;


position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;

display: flex;
align-items: flex-end;
justify-content: center;

transform: scale(0.8);

${({ shortAnimation }) =>
  shortAnimation &&
  css`
    animation: short 2s ease-out forwards;

    @keyframes short {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(0);
      }
    }
  `}

`;

export const AddedStuff = styles.p`

color: rgb(94, 255, 174);
font-size: 2.8rem;
font-weight: 400;

padding: 2rem 0rem;

${ResponsiveAnimated.responsive1}{
  font-size: 2.6rem;
}

${ResponsiveAnimated.responsive2}{
  font-size: 2.5rem;
}

${ResponsiveAnimated.responsive3}{
  font-size: 2.4rem;
}

${ResponsiveAnimated.responsive4}{
  font-size: 2.3rem;
}

`;

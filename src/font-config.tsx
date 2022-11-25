import { Global } from "@emotion/react";
import { Fragment, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Fonts = ({ children }: Props) => (
  <Fragment>
    <Global
      styles={`
      /* latin */
      @font-face {
        font-family: 'Heading Font Name';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/MPLUSRounded1c-Bold.ttf');
      }
      /* latin */
      @font-face {
        font-family: 'Body Font Name';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('./fonts/MPLUSRounded1c-Medium.ttf')
      }
    `}
    />
    {children}
  </Fragment>
);

export default Fonts;

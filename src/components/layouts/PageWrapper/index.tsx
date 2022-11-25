import { Box } from "@chakra-ui/react";
import React, { ReactNode, type FC } from "react";
import { Helmet } from "react-helmet-async";

interface Props {
  title?: string;
  children: [ReactNode, ReactNode];
}

const PageWrapper: FC<Props> = (props) => {
  const { title = "Information IDOL", children } = props;

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Box
        sx={{
          w: "100%",
          display: "grid",
          gridTemplateRows: "auto 1fr",
        }}
      >
        {children}
      </Box>
    </React.Fragment>
  );
};

export default PageWrapper;

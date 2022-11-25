import React from "react";

interface Props {
  helperText?: string;
  errorType?: string;
  errorMessage?: string;
}

const CustomFormMessage = (props: Props) => {
  const { helperText } = props;

  // const handleError = (type: string) => {
  //   switch (type) {
  //     case 'required':
  //       return:
  //   }
  // }

  return <React.Fragment>{helperText}</React.Fragment>;
};

export default CustomFormMessage;

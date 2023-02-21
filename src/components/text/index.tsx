import React, { ReactNode } from "react";
import { TextProps } from "react-native";

import { StyleText } from "./styles";

export interface TextType extends TextProps {
  children: ReactNode;
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  color: string;
}

function Text({
  color,
  children,
  fontFamily,
  fontSize,
  fontWeight,
  ...rest
}: TextType) {
  return (
    <StyleText
      color={color}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...rest}
    >
      {children}
    </StyleText>
  );
}

export default Text;

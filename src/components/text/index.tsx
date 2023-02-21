import React, { ReactNode } from "react";
import { TextProps } from "react-native";

import { StyleText } from "./styles";

export interface TextType extends TextProps {
  children: ReactNode;
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  color: string;
  textAlign: "left" | "center" | "right";
}

function Text({
  color,
  children,
  fontFamily,
  textAlign,
  fontSize,
  fontWeight,
  ...rest
}: TextType) {
  return (
    <StyleText
      textAlign={textAlign}
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

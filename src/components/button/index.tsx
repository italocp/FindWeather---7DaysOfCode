import React, { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

import { Buttons } from "./styles";

export interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  backgroundColor: string;
  borderColor?: string;
  borderRadius?: number;
  height?: number;
  width?: number;
}

function Button({
  children,
  backgroundColor,
  borderColor,
  borderRadius,
  height,
  width,
  ...rest
}: ButtonProps) {
  return (
    <Buttons
      borderRadius={borderRadius}
      height={height}
      width={width}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      {...rest}
    >
      {children}
    </Buttons>
  );
}

export default Button;

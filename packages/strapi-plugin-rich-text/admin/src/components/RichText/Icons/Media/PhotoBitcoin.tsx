import { forwardRef } from "react";
import { IconProps } from "../../../../types";
import IconWrapper from "../IconWrapper";

const PhotoBitcoin = forwardRef<SVGSVGElement, Omit<IconProps, "children">>(
  ({ size = 24, color = "currentColor", ...props }, ref) => {
    return (
      <IconWrapper size={size} color={color} {...props} ref={ref}>
        <path d="M17 21v-6m2 0v-1.5m0 9V21m-2-3h3m-1 0h.5a1.5 1.5 0 0 1 0 3H16m3-3h.5a1.5 1.5 0 0 0 0-3H16M15 8h.01" />
        <path d="M13 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5" />
        <path d="m3 16 5-5c.928-.893 2.072-.893 3 0l2.5 2.5" />
      </IconWrapper>
    );
  }
);

PhotoBitcoin.displayName = "PhotoBitcoin";

export default PhotoBitcoin;

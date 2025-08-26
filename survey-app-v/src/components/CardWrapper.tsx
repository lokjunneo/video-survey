import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const wrapperCardStyles = cva(
  "", // base classes
  {
    variants: {
      padding: {
        small: "p-2",
        medium: "p-4",
        large: "p-6",
      },
      shadow: {
        normal: "shadow"
      },
      color: {
        white: "bg-white",
        black: "bg-black",
        none: ""
      },
      rounded: {
        large: "rounded-lg",
        none: ""
      }
    },
    defaultVariants: {
        //   padding: "medium",
      color: "white",
      rounded: "large"
    },
  }
);

export interface WrapperCardProps extends VariantProps<typeof wrapperCardStyles> {
  children: React.ReactNode;
  className?: string;
}

const WrapperCard: React.FC<WrapperCardProps> = ({
  children,
  className,
  padding,
  color,
  rounded
}) => {
  return (
    <div className={wrapperCardStyles({ padding, color, rounded, className })}>
      {children}
    </div>
  );
};

export default WrapperCard;

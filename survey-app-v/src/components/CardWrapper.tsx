import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const wrapperCardStyles = cva(
  "rounded-lg", // base classes
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
      },
    },
    defaultVariants: {
        //   padding: "medium",
      color: "white",
    },
  }
);

interface WrapperCardProps extends VariantProps<typeof wrapperCardStyles> {
  children: React.ReactNode;
  className?: string;
}

const WrapperCard: React.FC<WrapperCardProps> = ({
  children,
  className,
  padding,
  color,
}) => {
  return (
    <div className={wrapperCardStyles({ padding, color, className })}>
      {children}
    </div>
  );
};

export default WrapperCard;

import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string; 
}

const CarouselPrevArrow: React.FC<ArrowPrevIconProps> = ({
  fillColor = 'rgb(var(--primary-color))',
  width = '9',
  height = '16',
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest} 
    >
      <path
        d="M7.6665 15.0663L0.600098 7.9999L7.6665 0.899902L8.4665 1.6999L2.2001 7.9999L8.4665 14.2663L7.6665 15.0663Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default CarouselPrevArrow;

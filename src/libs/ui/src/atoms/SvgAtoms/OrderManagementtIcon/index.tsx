import React, { SVGProps } from 'react';

interface ArrowPrevIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string; // Optional fillColor prop for the rect
}

const OrderManagementtIcon: React.FC<ArrowPrevIconProps> = ({
  fillColor = 'rgb(var(--primary-color))',
  width='104',
  height='104',
  ...rest 
}) => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 1664 1664"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path transform="translate(0)" d="m0 0h1664v1664h-1664z" fill="#FEFEFE" />
      <path
        transform="translate(799,177)"
        d="m0 0h69l36 3 23 3 43 8 28 7 29 9 29 10 30 12 34 16 29 15 25 15 24 16 17 12 13 10 14 11 10 9 8 7 14 12 24 22 13 13 5 6v2h2l9 11 9 10 11 14 13 16 13 18 15 23 13 21 13 25 8 16 8 18 6 13 12 30 9 25 8 25 8 33 8 39 4 28 3 33 1 22v36l-1 27-3 32-5 36-8 40-8 29-14 41-12 32-13 29-17 34-12 20-16 26-8 11-14 19-8 11-11 15-8 9-9 11-10 11-7 8-23 23-11 9-7 7-11 9-14 11-16 12-28 20-25 15-21 12-23 12-27 13-31 13-27 10-34 11-43 10-28 5-43 5-23 1h-78l-22-1-42-5-27-5-36-8-25-7-36-12-37-15-36-17-23-12-20-12-15-10-19-13-26-20-17-14-14-12-15-14-12-11-8-8-7-8-7-7-7-8-12-14-14-17-10-13-13-18-22-33-14-24-19-37-13-29-13-34-9-28-10-37-10-52-5-34-3-33v-63l2-27 4-31 4-24 8-37 8-32 8-26 8-21 14-34 7-15 13-27 9-16 6-11 11-18 12-17 9-13 12-17 11-13 10-13 10-11 9-11 12-13 7-8 12-12 8-7 13-12 11-9 14-12 12-9 13-10 17-12 12-8 13-8 24-14 29-15 29-13 34-13 35-12 37-10 40-8 31-5 34-3z"
        fill="#FEFEFE"
      />
      <path
        transform="translate(828,330)"
        d="m0 0h9l17 4 11 6 11 9 8 11 9 16 5 2 8 1h115l1 1v25l1 16h22l103-1 2 7v829l-6 2-70 1h-552l-9-1-1-4v-46l-1-150v-85l1-442 1-96 1-13 13-1 114-1 1-40h133l6-18 6-9 8-9 10-7 12-5z"
        fill="#FEFEFE"
      />
      <path
        transform="translate(828,330)"
        d="m0 0h9l17 4 11 6 11 9 8 11 9 16 5 2 8 1h115l1 1v25l1 16h22l103-1 2 7v829l-6 2-70 1h-552l-9-1-1-4v-46l-1-150v-85l1-442 1-96 1-13 13-1 114-1 1-40h133l6-18 6-9 8-9 10-7 12-5zm195 102-1 1v30l1 15-210-1h-171v-42l-1-2h-75l-38 1-2 6-1 185v536l1 75 1 5 2 1 11 1h596l1-3-1-107v-698l-4-2z"
        fill="#27233E"
      />
      <path
        transform="translate(803,165)"
        d="m0 0h60l29 2 40 5 40 7 30 7 29 8 30 10 28 11 27 12 17 8 22 12 20 11 16 10 14 9 16 11 13 10 10 8 16 13 11 9 15 13 14 12 26 26 9 11 9 10 22 28 14 19 14 21 13 21 11 19 18 34 9 20 8 19 12 31 15 47 7 31 9 48 3 23 3 33 1 25v34l-1 30-4 34-7 41-5 26-12 45-12 36-9 25-11 26-7 16-15 30-10 17-10 16-10 15-14 19-20 26-14 17-9 10-11 12-9 10-11 11-8 7-14 12-11 10-11 9-14 11-10 8-15 10-14 10-26 17-22 13-19 10-16 8-29 13-34 13-36 12-22 6-37 8-36 6-31 3-25 1h-93l-32-2-25-3-45-9-31-8-38-12-30-11-38-16-34-17-22-13-15-10-22-15-17-12-16-12-13-11-11-9-7-7-8-7-7-6-5-6-8-7-7-7-7-8-9-9-7-8-12-14-11-14-10-13-10-14-15-22-13-20-11-20-10-19-14-29-13-31-11-31-10-31-8-31-7-36-5-30-4-35-1-26v-38l1-31 2-25 5-36 9-45 9-34 12-39 16-42 15-33 10-20 24-40 9-13 16-23 10-14 9-11 13-14 9-11 9-10 7-8 12-13 10-10 8-7 12-11 8-7 11-9 17-14 17-13 16-11 18-12 11-7 21-12 27-14 23-11 44-18 36-12 44-12 31-6 35-5 40-4zm-4 12-37 3-23 3-44 8-30 7-30 9-32 11-28 11-37 17-23 12-22 13-13 8-22 15-16 12-18 14-14 12-11 9-17 16-8 7-12 12-7 8-24 28-10 12-11 14-9 12-13 19-14 20-10 17-8 14-15 29-9 19-12 29-9 23-9 27-7 26-9 40-4 21-4 27-3 28-1 16v63l3 33 6 40 10 50 10 37 12 35 10 25 16 35 17 33 15 25 19 28 13 18 13 16 8 10 11 13 10 11 7 8 7 7 7 8 10 10 8 7 15 14 11 9 17 14 13 10 15 11 13 9 23 15 21 12 23 12 32 15 38 15 36 12 30 8 43 9 35 5 19 2 22 1h78l23-1 43-5 28-5 43-10 43-14 28-11 36-16 32-16 41-24 18-12 15-11 28-21 13-11 10-9 15-13 25-25 9-11 10-11 7-9 6-7 10-14 12-16 10-14 7-10 15-25 8-13 14-27 12-25 12-29 13-36 10-31 7-27 7-35 5-36 3-32 1-27v-36l-1-22-4-42-5-29-9-42-7-27-14-41-12-29-6-15-7-15-9-19-12-22-8-14-14-22-13-19-13-17-13-16-9-11-12-14-3-4h-2l-2-4-11-12-13-13-8-7-11-10-11-9-14-13-14-11-13-10-18-13-24-16-25-15-28-15-33-16-30-12-28-10-42-13-26-6-28-5-25-4-28-3-16-1z"
        fill="#27233E"
      />
      <path
        transform="translate(826,344)"
        d="m0 0h11l13 4 10 6 12 12 11 16 6 11 118-2 2 1 1 4 1 39v31l-9 1-207-1h-139l-3-3v-49l1-22 1-1h24l65 1h39l3-10 8-16 6-8 5-5 7-5 9-3z"
        fill="#FEFEFE"
      />
      <path
        transform="translate(1023,659)"
        d="m0 0 7 1v16l-1 1-125-1-112-1-9-3-2-3 1-5 1-2 3-1z"
        fill={fillColor}
      />
      <path
        transform="translate(826,358)"
        d="m0 0h10l14 3 9 6 4 10v22l-3 10-8 7-10 4-9 1-15-3-10-6-4-6-2-7v-15l2-9 3-6 4-5 10-5z"
        fill="#27233E"
      />
      <path
        transform="translate(817,1057)"
        d="m0 0h213l3 1-2 10-2 1-30 1h-145l-65-1-9-2-2-2v-5l3-2z"
        fill={fillColor}
      />
      <path
        transform="translate(782,866)"
        d="m0 0h251l-1 9-4 2-44 1h-118l-74-1-10-2-3-3 1-5z"
        fill={fillColor}
      />
      <path
        transform="translate(745,609)"
        d="m0 0h6l1 4-4 14-9 16-21 30-10 13-13 17-7 7-6 4-4-1-6-4-5-10-10-9-6-8-14-19-3-9 4-2 7 3 7 7 12 16 14 15v2l3-1 9-12 14-17 10-13 12-16 12-19z"
        fill={fillColor}
      />
      <path
        transform="translate(748,1006)"
        d="m0 0 5 1-1 9-8 15-13 19-9 12-8 11-13 16-12 13-5 4-8 1-5-5-7-9-12-13-11-14-8-12v-5l8 1 10 6 9 11 15 21 2 1v2l4 1 2-4 9-11 11-14 13-16 15-22 9-14 4-4z"
        fill={fillColor}
      />
      <path
        transform="translate(745,814)"
        d="m0 0 7 1-3 9-10 16-12 17-13 19-11 14-9 11-9 9-6 1-7-6-6-8-15-15-9-13-5-11v-7l2-1 6 4 12 12 12 16 5 7 4 8 4-2 12-16 12-17 10-16 13-17 11-12z"
        fill={fillColor}
      />
      <path
        transform="translate(787,1244)"
        d="m0 0 2 1-3 1v2l-6 1h-9l-5 2-4-1-5 1h-13l-6 1h-33l-15 1h-50l-12 1h-7v2l2 1h-46l-9-2v-1l23-1 3 1 2-1 27-2v-2l-2-1 5-1 3-2h90z"
        fill="#27233E"
      />
      <path
        transform="translate(1038,1243)"
        d="m0 0h55l5 1-3 2 7 2-3 2-15 3h-45l-25-2-5-1v-2l-5-1v-1l11-2h21z"
        fill="#27233E"
      />
      <path
        transform="translate(519,1256)"
        d="m0 0 122 2v1h-119l-9-1v-1z"
        fill="#2D5BFA"
      />
    </svg>
  );
};

export default OrderManagementtIcon;
export const RightArrow = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path
      d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41Z"
      data-name="3-Arrow Right"
    />
  </svg>
);

export const Loader = (props: any) => (
  <svg width={38} height={38} xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
        <stop stopColor="black" stopOpacity={0} offset="0%" />
        <stop stopColor="black" stopOpacity={0.631} offset="63.146%" />
        <stop stopColor="black" offset="100%" />
      </linearGradient>
    </defs>
    <g transform="translate(1 1)" fill="none" fillRule="evenodd">
      <path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" strokeWidth={2}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </path>
      <circle fill="black" cx={36} cy={18} r={1}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);

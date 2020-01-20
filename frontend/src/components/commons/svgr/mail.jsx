function SvgComponent(props) {
  return (
    <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 32 32" 
    {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        id="prefix__Page-1"
        stroke="none"
        strokeWidth={1}
      >
        <g fill={props.color} id="prefix__icon-6-mail">
          <path
            d="M5.315 9.274a1.006 1.006 0 00-.315.733v11.986c0 .29.12.551.313.735L13.05 16 5.315 9.274zm22.372-.002c.194.184.313.445.313.735v11.986c0 .29-.121.55-.315.733L19.95 16l7.737-6.728zm-8.485 7.379L26.5 23h-20l7.298-6.35L16.5 19l2.702-2.35zM6.004 8A2 2 0 004 9.994v12.012C4 23.107 4.89 24 6.004 24h20.992A2 2 0 0029 22.006V9.994C29 8.893 28.11 8 26.996 8H6.004zM16.5 17.7l10-8.7h-20l10 8.7z"
            id="prefix__mail"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgComponent;


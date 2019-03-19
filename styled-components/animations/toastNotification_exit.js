export default (css, keyframes) => ( css`
  animation: ${keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
  `} 250ms cubic-bezier(0.35, 0.00, 0.50, 1.00) 500ms forwards,
  ${keyframes`
    from { transform: none; }
    to { transform: translateY(-90px); }
  `} 750ms cubic-bezier(0.70, -0.10, 0.60, 0.10) forwards;
`)
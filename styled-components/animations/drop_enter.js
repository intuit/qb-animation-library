export default (css, keyframes) => ( css`
  animation: ${keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `} 250ms cubic-bezier(0.35, 0.00, 0.50, 1.00) backwards,
  ${keyframes`
    from { transform: translateY(-90px); }
    to { transform: none; }
  `} 750ms cubic-bezier(0.15, 1.30, 0.30, 1.00) backwards;
`)
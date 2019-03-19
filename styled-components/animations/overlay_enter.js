export default (css, keyframes) => ( css`
  animation: ${keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `} 333ms cubic-bezier(0.35, 0.00, 0.50, 1.00) backwards;
`)
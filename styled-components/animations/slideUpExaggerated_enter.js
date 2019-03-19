export default (css, keyframes) => ( css`
  animation: ${keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `} 250ms cubic-bezier(0.35, 0.00, 0.50, 1.00) backwards,
  ${keyframes`
    from { transform: translateY(125px); }
    to { transform: none; }
  `} 250ms cubic-bezier(0.00, 0.00, 0.10, 1.00) backwards;
`)
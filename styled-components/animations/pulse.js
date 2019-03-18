export default (css, keyframes) => ( css`
  animation: ${keyframes`
    from { transform: none; }
    to { transform: scale(2.75); }
  `} 2000ms cubic-bezier(0.35, 0.00, 0.50, 1.00),
  ${keyframes`
    from { opacity: 0.5; }
    to { opacity: 0; }
  `} 2000ms cubic-bezier(0.35, 0.00, 0.50, 1.00);
  transform-origin: 50% 50%;
`)
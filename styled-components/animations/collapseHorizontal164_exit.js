export default (css, keyframes) => ( css`
  animation: ${keyframes`
    from { width: 164px; }
    to { width: 0; }
  `} 500ms cubic-bezier(0.35, 0.00, 0.25, 1.00) forwards;
  > * {
    animation: ${keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
  `} 333ms cubic-bezier(0.35, 0.00, 0.50, 1.00) 167ms forwards;
  }
`)
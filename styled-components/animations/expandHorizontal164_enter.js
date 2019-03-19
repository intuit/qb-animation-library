export default (css, keyframes) => ( css`
  animation: ${keyframes`
    from { width: 0; }
    to { width: 164px; }
  `} 500ms cubic-bezier(0.35, 0.00, 0.25, 1.00) backwards;
  > * {
    animation: ${keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `} 333ms cubic-bezier(0.35, 0.00, 0.50, 1.00) 167ms backwards;
  }
`)
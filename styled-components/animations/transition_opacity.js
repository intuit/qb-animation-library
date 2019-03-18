export default (css, keyframes) => ( css`
  transition: opacity 250ms cubic-bezier(0.35, 0.00, 0.50, 1.00);
  will-change: opacity;
`)
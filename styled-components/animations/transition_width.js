export default (css, keyframes) => ( css`
  transition: width 500ms cubic-bezier(0.35, 0.00, 0.25, 1.00);
  will-change: width;
`)
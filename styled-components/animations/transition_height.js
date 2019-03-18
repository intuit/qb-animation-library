export default (css, keyframes) => ( css`
  transition: height 500ms cubic-bezier(0.35, 0.00, 0.25, 1.00);
  will-change: height;
`)
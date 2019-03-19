export default (css, keyframes) => ( css`
  
  animation: ${keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
  `} 250ms cubic-bezier(0.35, 0.00, 0.50, 1.00) forwards,
  ${keyframes`
    from { transform: none; }
    to { transform: translateY(125px); }
  `} 250ms cubic-bezier(0.35, 0.00, 0.80, 1.00) forwards;

  @media screen and (prefers-reduced-motion: reduce) { 
      
  animation: ${keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
  `} 250ms cubic-bezier(0.35, 0.00, 0.50, 1.00) forwards;

  }
`)
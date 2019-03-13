// The MIT License
// Copyright 2018 Intuit Inc.
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation 
// files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, 
// modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the 
// Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE 
// WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
// ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 

// animation variables
export const vars = {
  scale_1: .5,
  scale_2: .8,
  scale_3: .9,
  scale_4: 2.75,

  // distances in px
  distance_1: 30,
  distance_2: 90,
  distance_3: 125,

  // durations in ms
  duration_1: 85,
  duration_2: 167,
  duration_3: 250,
  duration_4: 333,
  duration_5: 417,
  duration_6: 500,
  duration_7: 750,
  duration_8: 1000,
  duration_9: 2000,

  ease_slow: "cubic-bezier(0.35, 0.00, 0.50, 1.00)",
  ease_quick: "cubic-bezier(0.35, 0.00, 0.25, 1.00)",
  ease_entrance: "cubic-bezier(0.00, 0.00, 0.10, 1.00)",
  ease_exit: "cubic-bezier(0.35, 0.00, 0.80, 1.00)",
  ease_spirited: "cubic-bezier(0.35, 1.30, 0.30, 1.00)",
  ease_spirited_entrance: "cubic-bezier(0.15, 1.30, 0.30, 1.00)",
  ease_spirited_exit: "cubic-bezier(0.70, -0.10, 0.60, 0.10)"    
}


// build animation keyframes
const buildKeyframe = (name, property, from, to) => {
  vars[`keyframes_${name}`] = `
    from {
      ${property}: ${from};
    }
    to {
      ${property}: ${to};
    }
  `
}

buildKeyframe("FadeEnter", "opacity", "0", "1");
buildKeyframe("RightEnter", "transform", `translateX(-${vars.distance_2}px)`, "none");
buildKeyframe("LeftEnter", "transform", `translateX(${vars.distance_2}px)`, "none");
buildKeyframe("UpEnter", "transform", `translateY(${vars.distance_2}px)`, "none");
buildKeyframe("DownEnter", "transform", `translateY(-${vars.distance_2}px)`, "none");
buildKeyframe("UpExaggeratedEnter", "transform", `translateY(${vars.distance_3}px)`, "none");
buildKeyframe("DownSubtleEnter", "transform", `translateY(-${vars.distance_1}px)`, "none");
buildKeyframe("GrowEnter", "transform", `scale(${vars.scale_2})`, "none");
buildKeyframe("GrowExaggeratedEnter", "transform", `scale(${vars.scale_1})`, "none");
buildKeyframe("ExpandHorizontalEnter164", "width", "0", "164px");
  
buildKeyframe("FadeExit", "opacity", "1", "0");
buildKeyframe("RightExit", "transform", "none", `translateX(${vars.distance_2}px)`);
buildKeyframe("LeftExit", "transform", "none", `translateX(-${vars.distance_2}px)`);
buildKeyframe("DownExit", "transform", "none", `translateY(${vars.distance_2}px)`);
buildKeyframe("DownExaggeratedExit", "transform", "none", `translateY(${vars.distance_3}px)`);
buildKeyframe("UpExit", "transform", "none", `translateY(-${vars.distance_2}px)`);
buildKeyframe("UpSubtleExit", "transform", "none", `translateY(-${vars.distance_1}px)`);
buildKeyframe("ShrinkSubtleExit", "transform", "none", `scale(${vars.scale_3})`);
buildKeyframe("ShrinkExit", "transform", "none", `scale(${vars.scale_2})`);
buildKeyframe("CollapseHorizontalExit164", "width", "164px", "0");
  
buildKeyframe("PulseGrow", "transform", "none", `scale(${vars.scale_4})`);
buildKeyframe("PulseFade", "opacity", "0.5", "0");
  

// animation classes: entrances
export const fade_enter = (css, keyframes) => ( css`
    animation: ${keyframes`${vars.keyframes_FadeEnter}`} ${vars.duration_4}ms ${vars.ease_slow} backwards;
`)
export const slideRight_enter = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_FadeEnter}`} ${vars.duration_3}ms ${vars.ease_slow} backwards,
             ${keyframes`${vars.keyframes_RightEnter}`} ${vars.duration_4}ms ${vars.ease_entrance} backwards;
`;
export const slideLeft_enter = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_FadeEnter}`} ${vars.duration_3}ms ${vars.ease_slow} backwards,
             ${keyframes`${vars.keyframes_LeftEnter}`} ${vars.duration_4}ms ${vars.ease_entrance} backwards;
`;
export const slideUp_enter = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_FadeEnter}`} ${vars.duration_4}ms ${vars.ease_slow} backwards,
             ${keyframes`${vars.keyframes_UpEnter}`} ${vars.duration_4}ms ${vars.ease_entrance} backwards;
`;
export const slideDown_enter = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_FadeEnter}`} ${vars.duration_3}ms ${vars.ease_slow} backwards,
             ${keyframes`${vars.keyframes_DownEnter}`} ${vars.duration_4}ms ${vars.ease_entrance} backwards;
`;
export const slideDownSubtle_enter = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_FadeEnter}`} ${vars.duration_3}ms ${vars.ease_slow} backwards,
             ${keyframes`${vars.keyframes_DownSubtleEnter}`} ${vars.duration_3}ms ${vars.ease_entrance} backwards;
`;
export const slideUpExaggerated_enter = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_FadeEnter}`} ${vars.duration_3}ms ${vars.ease_slow} backwards,
             ${keyframes`${vars.keyframes_UpExaggeratedEnter}`} ${vars.duration_3}ms ${vars.ease_entrance} backwards;
`;
export const expandHorizontal164_enter = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_ExpandHorizontalEnter164}`} ${vars.duration_6}ms ${vars.ease_quick} backwards;
  > * {
      animation: ${keyframes`${vars.keyframes_FadeEnter}`} ${vars.duration_4}ms ${vars.ease_slow} ${vars.duration_6 - vars.duration_4}ms backwards;
  }
`;
export const drop_enter = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_FadeEnter}`} ${vars.duration_3}ms ${vars.ease_slow} backwards,
             ${keyframes`${vars.keyframes_DownEnter}`} ${vars.duration_7}ms ${vars.ease_spirited_entrance} backwards;
`;
export const grow_enter = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_FadeEnter}`} ${vars.duration_3}ms ${vars.ease_slow} backwards,
             ${keyframes`${vars.keyframes_GrowEnter}`} ${vars.duration_7}ms ${vars.ease_spirited_entrance} backwards;
`;
export const growExaggerated_enter = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_FadeEnter}`} ${vars.duration_3}ms ${vars.ease_slow} backwards,
             ${keyframes`${vars.keyframes_GrowExaggeratedEnter}`} ${vars.duration_7}ms ${vars.ease_spirited_entrance} backwards;
`;

// animation classes: exits
export const fade_exit = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_FadeExit}`} ${vars.duration_3}ms ${vars.ease_slow} forwards;
`;
export const slideRight_exit = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_FadeExit}`} ${vars.duration_3}ms ${vars.ease_slow} forwards,
             ${keyframes`${vars.keyframes_RightExit}`} ${vars.duration_3}ms ${vars.ease_exit} forwards;
`;
export const slideLeft_exit = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_FadeExit}`} ${vars.duration_3}ms ${vars.ease_slow} forwards,
             ${keyframes`${vars.keyframes_LeftExit}`} ${vars.duration_3}ms ${vars.ease_exit} forwards;
`;
export const slideDown_exit = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_FadeExit}`} ${vars.duration_3}ms ${vars.ease_slow} forwards,
             ${keyframes`${vars.keyframes_DownExit}`} ${vars.duration_3}ms ${vars.ease_exit} forwards;
`;
export const slideUp_exit = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_FadeExit}`} ${vars.duration_3}ms ${vars.ease_slow} forwards,
             ${keyframes`${vars.keyframes_UpExit}`} ${vars.duration_3}ms ${vars.ease_exit} forwards;
`;
export const slideUpSubtle_exit = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_FadeExit}`} ${vars.duration_2}ms ${vars.ease_slow} forwards,
             ${keyframes`${vars.keyframes_UpSubtleExit}`} ${vars.duration_2}ms ${vars.ease_exit} forwards;
`;
export const slideDownExaggerated_exit = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_FadeExit}`} ${vars.duration_3}ms ${vars.ease_slow} forwards,
             ${keyframes`${vars.keyframes_DownExaggeratedExit}`} ${vars.duration_3}ms ${vars.ease_exit} forwards;
`;
export const collapseHorizontal164_exit = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_CollapseHorizontalExit164}`} ${vars.duration_6}ms ${vars.ease_quick} forwards;
  > * {
      animation: ${keyframes`${vars.keyframes_FadeExit}`} ${vars.duration_4}ms ${vars.ease_slow} ${vars.duration_2}ms forwards;
  }
`;
export const rise_exit = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_FadeExit}`} ${vars.duration_3}ms ${vars.ease_slow} ${vars.duration_7 - vars.duration_3}ms forwards,
             ${keyframes`${vars.keyframes_UpExit}`} ${vars.duration_7}ms ${vars.ease_spirited_exit} forwards;
`;
export const shrink_exit = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_FadeExit}`} ${vars.duration_3}ms ${vars.ease_slow} forwards,
             ${keyframes`${vars.keyframes_ShrinkExit}`} ${vars.duration_3}ms ${vars.ease_exit} forwards;
`;
export const shrinkSubtle_exit = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_FadeExit}`} ${vars.duration_3}ms ${vars.ease_slow} forwards,
             ${keyframes`${vars.keyframes_ShrinkSubtleExit}`} ${vars.duration_3}ms ${vars.ease_exit} forwards;
`;

// animation classes: misc
export const pulse = (css, keyframes) => css`
  animation: ${keyframes`${vars.keyframes_PulseGrow}`} ${vars.duration_9}ms ${vars.ease_slow},
             ${keyframes`${vars.keyframes_PulseFade}`} ${vars.duration_9}ms ${vars.ease_slow};
  transform-origin: 50% 50%;
`;

// animation classes: stagger children
let delays = [];
for (let i = 1; i <= 20; i++) {
  delays.push(`
    :nth-child( ${i} ) {
      animation-delay: ${i * vars.duration_3}ms; 
    }
  `);
}
export const stagger_children = (css) => css`
  ${delays.join('')}
`;


// for CSS transition property
export const transition_width = (css) => css`
  transition: width ${vars.duration_6}ms ${vars.ease_quick};
  will-change: width;
`;
export const transition_height = (css) => css`
  transition: height ${vars.duration_6}ms ${vars.ease_quick};
  will-change: height;
`;
export const transition_opacity = (css) => css`
  transition: opacity ${vars.duration_3}ms ${vars.ease_slow};
  will-change: opacity;
`;
export const transition_color = (css) => css`
  transition: color ${vars.duration_3}ms ${vars.ease_slow};
  will-change: color;
`;


// semantic mappings
export const overlay_enter = fade_enter; 
export const overlay_exit  = fade_exit;  

export const trowserModal_enter = (css, keyframes) => css`
  ${slideUpExaggerated_enter(css, keyframes)}
  @media screen and (prefers-reduced-motion: reduce) { 
      ${fade_enter(css, keyframes)} 
  }
`;
export const trowserModal_exit = (css, keyframes) => css`
  ${slideDownExaggerated_exit((css, keyframes))}
  @media screen and (prefers-reduced-motion: reduce) { 
      ${fade_exit(css, keyframes)}
  }
`;

export const rightDrawer_enter = slideLeft_enter;
export const rightDrawer_exit = slideRight_exit;

export const dialogModal_enter = grow_enter;
export const dialogModal_exit = shrinkSubtle_exit;

export const toastNotification_enter = drop_enter;
export const toastNotification_exit = rise_exit;

export const tooltip_enter = growExaggerated_enter;
export const tooltip_exit = fade_exit;

export const coachMark_enter = grow_enter;
export const coachMark_exit = shrink_exit;

export const flyout_enter = slideDown_enter;    
export const flyout_exit = slideUp_exit;    

export const dropdown_enter = slideDownSubtle_enter;    
export const dropdown_exit = slideUpSubtle_exit;    

export const tabContent_enter = (css, keyframes) => css`
  ${slideRight_enter(css, keyframes)}
  animation-delay: ${vars.duration_3}ms;
`;
export const tabContent_exit =(css, keyframes) => css`
  ${slideRight_exit(css, keyframes)}
`;

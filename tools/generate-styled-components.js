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

import del from 'del';
import fs from 'fs';
import path from 'path';
import {default as vars} from '../styled-components/animation-variables.js'

const outputStyledComponentsFolder = path.resolve('styled-components/animations');

del.sync([outputStyledComponentsFolder]);
fs.mkdirSync(outputStyledComponentsFolder);

const animations = {
  // entrances
  fade_enter: `
  animation: \${keyframes\`${vars.keyframes_FadeEnter}\`} ${vars.duration_4}ms ${vars.ease_slow} backwards;
`,
  slideRight_enter: `
  animation: \${keyframes\`${vars.keyframes_FadeEnter}\`} ${vars.duration_3}ms ${vars.ease_slow} backwards,
  \${keyframes\`${vars.keyframes_RightEnter}\`} ${vars.duration_4}ms ${vars.ease_entrance} backwards;
`,
  slideLeft_enter: `
  animation: \${keyframes\`${vars.keyframes_FadeEnter}\`} ${vars.duration_3}ms ${vars.ease_slow} backwards,
  \${keyframes\`${vars.keyframes_LeftEnter}\`} ${vars.duration_4}ms ${vars.ease_entrance} backwards;
`,
  slideUp_enter: `
  animation: \${keyframes\`${vars.keyframes_FadeEnter}\`} ${vars.duration_4}ms ${vars.ease_slow} backwards,
  \${keyframes\`${vars.keyframes_UpEnter}\`} ${vars.duration_4}ms ${vars.ease_entrance} backwards;
`,
  slideDown_enter: `
  animation: \${keyframes\`${vars.keyframes_FadeEnter}\`} ${vars.duration_3}ms ${vars.ease_slow} backwards,
  \${keyframes\`${vars.keyframes_DownEnter}\`} ${vars.duration_4}ms ${vars.ease_entrance} backwards;
`,
  slideDownSubtle_enter: `
  animation: \${keyframes\`${vars.keyframes_FadeEnter}\`} ${vars.duration_3}ms ${vars.ease_slow} backwards,
  \${keyframes\`${vars.keyframes_DownSubtleEnter}\`} ${vars.duration_3}ms ${vars.ease_entrance} backwards;
`,
  slideUpExaggerated_enter: `
  animation: \${keyframes\`${vars.keyframes_FadeEnter}\`} ${vars.duration_3}ms ${vars.ease_slow} backwards,
  \${keyframes\`${vars.keyframes_UpExaggeratedEnter}\`} ${vars.duration_3}ms ${vars.ease_entrance} backwards;
`,
  expandHorizontal164_enter: `
  animation: \${keyframes\`${vars.keyframes_ExpandHorizontalEnter164}\`} ${vars.duration_6}ms ${vars.ease_quick} backwards;
  > * {
    animation: \${keyframes\`${vars.keyframes_FadeEnter}\`} ${vars.duration_4}ms ${vars.ease_slow} ${vars.duration_6 - vars.duration_4}ms backwards;
  }
`,
  drop_enter: `
  animation: \${keyframes\`${vars.keyframes_FadeEnter}\`} ${vars.duration_3}ms ${vars.ease_slow} backwards,
  \${keyframes\`${vars.keyframes_DownEnter}\`} ${vars.duration_7}ms ${vars.ease_spirited_entrance} backwards;
`,
  grow_enter: `
  animation: \${keyframes\`${vars.keyframes_FadeEnter}\`} ${vars.duration_3}ms ${vars.ease_slow} backwards,
  \${keyframes\`${vars.keyframes_GrowEnter}\`} ${vars.duration_7}ms ${vars.ease_spirited_entrance} backwards;
`,
  growExaggerated_enter: `
  animation: \${keyframes\`${vars.keyframes_FadeEnter}\`} ${vars.duration_3}ms ${vars.ease_slow} backwards,
  \${keyframes\`${vars.keyframes_GrowExaggeratedEnter}\`} ${vars.duration_7}ms ${vars.ease_spirited_entrance} backwards;
`,

  // exits
  fade_exit: `
  animation: \${keyframes\`${vars.keyframes_FadeExit}\`} ${vars.duration_3}ms ${vars.ease_slow} forwards;
`,
  slideRight_exit: `
  animation: \${keyframes\`${vars.keyframes_FadeExit}\`} ${vars.duration_3}ms ${vars.ease_slow} forwards,
  \${keyframes\`${vars.keyframes_RightExit}\`} ${vars.duration_3}ms ${vars.ease_exit} forwards;
`,
  slideLeft_exit: `
  animation: \${keyframes\`${vars.keyframes_FadeExit}\`} ${vars.duration_3}ms ${vars.ease_slow} forwards,
  \${keyframes\`${vars.keyframes_LeftExit}\`} ${vars.duration_3}ms ${vars.ease_exit} forwards;
`,
  slideDown_exit: `
  animation: \${keyframes\`${vars.keyframes_FadeExit}\`} ${vars.duration_3}ms ${vars.ease_slow} forwards,
  \${keyframes\`${vars.keyframes_DownExit}\`} ${vars.duration_3}ms ${vars.ease_exit} forwards;
`,
  slideUp_exit: `
  animation: \${keyframes\`${vars.keyframes_FadeExit}\`} ${vars.duration_3}ms ${vars.ease_slow} forwards,
  \${keyframes\`${vars.keyframes_UpExit}\`} ${vars.duration_3}ms ${vars.ease_exit} forwards;
`,
  slideUpSubtle_exit: `
  animation: \${keyframes\`${vars.keyframes_FadeExit}\`} ${vars.duration_2}ms ${vars.ease_slow} forwards,
  \${keyframes\`${vars.keyframes_UpSubtleExit}\`} ${vars.duration_2}ms ${vars.ease_exit} forwards;
`,
  slideDownExaggerated_exit: `
  animation: \${keyframes\`${vars.keyframes_FadeExit}\`} ${vars.duration_3}ms ${vars.ease_slow} forwards,
  \${keyframes\`${vars.keyframes_DownExaggeratedExit}\`} ${vars.duration_3}ms ${vars.ease_exit} forwards;
`,
  collapseHorizontal164_exit: `
  animation: \${keyframes\`${vars.keyframes_CollapseHorizontalExit164}\`} ${vars.duration_6}ms ${vars.ease_quick} forwards;
  > * {
    animation: \${keyframes\`${vars.keyframes_FadeExit}\`} ${vars.duration_4}ms ${vars.ease_slow} ${vars.duration_2}ms forwards;
  }
`,
  rise_exit: `
  animation: \${keyframes\`${vars.keyframes_FadeExit}\`} ${vars.duration_3}ms ${vars.ease_slow} ${vars.duration_7 - vars.duration_3}ms forwards,
  \${keyframes\`${vars.keyframes_UpExit}\`} ${vars.duration_7}ms ${vars.ease_spirited_exit} forwards;
`,
  shrink_exit: `
  animation: \${keyframes\`${vars.keyframes_FadeExit}\`} ${vars.duration_3}ms ${vars.ease_slow} forwards,
  \${keyframes\`${vars.keyframes_ShrinkExit}\`} ${vars.duration_3}ms ${vars.ease_exit} forwards;
`,
  shrinkSubtle_exit: `
  animation: \${keyframes\`${vars.keyframes_FadeExit}\`} ${vars.duration_3}ms ${vars.ease_slow} forwards,
  \${keyframes\`${vars.keyframes_ShrinkSubtleExit}\`} ${vars.duration_3}ms ${vars.ease_exit} forwards;
`,

  // misc
  pulse: `
  animation: \${keyframes\`${vars.keyframes_PulseGrow}\`} ${vars.duration_9}ms ${vars.ease_slow},
  \${keyframes\`${vars.keyframes_PulseFade}\`} ${vars.duration_9}ms ${vars.ease_slow};
  transform-origin: 50% 50%;
`,

  // css transition property
  transition_width: `
  transition: width ${vars.duration_6}ms ${vars.ease_quick};
  will-change: width;
`,
  transition_height: `
  transition: height ${vars.duration_6}ms ${vars.ease_quick};
  will-change: height;
`,
  transition_opacity: `
  transition: opacity ${vars.duration_3}ms ${vars.ease_slow};
  will-change: opacity;
`,
  transition_color: `
  transition: color ${vars.duration_3}ms ${vars.ease_slow};
  will-change: color;
`,
}

// stagger children
const delays = [];
for (let i = 1; i <= 20; i++) {
  delays.push(`:nth-child( ${i} ) { animation-delay: ${i * vars.duration_3}ms; }`);
}
animations.stagger_children = delays.join('');



// semantic mappings
animations.overlay_enter = animations.fade_enter;
animations.overlay_exit  = animations.fade_exit;

animations.rightDrawer_enter = animations.slideLeft_enter;
animations.rightDrawer_exit = animations.slideRight_exit;

animations.dialogModal_enter = animations.grow_enter;
animations.dialogModal_exit = animations.shrinkSubtle_exit;

animations.toastNotification_enter = animations.drop_enter;
animations.toastNotification_exit = animations.rise_exit;

animations.tooltip_enter = animations.growExaggerated_enter;
animations.tooltip_exit = animations.fade_exit;

animations.coachMark_enter = animations.grow_enter;
animations.coachMark_exit = animations.shrink_exit;

animations.flyout_enter = animations.slideDown_enter;
animations.flyout_exit = animations.slideUp_exit;

animations.dropdown_enter = animations.slideDownSubtle_enter;
animations.dropdown_exit = animations.slideUpSubtle_exit;

animations.tabContent_enter = `
  ${animations.slideRight_enter}
  animation-delay: ${vars.duration_3}ms;
`;
animations.tabContent_exit = animations.slideRight_exit;

animations.trowserModal_enter = `
  ${animations.slideUpExaggerated_enter}
  @media screen and (prefers-reduced-motion: reduce) { 
      ${animations.fade_enter} 
  }
`;
animations.trowserModal_exit = `
  ${animations.slideDownExaggerated_exit}
  @media screen and (prefers-reduced-motion: reduce) { 
      ${animations.fade_exit}
  }
`;

for (const name in animations) {
  const destinationFile = path.resolve(outputStyledComponentsFolder, `${name}.js`);
  const animation = animations[name];
  // fs.writeFileSync(destinationFile, `export const ${name} = (css, keyframes) => ( css\`${animation}\`)`);
  fs.writeFileSync(destinationFile, `export default (css, keyframes) => ( css\`${animation}\`)`);
}

const destinationImportFile = path.resolve('styled-components/index.js');
fs.writeFileSync(
  destinationImportFile, `export {default as animationVariables} from './animation-variables';
${Object.keys(animations).map(n => `export {default as ${n}} from './animations/${n}';`).join('\n')}\n`,
);






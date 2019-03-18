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

const animationVariables = {
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
  animationVariables[`keyframes_${name}`] = `
    from { ${property}: ${from}; }
    to { ${property}: ${to}; }
  `
}

buildKeyframe("FadeEnter", "opacity", "0", "1");
buildKeyframe("RightEnter", "transform", `translateX(-${animationVariables.distance_2}px)`, "none");
buildKeyframe("LeftEnter", "transform", `translateX(${animationVariables.distance_2}px)`, "none");
buildKeyframe("UpEnter", "transform", `translateY(${animationVariables.distance_2}px)`, "none");
buildKeyframe("DownEnter", "transform", `translateY(-${animationVariables.distance_2}px)`, "none");
buildKeyframe("UpExaggeratedEnter", "transform", `translateY(${animationVariables.distance_3}px)`, "none");
buildKeyframe("DownSubtleEnter", "transform", `translateY(-${animationVariables.distance_1}px)`, "none");
buildKeyframe("GrowEnter", "transform", `scale(${animationVariables.scale_2})`, "none");
buildKeyframe("GrowExaggeratedEnter", "transform", `scale(${animationVariables.scale_1})`, "none");
buildKeyframe("ExpandHorizontalEnter164", "width", "0", "164px");
  
buildKeyframe("FadeExit", "opacity", "1", "0");
buildKeyframe("RightExit", "transform", "none", `translateX(${animationVariables.distance_2}px)`);
buildKeyframe("LeftExit", "transform", "none", `translateX(-${animationVariables.distance_2}px)`);
buildKeyframe("DownExit", "transform", "none", `translateY(${animationVariables.distance_2}px)`);
buildKeyframe("DownExaggeratedExit", "transform", "none", `translateY(${animationVariables.distance_3}px)`);
buildKeyframe("UpExit", "transform", "none", `translateY(-${animationVariables.distance_2}px)`);
buildKeyframe("UpSubtleExit", "transform", "none", `translateY(-${animationVariables.distance_1}px)`);
buildKeyframe("ShrinkSubtleExit", "transform", "none", `scale(${animationVariables.scale_3})`);
buildKeyframe("ShrinkExit", "transform", "none", `scale(${animationVariables.scale_2})`);
buildKeyframe("CollapseHorizontalExit164", "width", "164px", "0");
  
buildKeyframe("PulseGrow", "transform", "none", `scale(${animationVariables.scale_4})`);
buildKeyframe("PulseFade", "opacity", "0.5", "0");

export default animationVariables;
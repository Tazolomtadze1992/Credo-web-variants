'use client';
import {motion, useReducedMotion} from 'motion/react';

const wobble = {rotate:{duration:2,times:[0,.2,.5,.8,1],ease:'easeInOut',repeat:Infinity}};
const bounceEase=['easeOut','easeIn','easeOut','easeIn','easeOut','easeIn','linear'];
const tracks={
  '1:508':{animate:{rotate:[0,-10,0,-3.8,0,-1.2,0,0]},transition:{rotate:{duration:2,times:[0,.12,.2,.265,.335,.38,.45,1],ease:bounceEase,repeat:Infinity}}},
  '1:538':{animate:{y:[0,-18,0,-7,0,-2,0,0]},transition:{y:{duration:2,times:[0,.1,.2,.265,.33,.375,.43,1],ease:bounceEase,repeat:Infinity}}},
};
// Rotation wrappers carry offsets; the nested artwork retains Figma's static ±5°.
for(const id of ['1:517','1:518','1:579']) tracks[id]={animate:{rotate:[0,-3,3,-3,0]},transition:wobble};
tracks['1:598']={animate:{rotate:[0,3,-3,3,0]},transition:wobble};
export default function FigmaMotion(props){
  const reduce=useReducedMotion();const track=tracks[props['data-node-id']];
  return <motion.div {...props} {...(!reduce ? track : {})}/>;
}


import StackIcon from './StackIcon'
import { SiCss3, SiGit, SiHtml5, SiJavascript, SiNextdotjs, SiNodedotjs, SiRedux, SiTailwindcss } from 'react-icons/si'
import { TbBrandReactNative, TbBrandReact } from 'react-icons/tb'
import './StackIcon.css'
import { useState } from 'react'

export default function StackIcons() {



  return (
    <div>
      <StackIcon color='#f7df1e'>
        <SiJavascript className="stackicon" />
      </StackIcon>

      <StackIcon color='#00d8ff'>
        <TbBrandReact className="stackicon" />
      </StackIcon>
      <StackIcon color='#00d8ff'>
        <div className='stacktext'>
          <TbBrandReactNative className='stackicon ' />
          <p className='text'>
            Native
          </p>
        </div>
      </StackIcon>
      <StackIcon color='#141414'>
        <SiNextdotjs className="stackicon" />
      </StackIcon>

      <StackIcon color='#5C9F06'>
        <SiNodedotjs className="stackicon" />
      </StackIcon>
      <StackIcon color='#D84924'>
        <SiHtml5 className="stackicon" />
      </StackIcon>
      <StackIcon color='#2449D8'>
        <SiCss3 className="stackicon" />
      </StackIcon>
      <StackIcon color='#35B3EB'>
        <SiTailwindcss className="stackicon" />
      </StackIcon>

      <StackIcon color='#f14e32'>
        <SiGit className="stackicon" />
      </StackIcon>
      <StackIcon color='#00d8ff'>
        <SiRedux className="stackicon" />
      </StackIcon>
    </div >
  )
}

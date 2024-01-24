"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () =>
{
  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-[90%] max-h-[90%]' style={{ overflowY: 'auto' }}>
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </div>
  )
}

export default Page
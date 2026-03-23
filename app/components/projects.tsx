import { ul } from 'framer-motion/client';
import Link from 'next/link';
import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { DiGithub } from 'react-icons/di';

type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
};

const Projects
    = () => {
        return (
            <div className='h-screen w-full flex flex-col '>
                <h1 className='text-5xl w-full text-center'>Projects</h1>
                <div
                    className='flex w-full flex-1 items-center justify-center'
                >
                    <ProjectsList />
                </div>
            </div>
        )
    }

export default Projects

const ProjectsList = () => {
    return <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <ProjectCard title='Quxiote' description='A game engine' technologies={['C++', 'OpenGL', 'ImGui']} />
        <ProjectCard title='Peach Finance' description='An android application to manage finance' technologies={['Dart', 'Flutter', 'Firebase']} />
        <ProjectCard title='Contract Box' description='A blockchain based contract storage with AI contract analyzer' technologies={['Solidity', 'Hardhat', 'Ethereum', 'PyTorch', 'FastAPI']} />
    </ul>
}



const ProjectCard = ({ title, description, technologies }: ProjectCardProps) => {
    return <div
        className='p-4 border border-gray-300 rounded-xl'
    >
        <div className='flex justify-between'>
            <h1 className='text-xl font-medium'>{title}</h1>
            <a><BsGithub size={18}/></a>

        </div>
        <p className='mb-4 line-clamp-2'>{description}</p>
        <ul
            className='flex flex-wrap gap-2'
        >
            {
                technologies.map((tech, index) => <li
                    className='px-4 py-1 max-w-50 rounded-full border border-gray-400  text-sm'
                    key={index}
                >
                    {tech}
                </li>)
            }
        </ul>
    </div>;
};
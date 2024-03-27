import React from 'react'
import { AspectRatio } from './ui/aspect-ratio'
import { Icon } from '@iconify/react/dist/iconify.js'

interface RoundAnimationCardProps {
    // Add your prop types here
    icon?:string
    title:string
    description:string
    imageUrl:string
    classes?:string
    animId?:string
}

const RoundAnimationCard: React.FC<RoundAnimationCardProps> = ({ icon,title,description,imageUrl,classes,animId }) => {
    return (
        <div className={`w-fit min-h-fit flex ${classes}`} id={animId}>
            <div className='relative flex flex-row h-56 rounded-2xl outline w-96' style={{filter:"blur(2px)", backgroundImage: `url("${imageUrl}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <h2 className='text-white absolute font-psemibold text-xl px-6 py-4 text-justify ms-2'>
                <span className="mx-6"><Icon icon={icon ? icon : "mdi:star-four-points-outline"} className='absolute text-white' width={20} height={20}></Icon>
            <Icon icon="mdi:star-four-points-outline" className='absolute text-white' width={20} height={20}></Icon>
                    {title}</span><br /><span className='text-lg font-pregular'>{description}</span></h2>
        </div>
    )
}

export default RoundAnimationCard
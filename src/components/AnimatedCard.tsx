import Lottie from 'lottie-react'
import { Icon } from '@iconify/react/dist/iconify.js'

type Feature = {
    title: string
    description: string
}

interface AnimatedCardProps {
    // Add your prop types here
    title: string
    description: string
    features: Feature[]
    lottieSource: unknown
    id: number
}

const colors = ["glass-blue","glass-teal","glass-violet","glass-lblue"];

const AnimatedCard: React.FC<AnimatedCardProps> = ({ title, description, features, lottieSource, id}) => {
    return (
        <div className={`font-pbold text-white bg-red-200 rounded-xl glass glass-blue absolute top-0 left-0 w-[70rem] h-[30rem] ${id == 0 ? `${colors[id]}` : `${colors[id]} boxa`}`}>
            <div className="flex flex-row h-full w-full">
                <div className='p-8 basis-1/2 min-h-full'>
                    {/* <img src={socialSharingSvg} alt="Share your profile with your friends" className='w-52 h-52 opacity-100 absolute z-10 flex justify-self-center'/> */}
                    <div className="font-pbold text-3xl min-w-full bg-inherit pb-2">
                        {title}
                    </div>
                    <div className="font-pregular text-sm">
                        {description}
                    </div>
                    <div className="glass mt-8 me-8 min-h-80 ">
                        <ul className='p-4 grid gap-y-1'>
                            {
                                features.map((feature: Feature) => (
                                    <li className="font-pregular text flex flex-row"><div className="flex"><Icon icon="mdi:check-outline" width={25} height={25} className="me-2 inline-flex items-center h-full"></Icon></div><div className="flex flex-col"><p className='text-md font-psemibold'>{feature.title}</p><p className='text-xs'>{feature.description}</p></div></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex basis-1/2 rotate-12">
                    <Lottie animationData={lottieSource} autoPlay loop={true} />
                </div>
            </div>
        </div>
    )
}

export default AnimatedCard
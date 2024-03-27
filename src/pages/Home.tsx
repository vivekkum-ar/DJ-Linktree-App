import { Button } from '@/components/ui/button';
// import { IonButton, IonAlert } from '@ionic/react';
import { useEffect, useLayoutEffect, useState } from 'react'
import { IDetectedBarcode, outline, Scanner } from '@yudiel/react-qr-scanner';
// import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Jumbotron from '@/components/Jumbotron';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'animate.css';
// import socialSharingSvg from "@/assets/social-sharing.svg"
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import anime from 'animejs/lib/anime.es.js';
import webIcons from "@/assets/lottie/VUaU1Z4EFW.json"
import testAnimation from "@/assets/lottie/Animation - 1736418970643.json"
import sharingHeart from "@/assets/lottie/Animation - 1736419815712.json"
import managementAnim from "@/assets/lottie/Animation - 1736419664466.json"
import AnimatedCard from '@/components/AnimatedCard';
import { setTimeout } from 'timers/promises';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import RoundAnimationCard from '@/components/RoundAnimationCard';
// import { WebConnect } from '@/assets/lottie/VUaU1Z4EFW.lottie';

interface HomeProps {
  // Add your prop types here
  // theme: string;
  // updateTheme: Function;
}

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home: React.FC<HomeProps> = ({ }) => {

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    window.setTimeout(() => {
      setCount(prev => prev >= 2 ? 0 : prev+1);
    }, 1500);
  },[count])

  useGSAP(() => {
    // var tl = anime.timeline({
    //   easing: 'easeOutExpo',
    //   duration: 750,
    //   autoplay:false
    // });
    var tl = anime.timeline({
      easing: 'easeOutSine',
      duration: 750,
      autoplay:false
    });
    tl.add({
      targets:"#img1",
      translateX:5,
      translateY:-250
    })
    tl.add({
      targets:"#img8",
      translateX:430,
      translateY:-250
    })
    tl.add({
      targets:"#img7",
      translateX:430,
      translateY:30
    })
    tl.add({
      targets:"#img6",
      translateX:430,
      translateY:310
    })
    tl.add({
      targets:"#img5",
      translateX:5,
      translateY:310
    })
    tl.add({
      targets:"#img4",
      translateX:-420,
      translateY:310
    })
    tl.add({
      targets:"#img3",
      translateX:-420,
      translateY:30
    })
    tl.add({
      targets:"#img2",
      translateX:-420,
      translateY:-250
    })
    tl.add({
      targets:"#img0",
      scale:1.5,
    })
    tl.add({
      targets:['#img1','#img2','#img3','#img4','#img5','#img6','#img7','#img8'],
      rotate:() => anime.random(-10,10),
    })
   
    gsap.from(".round-card-target", {
      scrollTrigger: {
        trigger: ".round-card-trigger",
        start: "top top",  // [trigger] [scroller] positions
        end: "bottom+=200% center-=20%", // [trigger] [scroller] positions
        // or relative amount: "+=500"
        scrub: -1000, // or time (in seconds) to catch up
        // pin: true, // or selector or element to pin

        markers: true, // only during development!
        onUpdate:(scroll:any) => {
          console.log("progress: ",scroll.progress,"tl.progress: ",(scroll.progress * 100));
          tl.seek(tl.duration * scroll.progress);
        }
      },
      // x: "110%",
      // stagger: {
      //   amount: 1,
      //   from: "start"
      // },
    }); // <-- automatically reverted
  },
  // { scope: container }
) // <-- scope is for selector text (optional)

  const customTracker = (detectedCodes: IDetectedBarcode[], ctx: CanvasRenderingContext2D): void => {
    // Clear the canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // Use the 'outline' helper to draw bounding boxes
    outline(detectedCodes, ctx);
    // Draw custom information
    detectedCodes.forEach((code) => {
      const { boundingBox, rawValue } = code;

      // Draw raw value near the bounding box
      ctx.font = "16px Arial";
      ctx.fillStyle = "red";
      if (boundingBox) {
        ctx.fillText(
          rawValue,
          boundingBox.x + boundingBox.width / 2,
          boundingBox.y - 10
        );
      }
    });
  };
  const [pause, setPause] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <Jumbotron />
      {/* <div className="w-full px-4 md:px-16 py-2 md:py-8 dark:bg-zinc-950 relative">
        <div className="outline-1 outline outline-red-500 relative h-[30rem] box-container" ref={container}>
          <AnimatedCard id={0} title='Customizable QR Codes' description='Unify your digital presence with a single, scannable QR code.'
            features={[
              {
                title: "Personalized Designs",
                description: "Match colors and patterns to your brand.",
              },
              {
                title: "Add Logos",
                description: "Include your logo for a professional touch.",
              },
              {
                title: "Scalable",
                description: "Resize for any platform or material.",
              },
              {
                title: "Dynamic Links",
                description: "Update content without changing the code.",
              },
              {
                title: "Attractive",
                description: "Create QR codes that stand out.",
              },
              {
                title: "Reliable Scanning",
                description: "Ensure codes work seamlessly everywhere.",
              },
            ]} lottieSource={webIcons}>
          </AnimatedCard>
          <AnimatedCard id={1} title='Tested For Scalability' description='Designed to handle growing traffic and increased demand effortlessly, ensuring reliable performance at any scale.' features={
            [
              {
                title: "Handles High Traffic",
                description: "Tested to support large volumes of scans without delays.",
              },
              {
                title: "Cross-Platform Performance",
                description: "Optimized for seamless use on all major platforms.",
              },
              {
                title: "Responsive Design",
                description: "Works flawlessly on devices of all sizes and resolutions.",
              },
              {
                title: "Future-Ready",
                description: "Designed to scale as your audience or business grows.",
              },
              {
                title: "Global Accessibility",
                description: "Ensures reliable performance across diverse regions.",
              },
            ]
          } lottieSource={testAnimation} rotateLottieByDegree={360}></AnimatedCard>
          <AnimatedCard id={2} title='Centralized Link Management' description=''
            features={
              [
                {
                  title: "Single Dashboard",
                  description: "Manage all your links from one convenient place.",
                },
                {
                  title: "Real-Time Updates",
                  description: "Make instant changes without generating a new QR code.",
                },
                {
                  title: "Analytics Insights",
                  description: "Track clicks and engagement for each link.",
                },
                {
                  title: "Secure Links",
                  description: "Protect your links with advanced encryption and access controls.",
                },
                {
                  title: "Custom Short Links",
                  description: "Create branded short links for better recognition.",
                },
              ]
            } lottieSource={managementAnim}>
          </AnimatedCard>
          <AnimatedCard id={3} title='Seamless Sharing' description='' features={
            [
              {
                title: "Quick Access",
                description: "Share your QR code in seconds across platforms.",
              },
              {
                title: "Universal Compatibility",
                description: "Works seamlessly on all devices and browsers.",
              },
              {
                title: "Social Media Integration",
                description: "Easily share links on popular social media platforms.",
              },
              {
                title: "Offline Sharing",
                description: "Download QR codes for sharing without the internet.",
              },
              {
                title: "Customizable Sharing Options",
                description: "Tailor sharing settings to match your audience.",
              },
            ]
          } lottieSource={sharingHeart}></AnimatedCard>
        </div>
      </div>  */}
 <div className="font-pregular text-center w-screen pt-12 pb-4 ">
        <h1 className="mb-4 text-3xl font-semibold tracking-tight round-card-trigger leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Add your links to your&nbsp; 
          <div className='inline-flex min-w-[5em]'>
        <p className={`${count == 0 ? " animate__fast animate__fadeInDown" : " animate__fast animate__fadeOutDown hidden"} animate__animated font-mbold inline-flex pb-3 bg-gradient-to-br from-violet-700 to-fuchsia-700 bg-clip-text text-transparent`}>Instagram </p>
    <p className={`${count == 1 ? " animate__fast animate__fadeInDown" : " animate__fast animate__fadeOutDown hidden"} animate__animated font-mbold inline-flex pb-3 bg-gradient-to-br from-blue-700 to-teal-900 bg-clip-text text-transparent`}>Facebook </p>
    <p className={`${count == 2 ? " animate__fast animate__fadeInDown" : " animate__fast animate__fadeOutDown hidden"} animate__animated font-mbold inline-flex pb-3 bg-gradient-to-br from-gray-700 via-gray-200 to-gray-500 bg-clip-text text-transparent`}>Twitter </p>
          </div>
          <br/> and other bio sections
          </h1>
          <div className="relative w-full p-12 flex flex-row items-center justify-center round-card-target outline h-[130vh]">
      <RoundAnimationCard classes='absolute' animId={'img0'} title={'Lorem Ipsum.'} description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente commodi atque ipsum provident fuga, ratione reiciendis fugit tempore nostrum tempora.'} imageUrl={'./images/1.jpg'}></RoundAnimationCard>
      <RoundAnimationCard classes='absolute' animId={'img1'} title={'Lorem Ipsum.'} description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente commodi atque ipsum provident fuga, ratione reiciendis fugit tempore nostrum tempora.'} imageUrl={'./images/2.jpg'}></RoundAnimationCard>
      <RoundAnimationCard classes='absolute' animId={'img2'} title={'Lorem Ipsum.'} description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente commodi atque ipsum provident fuga, ratione reiciendis fugit tempore nostrum tempora.'} imageUrl={'./images/3.jpg'}></RoundAnimationCard>
      <RoundAnimationCard classes='absolute' animId={'img3'} title={'Lorem Ipsum.'} description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente commodi atque ipsum provident fuga, ratione reiciendis fugit tempore nostrum tempora.'} imageUrl={'./images/4.jpg'}></RoundAnimationCard>
      <RoundAnimationCard classes='absolute' animId={'img4'} title={'Lorem Ipsum.'} description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente commodi atque ipsum provident fuga, ratione reiciendis fugit tempore nostrum tempora.'} imageUrl={'./images/5.jpg'}></RoundAnimationCard>
      <RoundAnimationCard classes='absolute' animId={'img5'} title={'Lorem Ipsum.'} description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente commodi atque ipsum provident fuga, ratione reiciendis fugit tempore nostrum tempora.'} imageUrl={'./images/6.jpg'}></RoundAnimationCard>
      <RoundAnimationCard classes='absolute' animId={'img6'} title={'Lorem Ipsum.'} description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente commodi atque ipsum provident fuga, ratione reiciendis fugit tempore nostrum tempora.'} imageUrl={'./images/7.jpg'}></RoundAnimationCard>
      <RoundAnimationCard classes='absolute' animId={'img7'} title={'Lorem Ipsum.'} description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente commodi atque ipsum provident fuga, ratione reiciendis fugit tempore nostrum tempora.'} imageUrl={'./images/8.jpg'}></RoundAnimationCard>
      <RoundAnimationCard classes='absolute' animId={'img8'} title={'Lorem Ipsum.'} description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente commodi atque ipsum provident fuga, ratione reiciendis fugit tempore nostrum tempora.'} imageUrl={'./images/9.jpg'}></RoundAnimationCard>
      </div>
      </div>
      
 {/* <div className="relative w-full p-12 flex flex-row items-center justify-items-center h-auto round-card-target">
  <div style={{backgroundImage:"url('./images/ph.jpg')", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className='w-[25%] h-[44] img1'>111111</div>
  <AspectRatio ratio={16 / 9} className='relative flex flex-row items-center justify-center'>
    <img src = "./images/9.jpg" alt='img0' id="img0" className="rounded-2xl absolute object-cover h-64"/>
    <img src = "./images/1.jpg" alt='img1' id="img1" className="rounded-2xl absolute object-cover h-64"/>
    <img src = "./images/2.jpg" alt='img2' id="img2" className="rounded-2xl absolute object-cover h-64"/>
    <img src = "./images/3.jpg" alt='img3' id="img3" className="rounded-2xl absolute object-cover h-64"/>
    <img src = "./images/10.jpg" alt='img4' id="img4" className="rounded-2xl absolute object-cover h-64"/>
    <img src = "./images/5.jpg" alt='img5' id="img5" className="rounded-2xl absolute object-cover h-64"/>
    <img src = "./images/6.jpg" alt='img6' id="img6" className="rounded-2xl absolute object-cover h-64"/>
    <img src = "./images/7.jpg" alt='img7' id="img7" className="rounded-2xl absolute object-cover h-64"/>
    <img src = "./images/8.jpg" alt='img8' id="img8" className="rounded-2xl absolute object-cover h-64"/>
  </AspectRatio>
 </div> */}
      </div>

  )
}
export default Home
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
    var tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750,
      autoplay:false
    });
    tl.add({
      targets: ".demo",
      // translateX: 200,
      // translateY: 200,
      duration: function() { return anime.random(2500, 3000); },
      rotate: 120,
      borderRadius: function() { return ['20%', anime.random(10, 15) + '%']; },
      delay: anime.stagger(100),
      direction: 'normal',
      width: "40rem",
      height: "40rem"
    })
    tl.add({
      targets: ".img1",
      // translateX: 200,
      // translateY: 200,
      // duration: function() { return anime.random(2500, 3000); },
      // rotate:function() { return anime.random(3000, 3000); },
      borderRadius: 20,
      direction: 'normal',
      delay: anime.stagger(100),
      // width: "40rem",
      // height: "40rem"
    },"0")
    tl.add({
      targets: ".demo2",
      // translateX: 200,
      // translateY: 200,
      duration: function() { return anime.random(2500, 3000); },
      rotate:120-45,
      direction: 'normal',
      width: "40rem",
      height: "40rem"
    },0)
    // nonchalantly
    tl.add({
      targets:[".img5",".img6",".img7",".img8"],
      duration: 2000,
      width: "+=15rem",
      height: "+=5rem",
      rotate: -75,
    },1500)
    tl.add({
      targets:[".img5"],
      duration: 1000,
      scale:"0.75",
      translateX:"-=500",
      translateY:"-15",
      borderRadius:"20",
    },3500)
    tl.add({
      targets:[".img6"],
      duration: 1000,
      scale:"0.75",
      translateX:"-=880",
      translateY:"90",
      borderRadius:"20",
    },3500)
    tl.add({
      targets:[".img7"],
      duration: 1000,
      scale:"0.75",
      translateX:"-=300",
      translateY:"250",
      borderRadius:"20",
    },3500)
    tl.add({
      targets:[".img8"],
      duration: 1000,
      scale:"0.75",
      translateX:"-=200",
      translateY:"35",
      borderRadius:"20",
    },3500)
    tl.add({
      targets:[".img1",".img2",".img3",".img4"],
      duration: 2000,
      width: "+=15rem",
      height: "+=5rem",
      rotate: 240
    },1500)
    tl.add({
      targets:[".img1"],
      duration: 1000,
      scale:"0.75",
      translateX:"30",
      translateY:"-5",
      borderRadius:"20",
      // rotate:120
    },3500)
    tl.add({
      targets:[".img2"],
      duration: 1000,
      scale:"0.75",
      translateX:"405",
      translateY:"-425",
      borderRadius:"20"
    },3500)
    tl.add({
      targets:[".img3"],
      duration: 1000,
      scale:"0.75",
      translateX:"935",
      translateY:"205",
      borderRadius:"20"
    },3500)
    tl.add({
      targets:[".img4"],
      duration: 1000,
      scale:"0.75",
      translateX:"825",
      translateY:"105",
      borderRadius:"20"
    },3500)

    // gsap.from(".boxa", {
    //   scrollTrigger: {
    //     trigger: ".box-container",
    //     start: "top top+=10%",  // [trigger] [scroller] positions
    //     end: "bottom+=200% 80%", // [trigger] [scroller] positions
    //     // or relative amount: "+=500"
    //     scrub: true, // or time (in seconds) to catch up
    //     pin: true, // or selector or element to pin
    //     // markers: true, // only during development!
    //   },
    //   x: "110%",
    //   stagger: {
    //     amount: 1,
    //     from: "start"
    //   },
    // }); // <-- automatically reverted
    gsap.from(".boxb", {
      scrollTrigger: {
        trigger: ".boxb",
        start: "top center+=10%",  // [trigger] [scroller] positions
        end: "bottom+=200% 80%", // [trigger] [scroller] positions
        // or relative amount: "+=500"
        scrub: true, // or time (in seconds) to catch up
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
 <div className="font-pregular text-center w-screen pt-12 pb-4">
        <h1 className="mb-4 text-3xl font-semibold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Add your links to your&nbsp; 
          <div className='inline-flex min-w-[5em]'>
        <p className={`${count == 0 ? " animate__fast animate__fadeInDown" : " animate__fast animate__fadeOutDown hidden"} animate__animated font-mbold inline-flex pb-3 bg-gradient-to-br from-violet-700 to-fuchsia-700 bg-clip-text text-transparent`}>Instagram </p>
    <p className={`${count == 1 ? " animate__fast animate__fadeInDown" : " animate__fast animate__fadeOutDown hidden"} animate__animated font-mbold inline-flex pb-3 bg-gradient-to-br from-blue-700 to-teal-900 bg-clip-text text-transparent`}>Facebook </p>
    <p className={`${count == 2 ? " animate__fast animate__fadeInDown" : " animate__fast animate__fadeOutDown hidden"} animate__animated font-mbold inline-flex pb-3 bg-gradient-to-br from-gray-700 via-gray-200 to-gray-500 bg-clip-text text-transparent`}>Twitter </p>
          </div>
          <br/> and other bio sections
          </h1>
      </div>
 <div className="relative w-full px-12 flex justify-center h-auto boxb">

        <div className="grid grid-rows-3 grid-cols-3 w-40 h-auto demo grid-flow-col gap-12" >
  <div style={{backgroundImage:"url('./images/ph.jpg')", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className='w-full h-auto justify-self-center row-start-2 img1'>111111</div>
  <div style={{backgroundImage:"url('./images/ph.jpg')", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className='w-full h-auto justify-self-center row-start-1 img2'>222222</div>
  <div style={{backgroundImage:"url('./images/ph.jpg')", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className='w-full h-auto justify-self-center row-start-3 img3'>333333</div>
  <div style={{backgroundImage:"url('./images/ph.jpg')", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className='w-full h-auto justify-self-center row-start-2 img4'>444444</div>
</div>
        <div className="grid grid-rows-3 grid-cols-3 w-40 h-auto demo2 grid-flow-col gap-12 rotate-45 top-0 absolute">
  <div style={{backgroundImage:"url('./images/ph.jpg')", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className='w-full h-auto justify-self-center row-start-2 img5'>555555</div>
  <div style={{backgroundImage:"url('./images/ph.jpg')", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className='w-full h-auto justify-self-center row-start-1 img6'>666666</div>
  <div style={{backgroundImage:"url('./images/ph.jpg')", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className='w-full h-auto justify-self-center row-start-3 img7'>777777</div>
  <div style={{backgroundImage:"url('./images/ph.jpg')", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className='w-full h-auto justify-self-center row-start-2 img8'>888888</div>
</div>
 </div>
      </div>

  )
}
export default Home
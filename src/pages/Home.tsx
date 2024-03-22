import { Button } from '@/components/ui/button';
// import { IonButton, IonAlert } from '@ionic/react';
import { useState } from 'react'
import { IDetectedBarcode, outline, Scanner } from '@yudiel/react-qr-scanner';
// import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Jumbotron from '@/components/Jumbotron';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import socialSharingSvg from "@/assets/social-sharing.svg"
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import webIcons from "@/assets/lottie/VUaU1Z4EFW.json"
import AnimatedCard from '@/components/AnimatedCard';
// import { WebConnect } from '@/assets/lottie/VUaU1Z4EFW.lottie';

interface HomeProps {
  // Add your prop types here
  // theme: string;
  // updateTheme: Function;
}

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home: React.FC<HomeProps> = ({ }) => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      // gsap code here...
      gsap.from(".boxa", {
        scrollTrigger: {
          trigger: ".box-container",
          start: "top top+=10%",  // [trigger] [scroller] positions
          end: "bottom+=200% 80%", // [trigger] [scroller] positions
          // or relative amount: "+=500"
          scrub: true, // or time (in seconds) to catch up
          pin: true, // or selector or element to pin
          markers: true, // only during development!
        },
        x: "110%",
        stagger: {
          amount: 1,
          from: "start"
        },
      }); // <-- automatically reverted
    },
    // { scope: container }
  ); // <-- scope is for selector text (optional)

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
      <div className="w-full px-4 md:px-16 py-2 md:py-8 dark:bg-zinc-950 relative">
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
          } lottieSource={webIcons}></AnimatedCard>
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
            } lottieSource={webIcons}>
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
          } lottieSource={webIcons}></AnimatedCard>
        </div>
      </div>

      <div className="w-80 p-0 m-0 -z-10">
        <Scanner styles={{
          container: {
            width: '100%',
            height: '100%',
            position: 'relative',
            // padding:"30px"
          },
          video: {
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'block',
            overflow: 'hidden'
          },
        }} allowMultiple={true} paused={pause} components={{ finder: true, onOff: true, torch: true, tracker: customTracker, zoom: true, }}
          //  children={<Button variant={"destructive"} className='absolute top-0 ' onClick={() => setPause(!pause)}>Lorem ipsum dolor sit amet.</Button>}
          scanDelay={1000} onScan={(result) => console.log(result[0].rawValue)} />
      </div>
      <Button variant="default" onClick={() => console.log("Primary")}>
        Primary
      </Button>
    </div>
  )
}
export default Home
import { Button } from '@/components/ui/button';
// import { IonButton, IonAlert } from '@ionic/react';
import React, { useState } from 'react'
import { IDetectedBarcode, outline, Scanner } from '@yudiel/react-qr-scanner';
// import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Jumbotron from '@/components/Jumbotron';
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
          amount:1,
          from:"start"
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
        <div className="outline-1 outline outline-red-500 relative h-[30rem] box-container">
          <div className="font-pbold text-white bg-red-200 rounded-xl glass absolute top-0 left-0 w-[70rem] h-[30rem]" ref={container}>
            {/* First content */}0
          </div>
          <div className="font-pbold text-white bg-red-200 rounded-xl glass boxa absolute top-0 left-0 w-[70rem] h-[30rem]" ref={container}>
            {/* First content */}1
          </div>
          <div className="font-pbold text-white bg-red-200 rounded-xl glass boxa absolute top-0 left-0 w-[70rem] h-[30rem]" ref={container}>
            {/* First content */}2
          </div>
          <div className="font-pbold text-white bg-blue-200 rounded-xl glass boxa absolute top-0 left-0 w-[70rem] h-[30rem]">
            {/* Second content */}3
          </div>
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
      {/* <IonButton id="present-alert">Click Me</IonButton>
      <IonAlert
        isOpen={isOpen}
        trigger="present-alert"
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={['Ok']}
        onDidDismiss={() => setIsOpen(false)}
      ></IonAlert> */}
      <Button variant="default" onClick={() => console.log("Primary")}>
        Primary
      </Button>
    </div>
  )
}
export default Home
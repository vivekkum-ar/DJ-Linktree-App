import { Button } from '@/components/ui/button';
import { IonButton, IonAlert } from '@ionic/react';
import React, { useState } from 'react'
import { IDetectedBarcode, outline, Scanner } from '@yudiel/react-qr-scanner';
interface HomeProps {
  // Add your prop types here
  // theme: string;
  // updateTheme: Function;
}

const Home: React.FC<HomeProps> = ({ }) => {
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
       }} allowMultiple={true} paused={pause} components={{finder:true,onOff:true,torch:true,tracker:customTracker,zoom:true,}} 
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
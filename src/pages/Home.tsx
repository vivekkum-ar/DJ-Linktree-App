import { Button } from '@/components/ui/button';
import { IonButton, IonAlert } from '@ionic/react';
import React, { useState } from 'react'

interface HomeProps {
  // Add your prop types here
  // theme: string;
  // updateTheme: Function;
}

const Home: React.FC<HomeProps> = ({ }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-full h-screen'>
      <IonButton id="present-alert">Click Me</IonButton>
      <IonAlert
        isOpen={isOpen}
        trigger="present-alert"
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={['Ok']}
        onDidDismiss={() => setIsOpen(false)}
      ></IonAlert>
      <Button variant="default" onClick={() => console.log("Primary")}>
        Primary
      </Button>
    </div>
  )
}

export default Home
import { Button } from '@/components/ui/button';
// import { IonButton, IonAlert } from '@ionic/react';
import { useEffect, useState } from 'react'
import { IDetectedBarcode, outline } from '@yudiel/react-qr-scanner';
// import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Jumbotron from '@/components/Jumbotron';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'animate.css';
import webIcons from "@/assets/lottie/VUaU1Z4EFW.json"
import testAnimation from "@/assets/lottie/Animation - 1736418970643.json"
import sharingHeart from "@/assets/lottie/Animation - 1736419815712.json"
import managementAnim from "@/assets/lottie/Animation - 1736419664466.json"
import AnimatedCard from '@/components/AnimatedCard';
import RoundAnimationCard from '@/components/RoundAnimationCard';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
// import { WebConnect } from '@/assets/lottie/VUaU1Z4EFW.lottie';
import { Icon } from '@iconify/react/dist/iconify.js';
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
// import { toast } from '@/hooks/use-toast';
import anime from 'animejs';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
// import { SignedIn, SignedOut } from '@clerk/clerk-react';
interface HomeProps {
  // Add your prop types here
  // theme: string;
  // updateTheme: Function;
}

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home: React.FC<HomeProps> = ({ }) => {
  // const [signUpmail, setSignUpmail] = useRecoilState(signUpEmail);
  const { isSignedIn } = useUser()

  const navigate = useNavigate();
  useEffect(() => {
    if (isSignedIn) {
      navigate('/user/dashboard');
    }
  },[isSignedIn]);

  const cardsData = [
    {
      title: "Connect on Social Media",
      description: "Add your links to Twitter, Facebook, and Instagram in one place for easy access."
    },
    {
      title: "Your Personalized QR Code",
      description: "Generate a unique QR code to instantly share your social profiles and contact info."
    },
    {
      title: "Seamless Profile Sharing",
      description: "Allow others to discover all your important links with just one scan."
    },
    {
      title: "Collate and Curate",
      description: "Create a personalized collection of links, bios, and profiles with ease."
    },
    {
      title: "Boost Your Visibility",
      description: "Get noticed and make sharing your digital identity hassle-free."
    },
    {
      title: "Dynamic and Stylish",
      description: "Showcase your online presence in a visually appealing and dynamic format."
    },
    {
      title: "Share with One Tap",
      description: "Simplify how you share your bio and social links with one powerful card."
    },
    {
      title: "Your Digital Footprint",
      description: "Combine your professional and personal links in a single, sleek profile."
    },
    {
      title: "Tailored for Everyone",
      description: "Whether you're a creator, business, or influencer, this app is for you."
    }
  ];
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    window.setTimeout(() => {
      setCount(prev => prev >= 2 ? 0 : prev + 1);
    }, 1500);
  }, [count])

  const testimonialsData = [
    {
      name: "John Doe",
      text: "This app made sharing my social profiles so much easier. Highly recommended!",
      number: 5,
      url: "./images/user1.jpg"
    },
    {
      name: "Jane Smith",
      text: "I love how professional my QR code looks. It’s a game-changer for my business.",
      number: 4,
      url: "./images/user2.jpg"
    },
    {
      name: "Alex Johnson",
      text: "A must-have app for creators and influencers. Simplifies everything!",
      number: 3,
      url: "./images/user3.jpg"
    },
    {
      name: "Emily Davis",
      text: "The dynamic design and simplicity make it stand out from other apps.",
      number: 3.7,
      url: "./images/user4.jpg"
    },
    {
      name: "Michael Brown",
      text: "Having all my links in one place has increased my online engagement significantly.",
      number: 4,
      url: "./images/user5.jpg"
    },
    {
      name: "Sophia Wilson",
      text: "I can’t believe how easy it is to share my entire profile with a single QR code.",
      number: 5,
      url: "./images/user6.jpg"
    },
    {
      name: "Chris Taylor",
      text: "This app saves so much time and makes sharing effortless. Highly intuitive!",
      number: 5,
      url: "./images/user7.jpg"
    },
    {
      name: "Jessica Martinez",
      text: "The perfect tool for professionals to boost their digital presence effectively.",
      number: 5,
      url: "./images/user8.jpg"
    },
    {
      name: "David Lee",
      text: "The customization options are fantastic. Love the polished feel it provides!",
      number: 4,
      url: "./images/user9.jpg"
    }
  ];

  useGSAP(() => {
    // var tl = anime.timeline({
    //   easing: 'easeOutExpo',
    //   duration: 750,
    //   autoplay:false
    // });
    var tl = anime.timeline({
      easing: 'easeOutSine',
      duration: 750,
      autoplay: false
    });
    tl.add({
      targets: "#img1",
      translateX: 5,
      translateY: -250
    })
    tl.add({
      targets: "#img8",
      translateX: 430,
      translateY: -250
    })
    tl.add({
      targets: "#img7",
      translateX: 430,
      translateY: 30
    })
    tl.add({
      targets: "#img6",
      translateX: 430,
      translateY: 310
    })
    tl.add({
      targets: "#img5",
      translateX: 5,
      translateY: 310
    })
    tl.add({
      targets: "#img4",
      translateX: -420,
      translateY: 310
    })
    tl.add({
      targets: "#img3",
      translateX: -420,
      translateY: 30
    })
    tl.add({
      targets: "#img2",
      translateX: -420,
      translateY: -250
    })
    tl.add({
      targets: "#img0",
      scale: 1.5,
    })
    tl.add({
      targets: ['#img1', '#img2', '#img3', '#img4', '#img5', '#img6', '#img7', '#img8'],
      rotate: () => anime.random(-10, 10),
    })
    gsap.from(".boxa", {
      scrollTrigger: {
        trigger: ".box-container",
        start: "top top+=10%",  // [trigger] [scroller] positions
        end: "bottom+=200% 80%", // [trigger] [scroller] positions
        // or relative amount: "+=500"
        scrub: true, // or time (in seconds) to catch up
        pin: true, // or selector or element to pin
        // markers: true, // only during development!
      },
      x: "110%",
      stagger: {
        amount: 1,
        from: "start",
      },
    });
    gsap.from(".round-card-target", {
      scrollTrigger: {
        trigger: ".round-card-trigger",
        start: "top top",  // [trigger] [scroller] positions
        end: "bottom+=200% center-=20%", // [trigger] [scroller] positions
        // or relative amount: "+=500"
        scrub: -1000, // or time (in seconds) to catch up
        // pin: true, // or selector or element to pin

        // markers: true, // only during development!
        onUpdate: (scroll: any) => {
          // console.log("progress: ", scroll.pyrogress, "tl.progress: ", (scroll.progress * 100));
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
    customTracker
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
  // const [pause, setPause] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  return (
    // <>
    // <SignedIn>
    //   You are signed in and cannot access this page.
    // </SignedIn>
    // <SignedOut>
    <div className='relative w-full min-h-screen flex flex-col items-center dark:bg-zinc-950'>
      <Jumbotron />
      <div className="w-full px-4 md:px-16 py-2 md:py-8 dark:bg-zinc-950 relative">
         <div className="max-w-screen-xl mx-auto relative h-[30rem] box-container" >
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
          } lottieSource={testAnimation} rotateLottieByDegree={360}>
          </AnimatedCard>
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
      </div>
      {
      /* ---------------------------------------------------------------------------------------------- */
      /*                                         Text animation                                         */
      /* ---------------------------------------------------------------------------------------------- */}
      <div className="font-pregular max-w-screen-xl text-center pt-12 dark:bg-zinc-950 bg-white">
        <h1 className="mb-4 text-3xl font-semibold tracking-tight round-card-trigger leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Add your links to your&nbsp;
          <div className='inline-flex min-w-[5em]'>
            <p className={`${count == 0 ? " animate__fast animate__fadeInDown" : " animate__fast animate__fadeOutDown hidden"} animate__animated font-mbold inline-flex pb-3 bg-gradient-to-br from-violet-700 to-fuchsia-700 bg-clip-text text-transparent`}>Instagram </p>
            <p className={`${count == 1 ? " animate__fast animate__fadeInDown" : " animate__fast animate__fadeOutDown hidden"} animate__animated font-mbold inline-flex pb-3 bg-gradient-to-br from-blue-700 to-teal-900 bg-clip-text text-transparent`}>Facebook </p>
            <p className={`${count == 2 ? " animate__fast animate__fadeInDown" : " animate__fast animate__fadeOutDown hidden"} animate__animated font-mbold inline-flex pb-3 bg-gradient-to-br from-gray-700 via-gray-200 to-gray-500 bg-clip-text text-transparent`}>Twitter </p>
          </div>
          <br /> and other bio sections
        </h1>
        <div className="relative dark:bg-zinc-950 w-full p-12 flex flex-row items-center justify-center round-card-target h-[130vh]">
          {
            cardsData.map((items, index) => {
              return (
                <RoundAnimationCard
                key={index}
                classes={`absolute dark:bg-zinc-950 img${index} ${index == 0 ? "z-10" : "z-0"}`}
                animId={`img${index}`}
                title={items.title}
                  description={items.description}
                  imageUrl={`./images/${index + 1}.jpg`}>
                </RoundAnimationCard>
              )
            })
          }

        </div>
      </div>

      {/* ---------------------------------------------------------------------------------------------- */}
      {/*                                         Testimonials                                         */}
      {/* ---------------------------------------------------------------------------------------------- */}
      <div className="flex flex-row justify-content-center items-center max-w-screen-xl h-auto pt-32 pb-20 bg-white dark:bg-zinc-950">

        <Carousel className="max-w-5xl px-12 dark:bg-zinc-950 ">
          
          <CarouselContent className=' '>
            {
              testimonialsData.map((item, index) => (
                <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                  <div className="p-1">
                    <Card className='border-0'>
                      <CardContent className="flex aspect-square items-center p-0 justify-center bg-transparent dark:bg-zinc-950">
                        {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                        <div className="text-zinc-300 text-sm px-8 font-pmedium rounded-t-2xl border-0 text-justify items-center flex flex-col p-2 w-full h-full bg-zinc-700" style={{ clipPath: "polygon(100% 0, 100% 100%,50% 75%, 0 100%, 0 0)" }}>
                          <span className="text-center bg-gradient-to-tr from-amber-300 to-amber-600 bg-clip-text text-transparent font-bold flex items-center justify-center max-w-[90%] py-2 border-b-2 border-amber-500 mb-2 w-full text-lg">
                            <Icon icon={"basil:user-solid"} className='w-6 h-6 inline-flex font-bold text-amber-500'></Icon>
                            {item.name}
                          </span>
                          {item.text}
                          <div className='flex flex-row mt-4 gap-1s'>
                            {
                              Array.from({ length: Math.floor(item.number) }).map((_, index) => (
                                <Icon key={index} icon={"fa-star"} className='text-amber-500'></Icon>
                              ))
                            }
                            {
                              Array.from({ length: 5 - Math.floor(item.number) }).map((_, index) => (
                                <Icon key={index} icon={"fa-regular:star"} className='text-amber-500'></Icon>
                              ))
                            }
                          </div>
                        </div>
                        <img src="./images/1.jpg" alt="" className='shadow-zinc-800 shadow-md rounded-full bottom-[2.0rem] absolute h-20 w-20 aspect-square' />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))
            }
          </CarouselContent>
          <CarouselPrevious className='' />
          <CarouselNext className='' />
        </Carousel>
      </div>
      <div className="dark:bg-zinc-950 max-w-screen-xl h-full flex flex-row justify-center">
      </div>
      {
        /* ---------------------------------------------------------------------------------------------- */
        /*                                           Pre-footer                                           */
        /* ---------------------------------------------------------------------------------------------- */}
      <div className="dark:bg-zinc-950 max-w-screen-xl h-auto flex flex-col items-center justify-center py-24">
        <div className="my-auto -translate-x-24 mx-auto rounded-2xl max-w-screen-xl h-64 justify-self-start z-10">
          <span className='text-6xl top-8 w-full mx-auto relative font-pbold text-zinc-50 dark:text-zinc-400'>
            Want something more?
          </span><br />
          <span className='text-2xl px-8 font-pregular top-10 relative text-zinc-50 dark:text-zinc-400'>
            Reach out to us!
          </span>
          <Button variant={"outline"} onClick={() => { }} className='relative top-14 left-8 py-6 w-40 flex justify-self-start bg-violet-700 hover:bg-violet-900 outline outline-zinc-500 text-md text-zinc-50 hover:text-zinc-300 dark:text-zinc-200'>More details <Icon icon={"mynaui:chevron-up-solid"} className='scale-125 rotate-90'></Icon></Button>
        </div>
        <div className="opacity-80 dark:opacity-50 flex flex-row bg-gradient-to-r from-gray-900 dark:to-zinc-700 to-slate-600 mx-auto my-auto rounded-2xl w-[75%] absolute h-64 py-2 justify-self-center">
          <div className="w-1/2 absolute right-0 basis-1 bg-cover rounded-2xl h-60 me-2 " style={{ backgroundImage: "url('./images/1.jpg')" }} ></div>
          <div className="w-1/2 absolute left-0 basis-1 bg-cover rounded-2xl h-60 me-2 " style={{ backgroundImage: "url('./images/pattern-footer.png')" }} ></div>
          {/* <div className="w-1/2 absolute right-0 bg-cover rounded-2xl h-60 me-2 " style={{ backgroundImage: "url('./images/1.jpg')" }} ></div> */}
        </div>
      </div>
    { /* ---------------------------------------------------------------------------------------------- */
      /*                                            <Footer/>                                           */
      /* ---------------------------------------------------------------------------------------------- */}
    </div>
    // </SignedOut>
      // </>
  )
}
export default Home
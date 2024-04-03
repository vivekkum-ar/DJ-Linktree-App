import { Button } from '@/components/ui/button';
// import { IonButton, IonAlert } from '@ionic/react';
import { useEffect, useState } from 'react'
import { IDetectedBarcode, outline, Scanner } from '@yudiel/react-qr-scanner';
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
import { useRecoilState } from 'recoil';
import { signUpEmail } from '@/main';
interface HomeProps {
  // Add your prop types here
  // theme: string;
  // updateTheme: Function;
}

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home: React.FC<HomeProps> = ({ }) => {
  const [signUpmail, setSignUpmail] = useRecoilState(signUpEmail);

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

  // useGSAP(() => {
  //   // var tl = anime.timeline({
  //   //   easing: 'easeOutExpo',
  //   //   duration: 750,
  //   //   autoplay:false
  //   // });
  //   var tl = anime.timeline({
  //     easing: 'easeOutSine',
  //     duration: 750,
  //     autoplay: false
  //   });
  //   tl.add({
  //     targets: "#img1",
  //     translateX: 5,
  //     translateY: -250
  //   })
  //   tl.add({
  //     targets: "#img8",
  //     translateX: 430,
  //     translateY: -250
  //   })
  //   tl.add({
  //     targets: "#img7",
  //     translateX: 430,
  //     translateY: 30
  //   })
  //   tl.add({
  //     targets: "#img6",
  //     translateX: 430,
  //     translateY: 310
  //   })
  //   tl.add({
  //     targets: "#img5",
  //     translateX: 5,
  //     translateY: 310
  //   })
  //   tl.add({
  //     targets: "#img4",
  //     translateX: -420,
  //     translateY: 310
  //   })
  //   tl.add({
  //     targets: "#img3",
  //     translateX: -420,
  //     translateY: 30
  //   })
  //   tl.add({
  //     targets: "#img2",
  //     translateX: -420,
  //     translateY: -250
  //   })
  //   tl.add({
  //     targets: "#img0",
  //     scale: 1.5,
  //   })
  //   tl.add({
  //     targets: ['#img1', '#img2', '#img3', '#img4', '#img5', '#img6', '#img7', '#img8'],
  //     rotate: () => anime.random(-10, 10),
  //   })
  //   gsap.from(".boxa", {
  //     scrollTrigger: {
  //       trigger: ".box-container",
  //       start: "top top+=10%",  // [trigger] [scroller] positions
  //       end: "bottom+=200% 80%", // [trigger] [scroller] positions
  //       // or relative amount: "+=500"
  //       scrub: true, // or time (in seconds) to catch up
  //       pin: true, // or selector or element to pin
  //       markers: true, // only during development!
  //     },
  //     x: "110%",
  //     stagger: {
  //       amount: 1,
  //       from: "start",
  //     },
  //   });
  //   gsap.from(".round-card-target", {
  //     scrollTrigger: {
  //       trigger: ".round-card-trigger",
  //       start: "top top",  // [trigger] [scroller] positions
  //       end: "bottom+=200% center-=20%", // [trigger] [scroller] positions
  //       // or relative amount: "+=500"
  //       scrub: -1000, // or time (in seconds) to catch up
  //       // pin: true, // or selector or element to pin

  //       markers: true, // only during development!
  //       onUpdate: (scroll: any) => {
  //         // console.log("progress: ", scroll.pyrogress, "tl.progress: ", (scroll.progress * 100));
  //         tl.seek(tl.duration * scroll.progress);
  //       }
  //     },
  //     // x: "110%",
  //     // stagger: {
  //     //   amount: 1,
  //     //   from: "start"
  //     // },
  //   }); // <-- automatically reverted
  // },
  //   // { scope: container }
  // ) // <-- scope is for selector text (optional)

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
  const [pause, setPause] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative w-full h-full flex flex-col items-center dark:bg-zinc-950'>
      <Jumbotron />
      <div className="w-full px-4 md:px-16 py-2 md:py-8 dark:bg-zinc-950 relative">
        <div className="outline-1 outline outline-red-500 max-w-screen-xl mx-auto relative h-[30rem] box-container" >
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
      </div>
{
      /* ---------------------------------------------------------------------------------------------- */
      /*                                         Text animation                                         */
      /* ---------------------------------------------------------------------------------------------- */}
      <div className="font-pregular text-center w-screen pt-12 dark:bg-zinc-950 bg-white">
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
              console.log(index);
              return (
                <RoundAnimationCard
                  key={index}
                  classes={`absolute darkLbg-zinc-950 img${index} ${index == 0 ? "z-10" : "z-0"}`}
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
      <div className="dark:bg-zinc-950 w-screen h-full flex flex-row justify-center">
        <Carousel className="w-full max-w-5xl px-12 dark:bg-zinc-950">
          <CarouselContent>
            {
              testimonialsData.map((item, index) => (
                <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                  <div className="p-1">
                    <Card className='border-0'>
                      <CardContent className="flex aspect-square items-center p-0 justify-center bg-transparent dark:bg-zinc-950">
                        {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                        <div className="text-zinc-300 text-sm px-8 font-pmedium rounded-t-2xl border-0 text-justify items-center flex flex-col p-2 w-full h-full bg-zinc-700" style={{ clipPath: "polygon(100% 0, 100% 100%,50% 75%, 0 100%, 0 0)" }}>
                          <span className="text-center  bg-gradient-to-tr from-amber-300 to-amber-600 bg-clip-text text-transparent font-bold flex items-center justify-center max-w-[90%] py-2 border-b-2 border-amber-500 mb-2 w-full text-lg">
                            <Icon icon={"basil:user-solid"} className='w-6 h-6 inline-flex font-bold text-amber-500'></Icon>
                            {item.name}
                          </span>
                          {item.text}
                          <div className='flex flex-row mt-4 gap-1s'>
                            {
                              Array.from({ length: Math.floor(item.number) }).map((_, index) => (
                                <Icon icon={"fa-star"} className='text-amber-500'></Icon>
                              ))
                            }
                            {
                              Array.from({ length: 5 - Math.floor(item.number) }).map((_, index) => (
                                <Icon icon={"fa-regular:star"} className='text-amber-500'></Icon>
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
          <CarouselPrevious className='border-0 ' />
          <CarouselNext className='border-0 ' />
        </Carousel>
      </div>
{
      /* ---------------------------------------------------------------------------------------------- */
      /*                                           Pre-footer                                           */
      /* ---------------------------------------------------------------------------------------------- */}
      <div className="dark:bg-zinc-950 w-screen h-auto flex flex-col items-center justify-center py-24">
        <div className="mx-auto my-auto rounded-2xl w-[75%] h-64 px-10 justify-self-center z-10">
          <span className='text-6xl px-8 top-8 max-w-screen-xl mx-auto relative font-pbold text-zinc-50 dark:text-zinc-400'>
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
      {/* <Footer/> */}
      
      <div className="w-screen dark:bg-zinc-950">
      <div className="bg-white max-w-screen-xl mx-auto font-pregular dark:bg-zinc-900">
        <div className="mx-auto w-full">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <div className='flex flex-row items-center justify-start'>
              <h2 className="mb-6 text-md border-b-4 border-gray-400 justify-self-start font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
              </div>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">About</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Careers</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Brand Center</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <div className='flex flex-row items-center justify-start'>
              <h2 className="mb-6 text-md border-b-4 border-gray-400 justify-self-start font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
              </div>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Discord Server</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Twitter</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Facebook</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <div className='flex flex-row items-center justify-start'>
              <h2 className="mb-6 text-md border-b-4 border-gray-400 justify-self-start font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              </div>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Licensing</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
            <div>
              <div className='flex flex-row items-center justify-start'>
              <h2 className="mb-6 text-md border-b-4 border-gray-400 justify-self-start font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
              </div>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">IOS</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Android</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Windows</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">MacOS</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-100 dark:bg-zinc-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2025 <a href="https://DJQR.com/">DJQR™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

  )
}
export default Home
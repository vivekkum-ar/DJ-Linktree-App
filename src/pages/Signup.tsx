import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router-dom"
import { Icon } from "@iconify/react"
// import { auth } from "@/firebase"
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth"
import { useToast } from "@/hooks/use-toast"
import { useContext, useEffect, useRef, useState } from "react"
import { signUpEmail, UserContext } from "@/main"
import { auth, provider } from "@/firebase"
import Lottie from "lottie-react"
import eyeAnimation from "@/assets/lottie/0FKUSvV16M.json"
import eyeAnimationDark from "@/assets/lottie/0FKUSvV16M-dark.json"
import { LottieRefCurrentProps } from "lottie-react";
import { useTheme } from "@/components/theme-provider";
import { useRecoilState } from "recoil"

const Signup = () => {
  const { setUser } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [signUpMail, setSignUpMail] = useRecoilState(signUpEmail);
  

  useEffect(() => {
    lottieRef.current?.stop();
    lottieRef.current?.setSpeed(0.5);
    if(showPassword == true){
      lottieRef.current?.playSegments([0,45],false);
    }
    else{
      lottieRef.current?.goToAndStop(5.7,true);
    }
  }, [showPassword])
    
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  const {theme} = useTheme();

  const navigate = useNavigate();
  const { toast } = useToast();
  const formSchema = z.object({
    username: z.string().max(20, {
      message: "Name should be less than 20 characters.",
    }),
    email: z.string().email({
      message: "Please enter correct Email.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters long.",
    })
  },
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: signUpMail,
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        setUser(user);
        // console.log(values);
        // console.log(user);
        updateProfile(userCredential.user, {
          displayName: values.username, photoURL: ""
        }).then(() => {
          // Profile updated!
          toast({
            title: "Sign-Up Successful.",
            description: `Your account is ready. Please log in to continue.`,
            classes: "border-green-500 border-2",
            duration: 3000,
            direction: "top"
          });
          // ...
        }).catch((error) => {
          // An error occurred
          toast({
            title: `Error ${error.code}`,
            description: error.message,
            classes: "border-red-500 border-2",
            duration: 3000,
            direction: "top"
          });
          // ...
        });
        navigate("/home");
      })
      .catch((error) => {
        toast({
          title: `Error ${error.code}`,
          description: error.message,
          classes: "border-red-500 border-2",
          duration: 3000,
          direction: "top"
        });
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
    // console.log(user);
  }

  const googleProviderSignIn = () => {
    // console.log("first");
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    // The signed-in user info.
    if(token){};
    const user = result.user;
    // console.log("user",user);
    setUser(user);
    // IdP data available using getAdditionalUserInfo(result)
    toast({
      title: "Sign-Up Successful.",
      description: `Your account is ready. Please log in to continue.`,
      classes: "border-green-500 border-2",
      duration: 3000,
      direction: "top"
    });
  }).catch((error) => {
    // Handle Errors here.
    // The email of the user's account used.
    const email = error.customData.email;
    if(email){}
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    if(credential){}
    toast({
      title: `Error ${error.code}`,
      description: error.message,
      classes: "border-red-500 border-2",
      duration: 3000,
      direction: "top"
    });
  });
  }
  function facebookProviderSignIn(): void {
    signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    setUser(user);
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;
    if(accessToken){}
    toast({
      title: "Sign-Up Successful.",
      description: `Your account is ready. Please log in to continue.`,
      classes: "border-green-500 border-2",
      duration: 3000,
      direction: "top"
    });
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    if(credential){}
    toast({
      title: `Error ${error.code}`,
      description: error.message,
      classes: "border-red-500 border-2",
      duration: 3000,
      direction: "top"
    });
  });
  }

  return (
    <div className="w-full flex justify-center p-2 mt-4 dark:text-gray-200 dark:bg-zinc-950 h-screen ">
      <div className="w-2/5 flex flex-col justify-center items-center rounded-s-2xl p-4 border dark:border-zinc-600 border-zinc-200 h-auto">
        <div className="flex flex-col gap-y-1 justify-center items-center ">
          <h1 className="text-2xl font-pbold dark:text-gray-200 ">
            Sign Up
          </h1>
          <h6 className="text-md font-pregular mb-3 text-gray-400">
            Create an account to get started
          </h6>
        </div>
        <div className="flex flex-row gap-2">
        <Icon onClick={() => googleProviderSignIn()} icon="devicon:google" className="h-10 w-10 hover:shadow-lg shadow-black rounded-full border border-1 border-slate-300 p-1"/>
        <Icon onClick={() => document.getElementById("signup-submit")?.click()} icon="dashicons:email-alt" className="h-10 w-10 hover:shadow-lg shadow-black rounded-full border border-1 border-slate-300 p-1"/>
        <Icon onClick={() => facebookProviderSignIn()} icon="logos:facebook" className="h-10 w-10 hover:shadow-lg shadow-black rounded-full border border-1 border-slate-300 p-1"/>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full px-5">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-pmedium">Name</FormLabel>
                  <FormControl>
                    <Input className="font-pregular" placeholder="cool person" {...field} />
                  </FormControl>
                  {/* <FormDescription className="font-pregular">
                  This is your public display name.
                </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-pmedium">Email</FormLabel>
                  <FormControl>
                    <Input className="font-pregular" placeholder="coolperson@example.com" {...field} />
                  </FormControl>
                  {/* <FormDescription className="font-pregular">
                  This is your public display name.
                </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-pmedium">Password</FormLabel>
                  <FormControl>
                  <div className="relative h-fit justify-end flex flex-row">
                    <Input className="font-pregular" placeholder="●●●●●●●●" type={`${showPassword ? "text" : "password"}`} {...field} />
                    <Lottie lottieRef={lottieRef} onClick={() => {setShowPassword(!showPassword);}} className="text-white absolute cursor-pointer top-0 w-10 h-10" animationData={theme == "dark" ? eyeAnimationDark : eyeAnimation} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button id="signup-submit" className="flex w-[75%] justify-self-center font-pmedium" type="submit">Submit<Icon className="text-violet-500 scale-150" icon="majesticons:login-half-circle" width="60px" height="60px" /></Button>
          </form>
        </Form>
        <div className="flex flex-col gap-y-1 justify-center items-center ">
          <h6 className="text-md font-pmedium mb-3 text-gray-400">
            Already have an account? <Link to="/login" className="text-violet-500 font-pmedium underline">Login</Link>
          </h6>
        </div>
      </div> 
      <div className="w-2/5 flex flex-col justify-center items-center rounded-e-2xl p-4 border border-white dark:border-zinc-600 bg-zinc-200 h-auto relative" >
      <h2 className="z-10 font-pbold text-4xl scale-125 bg-clip-text bg-gradient-to-r absolute top-0 from-violet-700 to-fuchsia-600 pt-2 text-transparent justify-center flex flex-row">Welcome {form.getValues("username")?.split(" ")[0]} !</h2>
      <img src="./images/login.svg" alt=""  className="absolute bottom-0 h-fit"/>
      </div>
    </div>
  )
}

export default Signup
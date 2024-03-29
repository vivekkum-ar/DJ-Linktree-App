import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router-dom"
import { Icon } from "@iconify/react/dist/iconify.js"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/firebase"
import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "@/main"
import { toast } from "@/hooks/use-toast"
import Lottie from "lottie-react"
import eyeAnimation from "@/assets/lottie/0FKUSvV16M.json"
import { LottieRefCurrentProps } from "lottie-react";

const Login = () => {
  const {setUser} = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
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

  const navigate = useNavigate();
  const formSchema = z.object({
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
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    signInWithEmailAndPassword(auth,values.email,values.password)
    .then((userCredential) => {
      //Signin in
      const user = userCredential.user;
      setUser(user);
      toast({
        title: "Login Successful.",
        description: `Logged in as ${values.email}`,
        classes:"border-green-500 border-2",
        duration:3000,
        direction:"top"
      });
      navigate("/home");
      // ...
    }).catch((error) => {
      toast({
        title: `Login Failed - Error ${error.code}`,
        description: `${error.message}`,
        classes:"border-red-500 border-2",
        duration:3000,
        direction:"top"
      });
    })
  }
  return (
    <div className="w-full flex justify-center p-2 mt-4 dark:text-gray-200 dark:bg-zinc-950 h-screen ">
      <div className="w-2/5 flex flex-col justify-center items-center rounded-s-2xl p-4 border dark:border-zinc-600 border-zinc-200 h-auto">
        <div className="flex flex-col gap-y-1 justify-center items-center ">
          <h1 className="text-2xl font-pbold dark:text-gray-200 ">
            Login
          </h1>
          <h6 className="text-md font-pregular mb-3 text-gray-400">
            Welcome back! Sign in to your account
          </h6>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full px-5">
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
                    <Lottie lottieRef={lottieRef} onClick={() => {setShowPassword(!showPassword);}} className="absolute cursor-pointer top-0 w-10 h-10" animationData={eyeAnimation} />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Fogot your password? <Link to="/forgotpassword" className="text-violet-500 font-pregular">Reset here</Link>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="flex w-[75%] justify-self-center font-pmedium" type="submit">Submit<Icon icon="majesticons:login-half-circle" className="text-violet-500 scale-150" width="60px" height="60px"/></Button>
          </form>
        </Form>
        <div className="flex flex-col gap-y-1 justify-center items-center ">
          <h6 className="text-md font-pmedium mb-3 text-gray-400">
          Already have an account? <Link to="/signup" className="text-violet-500 font-pmedium underline">Sign Up</Link>
          </h6>
        </div>
      </div>
      <div className="w-2/5 flex flex-col justify-center items-center rounded-e-2xl p-4 border border-white dark:border-zinc-600 bg-zinc-200 h-auto relative" >
      <h2 className="z-10 font-pbold text-4xl scale-125 bg-clip-text bg-gradient-to-r absolute top-0 from-violet-700 to-fuchsia-600 pt-2 text-transparent justify-center flex flex-row">Forgot password ?</h2>
      <img src="./images/login.svg" alt=""  className=" absolute bottom-0 h-fit"/>
      </div>
    </div>
  )
}

export default Login
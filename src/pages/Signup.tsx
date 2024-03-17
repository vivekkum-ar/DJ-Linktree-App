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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useToast } from "@/hooks/use-toast"
import { useContext } from "react"
import { UserContext } from "@/main"
import { auth } from "@/firebase"

const Signup = () => {
  const { user, setUser } = useContext(UserContext);
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
      email: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        setUser(user);
        console.log(values);
        console.log(user);
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
    console.log(user);
  }

  return (
    <div className="w-full h-screen flex justify-center p-2 mt-4">
      <div className="w-2/5 flex flex-col justify-center items-center shadow-gray-600 shadow-xl rounded-2xl p-6 border border-gray-400">
        <div className="flex flex-col gap-y-1 justify-center items-center ">
          <h1 className="text-4xl font-pbold">
            Sign Up
          </h1>
          <h6 className="text-md font-pregular mb-3 text-gray-400">
            Create an account to get started
          </h6>
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
                    <Input className="font-pregular" placeholder="●●●●●●●●" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="flex w-[75%] justify-self-center font-pmedium" type="submit">Submit<Icon className="text-violet-500 scale-150" icon="majesticons:login-half-circle" width="60px" height="60px" /></Button>
          </form>
        </Form>
        <div className="flex flex-col gap-y-1 justify-center items-center ">
          <h6 className="text-md font-pmedium mb-3 text-gray-400">
            Already have an account? <Link to="/login" className="text-violet-500 font-pmedium underline">Login</Link>
          </h6>
        </div>
      </div>
    </div>
  )
}

export default Signup
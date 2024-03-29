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
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react/dist/iconify.js"
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "@/firebase"
import { toast } from "@/hooks/use-toast"

const Login = () => {
  const formSchema = z.object({
    email: z.string().email({
      message: "Please enter correct Email.",
    }),
    // password: z.string().min(6,{
    //   message: "Password must be at least 6 characters long.",
    // })
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
    sendPasswordResetEmail(auth, values.email)
      .then(() => {
        // Password reset email sent!
        toast({
          title: "Password Reset Email Sent.",
          description: `A reset link has been sent to ${values.email}. Check your inbox to proceed.`,
          classes: "border-amber-500 border-2",
          duration: 3000,
          direction: "top"
        });
      })
      .catch((error) => {
        toast({
          title: `Error - ${error.code}`,
          description: `${error.message}`,
          classes: "border-red-500 border-2",
          duration: 3000,
          direction: "top"
        });
        // const errorCode = error.code;
        // const errorMessage = error.message;

      });
    // console.log(values)
  }
  return (
    <div className="w-full flex justify-center p-2 mt-4 dark:text-gray-200 dark:bg-zinc-950 h-screen ">
      <div className="w-2/5 flex flex-col justify-center items-center rounded-s-2xl p-4 border dark:border-zinc-600 border-zinc-200 h-auto">
        <div className="flex flex-col gap-y-1 justify-center items-center ">
          <h1 className="text-2xl font-pbold dark:text-gray-200 ">
            Reset Password
          </h1>
          <h6 className="text-md font-pregular mb-3 text-gray-400">
            Enter your email address to reset your password
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="flex w-[75%] justify-self-center font-pmedium" type="submit">Submit<Icon icon="material-symbols:lock-reset-sharp" width="60px" height="60px" className="text-violet-500 scale-150" /></Button>
          </form>
        </Form>
        <div className="flex flex-col gap-y-1 justify-center items-center ">
          <h6 className="text-md font-pmedium mb-3 text-gray-400">
            Go back to <Link to="/login" className="text-violet-500 font-pmedium underline">Login</Link>
          </h6>
        </div>
      </div>
      <div className="w-2/5 flex flex-col justify-center items-center rounded-e-2xl p-4 border border-white dark:border-zinc-600 bg-zinc-200 h-auto relative" >
      <h2 className="z-10 font-pbold text-4xl scale-125 bg-clip-text bg-gradient-to-r absolute top-0 from-violet-700 to-fuchsia-600 pt-2 text-transparent justify-center flex flex-row">Forgot password ?</h2>
      <img src="./images/password.svg" alt=""  className=" absolute bottom-0 h-fit"/>
      </div>
    </div>
  )
}

export default Login
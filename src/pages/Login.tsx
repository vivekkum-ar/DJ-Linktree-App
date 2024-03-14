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
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react/dist/iconify.js"

const Login = () => {
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
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <div className="w-full h-screen flex justify-center p-2 border">
      <div className="w-2/5 flex flex-col justify-center items-center shadow-gray-600 shadow-xl rounded-2xl p-6 border border-gray-400">
        <div className="flex flex-col gap-y-1 justify-center items-center ">
          <h1 className="text-4xl font-pbold">
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
                    <Input className="font-pregular" placeholder="●●●●●●●●" type="password" {...field} />
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
    </div>
  )
}

export default Login
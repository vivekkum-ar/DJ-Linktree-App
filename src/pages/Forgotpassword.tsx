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

const Login = () => {
  const formSchema = z.object({
    email: z.string().email({
      message: "Please enter correct Email.",
    }),
    password: z.string().min(6,{
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
    <div className="w-full h-screen flex justify-center outline p-2 border">
      <div className="w-2/5 flex flex-col justify-center items-center outline-1 shadow-gray-600 shadow-xl rounded-2xl p-6">
        <div className="flex flex-col gap-y-1 justify-center items-center ">
          <h1 className="text-4xl font-pbold">
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
          <Button className="flex w-[75%] justify-self-center font-pmedium" type="submit">Submit</Button>
        </form>
      </Form>
      <div className="flex flex-col gap-y-1 justify-center items-center ">
          <h6 className="text-md font-pmedium mb-3 text-gray-400">
          Go back to <Link to="/login" className="text-violet-500 font-pmedium underline">Login</Link>
          </h6>
        </div>
            </div>
    </div>
  )
}

export default Login
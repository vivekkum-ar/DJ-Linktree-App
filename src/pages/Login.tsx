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
    <div className="w-full flex justify-center outline h-screen p-2 ">
      <div className="w-1/4 justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-pmedium">Email</FormLabel>
                <FormControl>
                  <Input className="font-pregular" placeholder="coolperson@example.com" {...field} />
                </FormControl>
                <FormDescription className="font-pregular">
                  This is your public display name.
                </FormDescription>
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
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
            />
          <Button className="flex w-[75%] justify-self-center font-pmedium" type="submit">Submit</Button>
        </form>
      </Form>
            </div>
    </div>
  )
}

export default Login
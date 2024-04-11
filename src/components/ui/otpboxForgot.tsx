import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { useSignIn } from "@clerk/clerk-react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})

interface dialogParams{
  changedPassword:string
}

export const InputOTPFormForgot: React.FC<dialogParams> = ({ changedPassword }) =>{
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  })

  // const { isSignedIn } = useAuth()
  const { isLoaded, signIn, setActive } = useSignIn()
  // const [code, setCode] = useState('')
  // const [successfulCreation, setSuccessfulCreation] = useState(false)
  const [secondFactor, setSecondFactor] = useState(false)
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(secondFactor)
    if (!isLoaded) return;

    toast("success",{
      title: data.pin,
      description: changedPassword,
      classes: "border-green-500 border-2",
      duration: 3000,
      direction: "top"
    });
    console.log(data.pin,changedPassword);
    // try {
    //   const signUpAttempt = await signUp.attemptEmailAddressVerification({
    //     code:data.pin
    //   })

    //   // If verification was completed, set the session to active
    //   // and redirect the user
    //   if (signUpAttempt.status === 'complete') {
    //     await setActive({ session: signUpAttempt.createdSessionId })
    //     toast("success",{
    //       title: "Sign-Up Successful.",
    //       description: `Your account is ready.`,
    //       classes: "border-green-500 border-2",
    //       duration: 3000,
    //       direction: "top"
    //     });
    //     navigate('/dashboard')
    //   } else {
    //     // If the status is not complete, check why. User may need to
    //     // complete further steps.
    //     console.error(JSON.stringify(signUpAttempt, null, 2))
    //     toast("error",{
    //       title: `Error ${signUpAttempt.status}`,
    //       description: JSON.stringify(signUpAttempt, null, 2),
    //       classes: "border-red-500 border-2",
    //       duration: 3000,
    //       direction: "top"
    //     });
    //   }
    // } catch (error: any) {
    //   console.error('Error:', JSON.stringify(error, null, 2))
    //   error.errors.map((err:any) => {
    //     toast("error",{
    //       title: `Error in ${err.meta.paramName}`,
    //       description: `${err.message}`,
    //       classes: "border-red-500 border-2",
    //       duration: 3000,
    //       direction: "top"
    //     });
    //   })
    // }

    // toast("error",{
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-zinc-900 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
    await signIn
      ?.attemptFirstFactor({
        strategy: 'reset_password_email_code',
        code:data.pin,
        password:changedPassword,
      })
      .then((result) => {
        // Check if 2FA is required
        if (result.status === 'needs_second_factor') {
          setSecondFactor(true)
        } else if (result.status === 'complete') {
          // Set the active session to
          // the newly created session (user is now signed in)
          setActive({ session: result.createdSessionId })
          toast("success",{
            title: "Password Changed",
            description: `Password change was successfully completed`,
            classes: "border-green-500 border-2",
            duration: 3000,
            direction: "top"
          });
          navigate("/dashboard")
        } else {
          console.log(result)
        }
      })
      .catch((error) => {
        console.error('Error:', JSON.stringify(error, null, 2))
      error.errors.map((err:any) => {
        toast("error",{
          title: `Error in ${err.meta.paramName}`,
          description: `${err.message}`,
          classes: "border-red-500 border-2",
          duration: 3000,
          direction: "top"
        });
      })
      })
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel className="dark:text-white text-zinc-900">One-Time Password</FormLabel> */}
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

import {
    Dialog,
    DialogContent,
    // DialogDescription,
    DialogHeader,
    DialogTitle,
    // DialogTrigger,
} from "@/components/ui/dialog"
import { InputOTPFormForgot } from "./ui/otpboxForgot"


interface dialogParams{
    open:boolean
    updateOpen: (open: boolean) => void
    password:string
}

const OtpDialogForgot: React.FC<dialogParams> = ({ open, updateOpen,password }) => {
    return (
        <Dialog open={open} onOpenChange={updateOpen}>
            <DialogContent className="dark:text-white text-zinc-900"> 
                <DialogHeader className="">
                    <DialogTitle className="">One-Time Password</DialogTitle>
                    {/* <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription> */}
                </DialogHeader>
                <InputOTPFormForgot changedPassword={password}></InputOTPFormForgot>
            </DialogContent>
        </Dialog>
    )
}

export default OtpDialogForgot
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { InputOTPForm } from "./ui/otpbox"
import { useState } from "react";

interface dialogParams{
    open:boolean
    updateOpen: (open: boolean) => void
}

const OtpDialog: React.FC<dialogParams> = ({ open, updateOpen }) => {
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
                <InputOTPForm></InputOTPForm>
            </DialogContent>
        </Dialog>
    )
}

export default OtpDialog
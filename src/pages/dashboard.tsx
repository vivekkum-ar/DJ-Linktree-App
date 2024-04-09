import { SignedIn, UserButton } from "@clerk/clerk-react"

const dashboard = () => {
    return (
        <SignedIn>
            <UserButton />
        </SignedIn>
    )
}

export default dashboard
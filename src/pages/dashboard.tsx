import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"

const Dashboard = () => {
    return (
        <>
        Dashboard
            <SignedOut>
                <h1>Sign in to access the dashboard</h1>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </>
    )
}

export default Dashboard
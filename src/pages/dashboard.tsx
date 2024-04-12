import { SignedIn, SignedOut } from "@clerk/clerk-react"

const Dashboard = () => {
    return (
        <>
        <h1 className="text-transparent bg-clip-text glass-blue text-4xl text-center font-bold pt-8 pb-4 text-pbold">
            Dashboard
        </h1>
            <SignedOut>
                <h1>Sign in to access the dashboard</h1>
            </SignedOut>
            <SignedIn>
                <h1>Welcome to your personalized dashboard!</h1>
                <p>We're thrilled to have you here. Explore your data, manage your settings, and make the most out of your experience.</p>
            </SignedIn>
        </>
    )
}

export default Dashboard
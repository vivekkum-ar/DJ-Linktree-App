import { useClerk } from '@clerk/clerk-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Add clerk to Window to avoid type errors
declare global {
  interface Window {
    google: any
  }
}

export function CustomGoogleOneTap({ children }: { children: React.ReactNode }) {
  const clerk = useClerk()
  const router = useNavigate()

  useEffect(() => {
    // Will show the One Tap UI after two seconds
    const timeout = setTimeout(() => oneTap(), 2000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const oneTap = () => {
    const { google } = window
    if (google) {
      google.accounts.id.initialize({
        // Add your Google Client ID here.
        client_id: '704120622074-8tgk87qcu9av58c676oa73m61t993ksg.apps.googleusercontent.com',
        callback: async (response: any) => {
          // Here we call our provider with the token provided by Google
          call(response.credential)
        },
      })

      // Uncomment below to show the One Tap UI without
      // logging any notifications.
      // return google.accounts.id.prompt() // without listening to notification

      // Display the One Tap UI, and log any errors that occur.
      return google.accounts.id.prompt((notification: any) => {
        console.log('Notification ::', notification)
        if (notification.isNotDisplayed()) {
          console.log('getNotDisplayedReason ::', notification.getNotDisplayedReason())
        } else if (notification.isSkippedMoment()) {
          console.log('getSkippedReason  ::', notification.getSkippedReason())
        } else if (notification.isDismissedMoment()) {
          console.log('getDismissedReason ::', notification.getDismissedReason())
        }
      })
    }
  }

  const call = async (token: any) => {
    try {
      const res = await clerk.authenticateWithGoogleOneTap({
        token,
      })

      await clerk.handleGoogleOneTapCallback(res, {
        signInFallbackRedirectUrl: '/example-fallback-path',
      })
    } catch (error) {
      router('/sign-in')
    }
  }

  return (
    <>
      {/* <script src="https://accounts.google.com/gsi/client"> */}
      <div className="cursor-pointer" onClick={oneTap}>
        {children}
      </div>
      {/* </script> */}
    </>
  )
}
import { signUpEmail } from '@/main';
import { Icon } from '@iconify/react/dist/iconify.js'
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
interface JumbotronProps {
  // Add your prop types here
}

const Jumbotron: React.FC<JumbotronProps> = ({}) => {
  const [signUpmail, setSignUpmail] = useRecoilState(signUpEmail);
  const navigate = useNavigate();
  
  return (
    <section className="bg-white dark:bg-zinc-950 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] font-pregular">
        <div className="md:py-8 py-1 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <a href="#" className="inline-flex justify-between items-center py-0 px-1 pe-4 mb-7 text-sm text-violet-700 bg-violet-100 rounded-full dark:bg-violet-900 dark:text-violet-300 hover:bg-violet-200 dark:hover:bg-violet-800">
            <span className="text-xs bg-violet-600 rounded-full text-white px-4 py-1.5 me-3">New</span> <span className="md:text-sm text-xs font-medium">New QR templates launched! See what's new</span> 
            <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
            </svg>
          </a>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We Simplify <p className='font-mbold inline-flex text-violet-500'>Connections</p><br /> <p className='mt-4 font-mbold inline-flex text-violet-500'>Amplify</p> Your Reach<Icon icon="carbon:growth" className='inline-flex scale-75 md:scale-100 text-violet-600' width="60px" height="60px"/></h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200 text-justify">Empowering individuals and businesses to share customizable QR codes for seamless access to their online profiles. Simplify your digital presence and amplify your reach effortlessly.</p>
          <form className="w-full max-w-md mx-auto">   
            <label htmlFor="default-email" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email sign-up</label>
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input type="email" onChange={(e) => {setSignUpmail(e.target.value)}} id="default-email" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" placeholder="Enter your email here..." required />
              <button onClick={() => navigate("/signup")} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">Sign up</button>
            </div>
          </form>
        </div>
        {/* <div className="bg-gradient-to-b from-violet-50 to-transparent dark:from-violet-900 w-full h-full absolute left-0" /> */}
      </section>
  )
}

export default Jumbotron
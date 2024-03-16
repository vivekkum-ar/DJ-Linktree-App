import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react'
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from 'react-router-dom';
import { DarkModeToggle } from './mode-toggle';

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Privacy Policy",
    href: "/docs/legal/privacy-policy",
    description:
      "Details on how we collect, use, and protect your personal information.",
  },
  {
    title: "Terms & Conditions",
    href: "/docs/legal/terms-conditions",
    description:
      "The rules and guidelines for using our services and accessing our website.",
  },
  {
    title: "Usage of Data",
    href: "/docs/legal/data-usage",
    description:
      "Information on how we handle, store, and utilize the data you provide.",
  },
  // {
  //   title: "Scroll-area",
  //   href: "/docs/primitives/scroll-area",
  //   description: "Visually or semantically separates content.",
  // },
  // {
  //   title: "Tabs",
  //   href: "/docs/primitives/tabs",
  //   description:
  //     "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  // },
  // {
  //   title: "Tooltip",
  //   href: "/docs/primitives/tooltip",
  //   description:
  //     "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  // },
]

export function NavigationMenu1() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=' dark:text-white'>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className={`font-mbold flex justify-center text-3xl flex-row items-center`}>
                      <h1 className='absolute shadow-xl text-2xl text-violet-700 font-mextrabold'>Dj</h1>
                      <Icon className=' text-violet-400 opacity-70' icon="jam:qr-code" width={55} height={55} />
                    </div>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      DJ QR App
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground text-justify">
                      Effortlessly showcase all your social media profiles and links in one place. Simple to set up, fully customizable, and designed to enhance your online presence.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/getting-started" title="Introduction">
                How to get started with this QR app?
              </ListItem>
              <ListItem href="/adding-your-handles" title="Adding Links">
                How to add your social media handles at one place?
              </ListItem>
              <ListItem href="/Services" title="Services">
                Explore the range of services we provide related to social media.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={` dark:text-white`}>Legal</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-1 ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/features" >
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}  dark:text-white`}>
              Features
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/support" >
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}  dark:text-white`}>
              Support
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/blogs" >
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}  dark:text-white`}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger className=' dark:text-white'>Templates</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-1">

              <ListItem href="/template-gallery" title="Template Gallery">
                Browse a variety of templates to personalize your QR profile.
              </ListItem>
              <ListItem href="/customization-guide" title="Customization Guide">
                Learn how to customize colors, fonts, and layouts for your template.
              </ListItem>
              <ListItem href="/examples" title="Examples">
                Explore examples of QR profiles created by others for inspiration.
              </ListItem>
            </ul>
          </NavigationMenuContent>

        </NavigationMenuItem>
        <NavigationMenuItem>
        <DarkModeToggle></DarkModeToggle>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

interface NavbarProps {
  // Add your prop types here
  className: string;
}

/* ---------------------------------------------------------------------------------------------- */
/*                                     Main Navbar starts here                                    */
/* ---------------------------------------------------------------------------------------------- */

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={`flex flex-col justify-center items-center ${className}`}>
      <div className="flex flex-row w-full pe-6 py-2 top-0 fixed justify-between">

        <div className={`font-mbold flex justify-center text-3xl flex-row w-[5%] ms-6 h-12 items-center`}>
          <h1 className='absolute shadow-xl text-2xl text-violet-700 font-mextrabold'>Dj</h1>
          <Icon className=' text-violet-400 opacity-40' icon="jam:qr-code" width="55px" height="55px" />
        </div>
        <div className="flex flex-row relative w-[55%] justify-center items-center">
          <div className={`absolute font-mbold text-xl w-full flex flex-row h-14 bg-gradient-to-r from-purple-500 to-purple-900 rounded-2xl items-center px-4`}>

          </div>
          <div className={`bg-white absolute text-xl w-[98.5%] flex flex-row h-12 border-2 border-slate-300 rounded-xl items-center justify-center px-6`}>
            <NavigationMenu1></NavigationMenu1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
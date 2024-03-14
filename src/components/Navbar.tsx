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
 
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]
 
export function NavigationMenu1() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
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
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
          <Link to="/docs" >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
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

const Navbar: React.FC<NavbarProps> = ({className}) => {
  return (
    <div className={`flex flex-col justify-center items-center ${className}`}>
        <div className="flex flex-row w-full pe-6 py-2 top-0 fixed justify-between">
        
        <div className={`font-mbold flex justify-center text-3xl flex-row w-[5%] ms-6 h-12 items-center`}>
        <h1 className='absolute shadow-xl text-2xl text-violet-700 font-mextrabold'>Dj</h1>
        <Icon className=' text-violet-400 opacity-40' icon="jam:qr-code" width="55px" height="55px"  />
        </div>
        <div className="flex flex-row relative w-3/6 justify-center items-center">
        <div className={`absolute font-mbold text-xl w-full flex flex-row h-14 border-2 bg-gradient-to-r from-purple-500 to-purple-900 rounded-2xl items-center px-4`}>
            
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
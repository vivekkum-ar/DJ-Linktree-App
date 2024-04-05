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
import { Link, useNavigate } from 'react-router-dom';
import { DarkModeToggle } from './mode-toggle';
import DropdownMain from './ui/dropdown-menu';

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Privacy Policy",
    href: "/legal/privacy-policy",
    description:
      "Details on how we collect, use, and protect your personal information.",
  },
  {
    title: "Terms & Conditions",
    href: "/legal/terms-conditions",
    description:
      "The rules and guidelines for using our services and accessing our website.",
  },
  {
    title: "Usage of Data",
    href: "/legal/data-usage",
    description:
      "Information on how we handle, store, and utilize the data you provide.",
  },
]

const components2: { title: string; href: string; description: string }[] = [
  {
    title: "Template Gallery",
    href: "/templates/template-gallery",
    description:
      "Browse a variety of templates to personalize your QR profile.",
  },
  {
    title: "Customization Guide",
    href: "/templates/customization-guide",
    description:
      "Learn how to customize colors, fonts, and layouts for your template.",
  },
  {
    title: "Examples",
    href: "/templates/examples",
    description:
      "Explore examples of QR profiles created by others for inspiration.",
  },
];


export function NavigationMenu1() {

  const navigate = useNavigate();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=' dark:text-white'>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    to="/"
                  >
                    <div className={`font-mbold flex justify-center text-3xl flex-row items-center cursor-pointer`} onClick={() => {navigate("/home")}}>
                      <h1 className='absolute shadow-xl text-2xl text-violet-700 font-mextrabold'>Dj</h1>
                      <Icon className=' text-violet-400 opacity-70' icon="jam:qr-code" width={55} height={55} />
                    </div>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      DJ QR App
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground text-justify">
                      Effortlessly showcase all your social media profiles and links in one place. Simple to set up, fully customizable, and designed to enhance your online presence.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {components2.map((component) => (
                <Link to={component.href}>
                <ListItem
                  key={component.title}
                  title={component.title}
                  // href={component.href}
                  >
                  {component.description}
                </ListItem>
                  </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={` dark:text-white`}>Legal</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-1 ">
              {components.map((component) => (
                <Link to={component.href}>
                <ListItem
                  key={component.title}
                  title={component.title}
                  // href={component.href}
                  >
                  {component.description}
                </ListItem>
                  </Link>
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

                <Link to="/templates/template-gallery">
              <ListItem title="Template Gallery">
                Browse a variety of templates to personalize your QR profile.
              </ListItem>
                </Link>
                <Link to="/templates/customization-guide">
              <ListItem title="Customization Guide">
                Learn how to customize colors, fonts, and layouts for your template.
              </ListItem>
                </Link>
                <Link to="/templates/examples">
              <ListItem title="Examples">
                Explore examples of QR profiles created by others for inspiration.
              </ListItem>
                </Link>
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
  const navigate = useNavigate();
  console.log(className);
  return (
    // <div className={`flex flex-col justify-center items-center ${className} z-30 outline outline-red-500 h-4`}>
      <div className="pe-6 py-2 top-0 fixed z-30 bg-inherit w-full">
        <div className="flex flex-row w-full justify-between max-w-screen-xl mx-auto">
        <div className={`font-mbold flex justify-center text-3xl flex-row w-[5%] ms-6 h-12 items-center cursor-pointer`}  onClick={() => {navigate("/home")}}>
          <h1 className='absolute shadow-xl text-2xl text-violet-700 font-mextrabold'>Dj</h1>
          <Icon className=' text-violet-400 opacity-40' icon="jam:qr-code" width="55px" height="55px" />
        </div>
        <div className="md:glass flex flex-row relative w-[60%] justify-end sm:justify-center items-center shadow-xl">
          <div className={`hidden md:flex absolute font-mbold text-xl w-full flex-row h-14 bg-gradient-to-r glass from-purple-500 to-purple-900 rounded-2xl items-center px-4`}>

          </div>
          <div className={`hidden md:flex dark:bg-zinc-950 absolute text-xl w-[99%] flex-row h-12 border-2 bg-slate-50 border-slate-300 dark:border-slate-800 rounded-xl items-center justify-center px-6`}>
            <NavigationMenu1></NavigationMenu1>
          </div>
          <DropdownMain></DropdownMain>
        </div>
      </div>
     </div>
  )
}

export default Navbar
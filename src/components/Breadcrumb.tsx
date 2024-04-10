import { Icon } from "@iconify/react/dist/iconify.js"
import { Link, useLocation } from "react-router-dom"

interface BreadcrumbItem {
    label: string
    icon: string
}

interface BreadcrumbProps {
    items: BreadcrumbItem[]
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    const location = useLocation()

    return (
        <nav className="dark:text-white text-white absolute z-10 bottom-0 left-4 hidden md:block" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-0.5 rtl:space-x-reverse">
                {
                    location.pathname.split("/").map((item, index) => (
                        <>
                        {index == 0 &&
                            <li className="inline-flex items-center">
                                <Link to={"/"} className="text-white hover:text-blue-600 dark:hover:text-white">
                                    <Icon icon="ic:round-home" className="h-6 w-6"></Icon>
                                </Link>
                            </li>
                        }
                            <li className="inline-flex items-center">
                                <Link to={location.pathname.split("/").splice(0,index+1).join("/")} className="inline-flex items-center text-sm font-medium text-white hover:text-blue-600 dark:hover:text-white">
                                    <Icon icon={item} className="h-5 w-5"></Icon>
                                    {item}
                                </Link>
                            </li>
                            {
                                (index + 1 != items.length) ? 
                                <div className="flex items-center text-white">
                                    <Icon icon="line-md:chevron-right" className=" h-5"></Icon>
                                </div> : ""
                            }

                        </>
                    ))
                }

            </ol>
        </nav>
    )
}

export default Breadcrumb
import { Icon } from "@iconify/react/dist/iconify.js"
import { Link } from "react-router-dom"

interface BreadcrumbItem {
    label: string
    icon: string
}

interface BreadcrumbProps {
    items: BreadcrumbItem[]
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {

    return (
        <nav className="dark:text-white text-white absolute z-10 bottom-0 left-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                {
                    items.map((item, index) => (
                        <>
                            <li className="inline-flex items-center">
                                <Link to={`/` + item.label} className="inline-flex items-center text-sm font-medium text-white hover:text-blue-600 dark:hover:text-white">
                                    <Icon icon={item.icon} className="h-5 w-5"></Icon>
                                    Home
                                </Link>
                            </li>
                            {
                                (index + 1 != items.length) ? 
                                <div className="flex items-center text-white">
                                    <Icon icon="line-md:chevron-right" className="w-5 h-5"></Icon>
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
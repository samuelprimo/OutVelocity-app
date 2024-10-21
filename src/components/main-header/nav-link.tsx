'use client'
import Link from "next/link";
import classes from './nav-link.module.css'
import { usePathname } from "next/navigation";

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
  };

export default function NavLink({href, children}: NavLinkProps) {
    const path = usePathname();

    return (
    <Link
    href={href}
    className={
     path.startsWith('/meals') ? `${classes.link}  ${classes.active}` 
     : classes.link
     
    }
     >
    {children}
    </Link>
);
}
"use client";
import Link from "next/link";
import styles from "./navbar.module.css"
import DarkMode from "../DarkMode/DarkMode";
import Image from "next/image";
import logo from '/public/Raise.png';
import { signOut, useSession } from "next-auth/react";
const links = [
  // {
  //   id: 1,
  //   title: "Home",
  //   url: "/",
  // },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "AboutUs",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Platform",
    url: "/platform",
  },
];


export default function Navbar() {
  const session = useSession();
  return (
    <nav className={styles.container}>
      <div>
        <Link href={'/'} className={styles.logo}><Image alt="logo" height={50}src={logo}/></Link>
      </div>
      <ul className={styles.links}>
        <DarkMode />
        {links.map((link) => (
          <Link
          className={styles.link}
          key={link.id}
          href={link.url}>
            {link.title}
          </Link>
        ))}
        { session.status === "authenticated" && (
        <button
         className={styles.logout}
          onClick={signOut}
        >
          Logout
        </button>
        )
        }
      </ul>
    </nav>
  );
}


/**
 * 
 * MI NAVBAR
 * 
 * 
 <nav className={styles.container}>
      <div>
        <Link href={'/'} className={styles.logo}><Image alt="logo" height={50}src={logo}/></Link>
      </div>
      <ul className={styles.links}>
        <DarkMode />
        {links.map((link) => (
          <Link
          className={styles.link}
          key={link.id}
          href={link.url}>
            {link.title}
          </Link>
        ))}
        { session.status === "authenticated" && (
        <button
         className={styles.logout}
          onClick={signOut}
        >
          Logout
        </button>
        )
        }
      </ul>
    </nav> 
 
 */
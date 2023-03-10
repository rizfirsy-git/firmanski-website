import React from "react";
import Link from "next/link";

const MY_SOCIALS = [
  {
    name: "🌈instagram",
    link: "https://www.instagram.com/rizfirsy.dev",
  },
  {
    name: "🐦twitter",
    link: "https://www.twitter.com/rizfirsy.dev",
  },
  {
    name: "🍎youtube",
    link: "https://www.youtube.com/rizfirsy",
  },
];

const SocialLinks = () => {
  return (
    <ul className="flex justify-center items-center rounded-xl h-auto py-7">
      {MY_SOCIALS.map((social, index) => (
        <li key={index}>
          <Link
            href={social.link}
            target="_blank"
            className="p-7 relative before:absolute before:hidden before:left-0 before:right-0 before:bottom-0 before:top-0 before:bg-slate-200 before:-z-10 before:rounded-xl hover:before:block"
          >
            {social.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;

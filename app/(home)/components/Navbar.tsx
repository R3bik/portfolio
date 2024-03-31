import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { cn } from "@/lib/utils";
const Navbar = ({ className }: { className?: string }) => {
  const socials = [
    {
      Link: "https://www.facebook.com",
      label: "Facebook",
      Icon: FaFacebook,
    },
    {
      Link: "https://www.github.com",
      label: "Github",
      Icon: FaGithub,
    },
    {
      Link: "https://www.linkedin.com",
      label: "Linkedin",
      Icon: FaLinkedin,
    },
  ];
  return (
    <nav className={cn("py-10 flex justify-between items-center", className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8  decoration-pink-600 -rotate-2 font-roboto">
        Rebik Basnet 👨🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.Link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

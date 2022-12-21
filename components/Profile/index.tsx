import Avatar from "../Avatar";
import Switch from "../Switch";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 items-center justify-center">
      <Switch />
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
        <Avatar />
        <Information />
      </div>
    </div>
  );
}

const Information = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-center md:text-left">
        <h1 className="text-primary-one dark:text-secondary-one text-head mb-2">
          Puji Ragil Setyo G
        </h1>
        <p className="text-primary-two dark:text-secondary-two text-sm">
          Frontend Engineer
        </p>
      </div>
      <Social />
    </div>
  );
};

const Social = () => {
  return (
    <div className="flex items-center justify-center md:justify-start gap-7 text-2xl">
      <Link href="https://github.com/pujiragil" target="_blank">
        <AiFillGithub className="icons" />
      </Link>
      <Link href="https://instagram.com/ragilsg_164" target="_blank">
        <AiFillInstagram className="icons" />
      </Link>
      <Link href="https://linkedin.com/in/pujiragil/" target="_blank">
        <AiFillLinkedin className="icons" />
      </Link>
      <Link href="https://t.me/Ragilsg" target="_blank">
        <FaTelegram className="icons" />
      </Link>
    </div>
  );
};

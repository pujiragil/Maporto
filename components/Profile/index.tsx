import Avatar from "../Avatar";
import Switch from "../Switch";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <Switch />
      <div className="flex flex-col gap-10 items-center">
        <Avatar />
        <Information />
      </div>
    </div>
  );
}

const Information = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-center">
        <h1 className="text-primary-one dark:text-secondary-one text-2xl mb-2">
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
    <div className="flex items-center justify-center gap-7 text-2xl">
      <Link href="https://github.com/pujiragil" target="_blank">
        <AiFillGithub className="icons" />
      </Link>
      <Link href="https://instagram.com/ragilsg_164" target="_blank">
        <AiFillInstagram className="icons" />
      </Link>
      <Link href="https://t.me/Ragilsg" target="_blank">
        <AiFillLinkedin className="icons" />
      </Link>
      <Link href="https://t.me/Ragilsg" target="_blank">
        <BsTelegram className="icons" />
      </Link>
    </div>
  );
};

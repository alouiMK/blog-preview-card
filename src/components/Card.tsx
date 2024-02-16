import { useState } from "react";
import Illustration from "../assets/illustration-article.svg";
import Avatar from "../assets/image-avatar.webp";

const Card = () => {
  const [isHovred, setIsHovred] = useState<boolean>(false);

  return (
    <div className="flex justify-center items-center h-dvh  ">
      <div
        className={`bg-White rounded-xl p-5 border-Black border-[1px] shadow-[5px_5px_0px_0px] w-80 ${
          isHovred && "hover:shadow-[10px_10px_0px_0px]"
        }`}
      >
        <img className="rounded-lg" src={Illustration} alt="illustration" />
        <div className="inline-block bg-Yellow px-2 py-1 my-4 rounded-md font-extrabold">
          <p className=" text-Black text-sm ">Learning</p>
        </div>
        <p className="text-sm ">Published 21 Dec 2023</p>
        <p
          className="my-3 text-xl font-extrabold hover:text-Yellow cursor-pointer"
          onMouseOver={() => setIsHovred(true)}
          onMouseLeave={() => setIsHovred(false)}
        >
          HTML & CSS foundations
        </p>
        <p className="text-sm text-Grey">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex items-center mt-5 ">
          <img className="w-7 h-7 rounded-full" src={Avatar} alt="avatar" />
          <p className="font-extrabold px-2 text-sm">Greg Hooper</p>
        </div>
      </div>
    </div>
  );
};
export default Card;

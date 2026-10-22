import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  return (
    <footer className="bg-pale_yellow -mt-10 pt-16 md:-mt-40 md:pt-36">
      <>
        <Image
          className={"w-3/5 mx-auto md:w-1/5"}
          src="/assets/image/logo/logo.png"
          alt="logo"
          width={1500}
          height={1500}
        />
      </>
      <div className="text-center text-xs text-pale_gray mt-9">
        Copyright © 2023 Akira Ikegawa All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

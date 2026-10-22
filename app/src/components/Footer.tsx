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
      <div className="flex justify-evenly">
        <div className="flex justify-evenly my-2 flex-col -ml-4">
          <div className="flex items-center my-2 md:my-4">
            <div className="text-naby text-5xl -mr-1">・</div>
            <Link href={"/profile"}>
              <p className="text-naby font-bold leading-none md:text-xl">
                ごあいさつ
              </p>
              <span className="text-pale_gray text-xs md:text-sm">
                INTRODUCTION
              </span>
            </Link>
          </div>
          <div className="flex items-center my-2 md:my-4">
            <div className="text-naby text-5xl -mr-1">・</div>
            <Link href={"/news/list"}>
              <p className="text-naby font-bold leading-none md:text-xl">
                ニュース
              </p>
              <span className="text-pale_gray text-xs md:text-sm">NEWS</span>
            </Link>
          </div>
          <div className="flex items-center my-2 md:my-4">
            <div className="text-naby text-5xl -mr-1">・</div>
            <Link href={"https://www.mag2.com/m/0001680211"} target="_blank">
              <p className="text-naby font-bold leading-none md:text-xl">
                メルマガ
              </p>
              <span className="text-pale_gray text-xs md:text-sm">
                E-MAIL MAGAZINE
              </span>
            </Link>
          </div>
        </div>

        <div className="flex justify-evenly my-2 flex-col -ml-4">
          <div className="flex items-center my-2 md:my-4">
            <div className="text-naby text-5xl -mr-1">・</div>
            <Link href={"/notification/list"}>
              <p className="text-naby font-bold leading-none md:text-xl">
                お知らせ
              </p>
              <span className="text-pale_gray text-xs md:text-sm">
                NOTIFICATION
              </span>
            </Link>
          </div>
          <div className="flex items-center my-2 md:my-4">
            <div className="text-naby text-5xl -mr-1">・</div>
            <Link href={"/books/list"}>
              <p className="text-naby font-bold leading-none md:text-xl">
                書籍一覧
              </p>
              <span className="text-pale_gray text-xs md:text-sm">BOOKS</span>
            </Link>
          </div>
          <div className="flex items-center my-2 md:my-4">
            <div className="text-naby text-5xl -mr-1">・</div>
            <Link href="/contacts/form">
              <p className="text-naby font-bold leading-none md:text-xl">
                お問い合わせ
              </p>
              <span className="text-pale_gray text-xs md:text-sm">CONTACT</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-pale_gray mt-9">
        Copyright © 2023 Akira Ikegawa All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

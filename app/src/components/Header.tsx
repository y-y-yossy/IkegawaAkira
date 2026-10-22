import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="h-[50px] lg:h-[75px]">
      <div className="w-screen fixed z-[999] flex items-center">
        {/* ハンバーガーメニューボタン */}
        <button
          onClick={handleMenuOpen}
          className="absolute right-5 top-4 w-12 h-10 z-[300] lg:top-6 lg:right-8"
          aria-label="ハンバーガーメニューの開閉"
        >
          <span
            className={
              openMenu
                ? "ease-in top-[11px] -rotate-45 duration-500 absolute w-6 h-[0.2rem] right-0 bg-white rounded-full lg:w-8"
                : "ease-linear top-[1px] duration-500 absolute w-6 h-[0.2rem] right-0 bg-orange rounded-full lg:w-8"
            }
          />
          <span
            className={
              openMenu
                ? "ease-in absolute w-6 h-[0.2rem] right-0 opacity-0 lg:w-8"
                : "ease-linear absolute w-6 h-[0.2rem] right-0 bg-orange duration-500 rounded-full top-[9px] lg:w-8 lg:top-[12px]"
            }
          />
          <span
            className={
              openMenu
                ? "rotate-45 ease-in absolute w-6 h-[0.2rem] right-0 bg-white duration-500 rounded-full top-[11px] lg:w-8"
                : "ease-linear absolute w-6 h-[0.2rem] right-0  bg-orange duration-500 rounded-full top-[18px] lg:w-8 lg:top-[24px]"
            }
          />
        </button>

        {/* ハンバーガーメニュー押下時のメニュー */}
        <nav
          className={
            openMenu
              ? "fixed top-0 w-full h-screen bg-orange duration-50 z-[200] overflow-y-auto ease-in-out"
              : "fixed right-[-100%] top-0 w-full h-screen bg-orange opacity-0 duration-50 z-[200] overflow-y-auto ease-in-out"
          }
        >
          <div className="mx-5 lg:mx-52">
            {/* 企業ロゴ */}
            <div>
              <Link href="/" onClick={handleMenuOpen}>
                <Image
                  width={256}
                  height={256}
                  className={
                    openMenu
                      ? "fixed w-1/3 duration-100 mx-auto md:w-1/6"
                      : "fixed w-1/3 opacity-0 md:w-1/6"
                  }
                  src="/assets/image/logo/logo_white.png"
                  alt="logo"
                />
              </Link>
            </div>
            <ul className="relative top-32 gap-8 flex flex-col text-xl px-3 text-white lg:top-60 md:grid md:grid-cols-2">
              <li>
                <Link
                  className="align-sub"
                  href="/profile"
                  onClick={handleMenuOpen}
                >
                  <p>ごあいさつ</p>
                  <span className="text-xs">PROFILE</span>
                </Link>
              </li>
              {/* NEWSメニュー */}
              <li>
                <Link
                  className="align-sub"
                  href="/news/list"
                  onClick={handleMenuOpen}
                >
                  <p>ニュース</p>
                  <span className="text-xs">NEWS</span>
                </Link>
              </li>
              {/* Notificationメニュー */}
              <li>
                <Link
                  className="align-sub"
                  href="/notification/list"
                  onClick={handleMenuOpen}
                >
                  <p>お知らせ</p>
                  <span className="text-xs">NOTIFICATION</span>
                </Link>
              </li>

              {/* Booksメニュー */}
              <li>
                <Link
                  className="align-sub"
                  href="/books/list"
                  onClick={handleMenuOpen}
                >
                  <p>書籍一覧</p>
                  <span className="text-xs">BOOKS</span>
                </Link>
              </li>

              {/*  Contactメニュー */}
              <li>
                <Link
                  className="align-sub"
                  href="/contacts/form"
                  onClick={handleMenuOpen}
                >
                  <p>お問い合わせ</p>
                  <span className="text-xs">CONTACT</span>
                </Link>
              </li>
            </ul>
            <ul className="fixed bottom-8 flex gap-4 lg:bottom-16">
              <li>
                <Link
                  href="https://www.youtube.com/@AKIRAIKEGAWA"
                  target="_blank"
                >
                  <Image
                    width={40}
                    height={40}
                    src="/assets/image/icon/sns/youtube.png"
                    alt="youtube"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://ja-jp.facebook.com/seapara.akira/"
                  target="_blank"
                >
                  <Image
                    width={40}
                    height={40}
                    src="/assets/image/icon/sns/facebook.png"
                    alt="youtube"
                  />
                </Link>
              </li>
              <li>
                <Link href="/" target="_blank">
                  <Image
                    width={40}
                    height={40}
                    src="/assets/image/icon/sns/twitter.png"
                    alt="youtube"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

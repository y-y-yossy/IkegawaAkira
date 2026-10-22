import { client } from "../libs/client";
import { eventClient } from "../libs/client";
import type { Notification } from "@/src/types/Notification";
import type { News } from "../types/News";
import type { Books } from "../types/Books";
import type { Event } from "../types/Events";

import Head from "next/head";
import Seo from "../components/Seo";
import Link from "next/link";
import Image from "next/image";

import SectionTitle from "../components/common/SectionTitle";
import { useEffect } from "react";

type Props = {
  events: Array<Event>;
  notifications: Array<Notification>;
  news: Array<News>;
  books: Array<Books>;
};

export default function Home({ events, notifications, news, books }: Props) {
  return (
    <>
      <Seo
        pageDescription={
          "医師・医学博士 池川明の公式サイトです。講演会の依頼について、池川明の著書について、池川明についてはこちらのホームページをご覧ください。"
        }
        pageImgWidth={1280}
        pageImgHeight={960}
      />

      <main className="relative overflow-x-hidden ">
        {/*  Section: ファーストビュー  ===========================================================  */}
        <div className="w-screen container mx-auto">
          <div className="relative h-[350px]">
            <div className="text-orange mx-5 relative z-30">
              <h2 className="text-xs tracking-[.5em] my-3 font-light lg:text-base">
                AKIRA IKEGAWA
              </h2>
              <h1 className="text-[2.5rem] tracking-[.35em] font-mincho lg:text-[4rem]">
                池川明
              </h1>
            </div>
            <div className="absolute left-2 mt-12 z-40">
              <Image
                className={"w-[50px] md:w-[5vw]"}
                src="/assets/image/home/officialWebSite.png"
                alt="official web site"
                width={125}
                height={700}
                priority={true}
              />
            </div>
            <div className="absolute w-11/12 right-0 mt-[-60px] z-0 md:w-[700px] md:mt-[-180px]">
              <Image
                className="md:hidden lg:hidden"
                src="/assets/image/home/ikegawa_sp.png"
                alt="profile image"
                width={1275}
                height={1800}
                priority={true}
              />
              <Image
                className="hidden md:block lg:block"
                src="/assets/image/home/ikegawa_lg.png"
                alt="profile image"
                width={1000}
                height={1000}
                priority={true}
              />
            </div>
          </div>
          <div className="relative container">
            <div className="inherit -z-10 md: md:right-0">
              <Image
                className={"w-[150px] md:w-[15vw]"}
                src="/assets/image/home/dot_pale_orange.png"
                alt="dot"
                width={200}
                height={300}
                priority={true}
              />
            </div>
            {events.map((event) => {
              return (
                <Link
                  href={`events/${event.id}`}
                  className="mt-[-55px] w-5/6 px-4 md:w-[40vw] mx-auto bg-white border-2 border-naby rounded-full flex justify-around items-center"
                >
                  <div className="py-3">
                    <div className="snap-center flex-shrink-0 mx-4">
                      <p className="font-bold text-sm md:text-lg line-clamp-1">
                        {event.name}
                      </p>
                      <p className="text-xs md:text-sm">{event.place}</p>
                    </div>
                  </div>
                  <>
                    <Image
                      className={"w-[30px] lg:w-[45px]"}
                      src="/assets/image/home/arrow_right.svg"
                      alt="arrow_right"
                      width={30}
                      height={30}
                    />
                  </>
                </Link>
              );
            })}
          </div>
        </div>

        {/*  Section: NEWS  ===========================================================  */}
        <>
          <SectionTitle
            title="ニュース"
            subtitle="NEWS"
            complementaryColor={false}
          />
        </>

        <div className="flex snap-x snap-mandatory overflow-scroll pl-3 hidden-scrollbar container mx-auto">
          {news.map((n) => {
            const publishedYear = new Date(n.publishedAt).getFullYear();
            const publishedDate = new Date(n.publishedAt)
              .toLocaleString("ja-JP-u-ca-japanese", {
                month: "2-digit",
                day: "2-digit",
              })
              .toString()
              .replace("/", ".");

            return (
              <div className="w-5/6 md:w-1/3 snap-center flex-shrink-0 mx-4">
                <Link href={`news/${n.id}`}>
                  <div className="relative border border-orange rounded-lg mx-auto my-2">
                    <div className="absolute -top-3 -left-3 z-0">
                      <div className="absolute z-10 w-24">
                        <Image
                          src="/assets/image/home/left-top-triangle.png"
                          alt="arrow_right"
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="absolute left-3 top-3 z-30 text-white">
                        <p>{publishedDate}</p>
                        <p className="text-xs">{publishedYear}</p>
                      </div>
                    </div>
                    <div className="mx-3">
                      <div className="min-h-[75px] my-8 md:my-16 mx-10 line-clamp-3">
                        {n.title}
                      </div>
                      <div className="w-full mb-1 -mt-8">
                        <Image
                          className={"w-10 mr-0 ml-auto"}
                          src="/assets/image/home/arrow-right-orange.png"
                          alt=">"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <Link href="/news/list">
          <div className="flex align-baseline justify-start pl-3 my-2 container mx-auto">
            <div className="text-orange tracking-widest text-sm mx-2">
              VIEW MORE
            </div>
            <>
              <Image
                className={"w-16 lg:w-24"}
                src="/assets/image/home/arrow-bellow-right.svg"
                alt="→"
                width={400}
                height={50}
              />
            </>
          </div>
        </Link>

        {/*  Section: Notification  ===========================================================  */}
        <>
          <SectionTitle
            title="お知らせ"
            subtitle="Notification"
            complementaryColor={false}
          />
        </>

        <div className="flex snap-x snap-mandatory overflow-scroll pl-3 hidden-scrollbar container mx-auto">
          {notifications.map((notification) => {
            return (
              <div className="w-5/6 snap-center flex-shrink-0 mx-4 md:w-1/3">
                <Link href={`notification/${notification.id}`}>
                  <div className="w-80 h-44 relative mx-auto my-2 md:w-full md:h-auto">
                    <Image
                      src={notification.cover.url}
                      className="h-full mx-auto rounded-lg"
                      alt="表紙画像"
                      width={640}
                      height={352}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <Link href="/notification/list">
          <div className="flex align-baseline justify-start pl-3 my-2 container mx-auto">
            <div className="text-orange tracking-widest text-sm mx-2">
              VIEW MORE
            </div>
            <>
              <Image
                className={"w-16 lg:w-24"}
                src="/assets/image/home/arrow-bellow-right.svg"
                alt="→"
                width={400}
                height={50}
              />
            </>
          </div>
        </Link>

        {/*  Section: Activity  ===========================================================  */}
        <>
          <SectionTitle
            title="池川明の活動"
            subtitle="ACTIVITY"
            complementaryColor={true}
          />
        </>

        <div className="bg-orange w-screen pt-28 -mt-36 md:-mt-72 md:pt-48">
          <div className="mx-auto container lg:flex lg:gap-8">
            <div className="w-5/6 bg-white rounded-xl my-12 py-6 mx-auto text-center">
              <h3 className="text-orange font-bold text-xl">
                イベント・講演会への登壇
              </h3>
              <>
                <Image
                  className={"w-5/6 rounded-lg mx-auto my-6"}
                  src="/assets/image/home/event_thumbnail.png"
                  alt="event"
                  width={725}
                  height={400}
                />
              </>
              <div className="w-5/6 mx-auto text-sm text-left md:my-2">
                <p className="my-3">
                  「胎内記憶」を通して、大人も子供も幸せになれるような講演をいたします。
                </p>
                <p className="my-3">
                  妊娠・出産を控える方だけでなく、新社会人向け・企業研修・結婚など、業界/規模/地域を問わず対応できますので、まずは、以下よりお気軽にお問いわせください。
                </p>
              </div>
              <Link href="/contacts/form">
                <div className="bg-naby rounded-full w-3/5 flex mx-auto py-2 justify-center mt-5">
                  <>
                    <Image
                      className={"w-[25px] mr-3"}
                      src="/assets/image/icon/common/send.svg"
                      alt="arrow_right"
                      width={23}
                      height={22}
                    />
                  </>
                  <div className="text-white text-lg">お問い合わせ</div>
                </div>
              </Link>
            </div>
            <div className="w-5/6 bg-white rounded-xl my-12 py-6 mx-auto text-center">
              <>
                <Image
                  className={"w-1/2 rounded-lg mx-auto my-2 md:w-1/3 md:my-0"}
                  src="/assets/image/logo/youtube.png"
                  alt="event"
                  width={2650}
                  height={570}
                />
              </>
              <>
                <Image
                  className={"w-5/6 rounded-lg mx-auto my-6"}
                  src="/assets/image/home/youtube_thumbnail.png"
                  alt="youtube"
                  width={725}
                  height={400}
                />
              </>
              <div className="w-5/6 mx-auto text-sm text-left md:my-2">
                <p className="my-3">
                  妊娠・出産は人生で最も重要なイベントのひとつで、多くの悩みを抱える期間です。
                </p>
                <p className="my-3">
                  YouTubeという誰でも無料で見ることのできるメディアで、産婦人科医・医学博士として、正しい情報やまだ一般には知られていない情報を中心に発信しています。
                </p>
              </div>
              <Link
                href="https://www.youtube.com/@AKIRAIKEGAWA"
                target="_blank"
              >
                <div className="bg-naby rounded-full w-3/5 flex mx-auto py-2 justify-center mt-5">
                  <>
                    <Image
                      className={"w-[30px] mx-1"}
                      src="/assets/image/logo/youtube-logo.png"
                      alt="arrow_right"
                      width={512}
                      height={512}
                    />
                  </>

                  <div className="text-white text-lg">Youtubeを見る</div>
                </div>
              </Link>
            </div>

            <div className="w-5/6 bg-white rounded-xl my-12 py-6 mx-auto text-center">
              <h3 className="text-orange font-bold text-xl">執筆活動</h3>
              <>
                <Image
                  className={"w-5/6 rounded-lg mx-auto my-6"}
                  src="/assets/image/home/book-thumbnail.png"
                  alt="book"
                  width={725}
                  height={400}
                />
              </>
              <div className="w-5/6 mx-auto text-sm text-left md:my-2">
                <p className="my-3">
                  これまでに30冊を超える「胎内記憶」をテーマとした著書を執筆してきました。
                </p>
                <p className="my-3">
                  Amazonではほとんどの著書が評価4.0以上であり、これまで22年間にわたって研究してきた「胎内記憶」を皆さんに広められて大変嬉しく思っております。
                </p>
              </div>

              <Link href={"/books/list"}>
                <div className="bg-naby rounded-full w-3/5 flex mx-auto py-2 justify-center mt-5">
                  <>
                    <Image
                      className={"w-[25px] mr-3"}
                      src="/assets/image/icon/common/loupe.svg"
                      alt="loupe"
                      width={23}
                      height={22}
                    />
                  </>
                  <div className="text-white text-lg">本を探す</div>
                </div>
              </Link>
            </div>
          </div>

          <div className="text-white font-bold opacity-10 text-7xl text-center lg:text-9xl lg:-mt-8">
            IKEGAWA
          </div>
        </div>

        <>
          <SectionTitle
            title="著書一覧"
            subtitle="BOOKS"
            complementaryColor={false}
          />
        </>

        <div className="w-11/12 mx-auto">
          <h2 className="text-naby text-xl font-bold my-2">池川明の著書一覧</h2>
          <div className="flex snap-x snap-mandatory overflow-scroll hidden-scrollbar">
            {books.map((book) => {
              return (
                <div className="w-2/5 snap-center flex-shrink-0 mr-5 lg:w-1/6">
                  <Link href={book.url} target="_blank">
                    <div className="relative mx-auto my-2">
                      <Image
                        src={book.cover.url}
                        alt="表紙画像"
                        width={500}
                        height={500}
                        className="rounded-lg"
                      />

                      <p className="text-xs my-2 line-clamp-2 md:text-base">
                        {book.title}
                      </p>

                      {book.tag != null ? (
                        <div className="text-center mx-auto px-1 my-2">
                          <span className=" bg-orange rounded-full mx-auto text-white px-2 py-1 line-clamp-1">
                            {book.tag}
                          </span>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <Link href="/books/list" className="flex align-baseline justify-end">
            <div className="text-orange tracking-widest text-sm mx-2">
              VIEW MORE
            </div>
            <div>
              <Image
                className={"w-16 lg:w-24"}
                src="/assets/image/home/arrow-bellow-right.svg"
                alt="→"
                width={400}
                height={50}
              />
            </div>
          </Link>
        </div>

        <>
          <SectionTitle
            title="お問い合わせ"
            subtitle="CONTACT"
            complementaryColor={false}
          />
        </>

        <div className="inherit z-0 -ml-1">
          <Image
            className={"w-screen"}
            src="/assets/image/common/contact-upper.svg"
            alt="background-upper"
            width={1275}
            height={261}
          />
        </div>
        <div className="inherit z-20 bg-orange text-white text-center -mt-4 pb-6 lg:-mt-28">
          <h2 className="font-bold text-xl md:text-4xl">
            お気軽にお問い合わせください。
          </h2>
          <p className="text-sm my-8 md:text-lg md:my-12">
            講演会について、診療について、池川明について など
            <br />
            どんなことでも構わないので、
            <br />
            お気軽にお問い合わせください！
          </p>
          <Link href="/contacts/form">
            <div className="relative bg-white rounded-full w-10/12 flex mx-auto py-3 justify-center mt-5 items-center md:w-1/3 md:py-4">
              <div className="text-naby text-lg font-bold">
                お問い合わせはこちら！
              </div>

              <Image
                className={"w-10 absolute right-2 "}
                src="/assets/image/home/arrow-right-orange.png"
                alt=">"
                width={100}
                height={100}
              />
            </div>
          </Link>
        </div>
        <div className="inherit z-0 -mt-2 -ml-1">
          <Image
            className={"w-screen"}
            src="/assets/image/common/contact-under.svg"
            alt="background-upper"
            width={1275}
            height={176}
          />
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const dataEvents = await eventClient.get({
    endpoint: "events",
  });
  const dataNews = await client.get({
    endpoint: "news",
    queries: { limit: 100 },
  });
  const dataNotifications = await client.get({
    endpoint: "notifications",
    queries: { limit: 100 },
  });
  const dataBooks = await client.get({
    endpoint: "books",
  });

  return {
    props: {
      events: dataEvents.contents,
      news: dataNews.contents,
      notifications: dataNotifications.contents,
      books: dataBooks.contents,
    },
  };
};

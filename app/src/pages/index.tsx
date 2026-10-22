import Seo from "../components/Seo";
import Link from "next/link";
import Image from "next/image";

import SectionTitle from "../components/common/SectionTitle";

// 旧ホームページ（ikegawaclinic.net）の掲載内容をもとにしている
type Info = {
  date: string;
  year: string;
  title: string;
  body: string;
};

const infos: Array<Info> = [
  {
    date: "10.21",
    year: "2026",
    title: "10月23日（金）の診療案内",
    body: "10月23日の診療は休診です。",
  },
  {
    date: "09.28",
    year: "2026",
    title: "10月休診のお知らせ",
    body: "10月10日（土）と23日（金）は休診となります。",
  },
  {
    date: "09.09",
    year: "2026",
    title: "2027年1月より診療時間変更のお知らせ",
    body: "2027年1月より午前診療のみとなります。診療曜日は火・水・金・土（月・木・日・祝日は休診）、診療時間は9:30〜12:00です。",
  },
];

const days = ["月", "火", "水", "木", "金", "土", "日・祝"];

const schedule = [
  { label: "午前", time: "9:30〜12:00", open: [1, 1, 1, 0, 1, 1, 0] },
  { label: "午後", time: "15:00〜17:00", open: [0, 0, 1, 0, 0, 0, 0] },
];

const closedDays = "木曜・日曜・祝日・年末年始";

const notes = [
  "学会出席などのため臨時休診があります。",
  "診療の予約制はとっておりません。予防接種のみ事前に電話でご予約ください（受付 平日12:00〜14:00）。",
  "分娩の取り扱いはしておりません。妊婦健診・産後健診・母乳ケアは引き続き行います。",
];

const address = "〒236-0035 横浜市金沢区大道2-5-13";
const tel = "045-786-1122";

type LinkItem = {
  title: string;
  url: string;
  icon?: { src: string; width: number; height: number };
};

const links: Array<LinkItem> = [
  {
    title: "Googleマップ",
    url: "https://www.google.com/maps/search/?api=1&query=%E6%B1%A0%E5%B7%9D%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF+%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%87%91%E6%B2%A2%E5%8C%BA%E5%A4%A7%E9%81%932-5-13",
  },
  { title: "電話する", url: "tel:0457861122" },
  {
    title: "お問い合わせ",
    url: "/contacts/form",
    icon: { src: "/assets/image/icon/common/send.svg", width: 23, height: 22 },
  },
  {
    title: "Youtubeを見る",
    url: "https://www.youtube.com/@AKIRAIKEGAWA",
    icon: { src: "/assets/image/logo/youtube-logo.png", width: 512, height: 512 },
  },
];

export default function Home() {
  return (
    <>
      <Seo
        pageDescription={
          "医師・医学博士 池川明の公式サイトです。クリニックからのご案内と診察日・休診日をお知らせします。"
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
          </div>
        </div>

        {/*  Section: クリニックからのご案内  ===========================================================  */}
        <>
          <SectionTitle
            title="クリニックからのご案内"
            subtitle="INFORMATION"
            complementaryColor={false}
          />
        </>

        <div className="flex snap-x snap-mandatory overflow-scroll pl-3 hidden-scrollbar container mx-auto">
          {infos.map((info) => {
            return (
              <div
                key={info.title}
                className="w-5/6 md:w-[30%] snap-center flex-shrink-0 mx-4"
              >
                <div className="relative border border-orange rounded-lg mx-auto my-2 h-[calc(100%-1rem)]">
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
                        <p>{info.date}</p>
                        <p className="text-xs">{info.year}</p>
                      </div>
                    </div>
                    <div className="mx-3">
                      <div className="mt-12 mb-6 mx-6 md:mt-14 md:mx-8">
                        <p className="font-bold text-naby">{info.title}</p>
                        <p className="text-sm mt-2 leading-relaxed">
                          {info.body}
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>

        {/*  Section: 診察日・休診日  ===========================================================  */}
        <>
          <SectionTitle
            title="診察日・休診日"
            subtitle="SCHEDULE"
            complementaryColor={true}
          />
        </>

        <div className="bg-orange w-screen pt-28 -mt-36 md:-mt-72 md:pt-48">
          <div className="mx-auto container">
            <div className="w-11/12 lg:w-3/4 bg-white rounded-xl my-12 py-8 mx-auto">
              <div className="w-11/12 mx-auto">
                <table className="w-full text-naby text-center text-sm md:text-lg">
                  <thead>
                    <tr className="border-b-2 border-orange">
                      <th className="py-3"></th>
                      {days.map((day) => (
                        <th key={day} className="py-3 font-bold">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((row) => (
                      <tr key={row.label} className="border-b border-orange">
                        <th className="py-4 text-left font-bold whitespace-nowrap">
                          {row.label}
                          <span className="block text-[10px] font-normal text-pale_gray md:text-sm">
                            {row.time}
                          </span>
                        </th>
                        {row.open.map((isOpen, i) => (
                          <td
                            key={i}
                            className={
                              isOpen
                                ? "py-4 text-orange text-lg md:text-2xl"
                                : "py-4 text-pale_gray text-lg md:text-2xl"
                            }
                          >
                            {isOpen ? "○" : "／"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-6 text-sm md:text-lg">
                  <span className="text-orange font-bold mr-3">休診日</span>
                  {closedDays}
                </p>
                <ul className="mt-4 text-xs leading-relaxed list-disc pl-5 md:text-sm">
                  {notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-orange text-sm md:text-base">
                  <p className="font-bold text-naby">池川クリニック</p>
                  <p>{address}</p>
                  <p>TEL {tel}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-white font-bold opacity-10 text-7xl text-center lg:text-9xl lg:-mt-8">
            IKEGAWA
          </div>
        </div>

        {/*  Section: リンク  ===========================================================  */}
        <>
          <SectionTitle
            title="リンク"
            subtitle="LINK"
            complementaryColor={false}
          />
        </>

        <div className="container mx-auto mb-24 flex flex-col gap-5 md:flex-row md:justify-center md:mb-60">
          {links.map((link) => {
            const isExternal = link.url.startsWith("http");
            return (
              <Link
                key={link.title}
                href={link.url}
                target={isExternal ? "_blank" : undefined}
                className="w-3/5 mx-auto md:w-1/5 md:mx-0"
              >
                <div className="bg-naby rounded-full flex py-2 justify-center items-center">
                  {link.icon && (
                    <Image
                      className={"w-[25px] mr-3"}
                      src={link.icon.src}
                      alt=""
                      width={link.icon.width}
                      height={link.icon.height}
                    />
                  )}
                  <div className="text-white text-lg">{link.title}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}

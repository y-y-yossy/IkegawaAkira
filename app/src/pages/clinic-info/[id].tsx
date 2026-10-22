//SSG
import type { ClinicInfo } from "../../types/ClinicInfo";
import { eventClient } from "@/src/libs/client";
import Link from "next/link";
import Image from "next/image";
import PageTopLogo from "@/src/components/common/PageTopLogo";
import Seo from "@/src/components/Seo";

type Props = {
  article: ClinicInfo;
};

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const data = await eventClient.get({
    endpoint: "clinic-info",
    contentId: id,
  });

  return {
    props: {
      article: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await eventClient.get({
    endpoint: "clinic-info",
    queries: { limit: 100 },
  });
  const paths = data.contents.map(
    (content: ClinicInfo) => `/clinic-info/${content.id}`
  );

  return {
    paths,
    fallback: false,
  };
};

export default function clinicInfoId({ article }: Props) {
  const date =
    new Date(article.date).getFullYear() +
    "." +
    new Date(article.date)
      .toLocaleString("ja-JP-u-ca-japanese", {
        month: "2-digit",
        day: "2-digit",
        timeZone: "Asia/Tokyo",
      })
      .toString()
      .replace("/", ".");
  return (
    <>
      <Seo
        pageTitle={`${article.title}`}
        pageDescription={`${article.title}についてのクリニックからのご案内です。`}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <PageTopLogo />
      <main className="w-[90%] mx-auto container">
        <h1 className="text-naby mt-24 mb-2 font-bold lg:w-2/3 md:text-2xl">
          {article.title}
        </h1>
        <div className="md:w-2/3">
          <p className="my-2 text-xs text-pale_gray md:text-sm md:my-4">
            {date}
          </p>
          <p className="mt-8 whitespace-pre-wrap leading-relaxed">
            {article.body}
          </p>
          {article.url && (
            <Link
              href={article.url}
              target="_blank"
              className="inline-block mt-6 text-orange underline"
            >
              詳しくはこちら
            </Link>
          )}
          <div className="mt-12 mb-40">
            <Link href="/" className="text-naby underline">
              トップページへ戻る
            </Link>
          </div>
        </div>
      </main>
      <div className="inherit z-0 -ml-1 mb-6 md:mb-12 mt-16">
        <Image
          className={"w-screen"}
          src="/assets/image/common/footer-upper.svg"
          alt="background-upper"
          width={390}
          height={53}
        />
      </div>
    </>
  );
}

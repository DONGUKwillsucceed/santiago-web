import Head from "next/head";

interface Props {
    title: string | undefined,
    description: string | undefined,
    url: string | undefined,
    image: string | undefined,
}

export default function HeadMeta({title, description, url, image }: Props) {
    return (
    <Head>
      <title>{title || "Santiago"}</title>
      <meta
        name="description"
        content={
          description ||
          "I am Santiago, a travel blog that covers information about travel in East Asia, Europe, and the Americas. I mainly focus on travel information related to East Asia and Europe. Additionally, I provide a platform for communication with local residents of these travel destinations as well as individuals who aspire to visit them."
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "Santiago"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://santiago.com"} />  {/* TODO: Default Open Graph 설정하기*/}
      <meta property="og:image" content={image} />
      <meta property="og:article:author" content="Santiago" />
    </Head>
  );
}
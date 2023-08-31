import Image from "next/image";

interface Props {
  imageUrl: string;
}

export default function MainAdContainer({ imageUrl }: Props) {
  return (
    <div className="flex justify-center">
    <div className="w-4/5 px-8">
      <Image
        src={imageUrl}
        alt={"main ad banner"}
        layout="responsive"
        width={1200}
        height={300}
        quality={100}
      />
    </div>
    </div>
  );
}

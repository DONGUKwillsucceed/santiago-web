import Image from "next/image";

export default function EmptyCase() {
  return (
    <div className="grid place-items-center">
      <div className="h-3"></div>
      <div className="flex-col content-center">
        <Image
          className="m-auto"
          src="/santiago_gray.svg"
          alt="santiago"
          width={120}
          height={20}
        />
        <div className="h-2"></div>
        <p className="text-xs text-gray-500">
          이런, 아직은 검색결과가 없습니다.
        </p>
      </div>
      <div className="h-3"></div>
    </div>
  );
}

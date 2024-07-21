import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center h-[256px] bg-dark-blue text-white px-[104px] space-y-[32px]">
      <Image
        src="/kb-logo.png"
        alt="Kwentong Barbero"
        width={147.25}
        height={75}
        style={{
          height: "auto",
        }}
      />
      <div
        className="text-white"
        style={{
          fontSize: "0.875rem",
        }}
      >
        Copyright 2024 Kwentong Barbero. Created by Bord Studios
      </div>
    </footer>
  );
}

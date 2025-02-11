import Image from "next/image";
import { FC } from "react";

export const LogoTextLink = ({ href }: { href?: string }) => (
  <a href={href} className="text-xl">
    <div>
      <span className="text-yellow-300 font-bold">Sala</span>
      <span className="text-yellow-300 font-normal"> do</span>
      <span className="text-blue-600"> empreendedor</span>
    </div>
  </a>
);

export const LogoText: FC<{ className?: string }> = ({ className }) => (
  <div className={className}>
    <span className="text-yellow-300 font-bold">Sala</span>
    <span className="text-yellow-300 font-normal"> do</span>
    <span className="text-blue-600"> empreendedor</span>
  </div>
);

export const LogoIcon = () => <div>
  <Image className="h-8 w-8 md:h-10 md:w-10" src="/logo.png" alt="Logo sala do empreendedor" width={35} height={35} />
</div>

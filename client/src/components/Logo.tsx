import Image from "next/image";

export const LogoTextLink = ({ href }: { href?: string }) => (
  <a href={href} className="btn btn-ghost text-xl">
    <div>
      <span className="text-yellow-300 font-bold">Sala</span>
      <span className="text-yellow-300 font-normal"> do</span>
      <span className="text-blue-600"> empreendedor</span>
    </div>
  </a>
);

export const LogoText = () => (
  <div>
    <span className="text-yellow-300 font-bold">Sala</span>
    <span className="text-yellow-300 font-normal"> do</span>
    <span className="text-blue-600"> empreendedor</span>
  </div>
);

export const LogoIcon = () => <div>
  <Image className="h-auto w-auto" src="/logo.png" alt="Logo sala do empreendedor" width={35} height={35} />
</div>

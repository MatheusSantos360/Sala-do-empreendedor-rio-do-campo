import { LogoText } from "./Logo";

export const Hero = () => {
  return (
    <div
      className="hero mb-10"
      style={{
        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 p-8 md:p-16 lg:p-32 xl:p-64"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-bold">
            Bem vindo à <LogoText />
          </h1>
          <p className="mb-5 text-sm md:text-base">
            A Sala do Empreendedor é um espaço dedicado a apoiar micro e pequenos empresários e Microempreendedores Individuais (MEI). Oferecemos
            orientações, capacitações e suporte técnico para facilitar a abertura, formalização e expansão de negócios, impulsionando o crescimento
            econômico local.
          </p>
        </div>
      </div>
    </div>
  );
};
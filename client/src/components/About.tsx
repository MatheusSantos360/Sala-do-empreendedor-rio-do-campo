import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="bg-base-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Sobre
        </h1>
        
        {/* First Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
          <div className="card bg-base-200 p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-primary">
              O que é a Sala do Empreendedor?
            </h2>
            <p className="text-base-content opacity-90 text-center leading-relaxed">
              A Sala do Empreendedor é uma iniciativa do Sebrae em parceria com a prefeitura do nosso município, criada para apoiar e orientar micro e 
              pequenos empresários, assim como Microempreendedores Individuais (MEI). Nosso objetivo é facilitar o processo de formalização, 
              regularização e crescimento dos negócios locais, promovendo um ambiente propício para o desenvolvimento econômico.
            </p>
          </div>
          
          <div className="card overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/entrepreneur-thinking.jpg"
              alt="Imagem ilustrativa da Sala do Empreendedor"
              width={3000}
              height={3000}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        
        {/* Second Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="card overflow-hidden rounded-lg shadow-lg order-2 lg:order-1">
            <Image
              src="/entrepreneur-writing.jpg"
              alt="Imagem ilustrativa da Sala do Empreendedor"
              width={3000}
              height={3000}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <div className="card bg-base-200 p-6 md:p-8 rounded-lg shadow-md order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-primary">
              História e Missão
            </h2>
            <p className="text-base-content opacity-90 text-center leading-relaxed">
              A Sala do Empreendedor foi inaugurada em 2024 com a missão de oferecer suporte integral aos empreendedores do município. 
              Desde então, temos ajudado inúmeros empresários a alcançar seus objetivos, oferecendo uma variedade de serviços essenciais para a gestão 
              e expansão de negócios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
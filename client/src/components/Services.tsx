export const Services = () => {
  return (
    <section id="services" className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Serviços oferecidos</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First card with a subtle border */}
          <div className="card bg-base-100 drop-shadow-2xl hover:shadow-2xl transition-shadow duration-200 dark:bg-base-800">
            <div className="card-body">
              <h3 className="card-title text-2xl font-semibold mb-4">Orientação Empresarial</h3>
              <p className="text-base-content opacity-80">
                Consultas gratuitas para novos e atuais empresários, cobrindo desde a abertura de negócios até estratégias de crescimento.
              </p>
              <p className="text-base-content opacity-70 mt-2">Agendamento online ou presencial na Sala do Empreendedor.</p>
            </div>
          </div>

          {/* Cards with improved shadows and hover effects */}
          <div className="card bg-base-100 drop-shadow-2xl hover:shadow-2xl transition-shadow duration-200 dark:bg-base-800">
            <div className="card-body">
              <h3 className="card-title text-2xl font-semibold mb-4">Formalização de Empresas</h3>
              <p className="text-base-content opacity-80">Assistência passo a passo para legalizar um negócio, incluindo a obtenção do CNPJ.</p>
              <p className="text-base-content opacity-70 mt-2">Atendimento presencial ou online, com orientação sobre os documentos necessários.</p>
            </div>
          </div>

          <div className="card bg-base-100 drop-shadow-2xl hover:shadow-2xl transition-shadow duration-200 dark:bg-base-800">
            <div className="card-body">
              <h3 className="card-title text-2xl font-semibold mb-4">Capacitação e Treinamentos</h3>
              <p className="text-base-content opacity-80">
                Cursos, workshops e palestras em áreas como finanças, marketing, gestão de negócios e inovação.
              </p>
              <p className="text-base-content opacity-70 mt-2">Inscrições abertas através do site ou na Sala do Empreendedor.</p>
            </div>
          </div>

          <div className="card bg-base-100 drop-shadow-2xl hover:shadow-2xl transition-shadow duration-200 dark:bg-base-800">
            <div className="card-body">
              <h3 className="card-title text-2xl font-semibold mb-4">Apoio ao Crédito</h3>
              <p className="text-base-content opacity-80">
                Orientação sobre como acessar linhas de crédito e financiamento, incluindo parcerias com instituições financeiras.
              </p>
              <p className="text-base-content opacity-70 mt-2">Consultas com especialistas financeiros disponíveis na Sala do Empreendedor.</p>
            </div>
          </div>

          <div className="card bg-base-100 drop-shadow-2xl hover:shadow-2xl transition-shadow duration-200 dark:bg-base-800">
            <div className="card-body">
              <h3 className="card-title text-2xl font-semibold mb-4">Regulamentação e Obrigações</h3>
              <p className="text-base-content opacity-80">Suporte para entender e cumprir obrigações fiscais, trabalhistas e ambientais.</p>
              <p className="text-base-content opacity-70 mt-2">Sessões de orientação e materiais informativos disponíveis na Sala do Empreendedor.</p>
            </div>
          </div>

          <div className="card bg-base-100 drop-shadow-2xl hover:shadow-2xl transition-shadow duration-200 dark:bg-base-800">
            <div className="card-body">
              <h3 className="card-title text-2xl font-semibold mb-4">Microempreendedor Individual (MEI)</h3>
              <p className="text-base-content opacity-80">
                Serviços específicos para MEIs, incluindo formalização, declaração anual e emissão de notas fiscais.
              </p>
              <p className="text-base-content opacity-70 mt-2">Atendimento especializado na Sala do Empreendedor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

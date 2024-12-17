import { ItemsProps } from "@/types/ItemsProps";

export const returnMaterials = (): ItemsProps[] => {
  const materials: ItemsProps[] = [...MEIMaterials, ...testMaterials];

  return materials;
};

const MEIMaterials = [
  {
    id: 1,
    title: "MEI",
    cards: [
      {
        title: "ABERTURA/FORMALIZAÇÃO – MEI",
        href: "/does/not/exist",
        image: {
          url: "/entrepreneur-writing.jpg",
          alt: "Thumbnail de ABERTURA/FORMALIZAÇÃO – MEI",
        },
        description: "Inicie sua jornada aqui. Basta clicar e inserir seus dados para abrir seu MEI.",
      },
      {
        title: "ATUALIZAÇÃO DE DADOS MEI",
        href: "/does/not/exist",
        image: {
          url: "/entrepreneur-writing.jpg",
          alt: "Thumbnail de ATUALIZAÇÃO DE DADOS MEI",
        },
        description: "Atualize os dados do seu MEI como endereço, telefone, atividades, entre outras informações.",
      },
      {
        title: "EMISSÃO GUIA MENSAL",
        href: "/does/not/exist",
        image: {
          url: "/entrepreneur-writing.jpg",
          alt: "Thumbnail de EMISSÃO GUIA MENSAL",
        },
        description: "Acesse o Programa Gerador de DAS do Microempreendedor Individual para emitir seu boleto mensal do MEI.",
      },
      {
        title: "COMPROVANTE DE MEI – CCMEI",
        href: "/does/not/exist",
        image: {
          url: "/entrepreneur-writing.jpg",
          alt: "Thumbnail de COMPROVANTE DE MEI – CCMEI",
        },
        description: "Emita seu Certificado da Condição do Microempreendedor Individual (CCMEI).",
      },
      {
        title: "PARCELAMENTO E EMISSÃO GUIAS DO PARCELAMENTO",
        href: "/does/not/exist",
        image: {
          url: "/entrepreneur-writing.jpg",
          alt: "Thumbnail de PARCELAMENTO E EMISSÃO GUIAS DO PARCELAMENTO",
        },
        description:
          "Efetue Mensalmente a emissão das guias de seu parcelamento das guias DAS do seu MEI. Obs.: Serviço deve ser acessado depois do dia 10 de cada mês.",
      },
      {
        title: "DECLARAÇÃO ANUAL DE FATURAMENTO MEI – DASN",
        href: "/does/not/exist",
        image: {
          url: "/entrepreneur-writing.jpg",
          alt: "Thumbnail de DECLARAÇÃO ANUAL DE FATURAMENTO MEI – DASN",
        },
        description: "Efetue sua declaração anual de faturamento, a mesma deve ser realizada sempre de janeiro a maio no Portal do Empreendedor.",
      },
      {
        title: "BAIXA MEI",
        href: "/does/not/exist",
        image: {
          url: "/entrepreneur-writing.jpg",
          alt: "Thumbnail de BAIXA MEI",
        },
        description: "Acesse aqui para realizar a baixa do seu CNPJ MEI.",
      },
      {
        title: "PARCELAMENTO DA DÍVIDA ATIVA",
        href: "/does/not/exist",
        image: {
          url: "/entrepreneur-writing.jpg",
          alt: "Thumbnail de PARCELAMENTO DA DÍVIDA ATIVA",
        },
        description: "Acesse aqui os serviços do portal REGULARIZE, parcelas e emissão de guias da dívida ativa.",
      },
      {
        title: "CONCEITO E REQUISITOS BÁSICOS",
        href: "/does/not/exist",
        image: {
          url: "/entrepreneur-writing.jpg",
          alt: "Thumbnail de SITE BOMBEIROS",
        },
        description: "Saiba mais sobre o Microempreendedor Individual (MEI), seus requisitos básicos, vantagens e obrigações.",
      },
      {
        title: "FORMALIZAÇÃO",
        href: "/does/not/exist",
        image: {
          url: "/entrepreneur-writing.jpg",
          alt: "Thumbnail de SITE BOMBEIROS",
        },
        description: "Encontre um passo a passo da formalização e as informações necessárias para estar regular perante os órgãos licenciadores.",
      },
      {
        title: "EMISSÃO DA GUIA DAS-MEI",
        href: "/does/not/exist",
        image: {
          url: "/entrepreneur-writing.jpg",
          alt: "Thumbnail de SITE BOMBEIROS",
        },
        description: "Acompanhe o passo a passo para a emissão da guia DAS e conheça os atributos devitos pelo MEI.",
      },
      {
        title: "DECLARAÇÃO ANUAL DASN-MEI",
        href: "/does/not/exist",
        image: {
          url: "/entrepreneur-writing.jpg",
          alt: "Thumbnail de SITE BOMBEIROS",
        },
        description: "Aprenda como fazer você mesmo a declaração anual seguindo as intruções do Sebrae SC.",
      },
      {
        title: "BENEFÍCIOS PREVIDENCIÁRIOS",
        href: "/does/not/exist",
        image: {
          url: "/entrepreneur-writing.jpg",
          alt: "Thumbnail de SITE BOMBEIROS",
        },
        description: "Se informe a respeito dos direitos previdenciários do MEI e o que fazer para obtê-los.",
      },
      {
        title: "MEI CONTRATAÇÃO DE EMPREGADO",
        href: "/does/not/exist",
        image: {
          url: "/entrepreneur-writing.jpg",
          alt: "Thumbnail de SITE BOMBEIROS",
        },
        description: "Conheça as regras e cuidados que o MEI deverá observar na hora de contratar um empregado.",
      },
      {
        title: "EMISSÃO DE NOTA FISCAL",
        href: "/does/not/exist",
        image: {
          url: "/entrepreneur-writing.jpg",
          alt: "Thumbnail de SITE BOMBEIROS",
        },
        description: "Fique por dentro das regras e tipos de notas fiscais, bem como o caminho para emiti-las.",
      },
      {
        title: "ALTERAÇÃO E BAIXA DO MEI",
        href: "/does/not/exist",
        image: {
          url: "/entrepreneur-writing.jpg",
          alt: "Thumbnail de SITE BOMBEIROS",
        },
        description: "Saiba como realizar alterações cadastrais do seu MEI e como baixá-lo.",
      },
    ],
  },
];

const testMaterials: ItemsProps[] = [
  {
      id: 2,
      title: "Estudos",
      cards: [
          {
              title: "Matemática - Fundamentos",
              href: "/does/not/exist",
              image: {
                  url: "/entrepreneur-writing.jpg",
                  alt: "Thumbnail de Matemática - Fundamentos"
              },
              description: "Explore os conceitos básicos de matemática, incluindo álgebra, geometria e cálculo."
          },
          {
              title: "História - Era Medieval",
              href: "/does/not/exist",
              image: {
                  url: "/entrepreneur-writing.jpg",
                  alt: "Thumbnail de História - Era Medieval"
              },
              description: "Aprenda sobre a era medieval, suas principais figuras, eventos e impactos históricos."
          },
          {
              title: "Biologia - Sistema Imunológico",
              href: "/does/not/exist",
              image: {
                  url: "/entrepreneur-writing.jpg",
                  alt: "Thumbnail de Biologia - Sistema Imunológico"
              },
              description: "Entenda o funcionamento do sistema imunológico humano e como ele protege o corpo contra doenças."
          },
          {
              title: "Física - Leis de Newton",
              href: "/does/not/exist",
              image: {
                  url: "/entrepreneur-writing.jpg",
                  alt: "Thumbnail de Física - Leis de Newton"
              },
              description: "Estude as leis de Newton e como elas se aplicam ao movimento dos objetos."
          },
          {
              title: "Química - Tabela Periódica",
              href: "/does/not/exist",
              image: {
                  url: "/entrepreneur-writing.jpg",
                  alt: "Thumbnail de Química - Tabela Periódica"
              },
              description: "Conheça os elementos da tabela periódica, suas propriedades e suas aplicações."
          },
          {
              title: "Geografia - Climas do Mundo",
              href: "/does/not/exist",
              image: {
                  url: "/entrepreneur-writing.jpg",
                  alt: "Thumbnail de Geografia - Climas do Mundo"
              },
              description: "Descubra os diferentes climas ao redor do mundo e suas características."
          },
          {
              title: "Literatura - Clássicos",
              href: "/does/not/exist",
              image: {
                  url: "/entrepreneur-writing.jpg",
                  alt: "Thumbnail de Literatura - Clássicos"
              },
              description: "Explore os grandes clássicos da literatura mundial e suas contribuições para a cultura."
          },
          {
              title: "Informática - Programação",
              href: "/does/not/exist",
              image: {
                  url: "/entrepreneur-writing.jpg",
                  alt: "Thumbnail de Informática - Programação"
              },
              description: "Aprenda os fundamentos da programação e comece a escrever seus próprios códigos."
          }
      ]
  }
];

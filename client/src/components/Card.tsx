import { Card as CardProps } from "@/types/Card";
import Image from "next/image";
import { useState } from "react";

interface CardComponentProps {
  cards: CardProps[];
  edit?: boolean;
}

export const Card: React.FC<CardComponentProps> = ({ cards, edit }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    if (edit) {
      setHoveredCard(index);
    }
  };

  const handleMouseLeave = () => {
    if (edit) {
      setHoveredCard(null);
    }
  };

  const handleEdit = (index: number) => {
    console.log(`Editar card ${index}`);
    // Lógica para editar o card
  };

  const handleDelete = (index: number) => {
    console.log(`Excluir card ${index}`);
    // Lógica para excluir o card
  };

  return (
    <div className="flex flex-wrap gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="card bg-base-100 w-[270px] shadow-xl hover:scale-105 duration-150 relative"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Exibe os ícones de edição apenas se `edit` for true e o card estiver hovered */}
          {edit && hoveredCard === index && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4">
              <button
                className="p-2 bg-transparent rounded-md hover:bg-base-100 duration-100 border-blue-500 border-[1px]"
                onClick={() => handleEdit(index)}
              >
                ✏️
              </button>
              <button
                className="p-2 bg-transparent rounded-md hover:bg-base-100 duration-100 border-red-500 border-[1px]"
                onClick={() => handleDelete(index)}
              >
                🗑️
              </button>
              <a
                href={card.href}
                target="_blank"
                className="p-2 bg-transparent rounded-md hover:bg-base-100 duration-100 border-gray-500 border-[1px]"
              >
                🔗
              </a>
            </div>
          )}
          <a href={card.href} target="_blank" rel="noreferrer">
            <figure>
              <Image src={card.image.url} width={270} height={270} alt={""} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {card.title}
                {card.badges?.map((badge, idx) => (
                  <div key={idx} className="badge badge-primary">
                    {badge}
                  </div>
                ))}
              </h2>
              <p>{card.description}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

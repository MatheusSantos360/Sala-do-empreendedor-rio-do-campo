"use client";

import { CardProps, ItemsProps } from "@/types/ItemsProps";
import { returnMaterials } from "@/utils/returnMaterials";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";


export const Materials: React.FC = () => {
  const items: ItemsProps[] = returnMaterials();

  const [selectedItem, setSelectedItem] = useState<ItemsProps | null>(items[0]);

  return (
  <div id="materials  " className="w-full min-h-[500px] bg-base-100 rounded-xl shadow-lg overflow-hidden">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary">
        Materiais
      </h1>

      <div className="flex">
        {/* Items list */}
        <div className="w-1/3 border-r border-base-200 p-4">
          {items.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`
                cursor-pointer 
                p-4 
                mb-2 
                rounded-lg 
                transition-colors 
                duration-300
                ${selectedItem?.id === item.id ? "bg-primary text-primary-content" : "hover:bg-base-200"}
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="font-bold">{item.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Items contents */}
        <AnimatePresence mode="wait">
          {selectedItem && (
            <motion.div
              key={selectedItem.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-2/3 p-8 flex flex-col justify-center"
            >
              <Card cards={selectedItem.cards} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Card: React.FC<{ cards: CardProps[] }> = ({ cards }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {cards.map((card, index) => (
        <div key={index} className="card bg-base-100 w-[270px] shadow-xl hover:scale-105 duration-150">
          <a href={card.href}>
            <figure>
              <Image src={card.image.url} width={270} height={270} alt={card.image.alt} />
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

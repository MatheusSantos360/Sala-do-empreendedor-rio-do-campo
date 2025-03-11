"use client";

import { Category } from "@/types/Category";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Card } from "./Card";
import { useMaterials } from "@/utils/returnMaterials";
import Loading from "@/app/loading";
import { NewCategoryModal } from "./ModalButton";
import { handleNewCategoryForm } from "@/utils/handleNewCategoryForm";

export const Materials: React.FC<{ edit?: true }> = ({ edit }) => {
  const [formData, setFormData] = useState<{ title: string }>({ title: "" });
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  
  const { loading, categories } = useMaterials(setSelectedCategory);
  
  if (loading) return <Loading />;
  
  return (
    <div id="materials" className="w-full min-h-[500px] bg-base-100 rounded-xl shadow-lg overflow-hidden p-4 pt-6">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary">Materiais</h1>

      {edit && (
        <div className="flex justify-end px-4 gap-2">
          <NewCategoryModal id="new-category" title="Nova Categoria">
            <form onSubmit={handleNewCategoryForm}>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Título</span>
                </div>
                <input type="text" placeholder="Título aqui" className="input input-bordered w-full max-w-xs" required />
                <div className="label">
                </div>
              </label>
            </form>
          </NewCategoryModal>
          <NewCategoryModal id="new-card" title="Novo Card">
            ...
          </NewCategoryModal>
        </div>
      )}

      <div className="sm:flex">
        {/* Items list */}
        <div className="w-screen sm:w-1/3 border-r border-base-200 p-4">
          {categories.map((category) => (
            <motion.div
              key={category._id}
              onClick={() => setSelectedCategory(category)}
              className={`
                cursor-pointer 
                p-4 
                mb-2
                rounded-lg 
                transition-colors 
                duration-300
                ${selectedCategory?._id === category._id ? "bg-primary text-primary-content" : "hover:bg-base-200"}
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className={`font-bold flex ${edit ? "justify-between items-center" : ""}`}>
                {category.title}

                {edit && (
                  <div className="mt-2">
                    <button className="p-2 bg-transparent rounded-md hover:bg-base-100 duration-100 border-blue-500 border-[1px]">✏️</button>
                    <button className="p-2 bg-transparent rounded-md hover:bg-base-100 duration-100 border-red-500 border-[1px]">🗑️</button>
                  </div>
                )}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Items contents */}
        <AnimatePresence mode="wait">
          {selectedCategory && (
            <motion.div
              key={selectedCategory._id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="sm:w-2/3 p-8 flex flex-col justify-center items-center w-screen"
            >
              <Card cards={selectedCategory.cards} edit={edit} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

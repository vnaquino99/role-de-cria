import React from "react";
import { IoMdClose } from "react-icons/io";

const ServicoModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  // Fecha ao clicar no fundo
  const handleOverlayClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  // Impede fechar ao clicar dentro do conteúdo
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-teal-950/50 flex justify-center items-center z-50 px-4 py-8"
      onClick={handleOverlayClick}
    >
      <div
        className="text-teal-950 bg-amber-200 rounded-lg p-6 shadow-xl 
        w-full max-w-md md:max-w-xl lg:max-w-2xl 
        max-h-[90vh] overflow-y-auto 
        scrollbar-thin scrollbar-thumb-teal-950 scrollbar-track-transparent"
        onClick={handleContentClick}
      >
        {/* Botão para fechar */}
        <div className="flex justify-end mb-2">
          <IoMdClose
            onClick={onClose}
            className="font-bold text-2xl cursor-pointer hover:text-red-600 transition-colors"
          />
        </div>

        {/* Conteúdo dinâmico */}
        {children}
      </div>
    </div>
  );
};

export default ServicoModal;

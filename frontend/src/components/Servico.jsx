import ServicoModal from "./ServicoModal";
import { useState, useEffect } from "react";

const Servico = ({ servico }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div
      className="bg-teal-100/10 shadow-stone-950/20 shadow-md rounded-2xl p-6 h-auto flex flex-col gap-4 cursor-pointer max-w-full md:max-w-[600px]"
      onClick={() => setIsModalOpen(true)}
    >
      <div className="flex justify-between items-start flex-wrap gap-2">
        <span className="text-xl md:text-2xl text-amber-200 font-bold">
          {servico.nome}
        </span>
        <span
          className={`${
            servico.dificuldade === "Fácil"
              ? "bg-green-400"
              : servico.dificuldade === "Médio"
              ? "bg-yellow-400"
              : "bg-red-500"
          } text-teal-950 self-center px-3 py-1 rounded-lg font-bold text-sm md:text-base`}
        >
          {servico.dificuldade}
        </span>
      </div>

      <img
        className="rounded-lg w-full max-h-[240px] object-cover"
        src={servico.imagens[0]}
        alt={servico.nome}
      />

      <p className="bg-teal-100/10 p-3 rounded-xl text-amber-200 text-center font-medium indent-2 text-sm md:text-base">
        {servico.descricao}
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center bg-teal-100/10 rounded-xl text-amber-400 text-sm font-medium px-3 py-2 gap-2">
        <span>
          Duração: <span className="font-light text-amber-200">{servico.duracao}</span>
        </span>
        <span>
          Preço: <span className="text-amber-200 font-light">{servico.preco}</span>
        </span>
        <span>
          Categoria: <span className="text-amber-200 font-light">{servico.categoria}</span>
        </span>
      </div>

      <div className="mx-auto bg-amber-200 px-4 py-2 rounded-2xl text-center tracking-widest font-medium text-teal-950 w-full hover:bg-amber-500 transition-colors text-sm md:text-base"
      onClick={(e) => e.stopPropagation()}>
        Agendar
      </div>

      {/* MODAL */}
      <ServicoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl md:text-2xl font-medium tracking-widest">{servico.nome}</h2>

        <img
          src={servico.imagens[0]}
          alt={servico.nome}
          className="mt-4 rounded-lg w-full max-h-[300px] object-cover"
        />

        <p className="mt-4 font-medium indent-2 text-sm md:text-base">{servico.descricao}</p>

        <h3 className="text-lg font-semibold tracking-wide mt-6 mb-2">Ponto de Encontro:</h3>

        <iframe
          src={servico.urlMapa}
          frameBorder="0"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>

        <div className="flex flex-col md:flex-row justify-between text-teal-950 text-sm font-medium w-full mt-4 gap-2">
          <span>
            Duração: <span className="font-light">{servico.duracao}</span>
          </span>
          <span>
            Preço: <span className="font-light">{servico.preco}</span>
          </span>
          <span>
            Categoria: <span className="font-light">{servico.categoria}</span>
          </span>
        </div>

        <div className="mx-auto bg-amber-500 px-4 py-2 rounded-2xl text-center tracking-widest font-medium text-teal-950 w-full hover:bg-amber-200 transition-colors mt-4 text-sm md:text-base">
          Agendar
        </div>
      </ServicoModal>
    </div>
  );
};

export default Servico;

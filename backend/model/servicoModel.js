import mongoose from "mongoose";

const servicoSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    imagens: [{ type: String }], // URLs das imagens
    descricao: { type: String, required: true },
    urlMapa: { type: String },
    duracao: { type: String },
    categoria: { type: String },
    preco: { type: Number },
    dificuldade: { type: String },
    fornecedor: { type: String, ref: "User" },
    localizacao: {
      lat: Number,
      lng: Number,
    },
    avaliacao: { type: Number, default: 0 },
    quantidadeMaxima: Number,
    tags: [String],
    status: { type: String, default: "ativo" },
    idiomas: [String],
    politicaCancelamento: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Servico", servicoSchema);

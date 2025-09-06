// src/components/FormularioAvaliacao.jsx

import { useState } from "react";
// IMPORTANDO AS IMAGENS
import starIcon from "../assets/star.svg";
import like from "../assets/like.svg";
import deslike from "../assets/deslike.svg";

function FormularioAvaliacao() {
  // --- ESTADOS (A memória do componente) ---
  const [nota, setNota] = useState(0);
  const [resolvido, setResolvido] = useState(null); // null = sem resposta
  const [comentario, setComentario] = useState("");
  const estrelas = [1, 2, 3, 4, 5]; // Um array para representar nossas 5 estrelas

  // --- FUNÇÕES (As ações do componente) ---
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validação simples para garantir que responderam
    if (!resolvido) {
      alert("Por favor, informe se sua solicitação foi resolvida.");
      return; // Para a execução da função
    }

    const avaliacaoCompleta = { nota, resolvido, comentario }; // Forma curta de escrever {nota: nota, ...}
    console.log("Avaliação enviada:", avaliacaoCompleta);
    alert("Obrigado pela sua avaliação!");
  };

  // --- RENDERIZAÇÃO (A parte visual do componente) ---
  return (
    <main>
      <div className="container-form">
        <p>Como você avalia sua experiência com o atendimento prestado por Railson em 02/09/2025 às 15:36?</p>

        <form onSubmit={handleSubmit}>
          {/* Seção de Estrelas*/}
          <div className="rating">
            <label>Clique em uma ou mais estrelas para avaliar</label>
            <div>
              {estrelas.map((valorEstrela) => (
                <img
                  key={valorEstrela} // Chave única para cada item da lista, essencial em loops no React
                  src={starIcon}
                  alt={`Estrela ${valorEstrela}`}
                  onClick={() => setNota(valorEstrela)}
                  // A classe muda se a nota for maior ou igual ao valor da estrela
                  className={
                    nota >= valorEstrela
                      ? "estrela-selecionada"
                      : "estrela-default"
                  }
                />
              ))}
            </div>
          </div>
          <div className="feedback">
            <p>Sua solicitação foi resolvida?</p>
            <div>
              <img
                src={like} // Usando a variável importada
                alt="Gostei"
                onClick={() => setResolvido("sim")}
                className={resolvido === "sim" ? "selecionado" : ""}
              />
              <img
                src={deslike} // Usando a variável importada
                alt="Não Gostei"
                onClick={() => setResolvido("nao")}
                className={resolvido === "nao" ? "selecionado" : ""}
              />
            </div>
          </div>

          <div className="div-comentario">
            <label htmlFor="comentario">
              Deseja acrescentar algo mais? (opcional)
            </label>
            <textarea
              id="comentario"
              placeholder="Escreva aqui sua sugestão"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
            />
          </div>

          <div className="buttons">
            <button type="button">DESCONHEÇO O ATENDIMENTO</button>
            <button type="submit" className="btn-enviar">
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default FormularioAvaliacao;

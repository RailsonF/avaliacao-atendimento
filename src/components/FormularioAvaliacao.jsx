// Importação padrão do react
import { useState } from "react";

// Importando as imagens
import starIcon from "../assets/star.svg";
import starSelected from "../assets/star-selected.svg"
import like from "../assets/like.svg";
import deslike from "../assets/deslike.svg";
import likeGreen from "../assets/likeGreen.svg"
import deslikeRed from "../assets/deslikeRed.svg"

function FormularioAvaliacao() {
  // Estados do componente
  const [nota, setNota] = useState(0);
  const [resolvido, setResolvido] = useState(null);
  const [comentario, setComentario] = useState("");
  const estrelas = [1, 2, 3, 4, 5]; // Um array para representar as 5 estrelas

  // Função do componete
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validação simples
    if (!resolvido) {
      alert("Por favor, informe se sua solicitação foi resolvida.");
      return; // Para a execução da função
    }

    const avaliacaoCompleta = { nota, resolvido, comentario }; //Objeto que guarda as respostas
    console.log("Avaliação enviada:", avaliacaoCompleta);
    alert("Obrigado pela sua avaliação!");
  };

  // Parte visual do componente
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
                  key={valorEstrela}
                  src={nota >= valorEstrela ? starSelected : starIcon}
                  alt={`Estrela ${valorEstrela}`}
                  onClick={() => setNota(valorEstrela)}
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
                src={resolvido === "sim" ? likeGreen : like}
                alt="Gostei"
                onClick={() => setResolvido("sim")}
              />
              <img
                src={resolvido === "nao" ? deslikeRed : deslike}
                onClick={() => setResolvido("nao")}
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
            <button type="submit" className="btn-enviar">ENVIAR</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default FormularioAvaliacao;

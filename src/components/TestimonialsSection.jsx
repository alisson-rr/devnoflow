import React from "react";
import MedbraImg from "../assets/Medbra.png";
import FixwearImg from "../assets/Fixwear.png";


const testimonials = [
  {
    text: "Estamos felizes como fluiu as coisas e por termos te encontrado, me decepcionei com bastantes devs nesse percurso. Você parece um cara de palavra e com responsabilidades no seu trabalho. Abraço.",
    name: "Tiago G. Estevam",
    company: "MedBra",
    photo: MedbraImg,
  },
  {
    text: "Bahh, muito show!! 👏👏👏 Sério, ficou muito legal. Bem claro, objetivo… ficou top!",
    name: "Guilherme Marcon",
    company: "FixWear",
    photo: FixwearImg,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-orange-400 font-semibold tracking-wider animate-on-scroll">
            DEPOIMENTOS REAIS
          </h3>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-white animate-on-scroll">
            Palavras Que Vendem Sozinhas
          </h2>
          <p className="mt-6 text-gray-400 md:text-lg animate-on-scroll">
            Veja o que clientes dizem depois de terem uma experiência fora do comum
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Vídeo do depoimento */}
          <div className="w-full md:w-1/2 flex flex-col items-center rounded-xl overflow-hidden shadow-lg animate-on-scroll">
            <video
              src={require("../assets/Iconico.mp4")}
              controls
              className="w-full max-w-[500px] h-auto object-cover rounded-xl"
            />
            <div className="mt-4 text-purple-400 font-semibold text-base text-center">
              Vinicius Rezende <span className="text-gray-400 font-normal">- Iconico</span>
            </div>
          </div>
          {/* Cards de depoimentos */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-zinc-800/80 rounded-xl p-6 flex flex-col md:flex-row items-center shadow-md animate-on-scroll"
                style={{ '--delay': `${0.2 + idx * 0.2}s` }}
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple-400 mr-0 md:mr-6 mb-4 md:mb-0"
                  loading="lazy"
                />
                <div className="text-center md:text-left">
                  <p className="text-gray-200 text-lg mb-2">"{t.text}"</p>
                  <div className="text-purple-400 font-semibold text-base">
                    {t.name} <span className="text-gray-400 font-normal">- {t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

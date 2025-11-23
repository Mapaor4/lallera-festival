'use client';

import Link from 'next/link';
import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Puc participar si no sóc dels pobles de la Llera del Ter?",
      answer: "Sí, poden participar creadors de qualsevol lloc, sempre i quan el curtmetratge hagi estat gravat total o parcialment en algun dels pobles especificats a les bases."
    },
    {
      question: "El curtmetratge ha de ser recent?",
      answer: "No hi ha cap restricció de data de producció. Poden participar tant curtmetratges nous com anteriors, sempre que compleixin amb la resta de requisits."
    },
    {
      question: "Puc presentar més d'un curtmetratge?",
      answer: "Sí, cada participant pot presentar fins a 3 curtmetratges diferents. Cadascun haurà de ser inscrit individualment."
    },
    {
      question: "El curtmetratge ha d'estar en català?",
      answer: "No és obligatori. S'accepten curtmetratges en qualsevol llengua, encara que es valorarà positivament l'ús del català o l'aportació de subtítols en aquesta llengua."
    },
    {
      question: "Què passa si el meu curtmetratge és seleccionat?",
      answer: "Si el teu curtmetratge és seleccionat, l'organització es posarà en contacte amb tu per confirmar la teva assistència a la gala de premis i coordinar la projecció de l'obra."
    },
    {
      question: "Qui forma el jurat?",
      answer: "El jurat està format per professionals del sector audiovisual, cineastes locals i representants dels ajuntaments col·laboradors. Es garanteix la independència i professionalitat en l'avaluació."
    },
    {
      question: "Quins són els premis?",
      answer: "Els premis inclouen reconeixements econòmics, material audiovisual, serveis de producció i la difusió de l'obra a través de Filmin i altres plataformes col·laboradores."
    },
    {
      question: "Puc retirar el meu curtmetratge després de la inscripció?",
      answer: "Sí, pots retirar la teva inscripció fins 15 dies abans de la gala de premis, notificant-ho per correu electrònic a l'organització."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Preguntes Freqüents
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Respostes a les preguntes més habituals sobre el festival
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <span className="text-2xl text-blue-600 flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Tens més preguntes?
          </h3>
          <p className="text-gray-600 mb-4">
            No dubtis a contactar-nos. Estem aquí per ajudar-te!
          </p>
          <Link href="/contacte" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ease-out shadow-lg inline-block">
              Contacta'ns
          </Link>
        </div>
      </div>
    </section>
  );
}

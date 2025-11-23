import Image from 'next/image';

export default function Patrocinadors() {
  const ajuntaments = [
    { name: "Ajuntament de Bordils", logo: "/logos/aj-bordils.png", url: "https://www.bordils.cat/ca/" },
    { name: "Ajuntament de Celrà", logo: "/logos/aj-celra.png", url: "https://www.celra.cat/wp/" },
    { name: "Ajuntament de Cervià de Ter", logo: "/logos/aj-cervia.png", url: "https://cerviadeter.cat/" },
    { name: "Ajuntament de Flaçà", logo: "/logos/aj-flaca-v2.png", url: "https://flaca.cat/" },
    { name: "Ajuntament de Juià", logo: "/logos/aj-juia.png", url: "https://juia.cat/" },
    { name: "Ajuntament de Madremanya", logo: "/logos/aj-madremanya.png", url: "https://madremanya.cat/" },
    { name: "Ajuntament de Medinyà", logo: "/logos/aj-medinya.png", url: "https://medinya.cat/" },
    { name: "Ajuntament de Sant Joan de Mollet", logo: "/logos/aj-mollet.png", url: "https://santjoandemollet.cat/" },
    { name: "Ajuntament de Sant Jordi Desvalls", logo: "/logos/aj-sant-jordi.png", url: "https://santjordidesvalls.cat/" },
    { name: "Ajuntament de Foixà (Sant Llorenç de les Arenes)", logo: "/logos/aj-foixa.png", url: "https://foixa.cat/" },
    { name: "Ajuntament de Sant Martí Vell", logo: "/logos/aj-sant-marti.png", url: "https://santmartivell.cat/" },
    { name: "Ajuntament de Viladasens", logo: "/logos/aj-viladasens.png", url: "https://viladasens.org/" }
  ];

  const altresCol·laboradors = [
    { name: "Filmin", logo: "/logos/filmin.png", url: "https://www.filmin.cat/" },
    { name: "Ateneu de Celrà", logo: "/logos/ateneu-celra.png", url: "https://www.celracultura.cat/ca/teatre-lateneu-de-celra.html" }    
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Amb el suport de
        </h2>

        {/* Ajuntaments */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">
            Ajuntaments de la Llera del Ter
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {ajuntaments.map((ajuntament, index) => (
              <a
                key={index}
                href={ajuntament.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out"
              >
                <div className="relative w-full h-20">
                  <Image
                    src={ajuntament.logo}
                    alt={ajuntament.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Altres col·laboradors */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">
            Col·laboradors
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {altresCol·laboradors.map((col·laborador, index) => (
              <a
                key={index}
                href={col·laborador.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out"
              >
                <div className="relative w-40 h-20">
                  <Image
                    src={col·laborador.logo}
                    alt={col·laborador.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

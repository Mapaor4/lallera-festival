import Image from 'next/image';

export default function ElFestival() {
  return (
    <section id="festival" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          El Festival
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Qui som
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              El Festival La Llera és una iniciativa de l'Associació Cultural La Llera del Ter que neix amb l'objectiu 
              de promocionar i difondre el talent cinematogràfic dels pobles de la 
              Llera del Ter. Volem crear un espai de trobada per als creadors audiovisuals 
              locals i fomentar la producció de curtmetratges a la nostra comarca.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cada any, celebrem el millor del cinema de proximitat, donant veu als 
              relats que neixen als nostres pobles: Bordils, Celrà, Cervià de Ter, 
              Flaçà, Juià, Madremanya, Medinyà, Sant Joan de Mollet, Sant Jordi Desvalls, 
              Sant Llorenç de les Arenes, Sant Martí Vell i Viladasens.
            </p>
          </div>
          <div className="relative h-96">
            <Image
              src="/claqueta.jpg"
              alt="El Festival La Llera"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="text-blue-600 text-4xl mb-4">
              <Image src="/emojis/1f3ac.svg" alt="Cinema" width={48} height={48} />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              Cinema local
            </h4>
            <p className="text-gray-600">
              Promovem les produccions realitzades al nostre territori, 
              donant visibilitat al talent de la Llera del Ter.
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="text-blue-600 text-4xl mb-4">
              <Image src="/emojis/1f3c5.svg" alt="Premis" width={48} height={48} />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              Premis i reconeixement
            </h4>
            <p className="text-gray-600">
              Guardonem les millors obres en diferents categories, 
              reconeixent l'excel·lència creativa.
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="text-blue-600 text-4xl mb-4">
              <Image src="/emojis/1f3ad.svg" alt="Cultura" width={48} height={48} />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              Comunitat cultural
            </h4>
            <p className="text-gray-600">
              Creem espais de trobada i intercanvi entre cineastes, 
              actors i professionals del sector audiovisual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

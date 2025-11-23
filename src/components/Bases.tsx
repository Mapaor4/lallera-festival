import Link from 'next/link';

export default function Bases() {
  return (
    <section id="bases" className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Bases del Festival
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                Participants
              </h3>
              <p className="text-gray-600 leading-relaxed ml-11">
                Poden participar al festival totes les persones majors de 16 anys, 
                tant a títol individual com en representació d'un col·lectiu o productora.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                Requisits de les obres
              </h3>
              <div className="ml-11 space-y-3">
                <p className="text-gray-600 leading-relaxed">
                  <strong>Requisit imprescindible:</strong> El curtmetratge haurà d'haver estat 
                  gravat íntegrament o parcialment en algun dels pobles de la Llera del Ter:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Bordils</li>
                  <li>Celrà</li>
                  <li>Cervià de Ter</li>
                  <li>Flaçà</li>
                  <li>Juià</li>
                  <li>Madremanya</li>
                  <li>Medinyà</li>
                  <li>Sant Joan de Mollet</li>
                  <li>Sant Jordi Desvalls</li>
                  <li>Sant Llorenç de les Arenes</li>
                  <li>Sant Martí Vell</li>
                  <li>Viladasens</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                Durada i format
              </h3>
              <div className="ml-11 space-y-2">
                <p className="text-gray-600">
                  • La durada màxima dels curtmetratges serà de 20 minuts, crèdits inclosos.
                </p>
                <p className="text-gray-600">
                  • Format d'entrega: MP4 o MOV en alta qualitat (mínim Full HD 1080p).
                </p>
                <p className="text-gray-600">
                  • No hi ha restriccions de gènere: ficció, documental, animació, experimental...
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                Inscripció
              </h3>
              <div className="ml-11 space-y-2">
                <p className="text-gray-600">
                  • Termini d'inscripció: del 17 de setembre al 21 de novembre de 2026.
                </p>
                <p className="text-gray-600">
                  • Les inscripcions es realitzen a través del formulari web disponible en aquesta mateixa pàgina.
                </p>
                <p className="text-gray-600">
                  • La inscripció és gratuïta.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">5</span>
                Selecció i premis
              </h3>
              <div className="ml-11 space-y-2">
                <p className="text-gray-600">
                  • Un jurat professional seleccionarà els curtmetratges finalistes.
                </p>
                <p className="text-gray-600">
                  • Es concediran premis a les millors obres en diferents categories.
                </p>
                <p className="text-gray-600">
                  • La gala de lliurament de premis tindrà lloc al maig de 2026.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">6</span>
                Drets i difusió
              </h3>
              <p className="text-gray-600 leading-relaxed ml-11">
                Els autors dels curtmetratges accepten la seva difusió en el marc del festival 
                i en els canals de comunicació de l'organització amb fins promocionals. 
                Els drets d'autoria romanen en tot moment en mans dels creadors.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <Link href="/inscripcions" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ease-out shadow-lg inline-block">
                  Inscriu el teu curtmetratge
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import SimpleHeader from '@/components/SimpleHeader';

export default function Legal() {
  return (
    <>
      <SimpleHeader />
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Avís Legal
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Informació general
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                En compliment de la Llei 34/2002, d'11 de juliol, de serveis de la societat de la informació i de comerç electrònic, s'informa que aquest lloc web és propietat de:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Titular:</strong> Associació Cultural La Llera del Ter</li>
                <li><strong>Ubicació:</strong> Celrà, Girona, Catalunya</li>
                <li><strong>Email:</strong> info@festivallallera.cat</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Condicions d'ús
              </h2>
              <p className="text-gray-700 leading-relaxed">
                L'accés i ús d'aquest lloc web atribueix la condició d'usuari i implica l'acceptació plena de totes les condicions incloses en aquest avís legal. L'Associació Cultural La Llera del Ter es reserva el dret a modificar qualsevol tipus d'informació que pogués aparèixer al lloc web, sense que existeixi l'obligació de preavisar o posar en coneixement dels usuaris aquestes modificacions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Propietat intel·lectual i industrial
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Tots els continguts del lloc web, incloent textos, imatges, logotips, dissenys gràfics i codi, són propietat de l'Associació Cultural La Llera del Ter o dels seus respectius autors, i estan protegits per les lleis de propietat intel·lectual i industrial. Queda prohibida la reproducció, distribució o comunicació pública sense l'autorització expressa dels titulars dels drets.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Protecció de dades
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les dades personals recollides a través dels formularis d'aquest lloc web seran tractades de conformitat amb el Reglament General de Protecció de Dades (RGPD) i la normativa vigent en matèria de protecció de dades. Les dades només s'utilitzaran per a la gestió de les inscripcions al festival i la comunicació amb els participants. Els usuaris tenen dret a accedir, rectificar, suprimir i oposar-se al tractament de les seves dades personals.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Responsabilitat
              </h2>
              <p className="text-gray-700 leading-relaxed">
                L'Associació Cultural La Llera del Ter no es fa responsable dels danys o perjudicis que poguessin derivar-se de l'ús incorrecte d'aquest lloc web, ni de la informació continguda en el mateix. Tampoc es responsabilitza de la disponibilitat tècnica, exactitud o veracitat dels continguts enllaçats des d'aquest lloc web.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Legislació aplicable
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les presents condicions es regeixen per la legislació espanyola vigent. Per a qualsevol controvèrsia que pogués derivar-se de l'ús d'aquest lloc web, les parts se sotmeten expressament als jutjats i tribunals de Girona.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Última actualització: Novembre de 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

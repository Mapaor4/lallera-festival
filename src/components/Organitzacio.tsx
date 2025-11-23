'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Organitzacio() {
  return (
    <section id="organitzacio" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          L'Equip Organitzador
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/cinema-en-curs.jpg"
              alt="Equip organitzador del Festival La Llera"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              El Festival La Llera és organitzat per un equip de professionals i voluntaris 
              apassionats pel cinema i la cultura local. Som un grup heterogeni unit per 
              l'objectiu comú de promocionar el talent audiovisual de la Llera del Ter.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Des de la producció i coordinació tècnica fins a la comunicació i les relacions 
              institucionals, cada membre de l'equip aporta la seva experiència i dedicació 
              per fer del festival una realitat any rere any.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Col·labora amb nosaltres
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            El Festival La Llera és un projecte col·lectiu que necessita el suport 
            i la participació de voluntaris, professionals i amants del cinema. 
            Si vols formar part de l'equip o col·laborar amb el festival, contacta amb nosaltres!
          </p>
          <div className="flex justify-center">
            <Link href="/contacte" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Uneix-te a l'equip
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

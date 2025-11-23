'use client';

import SimpleHeader from '@/components/SimpleHeader';

export default function Contacte() {
  return (
    <>
      <SimpleHeader />
      <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Contacte
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Informació de contacte
          </h2>
          
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <a 
                href="mailto:info@festivallallera.cat" 
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                info@festivallallera.cat
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Telèfon</h3>
              <p>+34 972 XXX XXX</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Ubicació</h3>
              <p>Celrà, Girona</p>
              <p className="text-gray-600">Catalunya, España</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Envia'ns un missatge
          </h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Assumpte
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Missatge
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Enviar missatge
            </button>
          </form>
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Vols col·laborar amb el festival?
          </h3>
          <p className="text-gray-600 mb-4">
            Si estàs interessat en formar part de l'equip organitzador o col·laborar amb el Festival La Llera, 
            contacta amb nosaltres i t'explicarem com pots participar.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Envia'ns un correu
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

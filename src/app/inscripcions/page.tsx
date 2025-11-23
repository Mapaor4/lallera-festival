'use client';

import { useState, useEffect } from 'react';
import Form from 'next/form';
import SimpleHeader from '@/components/SimpleHeader';

export default function Inscripcions() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Dates d'inici i tancament d'inscripcions
  const OPENING_DATE = new Date('2026-09-17T00:00:00');
  const CLOSING_DATE = new Date('2026-11-21T23:59:59');

  const [currentState, setCurrentState] = useState<'pending' | 'active' | 'closed'>('pending');

  useEffect(() => {
    const updateState = () => {
      const now = new Date();
      
      if (now < OPENING_DATE) {
        setCurrentState('pending');
        
        // Calcular temps restant
        const diff = OPENING_DATE.getTime() - now.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setTimeRemaining({ days, hours, minutes, seconds });
      } else if (now >= OPENING_DATE && now <= CLOSING_DATE) {
        setCurrentState('active');
      } else {
        setCurrentState('closed');
      }
    };

    updateState();
    const interval = setInterval(updateState, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí aniria la lògica per enviar el formulari
    alert('Formulari enviat! (funcionalitat pendent d\'implementar)');
  };

  // Estat: Inscripcions pendents (compte enrere)
  if (currentState === 'pending') {
    return (
      <>
        <SimpleHeader />
        <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Inscripcions
          </h1>

          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Les inscripcions s'obren aviat!
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              El període d'inscripció començarà el <strong>{OPENING_DATE.toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</strong>
            </p>

            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {timeRemaining.days}
                </div>
                <div className="text-sm text-gray-600 uppercase">Dies</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {timeRemaining.hours}
                </div>
                <div className="text-sm text-gray-600 uppercase">Hores</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {timeRemaining.minutes}
                </div>
                <div className="text-sm text-gray-600 uppercase">Minuts</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {timeRemaining.seconds}
                </div>
                <div className="text-sm text-gray-600 uppercase">Segons</div>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Mentrestant, pots consultar les bases del festival i preparar el teu curtmetratge.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#bases" 
                className="my-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out shadow-lg inline-block text-center"
              >
                Consultar les bases
              </a>
              <a 
                href="/contacte" 
                className="my-auto bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out inline-block text-center"
              >
                Contacta'ns
              </a>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }

  // Estat: Inscripcions actives (formulari)
  if (currentState === 'active') {
    return (
      <>
        <SimpleHeader />
        <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Inscripcions
          </h1>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>Inscripcions obertes!</strong> Podeu inscriure els vostres curtmetratges fins al <strong>{CLOSING_DATE.toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Formulari d'inscripció
            </h2>

            <Form onSubmit={handleSubmit} className="space-y-6" action={''}>
              {/* Dades del director/a */}
              <div className="border-b border-gray-300 pb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Dades del director/a
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="director-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="director-name"
                      name="director-name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="director-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="director-email"
                      name="director-email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="director-phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telèfon *
                    </label>
                    <input
                      type="tel"
                      id="director-phone"
                      name="director-phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="director-dni" className="block text-sm font-medium text-gray-700 mb-2">
                      DNI/NIE *
                    </label>
                    <input
                      type="text"
                      id="director-dni"
                      name="director-dni"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Dades del curtmetratge */}
              <div className="border-b border-gray-300 pb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Dades del curtmetratge
                </h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="film-title" className="block text-sm font-medium text-gray-700 mb-2">
                      Títol del curtmetratge *
                    </label>
                    <input
                      type="text"
                      id="film-title"
                      name="film-title"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="film-duration" className="block text-sm font-medium text-gray-700 mb-2">
                        Durada (minuts) *
                      </label>
                      <input
                        type="number"
                        id="film-duration"
                        name="film-duration"
                        min="1"
                        max="30"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="film-year" className="block text-sm font-medium text-gray-700 mb-2">
                        Any de producció *
                      </label>
                      <input
                        type="number"
                        id="film-year"
                        name="film-year"
                        min="1900"
                        max={new Date().getFullYear()}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="film-genre" className="block text-sm font-medium text-gray-700 mb-2">
                      Gènere *
                    </label>
                    <select
                      id="film-genre"
                      name="film-genre"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                      required
                    >
                      <option value="">Selecciona un gènere</option>
                      <option value="drama">Drama</option>
                      <option value="comedia">Comèdia</option>
                      <option value="terror">Terror</option>
                      <option value="ciencia-ficcio">Ciència ficció</option>
                      <option value="documental">Documental</option>
                      <option value="animacio">Animació</option>
                      <option value="experimental">Experimental</option>
                      <option value="altres">Altres</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="film-language" className="block text-sm font-medium text-gray-700 mb-2">
                      Idioma original *
                    </label>
                    <input
                      type="text"
                      id="film-language"
                      name="film-language"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="film-synopsis" className="block text-sm font-medium text-gray-700 mb-2">
                      Sinopsi (màx. 500 caràcters) *
                    </label>
                    <textarea
                      id="film-synopsis"
                      name="film-synopsis"
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="film-locations" className="block text-sm font-medium text-gray-700 mb-2">
                      Localitzacions de gravació (pobles de la Llera del Ter) *
                    </label>
                    <input
                      type="text"
                      id="film-locations"
                      name="film-locations"
                      placeholder="Ex: Celrà, Bordils, Sant Martí Vell"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Enllaç al curtmetratge */}
              <div className="border-b border-gray-300 pb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Enllaç al curtmetratge
                </h3>
                <div>
                  <label htmlFor="film-link" className="block text-sm font-medium text-gray-700 mb-2">
                    URL (Vimeo, YouTube, WeTransfer, etc.) *
                  </label>
                  <input
                    type="url"
                    id="film-link"
                    name="film-link"
                    placeholder="https://"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                    required
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Si l'enllaç té contrasenya, indica-la a continuació
                  </p>
                </div>
                <div className="mt-4">
                  <label htmlFor="film-password" className="block text-sm font-medium text-gray-700 mb-2">
                    Contrasenya (opcional)
                  </label>
                  <input
                    type="text"
                    id="film-password"
                    name="film-password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                  />
                </div>
              </div>

              {/* Acceptació de bases */}
              <div>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="accept-terms"
                    className="mt-1 mr-3 h-4 w-4 accent-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    He llegit i accepto les <a href="/#bases" className="text-blue-600 hover:text-blue-700 underline">bases del festival</a> i autoritzo l'organització a utilitzar les imatges del curtmetratge per a la seva difusió. *
                  </span>
                </label>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Enviar inscripció
                </button>
              </div>

              <p className="text-sm text-gray-500 text-center">
                * Camps obligatoris
              </p>
            </Form>
          </div>
        </div>
      </div>
      </>
    );
  }

  // Estat: Inscripcions tancades
  return (
    <>
      <SimpleHeader />
      <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Inscripcions
        </h1>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            El període d'inscripció ha finalitzat
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Les inscripcions per a aquesta edició del Festival La Llera van tancar el <strong>{CLOSING_DATE.toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</strong>.
          </p>

          <div className="bg-blue-50 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-gray-700">
              Gràcies a tots els participants per la vostra col·laboració! Estem revisant totes les inscripcions rebudes i aviat anunciarem els curtmetratges seleccionats.
            </p>
          </div>

          <p className="text-gray-600 mb-6">
            Estigueu atents a les nostres xarxes socials i al web per conèixer les novetats del festival.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out shadow-lg inline-block text-center"
            >
              Torna a l'inici
            </a>
            <a 
              href="/contacte" 
              className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out inline-block text-center"
            >
              Contacta'ns
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

'use client';

import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";

export default function Page() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('language') || 'en';
    setLang(saved);
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'es' : 'en';
    setLang(newLang);
    localStorage.setItem('language', newLang);
  };

  const businessName = "Smith HVAC";
  const serviceType = "HVAC";
  const serviceDescription = "Heating and Cooling";
  const serviceAreas = "Greater Nashville Area";
  const phoneNumber = "999-999-9999";
  const email = "email@smithhvac.com";
  const logo = "https://qsaefjpdhmcwuiytcvan.supabase.co/storage/v1/object/public/portfolio-photos/landing-page/logo-1761305714946-dl9c9h.png";
  const differentiation2 = "Licensed and Insured";
  const differentiation3 = "Fair Price";
  const headerFooterColor = "#bfb3a1";
  const backgroundColor = "#ffffff";
  const accentColor = "#a61111";

  const portfolioPhotos: Array<{name: string; type: string; url: string}> = [{"name":"download (1).jpg","type":"image/jpeg","url":"https://qsaefjpdhmcwuiytcvan.supabase.co/storage/v1/object/public/portfolio-photos/landing-page/1761305706867-bllwkc.jpg"},{"name":"download.jpg","type":"image/jpeg","url":"https://qsaefjpdhmcwuiytcvan.supabase.co/storage/v1/object/public/portfolio-photos/landing-page/1761305707205-0xsa6.jpg"},{"name":"images (1).jpg","type":"image/jpeg","url":"https://qsaefjpdhmcwuiytcvan.supabase.co/storage/v1/object/public/portfolio-photos/landing-page/1761305707367-fk5xuj.jpg"}];

  const t = {
    callNow: lang === 'es' ? 'Llamar Ahora' : 'Call Now',
    professionalServices: lang === 'es' ? 'Servicios Profesionales de' : 'Professional',
    services: lang === 'es' ? 'Servicios' : 'Services',
    licensed: lang === 'es' ? 'Licenciado' : 'Licensed',
    insured: lang === 'es' ? 'Asegurado' : 'Insured',
    experienced: lang === 'es' ? 'Con Experiencia' : 'Experienced',
    emergency: lang === 'es' ? 'Servicio de Emergencia Disponible 24/7' : 'Emergency Service Available 24/7',
    whyChoose: lang === 'es' ? 'Por Que Elegirnos' : 'Why Choose Us',
    whyChooseDesc: lang === 'es' ? 'Brindamos servicios profesionales de alta calidad con anos de experiencia y compromiso con la excelencia.' : 'We provide professional, high-quality services with years of experience and commitment to excellence.',
    serviceAreas: lang === 'es' ? 'Areas de Servicio' : 'Service Areas',
    serviceAreasDesc: lang === 'es' ? 'Servimos con orgullo las siguientes areas:' : 'We proudly serve the following areas:',
    ourWork: lang === 'es' ? 'Nuestro Trabajo' : 'Our Work',
    ourWorkDesc: lang === 'es' ? 'Ejemplos de nuestro trabajo profesional' : 'Examples of our professional work',
    noPhotos: lang === 'es' ? 'No hay fotos todavia' : 'No Photos Yet',
    uploadPhotos: lang === 'es' ? 'Sube fotos de tu trabajo para mostrar tu portafolio' : 'Upload photos of your work to showcase your portfolio',
    contactUs: lang === 'es' ? 'Contactanos' : 'Contact Us',
    contactInfo: lang === 'es' ? 'Informacion de Contacto' : 'Contact Information',
    mainLine: lang === 'es' ? 'Linea principal' : 'Main line',
    emailLabel: lang === 'es' ? 'Correo electronico' : 'Email',
    sendMessage: lang === 'es' ? 'Envianos un Mensaje' : 'Send Us a Message',
    contact: lang === 'es' ? 'Contacto' : 'Contact',
    allRights: lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.',
    professional: lang === 'es' ? 'Profesional' : 'Professional',
    in: lang === 'es' ? 'en' : 'in',
    followUs: lang === 'es' ? 'Siguenos' : 'Follow Us'
  };

  return (
    <>
      {/* SEO: Local Business Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: businessName,
            image: logo || undefined,
            telephone: phoneNumber,
            email: email,
            address: {
              '@type': 'PostalAddress',
              addressLocality: serviceAreas.split(',')[0].trim(),
              addressRegion: serviceAreas.includes(',') ? serviceAreas.split(',')[1]?.trim() : '',
            },
            description: serviceDescription,
            priceRange: '$$',
            openingHours: 'Mo-Su 00:00-23:59',
            areaServed: serviceAreas.split(',').map(area => area.trim()),
          })
        }}
      />
      
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --header-footer-color: ${headerFooterColor};
          --background-color: ${backgroundColor};
          --accent-color: ${accentColor};
        }
        /* Header/Footer */
        nav.bg-white { background-color: var(--header-footer-color) !important; }
        footer.bg-gray-900 { background-color: var(--header-footer-color) !important; }
        nav h1, nav a { color: ${headerFooterColor.toLowerCase() === '#ffffff' || headerFooterColor.toLowerCase() === '#fff' ? '#000000' : '#ffffff'} !important; }
        footer, footer h3, footer h4, footer p, footer a { color: ${headerFooterColor.toLowerCase() === '#ffffff' || headerFooterColor.toLowerCase() === '#fff' ? '#000000' : '#ffffff'} !important; }
        
        /* Background */
        body, .bg-white, section.bg-white { background-color: var(--background-color) !important; }
        
        /* Accent */
        .bg-blue-600 { background-color: var(--accent-color) !important; }
        .hover\\:bg-blue-700:hover { background-color: color-mix(in srgb, var(--accent-color) 85%, black) !important; }
        .text-blue-600 { color: var(--accent-color) !important; }
        .text-blue-800 { color: color-mix(in srgb, var(--accent-color) 85%, black) !important; }
        .bg-blue-100 { background-color: color-mix(in srgb, var(--accent-color) 15%, white) !important; }
        .border-blue-600 { border-color: var(--accent-color) !important; }
        .ring-blue-500 { --tw-ring-color: var(--accent-color) !important; }
        .focus\\:ring-blue-500:focus { --tw-ring-color: var(--accent-color) !important; }
      `}} />
      
      <div className="min-h-screen bg-white">
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="fixed top-4 right-4 z-50 bg-white shadow-lg rounded-full px-4 py-2 flex items-center space-x-2 hover:shadow-xl transition-shadow border border-gray-200"
      >
        <span className="text-sm font-medium">{lang === 'en' ? '🇺🇸 English' : '🇲🇽 Español'}</span>
      </button>

      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              {logo && <img src={logo} alt={businessName + " Logo"} className="h-20 w-auto mr-3" loading="eager" fetchPriority="high" onLoad={() => console.log('✅ Logo loaded successfully!', logo)} onError={(e) => { console.error('❌ Logo failed to load. URL:', logo); e.currentTarget.style.display = 'none'; }} />}
              {!logo && <span className="text-xs text-red-500">❌ No logo</span>}
              <h1 className="text-xl font-bold text-gray-900">{businessName}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href={"tel:" + phoneNumber} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">{t.callNow}</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {businessName} - {t.professionalServices} {serviceType} {t.services}
            </h1>
            <p className="text-lg sm:text-xl text-blue-600 font-semibold mb-4 sm:mb-6">
              {t.licensed} • {t.insured} • {t.experienced}
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              {serviceDescription}
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 sm:p-8 text-center">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
              </svg>
            </div>
            <a href={"tel:" + phoneNumber} className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 block hover:text-blue-600">{phoneNumber}</a>
            <p className="text-sm sm:text-base text-gray-600">{t.emergency}</p>
          </div>
        </div>
      </main>

      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t.whyChoose}</h2>
            <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">{t.whyChooseDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.licensed}</h3>
              <p className="text-gray-600">{differentiation2}</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.experienced}</h3>
              <p className="text-gray-600">{differentiation3}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t.serviceAreas}</h2>
            <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-base sm:text-lg text-gray-600">{t.serviceAreasDesc}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.split(',').map((area, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium text-sm sm:text-base">
                {area.trim()}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t.ourWork}</h2>
            <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-base sm:text-lg text-gray-600">{t.ourWorkDesc}</p>
          </div>
          {portfolioPhotos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {portfolioPhotos.map((photo, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg aspect-video">
                  <img 
                    src={photo.url} 
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">{t.noPhotos}</h3>
              <p className="text-gray-500">{t.uploadPhotos}</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t.contactUs}</h2>
            <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t.contactInfo}</h3>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">{phoneNumber}</p>
                  <p className="text-gray-600">{t.mainLine}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">{email}</p>
                  <p className="text-gray-600">{t.emailLabel}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">{serviceAreas}</p>
                  <p className="text-gray-600">{t.serviceAreas}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t.sendMessage}</h3>
              <ContactForm businessEmail={email} businessName={businessName} />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{businessName}</h3>
              <p className="text-gray-300">{t.professional} {serviceType.toLowerCase()} {t.in} {serviceAreas.split(',')[0].trim()}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.contact}</h4>
              <div className="space-y-2 text-gray-300">
                <p>{phoneNumber}</p>
                <p>{email}</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.serviceAreas}</h4>
              <p className="text-gray-300">{serviceAreas}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com/smithhvac" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/smithhvac" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://x.com/smithhvac" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-400">© {new Date().getFullYear()} {businessName}. {t.allRights}</p>
              
              {/* AutoTaco Badge */}
              <a 
                href="https://autotaco.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
              >
                <svg 
                  className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  Built with <span className="text-orange-500 font-semibold">AutoTaco</span>
                </span>
                <svg 
                  className="w-4 h-4 text-orange-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

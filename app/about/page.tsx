'use client';

import React, { useState, useEffect } from 'react';

export default function AboutPage() {
  const [bio, setBio] = useState('');

  useEffect(() => {
    // Aquí estableces el texto que quieres que se muestre
    const defaultBio = `Desarrollador Full Stack Experto
    Habilidades:
    Web: Angular, Node.js, MongoDB, MySQL, Jest, SSR, Firebase, Netlify, Heroku, AWS.
    Android: Java, Kotlin, Material Design, MVVM, MVP, pruebas unitarias, APIs RESTful.
    Cualidades: Apasionado, meticuloso, autodidacta, independiente, colaborador, excelente comunicador.
    Oferta:    
    Desarrollo web y móvil robusto, escalable y de alto rendimiento.
    Trabajo autónomo o en equipo.
    Rápido aprendizaje y adaptación a nuevas tecnologías.
    Compromiso con la calidad del código y las mejores prácticas.
    Contacto:
    
    Si buscas un desarrollador Full Stack apasionado, con experiencia y confiable, no dudes en contactarme`;
    setBio(defaultBio);
  }, []);

  return (
    <div className="hero max-h-screen bg-base-100">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Desarrollador Full Stack Experto</h1>
      <p className="py-4">
        Habilidades:
        <br />
        Web: Angular, Node.js, MongoDB, MySQL, Jest, SSR, Firebase, Netlify, Heroku, AWS.
        <br />
        Android: Java, Kotlin, Material Design, MVVM, MVP, pruebas unitarias, APIs RESTful.
        <br />
        Cualidades: Apasionado, meticuloso, autodidacta, independiente, colaborador, excelente comunicador.
        <br />
        Oferta:    
        <br />
        Desarrollo web y móvil robusto, escalable y de alto rendimiento.
        <br />
        Trabajo autónomo o en equipo.
        <br />
        Rápido aprendizaje y adaptación a nuevas tecnologías.
        <br />
        Compromiso con la calidad del código y las mejores prácticas.
        <br />
        Contacto:
        <br />
        Si buscas un desarrollador Full Stack apasionado, con experiencia y confiable, no dudes en contactarme.
      </p>
    </div>
  </div>
</div>

  );
}

import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <><div className="overflow-x-auto">
    <ul className="steps">
      <li className="step">Angular</li>
      <li className="step step-secondary">Javascript</li>
      <li className="step step-secondary">kotlin</li>
      <li className="step step-secondary">Android</li>
    </ul>
  </div>
  <br />
    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
      <div className="avatar">
        <div className="w-12">
          <img src="https://seeklogo.com/images/A/angular-icon-logo-5FC0C40EAC-seeklogo.com.png" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src="https://e7.pngegg.com/pngimages/220/595/png-clipart-javascript-logo-product-design-brand-angularjs-dashboard-templates-angle-text.png" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src="data:image/png;base64,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" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fNugEHI_khzkuI5ABAwYw5CQSBT4UwJISA&usqp=CAU" />
        </div>
      </div>
    </div><ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">Actualidad</time>
            <div className="text-lg font-black">Indra</div>
            Indra es una de las principales compañías globales de tecnología y consultoría: el socio tecnológico para las operaciones clave de los negocios de clientes en todo el mundo.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2018</time>
            <div className="text-lg font-black">Siskit</div>
            Somos una empresa dedicada al desarrollo de páginas web, aplicaciones móviles y software de gestión. Con más de 10 años de experiencia fundamos siskit.com en el año 2013. Desde ese entonces nuestros objetivos han sido claros: Desarrollar aplicaciones que potencien su presencia en internet y optimicen el trabajo en la oficina.

            Somos una solución integral, escalable y en constante actualización, día a día nos perfeccionamos estudiando e incorporando nuevas tecnologías de software para que nuestro trabajo evolucione junto a su empresa
          </div>
          <hr />
        </li>
     
    
      </ul></>

   
  );
}

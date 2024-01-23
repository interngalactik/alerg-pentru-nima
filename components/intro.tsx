import {BrowserView, MobileView} from 'react-device-detect';

export default function Intro({donors}) {
  return (
    <section className="flex-col md:flex-col flex md:justify-between mt-16 mb-16 md:mb-12 text-white">
      <h4 className="text-2xl font-medium mb-8">
        Susține <a href="https://sanctuarnima.ro" className="underline hover:text-green-700 duration-200 transition-colors" target='_blank'>Sanctuarul Nima</a> alături de alte <span className="text-green-700 font-bold">{donors}</span> persoane.
      </h4>
      <h4 className="text-4xl md:text-4xl font-medium tracking-tighter leading-tight md:pr-8">
        Donează <span className='text-green-700 font-semibold'>2 euro / lună</span>
      </h4>
      <h4 className="text-xl mt-1 mb-1">
        pentru hrana animalelor salvate de la abator sau exploatare.
      </h4>
      <h3 className="text-4xl font-medium tracking-tighter leading-tight md:pr-8 flex-row text-green-700">
      Trimite <strong>NIMA</strong> prin SMS la {` `}
      <strong>
        { BrowserView ? '8845' : <a
                href="sms:8845?body=NIMA"
                className="underline hover:text-success duration-200 transition-colors"
              >8845</a> }
      </strong>
      </h3>
      <h4 className="text-xl mt-1 mb-1">
        iar eu voi alerga pentru fiecare mesaj în parte.
      </h4>
    </section>
  )
}

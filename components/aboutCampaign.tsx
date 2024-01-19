export default function AboutCampaign() {
  return (
    <section className="flex-col md:flex-col flex md:justify-between mt-16 mb-16 md:mb-12 text-white">
      <h4 className="text-3xl font-semibold mb-4 text-center">
        Despre Campanie
      </h4>
      <p className="text-lg mt-4 mb-8">
        Sanctuarul Nima este primul sanctuar din România destinat animalelor de fermă, 
        înfiinţat în anul 2018 de către Fundaţia Siddhartha. Începând cu ianuarie 2021, 
        Sanctuarul Nima este susținut exclusiv prin atragerea de fonduri din comunitate. 
        Într-o lume in care animalele de fermă sunt obiectivizate, exploatate și omorâte 
        cu mult înainte de vreme, existența unui sanctuar destinat lor poate fi susținută 
        doar printr-un efort colectiv măcar în ceea ce privește nevoile primare de subzistență: 
        hrana. Sanctuarul are nevoie de implicarea voastră pentru a oferi în continuare o viaţă 
        fericită animalelor salvate de la abator sau exploatare.
        Fiecare SMS asigură o jumătate de balot de fân din cele câteva mii care se consumă în sanctuar lunar.
    </p>
    <ul className="text-xs disclaimer-container">
        <li>Pentru a vă înscrie în campanie, trimiteți un SMS cu textul NIMA la numărul 8845. Donaţia este recurentă și este în valoare de 2 euro/lună (suma alocată cauzei este de 2 euro)</li>
        <li>Pentru dezabonare, trimiteți mesajul "NIMA STOP" la numărul 8845.</li>
        <li>Nu se percepe TVA pentru donaţiile de pe abonament. În reţelele Digi Mobil, Orange şi Telekom România Mobile, pentru cartelele preplătite, TVA-ul a fost reţinut la achiziţionarea creditului. Pentru donaţiile de pe cartele preplătite, în reţeaua Vodafone utilizatorii nu plătesc TVA.</li>
        <li>Campanie realizată cu sprijinul Digi Mobil, Orange Romania, Telekom Romania Mobile şi Vodafone Romania.</li>
        <li>Pentru informaţii suplimentare despre campanie şi despre modalitatea de a dona şi de a stopa donaţia lunară vă stăm la dispoziție la telefon 0755411382.</li>
        <li>Campania se dezactivează automat dacă numărul lunar de SMS-uri scade sub 200.</li>
    </ul>
    </section>
  )
}

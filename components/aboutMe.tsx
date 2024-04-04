import Avatar from '@mui/material/Avatar';

export default function AboutMe() {
  return (
    <section className="flex-col md:flex-col flex md:justify-between mt-16 mb-16 md:mb-12 text-white">
      <h4 className="text-3xl font-semibold mb-4 text-center">
        Cine aleargă?
      </h4>
      <section className='flex'>
      <Avatar alt="Eduard Nistru" sx={{ width: 150, height: 150, margin: "auto 20px"}} src="/favicon/alergareciucas.jpg"></Avatar>
      <p className="text-lg mt-4 mb-8">
        Mă numesc Eduard Nistru și m-am apucat de alergare în ianuarie 2016, iar o lună mai târziu participam la o probă de cros de 15km în natură care mi-a reamintit de sentimentul
        de libertate pe care doar când eram copil îl mai simțisem. De atunci m-am antrenat, dar nu constant și am participat progresiv la competiții de semimaraton, maraton 
        și ultramaraton, cea mai lungă distanță parcursă fiind de 110km la 100 miles of Istria în 2017 și 2018. 
        În 2020, în timpul pandemiei, mi-am făcut propriul traseu de ultramaraton, de la Sighișoara la Brăduleț, traversând munții Făgăraș și am pornit o campanie de strângeri 
        de fonduri pentru Sanctuarul Nima. Am alergat 140km în două etape din cauza unei accidentări, la cea de-a doua alergare alăturându-mi-se Diana Bejan, 
        și am strâns împreună peste 13 000 de lei, reprezentând o parte din banii pentru una din pășunile sanctuarului.
    </p>
      </section>
      
    </section>
  )
}

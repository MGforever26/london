if (window.LONDON_DATA) {
  window.LONDON_DATA.links.hpTickets = "https://drive.google.com/file/d/1AYg1EyEpm8TqVj3ZaMMqHVFpR1FjIbRo/view?usp=drivesdk";
  window.LONDON_DATA.links.greenwich = "https://www.rmg.co.uk/royal-observatory";

  const sunday = window.LONDON_DATA.days.find((day) => day.id === "d12");

  if (sunday) {
    sunday.title = "South Kensington, Natural History Museum, park og Paddington";
    sunday.items = [
      ["Formiddag", "South Kensington", "Museumsområdet med Natural History Museum, Science Museum og Victoria and Albert Museum tæt på hinanden.", "Jubilee Line fra London Bridge til Westminster og videre med District Line eller Circle Line til South Kensington.", "Godt område at lande i før Natural History Museum.", [["Kort", "map:South Kensington station London"]]],
      ["12.00", "Natural History Museum", "Dagens hovedaktivitet.", "Fra South Kensington station til museet til fods.", "Allerede booket.", [["Info", "nhm"], ["Kort", "map:Natural History Museum London"]], "Booket"],
      ["Eftermiddag", "Royal Albert Hall og Kensington Gardens/Hyde Park", "Royal Albert Hall udefra og derefter videre til Kensington Gardens og Hyde Park.", "Til fods fra Natural History Museum via Royal Albert Hall til parken.", "Science Museum og Wonderlab er booket tirsdag.", [["Royal Albert Hall", "map:Royal Albert Hall London"], ["Hyde Park", "map:Hyde Park London"], ["Kensington Gardens", "map:Kensington Gardens London"]]],
      ["Sen eftermiddag", "Paddington Station og Paddington City", "Videre fra parken til Paddington Station og det nye byområde omkring stationen.", "Til fods fra Kensington Gardens/Hyde Park til Paddington.", "Dagens sidste stop før retur til hotellet.", [["Paddington Station", "map:Paddington Station London"], ["Paddington City", "map:Paddington Central London"]]],
      ["Sportsnote", "Wimbledon: herrefinale", "Herrefinalen spilles søndag kl. 17.00 dansk tid. Kan ses på DR.", "Ingen transport. Følges på telefon, hotel-tv eller pub, hvis det passer ind.", "Mest oplagte Wimbledon-kamp at have i baghovedet."]
    ];
  }

  const monday = window.LONDON_DATA.days.find((day) => day.id === "d13");
  const studioTour = monday?.items.find((item) => item[1] === "Harry Potter Studio Tour");

  if (studioTour) {
    studioTour[5] = studioTour[5] || [];
    studioTour[5] = studioTour[5].filter((link) => link[1] !== "hpTickets");
    studioTour[5].unshift(["Åbn billet-PDF", "hpTickets"]);
    studioTour[4] = "Ankomst tidligst kl. 16.10. Billet-PDF'en med alle fire billetter åbnes direkte via knappen.";
  }

  const tuesday = window.LONDON_DATA.days.find((day) => day.id === "d14");

  if (tuesday) {
    tuesday.items = [
      ["11.15", "Sky Garden", "Udsigt fra 20 Fenchurch Street.", "Fra hotellet til fods eller med kort transport til Monument.", "Booket. Adresse: 20 Fenchurch Street, London EC3M 8AF.", [["Booking", "sky"], ["Kort", "map:Sky Garden 20 Fenchurch Street London EC3M 8AF"]], "Booket"],
      ["13.30", "Wonderlab på Science Museum", "Gratis adgang til Science Museum er booket til kl. 13.00. Forventet ankomst omkring kl. 13.20 og derefter direkte til Wonderlab på niveau 3.", "Fra Sky Garden til Monument og videre med District Line direkte til South Kensington. Herfra gennem tunnelgangen mod museerne og videre til Science Museum.", "Wonderlab er booket for alle fire. Adgangsvinduet er kl. 13.30-14.25; det er ikke en sluttid. Science Museums øvrige gallerier følger bagefter.", [["Wonderlab", "wonder"], ["Science Museum", "science"], ["Kort", "map:Science Museum London"]], "Booket"],
      ["Efter Wonderlab", "Science Museums øvrige gallerier", "Fortsættelse i de almindelige gratis udstillinger efter Wonderlab.", "Ingen ny billet eller indgangstid.", "Prioritering efter energi og interesse.", [["Science Museum", "science"]]],
      ["Aften", "VM-semifinale 1 på pub", "Aftensmad og kamp på pub.", "Pub i London Bridge, Bermondsey eller Tower Bridge-området.", "Bordreservation kan være en fordel, især hvis England spiller."]
    ];
  }

  const wednesday = window.LONDON_DATA.days.find((day) => day.id === "d15");

  if (wednesday) {
    wednesday.title = "Buckingham Palace, Westminster, Trafalgar Square, Soho og King’s Cross";
    wednesday.items = [
      ["Formiddag", "Green Park, Buckingham Palace og St James’s Park", "Gåtur gennem Green Park til Buckingham Palace og videre gennem St James’s Park.", "Jubilee Line fra London Bridge til Green Park. Herfra til fods til paladset og videre gennem parkerne.", "Videre gennem Westminster-området.", [["Green Park", "map:Green Park London"], ["Buckingham Palace", "map:Buckingham Palace London"], ["St James’s Park", "map:St James's Park London"]]],
      ["Eftermiddag", "Westminster, Trafalgar Square, Soho og King’s Cross", "Gåtur gennem Westminster-området og Trafalgar Square, videre gennem Soho og med afslutning ved King’s Cross og St Pancras.", "Til fods og med Tube efter behov.", "King’s Cross som dagens sidste stop.", [["Westminster", "map:Westminster London"], ["Trafalgar Square", "map:Trafalgar Square London"], ["Soho", "map:Soho London"], ["King’s Cross", "map:Kings Cross Station London"]]],
      ["Aften", "VM-semifinale 2 på hotellet", "England mod Argentina på hotellet.", "Ingen transport.", "Kampstart kl. 20.00 lokal tid."]
    ];
  }

  const thursday = window.LONDON_DATA.days.find((day) => day.id === "d16");

  if (thursday) {
    thursday.title = "Greenwich, Horizon 22 og hjemrejse";
    thursday.items = [
      ["Formiddag", "Greenwich og nulmeridianen", "Greenwich Market, Cutty Sark udefra, Old Royal Naval College, Greenwich Park, udsigten og området ved Royal Observatory med nulmeridianen.", "Jubilee Line fra London Bridge til Canary Wharf og videre med DLR til Cutty Sark. Kort kig på Canary Wharf undervejs.", "Afgang fra Greenwich i god tid til Horizon 22.", [["Royal Observatory", "greenwich"], ["Cutty Sark", "map:Cutty Sark Greenwich London"], ["Old Royal Naval College", "map:Old Royal Naval College Greenwich London"], ["Nulmeridianen", "map:Prime Meridian Greenwich London"]]],
      ["12.00", "Horizon 22", "Gratis udsigt fra 22 Bishopsgate.", "DLR fra Cutty Sark til Bank og derfra til fods til 22 Bishopsgate.", "Booket. Ankomstvindue ca. kl. 12.00-12.15. Alle fire har billetter. Billetter vises ved ankomst. Sikkerhedstjek før Level 58. Tasker over L58 x W45 x D25 cm er ikke tilladt, og der er ingen lockers.", [["Booking", "horizon"], ["Kort", "map:Horizon 22 22 Bishopsgate London"]], "Booket"],
      ["Efter Horizon 22", "Frokost og afhentning af bagage", "Frokost tæt på City, London Bridge eller hotellet og derefter afhentning af bagage.", "Tæt på hotellet.", "Hotellet som base frem til afgang.", [["Hotel", "map:Premier Inn London Tower Bridge"]]],
      ["Eftermiddag", "Afgang mod Gatwick", "Fly fra Gatwick kl. 19.05. Afgang fra hotellet omkring kl. 15.30-16.00.", "Kort transport til London Bridge og derfra Thameslink til Gatwick Airport.", "Ca. 50-60 minutter fra hotel til Gatwick plus lufthavnstid.", [["Thameslink", "thames2"]]],
      ["Aften", "Hjemrejse", "Fly Gatwick 19.05 til København.", "Ankomst København om aftenen.", "Boarding og lufthavnstid."]
    ];
  }

  window.LONDON_DATA.bookings = window.LONDON_DATA.bookings.filter((booking) => !booking[0].startsWith("Horizon 22") && booking[0] !== "Changing the Guard");
  window.LONDON_DATA.bookings.push(["Horizon 22", "Torsdag 16. juli kl. 12.00. Ankomstvindue ca. 12.00-12.15", "Booket. 2 voksne og 2 børn. Billetter i mail/Wallet. Sikkerhedstjek og ingen store tasker.", "horizon"]);

  window.LONDON_DATA.alternatives = window.LONDON_DATA.alternatives.filter((alternative) => !alternative[0].includes("King’s Cross"));
}

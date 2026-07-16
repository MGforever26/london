if (window.LONDON_DATA) {
  window.LONDON_DATA.links.hpTickets = "https://drive.google.com/file/d/1AYg1EyEpm8TqVj3ZaMMqHVFpR1FjIbRo/view?usp=drivesdk";
  window.LONDON_DATA.links.greenwich = "https://www.rmg.co.uk/royal-observatory";

  const monday = window.LONDON_DATA.days.find((day) => day.id === "d13");
  const studioTour = monday?.items.find((item) => item[1] === "Harry Potter Studio Tour");

  if (studioTour) {
    studioTour[5] = studioTour[5] || [];
    studioTour[5] = studioTour[5].filter((link) => link[1] !== "hpTickets");
    studioTour[5].unshift(["Åbn billet-PDF", "hpTickets"]);
    studioTour[4] = "Ankomst tidligst kl. 16.10. Billet-PDF'en med alle fire billetter åbnes direkte via knappen.";
  }

  const wednesday = window.LONDON_DATA.days.find((day) => day.id === "d15");

  if (wednesday) {
    wednesday.title = "Buckingham Palace, St James’s Park, Westminster, Soho og King’s Cross";
    wednesday.items = [
      ["Formiddag", "Buckingham Palace og St James’s Park", "Se Buckingham Palace og gå gennem St James’s Park.", "Gå til London Bridge og tag Jubilee Line til Green Park. Herfra går I til paladset og videre gennem parken.", "Dagen fortsatte spontant gennem Westminster-området.", [["Buckingham Palace", "map:Buckingham Palace London"], ["St James’s Park", "map:St James's Park London"]]],
      ["Eftermiddag", "Westminster, Soho og King’s Cross", "Gå rundt i Westminster-området, fortsæt gennem Soho og slut ved King’s Cross og St Pancras.", "Resten af dagen klares til fods og med Tube efter behov.", "King’s Cross blev set som dagens sidste stop.", [["Westminster", "map:Westminster London"], ["Soho", "map:Soho London"], ["King’s Cross", "map:Kings Cross Station London"]]]
    ];
  }

  const thursday = window.LONDON_DATA.days.find((day) => day.id === "d16");

  if (thursday) {
    thursday.title = "Greenwich, Horizon 22 og hjemrejse";
    thursday.items = [
      ["Formiddag", "Greenwich og nulmeridianen", "Tag til Greenwich og oplev Greenwich Market, Cutty Sark udefra, Old Royal Naval College, Greenwich Park, udsigten og området ved Royal Observatory med nulmeridianen.", "Fra London Bridge tager I Jubilee Line til Canary Wharf og skifter til DLR mod Cutty Sark. Et kort kig på Canary Wharf kan flettes ind undervejs.", "Hold øje med tiden, så I kan være tilbage i City i god tid til Horizon 22.", [["Royal Observatory", "greenwich"], ["Cutty Sark", "map:Cutty Sark Greenwich London"], ["Old Royal Naval College", "map:Old Royal Naval College Greenwich London"], ["Nulmeridianen", "map:Prime Meridian Greenwich London"]]],
      ["12.00", "Horizon 22", "Gratis udsigt fra 22 Bishopsgate.", "Tag DLR fra Cutty Sark til Bank og gå derfra til 22 Bishopsgate.", "Booket. Ankomstvindue ca. kl. 12.00-12.15. Alle fire har billetter. Billetterne skal vises ved ankomst. Der er sikkerhedstjek før Level 58. Tag ikke store tasker med; tasker over L58 x W45 x D25 cm er ikke tilladt, og der er ingen lockers.", [["Booking", "horizon"], ["Kort", "map:Horizon 22 22 Bishopsgate London"]], "Booket"],
      ["Efter Horizon 22", "Frokost og afhentning af bagage", "Spis frokost tæt på City, London Bridge eller hotellet, og hent bagagen.", "Hold det tæt på hotellet.", "Hotellet kan bruges som base frem til afgang.", [["Hotel", "map:Premier Inn London Tower Bridge"]]],
      ["Eftermiddag", "Afgang mod Gatwick", "Fly fra Gatwick kl. 19.05. Afgang fra hotellet omkring 15.30 til 16.00 giver god luft.", "Gå eller tag kort taxa til London Bridge. Tag Thameslink fra London Bridge til Gatwick Airport.", "Regn med ca. 50 til 60 minutter fra hotel til Gatwick plus lufthavnstid.", [["Thameslink", "thames2"]]],
      ["Aften", "Hjemrejse", "Fly Gatwick 19.05 til København.", "Ankomst København om aftenen.", "Hold boarding og lufthavnstid enkelt."]
    ];
  }

  window.LONDON_DATA.bookings = window.LONDON_DATA.bookings.filter((booking) => !booking[0].startsWith("Horizon 22") && booking[0] !== "Changing the Guard");
  window.LONDON_DATA.bookings.push(["Horizon 22", "Torsdag 16. juli kl. 12.00. Ankomstvindue ca. 12.00-12.15", "Booket. 2 voksne og 2 børn. Billetter i mail/Wallet. Husk sikkerhedstjek og ingen store tasker.", "horizon"]);

  window.LONDON_DATA.alternatives = window.LONDON_DATA.alternatives.filter((alternative) => !alternative[0].includes("King’s Cross"));
}

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
    wednesday.title = "Buckingham Palace, St James’s Park, Greenwich og Horizon 22";
    wednesday.items = [
      ["Formiddag", "Buckingham Palace og St James’s Park", "Se Buckingham Palace, Victoria Memorial og The Mall. Gå derefter gennem St James’s Park mod Westminster.", "Gå til London Bridge og tag Jubilee Line direkte til Green Park. Herfra går I til Buckingham Palace og videre gennem parken.", "Afgang fra hotellet omkring kl. 10.30.", [["Buckingham Palace", "map:Buckingham Palace London"], ["St James’s Park", "map:St James's Park London"]]],
      ["Middag", "Canary Wharf og videre til Greenwich", "Tag Jubilee Line til Canary Wharf og se kort stationen, skyskraberne og dokkerne.", "Fra Canary Wharf fortsætter I med DLR til Cutty Sark, som ligger centralt i det historiske Greenwich.", "Canary Wharf er et kort stop undervejs.", [["Canary Wharf", "map:Canary Wharf London"], ["Cutty Sark DLR", "map:Cutty Sark DLR Station London"]]],
      ["Eftermiddag", "Greenwich og nulmeridianen", "Spis en enkel frokost omkring Greenwich Market. Se Cutty Sark udefra, Old Royal Naval College, Greenwich Park, udsigten og nulmeridianens markering ved Royal Observatory.", "Fra Cutty Sark går I gennem det maritime Greenwich og op gennem parken til observatoriet.", "Greenwich fortæller historien om 0° længdegrad og Greenwich Mean Time.", [["Royal Observatory", "greenwich"], ["Cutty Sark", "map:Cutty Sark Greenwich London"], ["Old Royal Naval College", "map:Old Royal Naval College Greenwich London"], ["Nulmeridianen", "map:Prime Meridian Greenwich London"]]],
      ["Sen eftermiddag", "Afgang mod Horizon 22", "Tag DLR fra Cutty Sark til Bank og gå videre til 22 Bishopsgate.", "Der er kort gang fra Bank til Horizon 22.", "Sæt god luft af til turen tilbage fra Greenwich.", [["Cutty Sark DLR", "map:Cutty Sark DLR Station London"], ["Horizon 22", "map:Horizon 22 22 Bishopsgate London"]]],
      ["16.00", "Horizon 22", "Gratis udsigt fra 22 Bishopsgate og dagens afslutning.", "Gå fra Bank til 22 Bishopsgate.", "Booket. Ankomstvindue kl. 16.00-16.15. Alle fire har billetter. Billetterne skal vises ved ankomst. Der er sikkerhedstjek før Level 58. Tag ikke store tasker med; tasker over L58 x W45 x D25 cm er ikke tilladt, og der er ingen lockers.", [["Booking", "horizon"], ["Kort", "map:Horizon 22 22 Bishopsgate London"]], "Booket"]
    ];
  }

  window.LONDON_DATA.bookings = window.LONDON_DATA.bookings.filter((booking) => booking[0] !== "Changing the Guard");

  const hasKingsCross = window.LONDON_DATA.alternatives.some((alternative) => alternative[0].includes("King’s Cross"));
  if (!hasKingsCross) {
    window.LONDON_DATA.alternatives.push(["King’s Cross og St Pancras", "Kort ekstra stop med stationshallen, Platform 9¾ og St Pancras-facaden, når tiden passer.", "https://www.kingscross.co.uk/harry-potters-platform-9-34", "map:Kings Cross Station London"]);
  }
}

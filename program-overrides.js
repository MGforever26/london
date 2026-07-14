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
      ["10.30", "Afgang mod Buckingham Palace", "Start dagen med Buckingham Palace og Victoria Memorial.", "Gå til London Bridge og tag Jubilee Line direkte til Green Park. Gå gennem Green Park til paladset.", "King’s Cross står som et kort ekstra stop, hvis tiden passer.", [["Buckingham Palace", "map:Buckingham Palace London"], ["King’s Cross", "map:Kings Cross Station London"]]],
      ["Ca. 11.10", "Buckingham Palace", "Se paladset, Victoria Memorial og The Mall.", "Fortsæt til fods gennem St James’s Park.", "Et kort stop giver en god oplevelse af det royale London.", [["Kort", "map:Buckingham Palace London"]]],
      ["Ca. 11.35", "St James’s Park", "Gå gennem parken langs søen mod Westminster Station.", "Fortsæt til fods til Westminster Station.", "En rolig grøn overgang fra Buckingham Palace til turen mod øst.", [["Kort", "map:St James's Park London"]]],
      ["Ca. 12.15", "Canary Wharf", "Tag Jubilee Line fra Westminster til Canary Wharf. Se stationen, skyskraberne og dokkerne.", "Skift derefter til DLR ved Canary Wharf og kør til Cutty Sark.", "Brug cirka 15 til 20 minutter i området.", [["Kort", "map:Canary Wharf London"]]],
      ["Ca. 13.00", "Greenwich og nulmeridianen", "Spis en enkel frokost omkring Greenwich Market. Se Cutty Sark udefra, det maritime område, Greenwich Park, udsigten og nulmeridianens markering ved Royal Observatory.", "Fra Cutty Sark går I gennem Greenwich og op gennem parken til observatoriet.", "Greenwich fortæller historien om 0° længdegrad og Greenwich Mean Time.", [["Royal Observatory", "greenwich"], ["Cutty Sark", "map:Cutty Sark Greenwich London"], ["Nulmeridianen", "map:Prime Meridian Greenwich London"]]],
      ["Ca. 14.45", "Afgang mod Horizon 22", "Gå tilbage mod Cutty Sark og tag DLR til Bank.", "Fra Bank er der kort gang til 22 Bishopsgate.", "Målet er at være ved Horizon 22 omkring kl. 15.45.", [["Cutty Sark DLR", "map:Cutty Sark DLR Station London"], ["Horizon 22", "map:Horizon 22 22 Bishopsgate London"]]],
      ["16.00", "Horizon 22", "Gratis udsigt fra 22 Bishopsgate og dagens afslutning.", "Gå fra Bank til 22 Bishopsgate.", "Booket. Ankomstvindue kl. 16.00-16.15. Alle fire har billetter. Billetterne skal vises ved ankomst. Der er sikkerhedstjek før Level 58. Tag ikke store tasker med; tasker over L58 x W45 x D25 cm er ikke tilladt, og der er ingen lockers.", [["Booking", "horizon"], ["Kort", "map:Horizon 22 22 Bishopsgate London"]], "Booket"]
    ];
  }

  window.LONDON_DATA.bookings = window.LONDON_DATA.bookings.filter((booking) => booking[0] !== "Changing the Guard");

  const hasKingsCross = window.LONDON_DATA.alternatives.some((alternative) => alternative[0].includes("King’s Cross"));
  if (!hasKingsCross) {
    window.LONDON_DATA.alternatives.push(["King’s Cross og St Pancras", "Kort ekstra stop med stationshallen, Platform 9¾ og St Pancras-facaden, når tiden passer.", "https://www.kingscross.co.uk/harry-potters-platform-9-34", "map:Kings Cross Station London"]);
  }
}

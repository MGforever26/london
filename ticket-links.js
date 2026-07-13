if (window.LONDON_DATA) {
  window.LONDON_DATA.links.hpTickets = "https://drive.google.com/file/d/1AYg1EyEpm8TqVj3ZaMMqHVFpR1FjIbRo/view?usp=drivesdk";

  const monday = window.LONDON_DATA.days.find((day) => day.id === "d13");
  const studioTour = monday?.items.find((item) => item[1] === "Harry Potter Studio Tour");

  if (studioTour) {
    studioTour[5] = studioTour[5] || [];
    studioTour[5] = studioTour[5].filter((link) => link[1] !== "hpTickets");
    studioTour[5].unshift(["Åbn billet-PDF", "hpTickets"]);
    studioTour[4] = "Ankomst tidligst kl. 16.10. Billet-PDF'en med alle fire billetter åbnes direkte via knappen.";
  }
}

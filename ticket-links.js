if (window.LONDON_DATA) {
  window.LONDON_DATA.links.hpTickets = "https://mail.google.com/mail/u/0/#inbox/19dd05fb082f6afb";

  const monday = window.LONDON_DATA.days.find((day) => day.id === "d13");
  const studioTour = monday?.items.find((item) => item[1] === "Harry Potter Studio Tour");

  if (studioTour) {
    studioTour[5] = studioTour[5] || [];
    studioTour[5] = studioTour[5].filter((link) => link[1] !== "hpTickets");
    studioTour[5].unshift(["Bookingmail med billet-PDF", "hpTickets"]);
    studioTour[4] = "Ankomst tidligst kl. 16.10. Åbn bookingmailen via knappen og tryk på den vedhæftede PDF med de fire billetter.";
  }
}

if (window.LONDON_DATA) {
  window.LONDON_DATA.links.hpTickets = "https://mail.google.com/mail/#all/19dd05fb082f6afb";

  const monday = window.LONDON_DATA.days.find((day) => day.id === "d13");
  const studioTour = monday?.items.find((item) => item[1] === "Harry Potter Studio Tour");

  if (studioTour) {
    studioTour[5] = studioTour[5] || [];
    const hasTicketLink = studioTour[5].some((link) => link[1] === "hpTickets");
    if (!hasTicketLink) studioTour[5].unshift(["Billetter i Gmail", "hpTickets"]);
  }
}

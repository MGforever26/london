const D = window.LONDON_DATA;
const links = D.links;

function applyTransportFixes() {
  const by = (arr, name) => arr.find(x => x[0] === name);

  D.practical = D.practical.filter(x => x[0] !== 'Bus 15');

  const ns = by(D.practical, 'Nærmeste store station');
  if (ns) {
    ns[1] = 'London Bridge. Bruges til Gatwick, Tube, tog mod Greenwich og adgang til resten af byen. Efter ankomst går vi til London Bridge Underground og køber et almindeligt Oyster til den 12-årige. Kortet koster £10.50. Personalet lægger Young Visitor discount på, og vi fylder ca. £10 på først. Første udgift bliver dermed ca. £20.50: £10.50 for kortet plus ca. £10 i rejsekredit. Zone 1-2 er fint til de almindelige London-ture.';
    ns[2] = [['Oyster/top-up', 'tflOyster']];
  }

  const gat = by(D.practical, 'Gatwick til hotel');
  if (gat) {
    gat[1] = 'Tag Thameslink fra Gatwick Airport til London Bridge. Køb børnebilletter til begge børn i Gatwick. De voksne bruger contactless/pay as you go. Vi løser ikke Oyster til den 12-årige i Gatwick, fordi vi vil købe kortet og få Young Visitor discount lagt på i samme arbejdsgang ved London Bridge Underground. Uden rabatten ville den 12-årige rejse til voksenpris på Oyster/pay as you go. Rejsetiden er typisk ca. 36 minutter, hurtigst ca. 29 minutter. Derfra ca. 12 til 15 minutters gang eller kort taxa til hotellet.';
  }

  const p = by(D.practical, 'Offentlig transport');
  if (p) {
    p[1] = [
      'Voksne bruger contactless/pay as you go. Hver voksen skal bruge sit eget kort eller sin egen telefon og samme kort/enhed hele dagen, så capping virker korrekt.',
      'Den 10-årige rejser gratis med betalende voksen på TfL-transport i London.',
      'Den 12-årige skal have et almindeligt Oyster uden foto. Det er ikke et Zip Oyster photocard, kræver ikke forudbestilling og kræver ikke pas/fotoansøgning.',
      'Vi køber ikke Oyster i Gatwick, fordi vi vil købe kortet og få Young Visitor discount lagt på i samme arbejdsgang ved London Bridge Underground. Uden rabatten ville den 12-årige rejse til voksenpris på Oyster/pay as you go.',
      'Oyster-kortet koster £10.50. Det er kortpris, ikke saldo. Første udgift bliver ca. £20.50, hvis vi fylder £10 på fra start.',
      'Ved London Bridge Underground beder vi personalet lægge Young Visitor discount på kortet. Barnet skal være med. Rabatten giver 50 procent på voksen pay as you go og daglige lofter i op til 14 dage.',
      'Det er nemt at toppe op senere i TfL Go, ved Oyster Ticket Stops og ved billetautomater på Tube, London Overground og de fleste Elizabeth line- og National Rail-stationer.',
      'Rejser uden for zone 1-2 er ikke et problem med Oyster/pay as you go. De koster bare mere end zone 1-2 og kræver nok saldo på kortet.',
      'Harry Potter/Watford er ikke et separat kortproblem. Den 12-åriges Oyster kan bruges Euston-Watford Junction, hvis kortet er tanket op.',
      'Sammenligningen med ugekort skal læses sådan: Oyster-kortets £10.50 er en fast kortudgift. Derefter betaler vi kun faktisk rejseforbrug. Hvis vi i stedet vælger 7 Day Travelcard zone 1-2, skal det normalt lægges på et Oyster-kort, så kortudgiften på £10.50 kommer oven i Travelcard-prisen på £22.40. Samlet minimum bliver derfor ca. £32.90, før ekstra betaling/saldo til Gatwick og Watford/Harry Potter. Derfor kan ugekortet ikke betale sig i vores program.'
    ];
    p[2] = [['Oyster/top-up', 'tflOyster'], ['11-15-priser', 'tflChildFares']];
  }

  const gateCard = [
    'Sådan undgår vi gate-bøvl',
    [
      'Én voksen har ansvar for den 10-årige ved gates. Brug den brede gate, når der er en. Den voksne tapper sit kort/telefon og går igennem sammen med den 10-årige.',
      'Den 12-årige bruger sit eget Oyster og tapper selv ind og ud. Ingen andre bruger hans Oyster.',
      'Hver voksen bruger samme kort eller samme telefon hele dagen. Bland ikke fysisk kort, iPhone og Apple Watch på samme rejse.',
      'Hold betalingskort, Oyster og telefon adskilt ved læseren, så der ikke opstår card clash.',
      'På Tube, DLR, Overground, Elizabeth line og tog: tap ind og tap ud. På bus og tram: kun tap ind.',
      'Hvis en gate driller, eller den 10-årige ikke kommer med igennem, så brug den brede gate eller spørg personalet ved gates. Lad være med at prøve at improvisere med flere kort på samme læser.'
    ]
  ];
  const existingGate = by(D.practical, gateCard[0]);
  if (existingGate) {
    existingGate[1] = gateCard[1];
  } else {
    const i = D.practical.findIndex(x => x[0] === 'Offentlig transport');
    D.practical.splice(i === -1 ? D.practical.length : i + 1, 0, gateCard);
  }

  const fri = D.days.find(d => d.id === 'd10');
  if (fri) {
    const it = fri.items[0];
    it[3] = 'Thameslink fra Gatwick Airport til London Bridge. I Gatwick løser vi kun børnenes togbilletter, ikke Oyster til den 12-årige. Ved London Bridge Underground køber vi et almindeligt Oyster til den 12-årige, får Young Visitor discount lagt på af personalet og fylder ca. £10 på.';
    it[4] = 'Oyster-kortet koster £10.50. Det er kortpris, ikke saldo. Første udgift bliver derfor ca. £20.50: £10.50 for kortet plus ca. £10 i rejsekredit. Vi venter til London Bridge, fordi rabatten lægges på dér; uden rabatten ville den 12-årige rejse til voksenpris på Oyster/pay as you go.';
    it[5] = [['Thameslink', 'thames1'], ['Hotel', 'map:Premier Inn London Tower Bridge'], ['Oyster', 'tflOyster']];
  }

  const mon = D.days.find(d => d.id === 'd13');
  if (mon) {
    const b = mon.items[0];
    b[3] = 'Gå eller tag kort transport til Tower Hill. Tag bus 15 mod Trafalgar Square/Charing Cross. Betaling: voksne bruger contactless/pay as you go, den 12-årige bruger Oyster, og den 10-årige rejser gratis med betalende voksen.';
    b[4] = 'Der er ikke garanti for dobbeltdekker på hver afgang, men øverste dæk er bedst, hvis bussen er dobbeltdekker.';
  }
}

applyTransportFixes();

function map(q) {
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
}

function url(k) {
  return k && k.startsWith('map:') ? map(k.slice(4)) : links[k] || k;
}

function esc(s) {
  return String(s || '').replace(/[&<>]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[m]));
}

function cleanTitle(s) {
  return String(s || '')
    .replace('Ankomst og rolig aftentur ved Themsen', 'Ankomst og aftentur ved Themsen')
    .replace('Rolig aftentur ved Tower Bridge', 'Aftentur ved Tower Bridge');
}

function sportsText(s) {
  return String(s || '')
    .replace(/kl\. 17\.00 dansk tid/g, 'kl. 16.00 lokal tid (17.00 dansk tid)')
    .replace(/kl\. 14\.30 dansk tid/g, 'kl. 13.30 lokal tid (14.30 dansk tid)');
}

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function travelDay() {
  const t = todayISO();
  return D.days.find(d => d.iso === t) || null;
}

function inTravelWeek() {
  return !!travelDay();
}

function isPast(d) {
  return inTravelWeek() && d.iso < todayISO();
}

function isTodayDay(d) {
  const td = travelDay();
  return td && td.id === d.id;
}

function travelBadge(d) {
  if (isTodayDay(d)) return `<span class='travel-state'>I dag</span>`;
  if (isPast(d)) return `<span class='travel-state past'>Gået</span>`;
  return '';
}

function btns(arr) {
  return arr && arr.length
    ? `<div class='buttons'>${arr.map(x => `<a href='${url(x[1])}' target='_blank' rel='noopener'>${esc(x[0])}</a>`).join('')}</div>`
    : '';
}

function badge(s) {
  return s ? `<span class='badge ${s === 'Booket' ? 'booked' : 'todo'}'>${esc(s)}</span>` : '';
}

function infoBody(content) {
  if (Array.isArray(content)) {
    return `<ul class='info-list'>${content.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
  }
  return `<p>${esc(content)}</p>`;
}

function eventCard(it) {
  if (it[0] === 'Sportsnote') {
    return `<article class='event-card'><div class='event-head'><div><div class='time'>Sportsnote</div><h3>${esc(it[1])}</h3></div></div><p class='maintext'>${esc(sportsText(it[2]))}</p>${btns(it[5])}</article>`;
  }
  return `<article class='event-card'><div class='event-head'><div><div class='time'>${esc(it[0])}</div><h3>${esc(cleanTitle(it[1]))}</h3></div>${badge(it[6])}</div><p class='maintext'>${esc(it[2])}</p><p><b>Transport:</b> ${esc(it[3])}</p><p><b>Bemærkning:</b> ${esc(it[4])}</p>${btns(it[5])}</article>`;
}

function show(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav button').forEach(b => b.classList.toggle('active', b.dataset.id === id));
  document.getElementById('main').scrollIntoView({ block: 'start', behavior: 'auto' });
}

const navItems = [['overblik', 'Overblik'], ...D.days.map(d => [d.id, d.date.split(' ')[1]]), ['bookinger', 'Bookinger'], ['praktisk', 'Praktisk'], ['alternativer', 'Alternativer']];
document.getElementById('nav').innerHTML = navItems.map(([id, t]) => `<button data-id='${id}' onclick='show(\`${id}\`)'>${t}</button>`).join('');

let html = `<section id='overblik' class='section active'><h2 class='section-title'>Overblik</h2><div class='overview-grid'>${D.days.map(d => {
  const mainItems = d.items.filter(x => x[0] !== 'Sportsnote').slice(0, 3);
  return `<button data-day='${d.id}' class='overview-card ${isPast(d) ? 'is-past' : ''} ${isTodayDay(d) ? 'is-today' : ''}' onclick='show(\`${d.id}\`)'><div class='date-mini'>${esc(d.date)}</div><div><h3>${esc(cleanTitle(d.title))}</h3><p>${esc(mainItems.map(x => x[0] + ': ' + cleanTitle(x[1])).join(' · '))}</p><div class='badgeline'>${travelBadge(d)}${d.items.some(x => x[6] === 'Booket') ? `<span class='smallbadge booked'>Booket</span>` : ''}${d.items.some(x => x[6] && x[6] !== 'Booket') ? `<span class='smallbadge todo'>Skal bookes</span>` : ''}</div></div></button>`;
}).join('')}</div></section>`;

html += D.days.map(d => `<section id='${d.id}' class='section ${d.c}'><div class='day-hero'><div class='kicker'>Program</div><h2>${esc(d.date)}</h2><p>${esc(cleanTitle(d.title))}</p>${isTodayDay(d) ? `<div class='travel-ribbon'>I dag · ${esc(d.date)}</div>` : ''}</div><div class='cards'>${d.items.map(eventCard).join('')}</div></section>`).join('');

html += `<section id='bookinger' class='section'><h2 class='section-title'>Bookinger og tjekpunkter</h2><div class='list-stack'>${D.bookings.map(x => `<article class='list-card'><div><h3>${esc(x[0])}</h3><p>${esc(x[1])}</p><p><b>Status:</b> ${esc(x[2])}</p></div><a href='${url(x[3])}' target='_blank' rel='noopener'>Link</a></article>`).join('')}</div></section>`;

html += `<section id='praktisk' class='section'><h2 class='section-title'>Praktisk info</h2><div class='info-grid'>${D.practical.map(x => `<article class='info-card'><h3>${esc(x[0])}</h3>${infoBody(x[1])}${btns(x[2])}</article>`).join('')}</div></section>`;

html += `<section id='alternativer' class='section'><h2 class='section-title'>Oplagte alternativer</h2><div class='list-stack'>${D.alternatives.map(x => `<article class='list-card'><div><h3>${esc(x[0])}</h3><p>${esc(x[1])}</p></div><div class='list-actions'><a href='${x[2]}' target='_blank' rel='noopener'>Info</a><a href='${url(x[3])}' target='_blank' rel='noopener'>Åbn kort</a></div></article>`).join('')}</div></section><div class='footer'>London program · mobilversion</div>`;

document.getElementById('main').innerHTML = html;
document.querySelectorAll('.nav button').forEach(btn => {
  const d = D.days.find(x => x.id === btn.dataset.id);
  if (d && isPast(d)) btn.classList.add('past-nav');
  if (d && isTodayDay(d)) btn.classList.add('today-nav');
});
const td = travelDay();
show(td ? td.id : 'overblik');

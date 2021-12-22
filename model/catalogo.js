const baseFilmes = [
  'tt0038650',
  'tt0107688',
  'tt0099785',
  'tt0319343',
  'tt3281548',
  'tt0170016',
  'tt0203671',
  'tt2709692',
  'tt0064612',
  'tt0338348',
  'tt4729430',
  'tt0033045',
  'tt2056771',
  'tt1129435',
  'tt1748122',
  'tt8858104',
  'tt0073195',
  'tt0092005',
  'tt7162380',
  'tt0046250',
  'tt0059725',
  'tt0043067',
  'tt0179389',
  'tt0112471',
  'tt1421051',
  'tt0449059',
  'tt8326624',
  'tt0245429',
  'tt7182294',
  'tt0051561',
];

const catalogo = [];

function criaCatalogo() {
  while (catalogo.length < 5) {
    let id = randomID();
    if (catalogo.indexOf(baseFilmes[id]) == -1) {
      catalogo.push(baseFilmes[id]);
    }
  }
}

function randomID() {
  return Math.floor(Math.random() * baseFilmes.length);
}

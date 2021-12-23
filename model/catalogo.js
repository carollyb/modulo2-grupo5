class Catalogo {
  constructor() {
    this.criaCatalogo();
  }

  #catalogo = [];

  #baseFilmes = [
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

  criaCatalogo() {
    this.#catalogo = [];
    while (this.#catalogo.length < 15) {
      let id = this.randomID();
      if (this.#catalogo.indexOf(this.#baseFilmes[id]) == -1) {
        this.#catalogo.push(this.#baseFilmes[id]);
      }
    }
  }

  randomID() {
    return Math.floor(Math.random() * this.#baseFilmes.length);
  }

  getCatalogo() {
    return this.#catalogo;
  }
}

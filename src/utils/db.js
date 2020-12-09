const CovidPage = {
  path: "kovid-analitika",
}

const makeElement = (title, options) => ({
  title,
  ...options
});
const db = [
  makeElement('korona', CovidPage),
  makeElement('koronavirus', CovidPage),
  makeElement('korona virus', CovidPage),
  makeElement('corona', CovidPage),
  makeElement('coronavirus', CovidPage),
  makeElement('corona virus', CovidPage),
  makeElement('virus korona', CovidPage),
  makeElement('covid', CovidPage),
  makeElement('covid19', CovidPage),
  makeElement('kovid', CovidPage),
  //
  makeElement('корона', CovidPage),
  makeElement('коронавирус', CovidPage),
  makeElement('корона вирус', CovidPage),
  makeElement('вирус корона', CovidPage),
  makeElement('ковид', CovidPage),
  makeElement('ковид19', CovidPage),
]

export default db;
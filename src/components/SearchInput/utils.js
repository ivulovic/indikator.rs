import db from '../../utils/db';
import fuzzy from '../../utils/fuzzy';

const searchByTitle = fuzzy(db, 'title');

export {
  searchByTitle
}
import {heroes, Owner} from "../data/heroes.data"

export const getHeroByOwner = (owner: Owner) => {
  
  const heroesByOwner = heroes.filter(
    hero => (hero.owner === owner)
  );

  return heroesByOwner;
}

import { GenericFighter } from './Fighter';

export default interface SimpleFighter extends GenericFighter<SimpleFighter> {
  lifePoints: number;
  strength: number;

  receiveDamage(attackPoints: number): number;
}
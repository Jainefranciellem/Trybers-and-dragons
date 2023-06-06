import Energy from '../Energy';

export interface GenericFighter<T> {
  lifePoints: number;
  strength: number;

  attack(enemy: T): void;
}

export default interface Fighter extends GenericFighter<Fighter>{
  defense: number;
  energy?: Energy;

  receiveDamage(attackPoints: number): number;
  special?(enemy: Fighter): void;
  levelUp(): void;
}

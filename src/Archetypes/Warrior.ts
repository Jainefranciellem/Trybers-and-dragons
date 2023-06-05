import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  static count = 0;
  private _energy: EnergyType;

  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    Warrior.count += 1;
    this._energy = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this.count;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}
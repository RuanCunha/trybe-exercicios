// // Sintaxe com classes

// abstract class Character {
//   abstract name: string
//   abstract talk(): void
//   abstract specialMove(): void
// }

// class MeleeCharacter extends Character {
//   constructor(public name: string) {
//     super()
//     this.name = name;
//   }

//   talk(): void {
//     console.log(`${this.name} says: Ovô tidá porrada!`);
//     ;
//   }
//   specialMove(): void {
//     console.log(`${this.name} says: Especial de porrada!`);
//   }
  
// }

// class LongRangeCharacter extends Character {
//   constructor(public name: string) {
//     super()
//     this.name = name;
//   }

//   talk(): void {
//     console.log(`${this.name} says: Ovô tidá um tiro!`);
//     ;
//   }
//   specialMove(): void {
//     console.log(`${this.name} says: Especial de tiro!`);
//     ;
//   }
// }

// const taunt = (character: Character): void => {
//   character.talk();
// }

// const specialAttack = (character: Character): void => {
//   character.specialMove();
// }

// const mario = new MeleeCharacter("Mário");
// const zelda = new LongRangeCharacter("Zelda");

// taunt(mario);
// taunt(zelda);

// specialAttack(mario);
// specialAttack(zelda);

// Sintaxe de interfaces e generics

interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

interface IModel {
  create(character: Character): Promise<DbCharacter>
  update(id: number, character: Character): Promise<DbCharacter>
  delete(id: number): Promise<boolean>
  getById(id: number): Promise<DbCharacter>
  getAll(): Promise<DbCharacter[]>
}

class LocalDbModel implements IModel {

  findIndexById = (id: number) => {
    const index = db.findIndex((char) => char.id === id);
    if (index < 0) throw new Error('Character not found')
    return index;
  }
  async create(character: Character): Promise<DbCharacter> {
    const lastId = db.length > 0 ? db[db.length -1].id : 0;
    const newCharacter = { id: lastId + 1, ...character };
    db.push(newCharacter);
    return newCharacter;
  }
  async update(id: number, character: Character): Promise<DbCharacter> {
    const indexToGet = this.findIndexById(id);
    db[indexToGet] = { ...db[indexToGet], ...character }
    return db[indexToGet];
  }
  async delete(id: number): Promise<boolean> {
    const indexToGet = this.findIndexById(id);
    const deletedItem = db.splice(indexToGet, 1);
    if (deletedItem.length > 0) return true;
    return false;
  }
  async getById(id: number): Promise<DbCharacter> {
    const indexToGet = this.findIndexById(id);
    return db[indexToGet];
  }
  async getAll(): Promise<DbCharacter[]> {
    return db;
  }
}

class CharacterService {
  constructor(readonly model: IModel) { }

  async create(character: Character) {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter})
  }

  async update(id: number, character: Character) {
    const updatedCharacter = await this.model.update(id, character);
    return ({ status: 200, data: updatedCharacter});
  }

  async delete(id: number) {
    const deletedCharacter = await this.model.delete(id);
    if (deletedCharacter) {
      return ({ status: 200 })
    }
    return ({ status: 404, message: 'Character not found' })
  }

  async getById(id: number) {
    const result = await this.model.getById(id);
    return ({ status: 200, data: result})
  }

  async getAll() {
    const result = await this.model.getAll();
    return ({ status: 200, data: result })
  }
}

class MockDbModel implements IModel {
  async update(id: number, character: Character): Promise<DbCharacter> {
    console.log('character updated');
    return { id: 1, name: 'Yoshi', specialMove: 'Egg Lay' }
  }
  async delete(id: number): Promise<boolean> {
    console.log('character deleted');
    return true;
  }
  async getById(id: number): Promise<DbCharacter> {
    console.log('character fetched');
    return { id: 1, name: 'Mari', specialMove: 'Fireball' }
  }
  async getAll(): Promise<DbCharacter[]> {
    console.log('list of characters');
    return [
      { id: 1, name: 'Peach', specialMove: 'Toad' },
      { id: 2, name: 'Samus', specialMove: 'Morph Ball'}
    ]
  }
  async create(character: Character) {
    console.log('character created');
    return { id: 1, name: 'Peach', specialMove: 'Toad' }
  }
}

const db: DbCharacter[] = [];

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log)

const B = new CharacterService(new MockDbModel());
B.getAll().then(console.log)

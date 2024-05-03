import { Character } from "../character.js";

test("leverUp проверка всех параметров при здоровье больше 0", () => {
    const resoult = "уровень повышел до 6\nатака повышена до 12\nзащита повышена до 12\nуровень здоровья повышен до 100"
    const character = new Character("Дима", "broman", 75, 5, 10, 10);
    const characterlevel = character.levelUp()
    expect(characterlevel).toEqual(resoult);
});

test("leverUp Проверка здоровья меньше 0", () => {
    const character = new Character("Дима", "broman", 0, 5, 10, 10);
    expect(() => character.levelUp()).toThrow(Error);
});

test("damage проверка урона при значение 100", () => {
    const character = new Character("Дима", "broman", 75, 5, 10, 10);
    let points = 100;
    expect(() => character.damage(points)).toThrow(Error);
})

test("damage проверка на наличие здоровья меньше 0", () => {
    const resoult = "персонаж мертв";
    const character = new Character("Дима", "broman", 0, 5, 10, 10);
    let points = 10;
    const characterdamage = character.damage(points)
    expect(characterdamage).toEqual(resoult);
})

test("damage проверка урона при значение в 10", () => {
    const resoult = "Оставшееся кличество здоровья 66";
    const character = new Character("Дима", "broman", 75, 5, 10, 10);
    const points = 10;
    const characterdamade = character.damage(points);
    expect(characterdamade).toEqual(resoult);
})
export class Character {
    constructor(name, type, health, level, attack, defence) {
        this.name = name,
        this.type = type,
        this.health = health,
        this.level = level,
        this.attack = attack,
        this.defence = defence
    };

    levelUp() {
         if(this.health > 0){
            this.level = this.level + 1;
            this.attack = this.attack + (this.attack * 0.2);
            this.defence = this.defence + (this.defence * 0.2);
            this.health = 100;
            return`уровень повышел до ${this.level}\nатака повышена до ${this.attack}\nзащита повышена до ${this.defence}\nуровень здоровья повышен до ${this.health}`
         }else{
            throw new Error("нельзя повысить левел умершего")
         };
    };

    damage(points){
        if(this.health > 0) {
            this.health -= points * (1 - this.defence / 100)
            if(this.health > 0){
                return `Оставшееся кличество здоровья ${this.health}`
            }if(this.health < 0){
                throw new Error("персонаж мертв")
            };
        }else{
            return "персонаж мертв"
        };
    };
};

import {makeAutoObservable} from 'mobx'

export default class SearchState{
    constructor(){
        this._matches = [
            {id: 1, serial: {id: 10, name: "Игра престолов"}, img: "game_of_thrones_icon.jpg",
            description: "События сериала разворачиваются в другом мире, где повсюду с людьми есть волшебные и причудливые существа. Когда-то, на просторе вестеросских правил династии Таргариенов, держали власть с помощью драконов, но так было ровно до того момента, когда..."},
            {id: 2, serial: {id: 20, name: "Мир дикого запада "}, img: "west_world_icon.jpg", 
            description: "Сегодня даже обычного человека трудно удивить тем, не говоря уже о самых влиятельных и богатых людей на планете. Именно для этих клиентов был создан тематический парк \"Мир Дикого Запада\". Здесь посетители могут позволить себе все и удовлетворить низкие..."},
            {id: 3, serial: {id: 30, name: "Ход королевы"}, img: "queens_gambit_icon.jpg",
            description: "Середина прошлого века, юная Бет Хармон скромно живет в небольшом приюте Кентукки. В детстве она собственными глазами видела смерть матери, девочка не получила необходимой любви и заботы, проведя всю жизнь в оковах травмы. Себя и свое призвание она..."}
        ];

        makeAutoObservable(this)
    }

    setMatches(matches) {
        this._matches = matches
    }

    get matches(){
        return this._matches
    }
}
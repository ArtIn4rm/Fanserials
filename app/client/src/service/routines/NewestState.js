import {makeAutoObservable} from 'mobx'

export default class PopylarState{
    constructor(){
        this._newest = [
            {id: 1, serial: {id: 12, name: "Пацаны", original: "The Boys"}, img: "boys_icon.jpg", month: "мая"},
            {id: 2, serial: {id: 13, name: "Игра престолов", original: "Game of Thrones"}, img: "game_of_thrones_icon.jpg", month: "мая"},
            {id: 3, serial: {id: 14, name: "Рассказ служанки", original: "Handmades tale"}, img: "handmades_tale_icon.jpg", month: "апреля"},
            {id: 4, serial: {id: 15, name: "Темные начала", original: "His dark materials"}, img: "his_dark_materials_icon.jpg", month: "мая"},
            {id: 5, serial: {id: 11, name: "Ход королевы", original: "Queens gambit"}, img: "queens_gambit_icon.jpg", month: "мая"},
            {id: 6, serial: {id: 11, name: "Мир дикого запада", original: "West world"}, img: "west_world_icon.jpg", month: "мая"},
        ];

        makeAutoObservable(this)
    }

    setNewest(newest) {
        this._newest = newest
    }

    get newest(){
        return this._newest
    }
}
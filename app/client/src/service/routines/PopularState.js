import {makeAutoObservable} from 'mobx'

export default class PopylarState{
    constructor(){
        this._populars = [
            {id: 1, serial: {id: 11, name: "Игра престолов", janre: "фэнтези"}, img: "game_of_thrones_icon.jpg"},
            {id: 2, serial: {id: 12, name: "Темные начала", janre: "фэнтези"}, img: "his_dark_materials_icon.jpg"},
            {id: 3, serial: {id: 13, name: "Рассказ служанки", janre: "фантастика"}, img: "handmades_tale_icon.jpg"},
            {id: 4, serial: {id: 14, name: "Ход королевы", janre: "драма"}, img: "queens_gambit_icon.jpg"},
            {id: 5, serial: {id: 15, name: "Пацаны", janre: "комедия"}, img: "boys_icon.jpg"},
        ];

        makeAutoObservable(this)
    }

    setPopulars(populars) {
        this._populars = populars
    }

    get populars(){
        return this._populars
    }
}
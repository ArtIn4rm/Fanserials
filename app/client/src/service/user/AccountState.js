import {makeAutoObservable} from 'mobx'

export default class AccountState{
    constructor(){
        this._account = {id: 1, name: "pers1", email: "pers1@gmail.com", avatar: "default_avatar.jpg"}
        this._recomended = [
            {id: 1, name: "Пацаны", janre: {id: 1, name: "боевик"}, img: "boys_icon.jpg"},
            {id: 2, name: "Рассказ служанки", janre: {id: 1, name: "драма"}, img: "handmades_tale_icon.jpg"},
            {id: 3, name: "Ход королевы", janre: {id: 1, name: "драма"}, img: "queens_gambit_icon.jpg"}, 
            {id: 4, name: "Темные начала", janre: {id: 1, name: "фэнтези"}, img: "his_dark_materials_icon.jpg"},
            {id: 5, name: "Игра престолов", janre: {id: 1, name: "фэнтези"}, img: "game_of_thrones_icon.jpg"}
        ]
        this._last = [
            {id: 4, name: "Темные начала", janre: {id: 1, name: "фэнтези"}, img: "his_dark_materials_icon.jpg"},
            {id: 2, name: "Рассказ служанки", janre: {id: 1, name: "драма"}, img: "handmades_tale_icon.jpg"},
            {id: 3, name: "Ход королевы", janre: {id: 1, name: "драма"}, img: "queens_gambit_icon.jpg"}, 
            {id: 1, name: "Пацаны", janre: {id: 1, name: "боевик"}, img: "boys_icon.jpg"},
            {id: 5, name: "Игра престолов", janre: {id: 1, name: "фэнтези"}, img: "game_of_thrones_icon.jpg"}
        ]
        makeAutoObservable(this)
    }

    setAccount(account){
        this._account = account;
    }

    get account(){
        return this._account
    }

    setRecomended(recomended){
        this._recomended = recomended;
    }

    get recomended(){
        return this._recomended
    }

    setLast(last){
        this._last = last;
    }

    get last(){
        return this._last
    }
}
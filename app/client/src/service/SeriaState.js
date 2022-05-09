import {makeAutoObservable} from 'mobx'

export default class SeriaState{
    constructor(){
        this._comments = [
            {id: 1, author: {id: 1, name: "pers1"}, text: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et felis eget felis feugiat rhoncus in ac eros. Sed ornare vulputate dolor, vel efficitur nisl auctor at. Sed semper et lectus eu dapibus.",
            likes: 5, dislikes: 10, avatar: "default_avatar.jpg", date: {day: 19, month: "мая", year: 2022, seconds: 1116}},
            {id: 2, author: {id: 2, name: "pers2"}, text: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et felis eget felis feugiat rhoncus in ac eros. Sed ornare vulputate dolor, vel efficitur nisl auctor at. Sed semper et lectus eu dapibus.",
            likes: 14, dislikes: 4, avatar: "default_avatar.jpg", date: {day: 20, month: "мая", year: 2022, seconds: 1467}},
            {id: 3, author: {id: 3, name: "pers3"}, text: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et felis eget felis feugiat rhoncus in ac eros. Sed ornare vulputate dolor, vel efficitur nisl auctor at. Sed semper et lectus eu dapibus.",
            likes: 7, dislikes: 12, avatar: "default_avatar.jpg", date: {day: 16, month: "июня", year: 2022, seconds: 1569}},
            {id: 4, author: {id: 4, name: "pers4"}, text: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et felis eget felis feugiat rhoncus in ac eros. Sed ornare vulputate dolor, vel efficitur nisl auctor at. Sed semper et lectus eu dapibus.",
            likes: 17, dislikes: 12, avatar: "default_avatar.jpg", date: {day: 17, month: "июня", year: 2022, seconds: 789}}
        ]
        this._recomended = [
            {id: 1, name: "Пацаны", janre: {id: 1, name: "боевик"}, img: "boys_icon.jpg"},
            {id: 2, name: "Рассказ служанки", janre: {id: 1, name: "драма"}, img: "handmades_tale_icon.jpg"},
            {id: 3, name: "Ход королевы", janre: {id: 1, name: "драма"}, img: "queens_gambit_icon.jpg"}, 
            {id: 4, name: "Темные начала", janre: {id: 1, name: "фэнтези"}, img: "his_dark_materials_icon.jpg"},
            {id: 5, name: "Игра престолов", janre: {id: 1, name: "фэнтези"}, img: "game_of_thrones_icon.jpg"}
        ]
        this._studios = [
            {id: 1, name: "Дубляж"},  {id: 2, name: "Кравец"}, {id: 3, name: "TvShows"}
        ]
        this._seria = {id: 3, serial: {id: 2, name: "Игра престолов"}, season: 2, seria: 1, seriaName: "Винтерфелл",  rate: 8.4 ,img: "game_of_thrones_8_1.jpg", description: 
        "В 1 серии 8 сезона сериала \"Игра престолов\" Джон Сноу и Дейнерис с войсками прибывают в родовое гнездо Старков. Происходит не слишком тёплая встреча и знакомство Леди Винтерфелла и матери драконов. Дейнерис пытается убедить народ севера, что она будет на их стороне и нужно объединиться, чтобы предстать перед лицом общего врага — армией мёртвых. Собирается военный совет. Серсея получает вести о ситуации на севере. Эурон Греджой отправляется на важную миссию. Джейме добирается до Винтерфелла. Тем временем Джон узнает о своём происхождении..."}
        makeAutoObservable(this)
    }

    setSeria(seria){
        this._seria = seria;
    }

    get seria(){
        return this._seria
    }

    setComments(comments){
        this._comments = comments;
    }

    get comments(){
        return this._comments
    }

    setRecomended(recomended){
        this._recomended = recomended;
    }

    get recomended(){
        return this._recomended
    }

    setStudios(studios){
        this._studios = studios;
    }

    get studios(){
        return this._studios
    }
}
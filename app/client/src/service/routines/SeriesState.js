import {makeAutoObservable} from 'mobx'

export default class SeriesState{
    constructor(){
        this._series = [
            {id: 1, serial: {id: 1, name: "Город на холме"}, season: 2, seria: 5, seriaName: "Винтерфелл", studio: ["LostFilm",  "Дубляж", "TvShosw"], img: "city_on_the_hill_2_5.jpg", date: {day: 19, month: "мая", year: 2022}},
            {id: 2, serial: {id: 3, name: "Дьяволы"}, season: 2, seria: 3, seriaName: "Винтерфелл", studio: ["Кравец",  "Дубляж", "TvShosw"], img: "devils_2_3.jpg", date: {day: 20, month: "мая", year: 2022}},
            {id: 3, serial: {id: 2, name: "Игра престолов"}, season: 8, seria: 1, seriaName: "Винтерфелл", studio: ["Дубляж",  "Дубляж", "TvShosw"], img: "game_of_thrones_8_1.jpg", date: {day: 19, month: "мая", year: 2022}},
            {id: 4, serial: {id: 5, name: "Банды Лондона"}, season: 1, seria: 4, seriaName: "Винтерфелл", studio: ["Кравец",  "Дубляж", "TvShosw"], img: "gangs_of_london_1_4.jpg", date: {day: 20, month: "мая", year: 2022}},
            {id: 5, serial: {id: 7, name: "Любовь, смерть и роботы"}, season: 2, seria: 3, seriaName: "Винтерфелл", studio: ["Дубляж",  "Дубляж", "TvShosw"], img: "love_death_robots_2_3.jpg", date: {day: 20, month: "мая", year: 2022}},
            {id: 6, serial: {id: 6, name: "Перри Мейсон"}, season: 1, seria: 7, seriaName: "Винтерфелл", studio: ["LostFilm",  "Дубляж", "TvShosw"], img: "perry_mason_1_7.jpg", date: {day: 20, month: "мая", year: 2022}},
            {id: 7, serial: {id: 8, name: "Ход королевы"}, season: 1, seria: 7, seriaName: "Винтерфелл", studio: ["Дубляж",  "Дубляж", "TvShosw"], img: "queens_gambit_1_7.jpg", date: {day: 20, month: "мая", year: 2022}},
            {id: 8, serial: {id: 9, name: "Рик и Морти"}, season: 4, seria: 2, seriaName: "Винтерфелл", studio: ["Сыендук",  "Дубляж", "TvShosw"], img: "rick_and_morty_4_2.jpg",date: {day: 20, month: "мая", year: 2022}},
            {id: 9, serial: {id: 10, name: "Тень и кость"}, season: 1, seria: 5, seriaName: "Винтерфелл", studio: ["Дубляж",  "Дубляж", "TvShosw"], img: "shadow_and_bone_1_5.jpg", date: {day: 19, month: "мая", year: 2022}},
            {id: 10, serial: {id: 11, name: "Бесстыжие"}, season: 9, seria: 6, seriaName: "Винтерфелл", studio: ["TvShows",  "Дубляж", "TvShosw"], img: "shameless_9_6.jpg", date: {day: 19, month: "мая", year: 2022}},
            {id: 11, serial: {id: 12, name: "Пацаны"}, season: 1, seria: 6, seriaName: "Винтерфелл", studio: ["Кубик в кубе",  "Дубляж", "TvShosw"], img: "the_boys_1_5.jpg", date: {day: 20, month: "мая", year: 2022}},
            {id: 12, serial: {id: 12, name: "Пацаны"}, season: 1, seria: 5, seriaName: "Винтерфелл", studio: ["Кубик в кубе",  "Дубляж", "TvShosw"], img: "the_boys_1_6.jpg", date: {day: 19, month: "мая", year: 2022}},
            {id: 13, serial: {id: 13, name: "Невероятные"}, season: 1, seriaName: "Винтерфелл", seria: 5, studio: ["TvShows",  "Дубляж", "TvShosw"], img: "the_nevers_1_5.jpg", date: {day: 20, month: "мая", year: 2022}},
            {id: 14, serial: {id: 14, name: "Чужак"}, season: 1, seria: 3, seriaName: "Винтерфелл", studio: ["Дубляж",  "Дубляж", "TvShosw"], img: "the_outsider_1_4.jpg", date: {day: 20, month: "мая", year: 2022}},
            {id: 15, serial: {id: 15, name: "Отыграть назад"}, season: 1, seriaName: "Винтерфелл", seria: 6, studio: ["AlexFilm",  "Дубляж", "TvShosw"], img: "the_undoing_1_6.jpg", date: {day: 20, month: "мая", year: 2022}},
        ]
        makeAutoObservable(this)
    }

    setSeries(series){
        this._series = series;
    }

    get series(){
        return this._series
    }
}
import {makeAutoObservable} from 'mobx'

export default class SeriesState{
    constructor(){
        this._series = [
            {id: 1, serial: "Город на холме", season: 2, seria: 5, studio: "LostFilm", img: "city_on_the_hill_2_5.jpg", date: {day: 19, month: "мая", year: 2022}},
            {id: 2, serial: "Дьяволы", season: 2, seria: 3, studio: "Кравец", img: "devils_2_3.jpg", date: {day: 20, month: "мая", year: 2022}},
            {id: 3, serial: "Игра престолов", season: 8, seria: 1, studio: "Дубляж", img: "game_of_thrones_8_1.jpg", date: {day: 19, month: "мая", year: 2022}},
            {id: 4, serial: "Банды Лондона", season: 1, seria: 4, studio: "Кравец", img: "gangs_of_london_1_4.jpg", date: {day: 20, month: "мая", year: 2022}},
            {id: 5, serial: "Любовь, смерть и роботы", season: 2, seria: 3, studio: "Дубляж", img: "love_death_robots_2_3.jpg", date: {day: 20, month: "мая", year: 2022}},
            {id: 6, serial: "Перри Мейсон", season: 1, seria: 7, studio: "LostFilm", img: "perry_mason_1_7.jpg", date: {day: 20, month: "мая", year: 2022}},
            {id: 7, serial: "Ход королевы", season: 1, seria: 7, studio: "Дубляж", img: "queens_gambit_1_7.jpg", date: {day: 20, month: "мая", year: 2022}},
            {id: 8, serial: "Рик и Морти", season: 4, seria: 2, studio: "Сыендук", img: "rick_and_morty_4_2.jpg",date: {day: 20, month: "мая", year: 2022}},
            {id: 9, serial: "Тень и кость", season: 1, seria: 5, studio: "Дубляж", img: "shadow_and_bone_1_5.jpg", date: {day: 19, month: "мая", year: 2022}},
            {id: 10, serial: "Бесстыжие", season: 9, seria: 6, studio: "TvShows", img: "shameless_9_6.jpg", date: {day: 19, month: "мая", year: 2022}},
            {id: 11, serial: "Пацаны", season: 1, seria: 6, studio: "Кубик в кубе", img: "the_boys_1_5.jpg", date: {day: 20, month: "мая", year: 2022}},
            {id: 12, serial: "Пацаны", season: 1, seria: 5, studio: "Кубик в кубе", img: "the_boys_1_6.jpg", date: {day: 19, month: "мая", year: 2022}},
            {id: 13, serial: "Невероятные", season: 1, seria: 5, studio: "TvShows", img: "the_nevers_1_5.jpg", date: {day: 20, month: "мая", year: 2022}},
            {id: 14, serial: "Чужак", season: 1, seria: 3, studio: "Дубляж", img: "the_outsider_1_4.jpg", date: {day: 20, month: "мая", year: 2022}},
            {id: 15, serial: "Отыграть назад", season: 1, seria: 6, studio: "AlexFilm", img: "the_undoing_1_6.jpg", date: {day: 20, month: "мая", year: 2022}},
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
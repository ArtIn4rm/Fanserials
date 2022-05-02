import {makeAutoObservable} from 'mobx'

export default class SerialState{
    constructor(){
        this._series = [
            {id: 1, serial: "Игра престолов", season: 1, seria: 2, studio: "LostFilm", img: "city_on_the_hill_2_5.jpg"},
            {id: 2, serial: "Игра престолов", season: 1, seria: 1, studio: "Кравец", img: "devils_2_3.jpg"},
            {id: 3, serial: "Игра престолов", season: 2, seria: 1, studio: "Дубляж", img: "game_of_thrones_8_1.jpg"},
            {id: 4, serial: "Игра престолов", season: 1, seria: 3, studio: "Кравец", img: "gangs_of_london_1_4.jpg"},
            {id: 5, serial: "Игра престолов", season: 2, seria: 2, studio: "Дубляж", img: "love_death_robots_2_3.jpg"},
            {id: 6, serial: "Игра престолов", season: 1, seria: 7, studio: "LostFilm", img: "perry_mason_1_7.jpg"},
            {id: 7, serial: "Игра престолов", season: 1, seria: 11, studio: "Дубляж", img: "queens_gambit_1_7.jpg"},
            {id: 8, serial: "Игра престолов", season: 2, seria: 9, studio: "Сыендук", img: "rick_and_morty_4_2.jpg"},
            {id: 9, serial: "Игра престолов", season: 1, seria: 5, studio: "Дубляж", img: "shadow_and_bone_1_5.jpg"},
            {id: 10, serial: "Игра престолов", season: 2, seria: 6, studio: "TvShows", img: "shameless_9_6.jpg"},
            {id: 11, serial: "Игра престолов", season: 2, seria: 9, studio: "Кубик в кубе", img: "the_boys_1_5.jpg"},
            {id: 12, serial: "Игра престолов", season: 2, seria: 5, studio: "Кубик в кубе", img: "the_boys_1_6.jpg"},
            {id: 13, serial: "Игра престолов", season: 2, seria: 10, studio: "TvShows", img: "the_nevers_1_5.jpg"},
            {id: 14, serial: "Игра престолов", season: 2, seria: 8, studio: "Дубляж", img: "the_outsider_1_4.jpg"},
            {id: 15, serial: "Игра престолов", season: 1, seria: 6, studio: "AlexFilm", img: "the_undoing_1_6.jpg"},
        ]
        this._serial = {
            id: 25,
            name: "Игра престолов",
            original_name: "Game of thrones",
            country: "США, Великобритания",
            tv_chanel: "HBO",
            director: "Дэвид Наттер, Алан Тейлор, Алекс Грейвз",
            producer: "Дэвид Бениофф, Д.Б. Уайсс, Джордж Р.Р. Мартин",
            actors: "Питер Динклэйдж, Лина Хиди, Эмилия Кларк, Кит Харингтон, Софи Тёрнер, Мэйси Уильямс, Николай Костер-Вальдау, Иэн Глен, Алфи Аллен, Джон Брэдли",
            scenarists: "Дэвид Бениофф, Джордж Р.Р. Мартин, Д.Б. Уайсс",
            starts_year: 2011,
            ends_year: 2019,
            imdb_rate: 9.2,
            rate: 7.2,
            description: "​​​​События сериала разворачиваются в другом мире, где повсюду с людьми есть волшебные и причудливые существа. Когда-то, на просторе вестеросских правил династии Таргариенов, держали власть с помощью драконов, но так было ровно до того момента, когда Роберт в союзе с другими домами не поднимался и не свергал узурпатора с Эгоном со своим троном, отдавая свой народ на свободу. С тех пор прошло более десяти лет, и никаких восстаний и войн на просторах Семи Королевств не предвидится. Но Роберт чувствует приближающуюся опасность, особенно после смерти его правой руки человека-Хуана арены, который был отравлен кем-то.",
            category: {id: 1, name: "Сериал"},
            janre: [{id: 1, name: "фэнтези"}, {id: 2, name: "драма"}, {id: 3, name: "боевик"}, {id: 4, name: "мелодрамма"}, {id: 5, name: "приключения"}],
            serial_status: "Завершен",
            img: "game_of_thrones_icon.jpg"
        }
        makeAutoObservable(this)
    }//	фэнтези, драма, боевик, мелодрама, приключения

    setSeries(series){
        this._series = series;
    }

    get series(){
        return this._series
    }
}
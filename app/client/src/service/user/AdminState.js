import {makeAutoObservable} from 'mobx'

export default class AdminState{
    constructor(){
        this._orders = [
            {id: 1, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                date: {day: 10, month: "мая", year: 2022}},
            {id: 2, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             date: {day: 19, month: "мая", year: 2022}},
            {id: 3, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             date: {day: 19, month: "мая", year: 2022}},
            {id: 4, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             date: {day: 19, month: "мая", year: 2022}},
            {id: 5, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             date: {day: 19, month: "мая", year: 2022}},
            {id: 6, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             date: {day: 20, month: "мая", year: 2022}},
            {id: 7, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             date: {day: 19, month: "мая", year: 2022}},
            {id: 8, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             date: {day: 19, month: "мая", year: 2022}},
            {id: 9, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             date: {day: 19, month: "мая", year: 2022}},
            {id: 10, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             date: {day: 17, month: "мая", year: 2022}},
            {id: 11, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             date: {day: 19, month: "мая", year: 2022}},
            {id: 12, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             date: {day: 16, month: "апреля", year: 2022}},
            {id: 13, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             date: {day: 19, month: "мая", year: 2022}},
        ];

        this._query = [
            {id: 1, user: {id: 1, name: "pers1"}, email: "pers1@gmail.com", date: {day: 18, month: "мая", year: 2022}},
            {id: 2, user: {id: 2, name: "pers2"}, email: "pers2@gmail.com", date: {day: 19, month: "мая", year: 2022}},
            {id: 3, user: {id: 3, name: "pers3"}, email: "pers3@gmail.com", date: {day: 20, month: "мая", year: 2022}},
            {id: 4, user: {id: 4, name: "pers4"}, email: "pers4@gmail.com", date: {day: 17, month: "мая", year: 2022}},
            {id: 5, user: {id: 5, name: "pers5"}, email: "pers5@gmail.com", date: {day: 16, month: "апреля", year: 2022}},
        ];

        makeAutoObservable(this)
    }

    setOrders(orders) {
        this._orders = orders
    }

    get orders(){
        return this._orders
    }

    setQuery(query) {
        return this._query = query
    }

    get query() {
        return this._query
    }
}
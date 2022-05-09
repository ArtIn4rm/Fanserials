import {makeAutoObservable} from 'mobx'

export default class OrdersState{
    constructor(){
        this._orders = [
            {id: 1, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             author: {id: 14, name: "pers1"}, status: "InProcess", likes: 1, date: {day: 10, month: "мая", year: 2022}},
            {id: 2, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             author: {id: 12, name: "pers2"}, status: "Accepted", likes: 9, date: {day: 19, month: "мая", year: 2022}},
            {id: 3, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             author: {id: 16, name: "pers1"}, status: "Rejected", likes: 6, date: {day: 19, month: "мая", year: 2022}},
            {id: 4, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             author: {id: 17, name: "pers8"}, status: "InProcess", likes: 6, date: {day: 19, month: "мая", year: 2022}},
            {id: 5, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             author: {id: 18, name: "pers1"}, status: "InProcess", likes: 7, date: {day: 19, month: "мая", year: 2022}},
            {id: 6, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             author: {id: 15, name: "pers1"}, status: "Accepted", likes: 6, date: {day: 20, month: "мая", year: 2022}},
            {id: 7, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             author: {id: 13, name: "pers9"}, status: "InProcess", likes: 11, date: {day: 19, month: "мая", year: 2022}},
            {id: 8, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             author: {id: 2, name: "pers1"}, status: "Rejected", likes: 6, date: {day: 19, month: "мая", year: 2022}},
            {id: 9, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             author: {id: 1, name: "pers3"}, status: "Accepted", likes: 3, date: {day: 19, month: "мая", year: 2022}},
            {id: 10, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             author: {id: 5, name: "pers1"}, status: "Rejected", likes: 6, date: {day: 17, month: "мая", year: 2022}},
            {id: 11, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             author: {id: 4, name: "pers5"}, status: "Accepted", likes: 6, date: {day: 19, month: "мая", year: 2022}},
            {id: 12, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             author: {id: 3, name: "pers9"}, status: "InProcess", likes: 2, date: {day: 16, month: "апреля", year: 2022}},
            {id: 13, query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
             author: {id: 9, name: "pers1"}, status: "Rejected", likes: 6, date: {day: 19, month: "мая", year: 2022}},
        ];

        makeAutoObservable(this)
    }

    setOrders(orders) {
        this._orders = orders
    }

    get orders(){
        return this._orders
    }
}
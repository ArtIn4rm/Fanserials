import {makeAutoObservable} from 'mobx'

export default class UserState{
    constructor(){
        this._isSimp = false
        this._isModerator = false
        this._isAdmin = false
        this._user = {}
        makeAutoObservable(this)
    }

    setAuth(bool, role){
        switch(role){
            case 'Simp': this._isSimp = bool; break;
            case 'Moderator': this._isModerator = bool; break;
            case 'Admin': this._isAdmin = bool; break;
            default:  console.error('Invalid role')
        }
    }

    setUser(user){
        this._user = user;
    }

    get isAuth(){
        return {isSimp: this._isSimp, isModerator: this._isModerator, isAdmin: this._isAdmin}
    }

    get user(){
        return this._user
    }
}
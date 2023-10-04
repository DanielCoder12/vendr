import { AppState } from "../AppState.js"
import { snacksService } from "../services/SnacksService.js"
import { setText } from "../utils/Writer.js"




function _drawMoney() {
    setText('totalMoney', AppState.money)
}

export class MoneyController {
    constructor() {
        _drawMoney()
        // console.log('money controller working')
        AppState.on('money', _drawMoney)
    }
    increaseMoney() {
        // console.log('money increase');
        snacksService.increaseMoney()
        // _drawMoney()
        // console.log('app money', AppState.money)
    }

}
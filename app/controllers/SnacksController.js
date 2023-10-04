import { AppState } from "../AppState.js";
import { Snack } from "../models/Snack.js"
import { snacksService } from "../services/SnacksService.js";
import { setHTML, setText } from "../utils/Writer.js";



function _drawSnacks() {
    let availableFood = ''
    AppState.snacks.forEach(snack => availableFood += snack.snackCatalog)
    // console.log('foods', availableFood)
    setHTML('snackTime', availableFood)
}

function _drawSelectedSnack() {

    // console.log('snack', AppState.selectedSnack)
    setHTML('grabFoodSpot', AppState.selectedSnack)
}

export class SnacksController {
    constructor() {
        // console.log('snack')

        AppState.on('snacks', _drawSnacks)
        AppState.on('selectedSnack', _drawSelectedSnack)
        _drawSnacks()
        _drawSelectedSnack()
    }

    removeSelectedSnack() {
        snacksService.removeSelectedSnack()
    }

    buySnack(snackName) {
        snacksService.buySnack(snackName)
        // _drawSnacks()
        _drawSelectedSnack()
    }

}
import { AppState } from "../AppState.js"

class SnacksService {
    increaseMoney() {
        AppState.money += .25
        // console.log('did it work?', AppState.money)
    }

    buySnack(snackName) {
        const clickedSnack = AppState.snacks.find(snack => snack.name == snackName)
        // console.log('snack name in service', clickedSnack);
        if (clickedSnack.stock == 0) {
            window.alert('no more')
            return
        }

        if (clickedSnack.price > AppState.money) {
            window.alert('you are broke')
            return
        }
        (AppState.money -= clickedSnack.price)
        clickedSnack.stock -= 1
        AppState.selectedSnack = clickedSnack.boughtFood
        // console.log('price', price)
        AppState.emit('snacks')
        // console.log('selected snack', clickedSnack)
    }

    removeSelectedSnack() {
        AppState.selectedSnack = null
    }

}

export const snacksService = new SnacksService()
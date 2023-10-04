import { Snack } from "./models/Snack.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE Used to load initial data
  init() {

  }

  snacks = [
    new Snack({ stock: 3, name: 'Steak', price: 15.75, imgUrl: 'https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg' }),
    new Snack({ stock: 9, name: 'Chicken', price: 11.25, imgUrl: 'https://www.allrecipes.com/thmb/SoBuPU73KcbYHl3Kp3j8Xx4A3fc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8805-CrispyFriedChicken-mfs-3x2-072-d55b8406d4ae45709fcdeb58a04143c2.jpg' }),
    new Snack({ stock: 6, name: 'Lays', price: 1.75, imgUrl: 'https://m.media-amazon.com/images/I/813axPlVxBL.jpg' }),
    new Snack({ stock: 12, name: 'Sprite', price: 2.75, imgUrl: 'https://target.scene7.com/is/image/Target/GUEST_ff624e12-0988-4cbe-b4fc-7eedebd7c37b?wid=488&hei=488&fmt=pjpeg' })
  ]

  selectedSnack = null

  money = 0

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

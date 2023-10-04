export class Snack {
    constructor(data) {
        this.name = data.name;
        this.price = data.price;
        this.imgUrl = data.imgUrl;
        this.stock = data.stock
    }



    get snackCatalog() {
        return `
        <div class="col-3 p-5">
        <img class="img-size" src="${this.imgUrl}"
          alt="">
        <div>
          <div class="bg-primary d-flex align-items-center px-3 justify-content-between text-white">
            <div>
              <p>${this.name}</p>
              <p>$ <span>${this.price}</span></p>
            </div>
            <div class="py-2">
            <p>Stock ${this.stock}</p>
              <button onclick="app.SnacksController.buySnack('${this.name}')" class="btn btn-success ">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div> `
    }

    get boughtFood() {
        return `<div class="col-1 text-center  ">
    <div><img class="img-size" src="${this.imgUrl}"
        alt="">
    </div>
    <button onclick="app.SnacksController.removeSelectedSnack()" class="btn btn-success">grab food</button>
  </div>`
    }


}


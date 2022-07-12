// const product = 'Socks'
const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'F150-Lightning',
      brand: 'Ford',
      image: './assets/images/F150Blue.jpg',
      inStock: false,
      description: "The best electric truck in the world",
      details: ['signature front lightning', "360° camera", "Pro Power Onboard 9.6Kw"],
      variants: [
        { id: 2022, color: 'red', image: './assets/images/F150Red.jpg' },
        { id: 2023, color: 'blue', image: './assets/images/F150Blue.jpg' },
      ],
      models: [
        { id: 20231, model: 'XLT'},
        { id: 20232, model: 'Lariat'},
        { id: 20233, model: 'Platinum'}
      ],
      url: 'https://www.ford.ca/trucks/f150/f150-lightning/',
      inventory: 20,
      onSale: true,
      navBgColor: 'blue',
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
      this.inventory -= 1
      if (this.inventory <= 0) {
        this.inStock = false
      }
    },
    removeFromCart() {
      if(this.cart > 0) {
        this.cart -= 1
        this.inventory += 1
        if (this.inventory > 0) {
          this.inStock = true
        }
      }
    },
    updateImage(variantImage) {
      this.image = variantImage
      if (variantImage === './assets/images/F150Red.jpg') {
        this.navBgColor = 'red'
      } else {
        this.navBgColor = 'blue'
      }
    }
  }
})


// const product = 'Socks'
const app = Vue.createApp({
  data() {
    return {
      product: 'F150-Lightning',
      description: "The best electric truck in the world",
      image: './assets/images/F150Blue.jpg',
      url: 'https://www.ford.ca/trucks/f150/f150-lightning/',
      inStock: true,
      inventory: 68,
      onSale: true,
      navColor: 'red',
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
      cart: 0,
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
    }
  }
})


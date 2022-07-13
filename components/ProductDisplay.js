app.component('product-display', {
  template: 
    /*html*/ 
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img v-bind:src="image">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
  
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>
  
          <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle" 
            :style="{ backgroundColor: variant.color }">
          </div>
          
          <button 
            class="button" 
            :class="{ disabledButton: !inStock }" 
            :disabled="!inStock" 
            v-on:click="addToCart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>`,
    data() {
      return {
        cart: 0,
        product: 'F150-Lightning',
        brand: 'Ford',
        description: "The best electric truck in the world",
        details: ['signature front lightning', "360° camera", "Pro Power Onboard 9.6Kw"],
        variants: [
          { id: 2022, color: 'red', image: './assets/images/F150Red.jpg', quantity: 0 },
          { id: 2023, color: 'blue', image: './assets/images/F150Blue.jpg', quantity: 11 },
        ],
        models: [
          { id: 20231, model: 'XLT'},
          { id: 20232, model: 'Lariat'},
          { id: 20233, model: 'Platinum'}
        ],
        url: 'https://www.ford.ca/trucks/f150/f150-lightning/',
        
        onSale: true,
        selectedVariant: 0,
      }
    },
    computed: {
      title() {
        return this.brand + ' ' + this.product + ' ' + (this.inStock? 'In Stock': 'Sold Out')
      },
      inStock() {
        return this.variants[this.selectedVariant].quantity > 0
      },
      image() {
        return this.variants[this.selectedVariant].image
      },
      navBgColor() {
        return this.selectedVariant === 0 ? 'red' : 'blue'
      },
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
      },
      updateVariant(index) {
        this.selectedVariant = index
      },
    }
})
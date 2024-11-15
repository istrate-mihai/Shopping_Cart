app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
    product: {
      type: Array,
      required: true,
    },
  },
  template:
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image" alt="product-image" loading="lazy" />
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div 
          v-for="(variant, index) in product[0]" 
          :key="variant.id" 
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }">
        </div>
        
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          @click="addToCart">
          Add to Cart
        </button>

        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          @click="removeFromCart">
          Remove from Cart
        </button>

        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
      </div>
    </div>
  </div>`,
  data() {
    return {
      selectedVariant: 0,
      details: ['50% cotton', '30% wool', '20% polyester'],
      reviews: [],
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product[0][this.selectedVariant].id, 'add')
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.product[0][this.selectedVariant].id, 'remove')
    },
    updateVariant(index) {
      this.selectedVariant = index
    },
    addReview(review) {
      this.reviews.push(review);
    },
  },
  computed: {
    title() {
      return this.product[1].brand + ' ' + this.product[1].name
    },
    image() {
      return this.product[0][this.selectedVariant].image
    },
    inStock() {
      return this.product[0][this.selectedVariant].quantity
    },
    shipping() {
      if (this.product[1].premium) {
        return 'Free'
      }

      return 2.99
    }
  }
});

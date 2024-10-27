const app = Vue.createApp({
  data() {
    return {
      cart: [],
      productList: [
        [
          [
            { id: 1, color: 'green', image: './assets/images/green_socks.jpg', quantity: 8 },
            { id: 2, color: 'blue', image: './assets/images/blue_socks.jpg', quantity: 0 },
          ],
          { premium: true, name: 'Socks', brand: 'Uniqlo'},
        ],
        [
          [
            { id: 3, color: 'green', image: './assets/images/green_hat.jpeg', quantity: 80 },
            { id: 4, color: 'blue', image: './assets/images/blue_hat.jpeg', quantity: 20 },
          ],
          {premium: false, name: 'Hat', brand: 'Uniqlo' },
        ],
        [
          [
            { id: 5, color: 'green', image: './assets/images/green_umbrella.jpeg', quantity: 25 },
            { id: 6, color: 'blue', image: './assets/images/blue_umbrella.jpeg', quantity: 0 },            
          ],
          {premium: false, name: 'Umbrella', brand: 'Uniqlo' },
        ],
        [
          [
            { id: 7, color: 'green', image: './assets/images/green_coat.jpeg', quantity: 50 },
            { id: 8, color: 'blue', image: './assets/images/blue_coat.jpeg', quantity: 25 },
          ],
          {premium: true, name: 'Coat', brand: 'Uniqlo' },
        ],
      ],
    }
  },
  methods: {
    updateCart(id, operation) {
      if (operation == 'add') {
        this.cart.push(id);
      }

      if (operation == 'remove') {
        let itemIndex = this.cart.indexOf(id);
        this.cart.splice(itemIndex, 1);
      }
    }
  }
});

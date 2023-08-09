export default {
  SET_SEARCH_VUEX: (state, value) => {
    state.searchValue = value;
  },
  SWITCH_MOBILE: (state) => {
    state.isMobile = false;
    state.isDesktop = true;
  },
  SWITCH_DESKTOP: (state) => {
    state.isMobile = false;
    state.isDesktop = true;
  },
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products;
  },
  SET_CARD: (state, product) => {
    if (state.card.length) {
      let isProduct = false;
      state.card.map(function (item) {
        if (item.article === product.article) {
          isProduct = true;
          item.quantity++;
        }
      });
      if (!isProduct) {
        state.card.push(product);
      }
    } else {
      state.card.push(product);
    }
  },
  REMOVE_FROM_CARD: (state, index) => {
    state.card.splice(index, 1);
    console.log(index);
  },
  DECREMENT: (state, index) => {
    if (state.card[index].quantity > 1) {
      state.card[index].quantity--;
    }
    console.log(index);
  },
  INCREMENT: (state, index) => {
    state.card[index].quantity++;
  },
};

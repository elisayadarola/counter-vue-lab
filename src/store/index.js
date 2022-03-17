import { defineStore } from 'pinia'

export const useCounterStore = defineStore('pepe', {
  state: () => ({ pepe: 0 }),
  getters: {
    double: (state) => state.pepe * 2,
  },
  actions: {
    increment() {
      this.pepe++;
    },
    decrease(){
      this.pepe--;
    },
    toZero(){
      this.pepe = 0;
    },
  },
});



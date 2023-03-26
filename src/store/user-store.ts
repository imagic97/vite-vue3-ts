import { defineStore } from "pinia";

export const userStore = defineStore("user-store", {
  state: () => {
    return {
      val: 0,
    };
  },
  getters: {
    getStateValue: (state) => {
      return state.val;
    },
  },
  actions: {
    valAdd() {
      this.val++;
    },
  },
});

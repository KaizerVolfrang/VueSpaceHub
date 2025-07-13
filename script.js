Vue.createApp({
    data() {
      return {
        num1: null,
        num2: null,
        result: ""
      };
    },
    methods: {
      calculate(op) {
        if (this.num1 === null || this.num2 === null) {
          alert("Поля не должны быть пустыми");
          return;
        }
  
        if (op === "/" && this.num2 === 0) {
          alert("На ноль делить нельзя");
          return;
        }
  
        if (op === "+") {
          this.result = this.num1 + this.num2;
        } else if (op === "-") {
          this.result = this.num1 - this.num2;
        } else if (op === "*") {
          this.result = this.num1 * this.num2;
        } else if (op === "/") {
          this.result = this.num1 / this.num2;
        }
  
        this.num1 = null;
        this.num2 = null;
      }
    }
  }).mount("#app");
  
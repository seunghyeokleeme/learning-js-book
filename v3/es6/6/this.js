const o1 = {
  name: "Wallance",
  speak() {
    return `My name is ${this.name}!`;
  }
};

o1.speak(); // "My name is Wallance!"
// this 는 선언했는가 아니라 어떻게 호출했는지에 따라 달라진다는 것을 이해해야한다.

const o2 = {
  name: "Julie",
  greatBackwards: function() {
    function getReverseName() {
      let nameBackWards = "";
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackWards += this.name[i];
      }
      return nameBackWards;
    }
    return `${getReverseName()} si eman ym ,olleH`;
  }
};
o2.greatBackwards();

// 작동 실패
// this 는 의도대로 o에 묶이지만 greatBackwards 안에서  getReverseName을 호출하면 this는 o가 아닌 다른것에 묶입니다.

// 해결방법: 다른 변수에 this를 할당합니다.
const o3 = {
  name: "Julie",
  greatBackwards: function() {
    const self = this;
    function getReverseName() {
      let nameBackWards = "";
      for (let i = self.name.length - 1; i >= 0; i--) {
        nameBackWards += self.name[i];
      }
      return nameBackWards;
    }
    return `${getReverseName()} is eman ym , olleH`;
  }
};
o3.greatBackwards();

// 해결방법: arrow function
const o4 = {
  name: "Julie",
  greetBackwards: function() {
    const getReverseName = () => {
      let nameBackwards = "";
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    };
    return `${getReverseName()} si eman ym ,olleH`;
  }
};
o4.greetBackwards();

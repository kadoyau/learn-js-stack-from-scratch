class Dog {
  constructor(name) {
    this.name = name
  }

  bark() {
    return `Wah wah, I am ${this.name}`
  }
}

// このクラスを外部ファイルからrequireして利用するために必要
// module.exports = Dog; と等価
export default Dog

function calculator(x,y,z,operation1,operation2){
    this.number=x+operation1+y+operation2+z;
    return eval(this.number);
  }

console.log(calculator(1,2,3,'+','-'))
console.log(calculator(123,456,789,'*','/'))
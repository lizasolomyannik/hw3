function calculator(x,y,operation){
    this.number=x+operation+y;
    return eval(this.number);
  }
  console.log(calculator(122,32,'+'))
  console.log(calculator(1,2,'/'))
  console.log(calculator(76,89,'-'))
  console.log(calculator(132,10,'*'))
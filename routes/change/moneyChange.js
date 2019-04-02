const calculChange = (amount) => {
  let change = { 10 : 0,
                 5  : 0,
                 2  : 0}
                   

  while(amount != 0){
    //if amount is less then three
    if(amount <= 3){
        amount === 2 ? change[2] +=1 : change.noMoney = null ;
        break
    }
    //if superior of 10 and not modulo of 0 
    if(amount > 10 && amount % 2 !== 0){
      amount = amount - 5;
      change[5] ++
    }
    //if superior of 10 and is modulo of 0 
    if(amount > 10 ){
      change[10]+= Math.floor(amount / 10);
      amount = amount - Math.floor(amount / 10) * 10;
     }
    //if amount equal 4 or 5
    if(amount === 4 || amount === 5){
      amount === 5 ? change[5] ++ : change[2] += 2;
      amount = 0
      return  change
    }
    //if amoutn is less then or equal of 10
    if(amount <= 10){
      if(amount % 2 === 0 ){
        change[2] += amount / 2
        amount = 0;
      }else{
        amount = amount - 5;
        change[5]++;
        change[2] += amount / 2;
        amount = 0;
      }
    }
  }
  

 return change

}


module.exports = (req, res) => {
   let { amount } = req.params
   res.send(calculChange(parseInt(amount)))
};


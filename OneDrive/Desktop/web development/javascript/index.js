class Product{
  constructor(name,price){
    this.name=name;
    this.price=price;
  }
  displayproduct(){
    console.log(`Product: ${this.name}`);
    
    console.log(`Price: ${this.price}`);
  }
  calculateTotal(salesTax){
    return this.price+(this.price*salesTax);
  }
  
}

const salesTax=0.05;
const product1=new Product("shirts",12.44);
const product2=new Product("pants",14.44);
const product3=new Product("shoes",80.44);

product3.displayproduct();
const total=product3.calculateTotal(salesTax);
console.log(`total price(with tax:${total.toFixed(2)}`);
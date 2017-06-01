var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
function sumOf(array){
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}
function calculateSalesTax(salesData, taxRates) {
  var finalObj = {};
  for(var i=0;i<salesData.length;i++){
    var company = salesData[i];
    var sales = sumOf(company['sales']);
    var taxTot = taxRates[company.province];
    if(finalObj[company.name]===undefined){
      finalObj[company.name] ={
        totalSales: sales,
        totalTaxes: sales * taxTot
    }
    } else {
      finalObj[company.name].totalSales += sales;
      finalObj[company.name].totalTaxes += sales * taxTot;
    }
  }
  return finalObj;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
      company.totalSales = sumOf(salesData[i].sales);
      company.salesTax =  sumOf(salesData[i].sales) * taxRates[salesData[i]['province']];
      company.totalSales += sumOf(salesData[i].sales);
      company.salesTax +=  sumOf(salesData[i].sales) * taxRates[salesData[i]['province']];
*/

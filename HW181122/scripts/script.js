const autos =     [

    {
    
    title: "BMW",
    
    price: "40000",
    
    count: 15
    
    },
    
    {
    
    title: "Toyota",
    
    price: "20000",
    
    count: 13
    
    },
    
    {
    
    title: "Ford",
    
    price: "30000",
    
    count: 20
    
    },
    
    {
    
    title: "Chevrolet",
    
    price: "60000",
    
    count: 9
    
    },
    
    {
    
    title: "Volkswagen",
    
    price: "30000",
    
    count: 13
    
    },
    
    ]

for (let i in autos) {
    console.log (`${autos[i].title}'s price is ${autos[i].price}, available ${autos[i].count}`)
};

let result = 0;
for(let obj of autos) {
    result = result + obj.count;
}
console.log(result);

    /*let ol =document.createElement("ol");
    
    ol.innerText=`${i+1}. title is: ${autos[i].title}  price is: ${autos[i].price} count is: ${autos[i].count}`;
    //p.innerText = 'This dog - ' + dogs[i].breed + '; age is - ' + dogs[i].age;    -  second version

   // p.setAttribute("id",`k${i}`);
    document.body.append(ol);
 
//golden retriever's age is 7

//let beagle = document.querySelector(#k3);
//beagle.remove();*/



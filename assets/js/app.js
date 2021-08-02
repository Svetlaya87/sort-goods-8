
(async function(){

    const URL = 'https://fakestoreapi.com/products';

    let products = await fetch(URL);

        products = await products.json();

        //мой код
        console.log(products);
        
       let PriceUp=false;
        // сортировка по возрастанию
        let SortPriceDown = document.getElementById('sortPriceDown');
        let SortPriceUp = document.getElementById('sortPriceUp');



        
        if (!PriceUp){
            SortPriceDown.removeEventListener('click', function(){
                let divRow = document.querySelector('div.row');
                divRow.innerHTML ='';
            });

                products.sort(
                    function(a, b) {
                        return a.price - b.price;
                    }
                );

        
                    
            
            SortPriceUp.addEventListener('click', function(){
                let divRow = document.querySelector('div.row');
                divRow.innerHTML = products.map(item => `
        
                    <div class="cell p-2">
                        <div class="card p-2 pt-4 h-100 shadow">
                            <img src="${item.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.description.substring(0, 100)}...</p>
                            <h4 class='text-end'>$${item.price}</h4>
                            </div>
                        </div>
                    </div>
                `).join('');
            });  

            console.log(products);
        } else {     
        

            
          
            // сортировка по убыванию
            PriceUp=false;
            SortPriceUp.removeEventListener('click', function(){
                let divRow = document.querySelector('div.row');
                divRow.innerHTML ='';
            });
            

            products.sort( 
                function(a, b) {
                    return -(a.price - b.price);
                }
            );

            SortPriceDown.addEventListener( 
                        'click', function(){
                            let divRow = document.querySelector('div.row');
                            divRow.innerHTML = products.map(item => `
                    
                        <div class="cell p-2">
                            <div class="card p-2 pt-4 h-100 shadow">
                                <img src="${item.image}" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="card-text">${item.description.substring(0, 100)}...</p>
                                <h4 class='text-end'>$${item.price}</h4>
                                </div>
                            </div>
                        </div>
                    `).join('');
                        }); 
        }       

        console.log(products);
          



        //конец моего кода
        
    

    /*divRow.innerHTML = products.map(item => `
    
        <div class="cell p-2">
            <div class="card p-2 pt-4 h-100 shadow">
                <img src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.description.substring(0, 100)}...</p>
                <h4 class='text-end'>$${item.price}</h4>
                </div>
            </div>
        </div>
    `).join('');*/


})();
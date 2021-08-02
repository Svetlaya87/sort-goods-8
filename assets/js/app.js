
(async function(){

    const URL = 'https://fakestoreapi.com/products';

    let products = await fetch(URL);

        products = await products.json();
        let divRow = document.querySelector('div.row');

        function drawCards() {
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
            </div>`).join('');
        };
        let SortPriceDown = document.getElementById('sortPriceDown');
        let SortPriceUp = document.getElementById('sortPriceUp');
        
        // вывожу сразу картинки с сортировкой по возрастанию
        products.sort(
            function(a, b) {
                 return a.price - b.price;
            }
        );
        drawCards();
       

        
        console.log(products);
        
       // сорт по убыванию      
        SortPriceDown.addEventListener('click', function(){
            products.sort(
                function(a, b) {
                     return -(a.price - b.price);
                }
            );
            drawCards();
            
        });
        
        // сорт по возрастанию
        SortPriceUp.addEventListener('click', function(){
            products.sort(
                function(a, b) {
                     return a.price - b.price;
                }
            );
            drawCards();    
            
        });          
            
            
           



        //конец моего кода
        



})();
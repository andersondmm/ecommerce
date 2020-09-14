//window.addEventListener('load', function(){
    var firebaseConfig = {
        apiKey: "AIzaSyCUjT-S0J-2NfZtnz4Mw36DYurY3k1c3Lg",
        authDomain: "mercadoonline-467e8.firebaseapp.com",
        databaseURL: "https://mercadoonline-467e8.firebaseio.com",
        projectId: "mercadoonline-467e8",
        storageBucket: "mercadoonline-467e8.appspot.com",
        messagingSenderId: "238131716948",
        appId: "1:238131716948:web:44cb3e2b7a1e42cd4b5ec1",
        measurementId: "G-C5YJVMCLF2"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
     

      //GLOBAL
      var products=[];
      var cartItems=[];
      var cart_n= document.getElementById('cart_n');
      //DIVS
      var fruitDIV= document.getElementById("fruitDIV");
      var juiceDIV= document.getElementById("juiceDIV");
      var ConservaDIV= document.getElementById("ConservaDIV");
      var bebidaCalienteDIV= document.getElementById("bebidaCalienteDIV");
      var lacteoDIV= document.getElementById("lacteoDIV");


      //INFORMACIÓN                            

      var JUICE=[
          {name:'220V', price:1},
          {name:'Agua', price:1},                     
          {name:'AguaDeCoco', price:2},
          {name:'Chocolate', price:1},
          {name:'Heineken', price:2},    
    
    
    ];                               
      var FRUIT=[
          {name:'Aguacate', price:1},
          {name:'Limón', price:2},
          {name:'Manzana', price:2},
          {name:'Papaya', price:2},         
    
    
    ];
    var CONSERVA=[
        {name:'Atún en lomitos', price:2},
        {name:'Atún Real oferta', price:5},
        {name:'Leche condensada', price:3},
        {name:'Mermelada de piña', price:2},
    ];
    var BEBIDACALIENTE=[
        {name:'Té Hornimans Cedrón', price:1},
        {name:'Té Hornimans Manzanilla', price:2},
        {name:'Té Hornimans Menta', price:1},
        {name:'Té Hornimans Toronjil', price:2},
    ];
    var LACTEO=[
        {name:'Crema de Leche', price:3},
        {name:'Leche Vita Deslactosa', price:2},
        {name:'Leche Vita Descremada', price:3},
        {name:'Leche Vita Entera', price:1},
        {name:'Margarina Bonella', price:3},
        {name:'Margarina Imperial', price:2},
        {name:'Queso Kiosko Mozzarella', price:1},
        {name:'Yogurt Kiosko Frutilla ', price:3},
        {name:'Yogurt Kiosko Mora 120gr', price:1},
        {name:'Yogurt Kiosko Mora', price:3},
        {name:'Yogurt Toni Natural 1.7gr', price:5},
        {name:'Yogurt Toni Frutilla 1.7gr', price:5},
        {name:'Yogurt Toni 190gr', price:1},
    ]

    //HTML
    function HTMLfruitProduct(con){
        let URL=`img/frutas/fruit${con}.jpg`;
        let btn = `btnFruit${con}`;
        return `
            <div class="col-md-4">
                <div class= "card mb-4 shadow-sm">
                    <img class="card-img-top" style="height:16rem;" src="${URL}"
                    alt="Card image cap">
                    <div class="card-body">
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <i style="color:orange;" class="fa fa-star"> </i>                     
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <p class="card-text">${FRUIT[con-1].name}</p>
                        <p class="card-text">Price: ${FRUIT[con-1].price}.00</p>        
                        <div class="d-flex justify-content-between
                        align-items-center">
                            <div class="btn-group"> 
                                <button type="button" onclick="cart2('${FRUIT[con-1]
                                .name}', '${FRUIT[con-1].price}','${URL}', '${con}', 
                                '${btn}')"
                                class="btn btn-sm btn-outline-secondary"> 
                                <a href="cart.html" style="color:inherit;"> Comprar </a> </button>

                                <button id="${btn}" type="button" onclick="cart('${FRUIT[con-1]
                                .name}', '${FRUIT[con-1].price}', '${URL}', '${con}', '${btn}')"
                                class="btn btn-sm 
                                btn-outline-secondary"> Agregar </button>
                            </div>
                            <small class="text-muted"> Envío gratis </small>
                        </div>
                    </div>
                </div>                                           
            </div>
        `
    }

    function HTMLbebidaProduct(con){
        let URL=`img/bebidas/bebida${con}.jpg`;
        let btn = `btnBebida${con}`;
        return `
            <div class="col-md-4">
                <div class= "card mb-4 shadow-sm">
                    <img class="card-img-top" style="height:16rem;" src="${URL}"
                    alt="Card image cap">
                    <div class="card-body">
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <i style="color:orange;" class="fa fa-star"> </i>                     
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <p class="card-text">${JUICE[con-1].name}</p>
                        <p class="card-text">Price: ${JUICE[con-1].price}.00</p>
                        <div class="d-flex justify-content-between
                        align-items-center">
                            <div class="btn-group"> 
                                <button type="button" onclick="cart2('${JUICE[con-1]
                                .name}', '${JUICE[con-1].price}','${URL}', '${con}', 
                                '${btn}')"
                                class="btn btn-sm btn-outline-secondary"> 
                                <a href="cart.html" style="color:inherit;"> Comprar </a></button>

                                <button id="${btn}" type="button" onclick="cart('${JUICE[con-1]
                                .name}', '${JUICE[con-1].price}', '${URL}', '${con}', '${btn}')"
                                class="btn btn-sm 
                                btn-outline-secondary"> Agregar  </button>
                            </div>
                            <small class="text-muted"> Envío gratis </small>
                        </div>
                    </div>
                </div>                                           
            </div>
        `
    }
    function HTMLconservaProduct(con){
        let URL=`img/conservas/conserva${con}.png`;
        let btn = `btnConserva${con}`;
        return `
            <div class="col-md-4">
                <div class= "card mb-4 shadow-sm">
                    <img class="card-img-top" style="height:16rem;" src="${URL}"
                    alt="Card image cap">
                    <div class="card-body">
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <i style="color:orange;" class="fa fa-star"> </i>                     
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <p class="card-text">${CONSERVA[con-1].name}</p>
                        <p class="card-text">Price: ${CONSERVA[con-1].price}.00</p>
                        <div class="d-flex justify-content-between
                        align-items-center">
                            <div class="btn-group"> 
                                <button type="button" onclick="cart2('${CONSERVA[con-1]
                                .name}', '${CONSERVA[con-1].price}','${URL}', '${con}', 
                                '${btn}')"
                                class="btn btn-sm btn-outline-secondary"> 
                                <a href="cart.html" style="color:inherit;"> Comprar </a></button>

                                <button id="${btn}" type="button" onclick="cart('${CONSERVA[con-1]
                                .name}', '${CONSERVA[con-1].price}', '${URL}', '${con}', '${btn}')"
                                class="btn btn-sm 
                                btn-outline-secondary"> Agregar  </button>
                            </div>
                            <small class="text-muted"> Envío gratis </small>
                        </div>
                    </div>
                </div>                                           
            </div>
        `
    }

    function HTMLbebiCalProduct(con){
        let URL=`img/bebidasCalientes/bebidaCaliente${con}.png`;
        let btn = `btnBebiCal${con}`;
        return `
            <div class="col-md-4">
                <div class= "card mb-4 shadow-sm">
                    <img class="card-img-top" style="height:16rem;" src="${URL}"
                    alt="Card image cap">
                    <div class="card-body">
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <i style="color:orange;" class="fa fa-star"> </i>                     
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <p class="card-text">${BEBIDACALIENTE[con-1].name}</p>
                        <p class="card-text">Price: ${BEBIDACALIENTE[con-1].price}.00</p>        
                        <div class="d-flex justify-content-between
                        align-items-center">
                            <div class="btn-group"> 
                                <button type="button" onclick="cart2('${BEBIDACALIENTE[con-1]
                                .name}', '${BEBIDACALIENTE[con-1].price}','${URL}', '${con}', 
                                '${btn}')"
                                class="btn btn-sm btn-outline-secondary"> 
                                <a href="cart.html" style="color:inherit;"> Comprar </a> </button>

                                <button id="${btn}" type="button" onclick="cart('${BEBIDACALIENTE[con-1]
                                .name}', '${BEBIDACALIENTE[con-1].price}', '${URL}', '${con}', '${btn}')"
                                class="btn btn-sm 
                                btn-outline-secondary"> Agregar </button>
                            </div>
                            <small class="text-muted"> Envío gratis </small>
                        </div>
                    </div>
                </div>                                           
            </div>
        `
    }

    function HTMLlacteoProduct(con){
        let URL=`img/lacteos/lacteo${con}.png`;
        let btn = `btnLacteo${con}`;
        return `
            <div class="col-md-4">
                <div class= "card mb-4 shadow-sm">
                    <img class="card-img-top" style="height:16rem;" src="${URL}"
                    alt="Card image cap">
                    <div class="card-body">
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <i style="color:orange;" class="fa fa-star"> </i>                     
                        <i style="color:orange;" class="fa fa-star"> </i>
                        <p class="card-text">${LACTEO[con-1].name}</p>
                        <p class="card-text">Price: ${LACTEO[con-1].price}.00</p>        
                        <div class="d-flex justify-content-between
                        align-items-center">
                            <div class="btn-group"> 
                                <button type="button" onclick="cart2('${LACTEO[con-1]
                                .name}', '${LACTEO[con-1].price}','${URL}', '${con}', 
                                '${btn}')"
                                class="btn btn-sm btn-outline-secondary"> 
                                <a href="cart.html" style="color:inherit;"> Comprar </a> </button>

                                <button id="${btn}" type="button" onclick="cart('${LACTEO[con-1]
                                .name}', '${LACTEO[con-1].price}', '${URL}', '${con}', '${btn}')"
                                class="btn btn-sm 
                                btn-outline-secondary"> Agregar </button>
                            </div>
                            <small class="text-muted"> Envío gratis </small>
                        </div>
                    </div>
                </div>                                           
            </div>
        `
    }


     //ANIMATION
     function animation(){
        const toast = swal.mixin({
            toast:true,
            position:'top-end',
            showConfirmButton: false,
            timer:2000
        });
        toast({
            type:'success',
            title:'Added to shopping cart'
        })
    }

    //CART FUNCTIONS  
    function cart(name,price,url,con,btncart){
        var item={
            name:name,
            price:price,
            url:url
        }
        cartItems.push(item);
        let storage = JSON.parse(localStorage.getItem("cart"));
        if(storage == null){
            products.push(item);
            localStorage.setItem("cart", JSON.stringify(products));

        }else{
            products = JSON.parse(localStorage.getItem("cart"));
            products.push(item);
            localStorage.setItem("cart",JSON.stringify(products));
           
        }
        products = JSON.parse(localStorage.getItem('cart'));
        cart_n.innerHTML = `[${products.length}]`;
        document.getElementById(btncart).style.display='none';
        animation(); 
    }
    //  CAMBIO END

   function cart2(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if(storage == null){
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));

    }else{
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
       
    }
    products = JSON.parse(localStorage.getItem('cart'));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display='none';
    
   }
            
    //RENDER
    function render(){
        for(let index =1; index <=13; index++){
            lacteoDIV.innerHTML+=`${HTMLlacteoProduct(index)}`;

        }
        for(let index =1; index <=5; index++){
            juiceDIV.innerHTML+=`${HTMLbebidaProduct(index)}`;
            ConservaDIV.innerHTML+=`${HTMLconservaProduct(index)}`;
            bebidaCalienteDIV.innerHTML+=`${HTMLbebiCalProduct(index)}`;
            fruitDIV.innerHTML+=`${HTMLfruitProduct(index)}`;
        }
        
        if(localStorage.getItem("cart")==null){

        }else{
            products=JSON.parse(localStorage.getItem("cart"));
            cart_n.innerHTML=`[${products.length}]`;
        }
    }


   
//})
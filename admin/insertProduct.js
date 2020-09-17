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
  var d= new Date();
  var t= d.getTime();
  var counter=t;
  //FORM
  document.getElementById("form").addEventListener("submit", (e)=>{
    var producto= document.getElementById("producto").value;
    var precio= document.getElementById("precio").value;
    e.preventDefault();
    createProduct(producto,precio);
    form.reset();
  });
  //Create new producto
function createProduct(producto,precio){
    console.log(counter);
    counter+=1;
    console.log(counter);
    var newProduct={
        id:counter,
        producto:producto,
        precio:precio

    }
    let db= firebase.database().ref("producto/"+counter);
    db.set(newProduct);
    document.getElementById("cardSection").innerHTML='';
    readInsertProduct();
}              

function readInsertProduct(){
    var producto= firebase.database().ref("producto/");
    producto.on("child_added", function(data){
        var orderValue= data.val();
        document.getElementById("cardSection").innerHTML+=`
        
        <div class="card mb-3">
           <img class="card-img-top" style="height:16rem;" alt="Card image cap">
           <div class= "card-body">
           <i style="color:orange;" class="fa fa-star"> </i>
           <i style="color:orange;" class="fa fa-star"> </i>
           <i style="color:orange;" class="fa fa-star"> </i>
           <i style="color:orange;" class="fa fa-star"> </i>                     
           <i style="color:orange;" class="fa fa-star"> </i>

           <h5 class="card-tittle">Producto: ${orderValue.producto}</h5>                   
           <p class="card-text">Precio:$${orderValue.precio}.00 </p>
           <button type="submit" style="color:white" class="btn btn-warning"
           onclick="updateProduct(${orderValue.id}, '${orderValue.producto}',
           '${orderValue.precio}')"><i class="fas fa-edit"> </i> Editar Producto</button>


           <button type="submit" class="btn btn-danger"
            onclick="deleteProduct(${orderValue.id}, '${orderValue.producto}',
            '${orderValue.precio}')"><i class="fas fa-trash-alt"> </i> Eliminar Producto</button>
            
           
           
              
              
           </div>
           <small class="text-muted"> Envío gratis </small>
        </div>              
        `
    });
};

//CART FUNCTIONS
/* function cart2(producto, precio, btncart){
    var newProduct={
        producto= producto,
        precio= precio
    }
    cartItems.push(newProduct);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if(storage== null){
        products.push(newProduct);
        localStorage.setItem("cart", JSON.stringify(products));
    }else{
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(newProduct);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem('cart'));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display='none';
} */


function reset(){
    document.getElementById("firstSection").innerHTML=`
    <form class="border p-4 mb-4" id="form">
        <div class="form-group">
            <label>Producto</label>
            <input type="text" class="form-control" id="producto"
            placeholder="producto">
        </div>
        <div class="form-group">
            <label>Precio</label>
            <input type="text" class="form-control" id="precio"
            placeholder="precio">
        </div>
            <button type="submit" id="button1" class="btn
            btn-primary"><i class="fas fa-plus"></i>Agregar Producto</button>
            <button style="display:none" id="button2" class="btn btn-success">Actualizar Producto</button>
            <button style="display:none" id="button3" class="btn btn-danger">Cancelar</button>
    </form>
    
    `;
    document.getElementById("form").addEventListener("submit", (e)=>{
        var producto= document.getElementById("producto").value;
        var precio= document.getElementById("precio").value;
        e.preventDefault();
        createProduct(producto,precio);
        form.reset();
      });
}

function updateProduct(id, producto, precio){
    document.getElementById("firstSection").innerHTML=`
    <form class="border p-4 mb-4" id="form2">
    <div class="form-group">
        <label>Producto</label>
        <input type="text" class="form-control" id="producto"
        placeholder="producto">
    </div>
    <div class="form-group">
        <label>Precio</label>
        <input type="text" class="form-control" id="precio"
        placeholder="precio">
    </div>
    <button style="display:none" type="submit" id="button1" class="btn
    btn-primary"><i class="fas fa-plus"></i>Agregar Producto</button>
    <button  id="button2" class="btn btn-success">Actualizar Producto</button>
    <button  id="button3" class="btn btn-danger">Cancelar</button>
    </form>

    `;
    document.getElementById("form2").addEventListener("submit", (e)=>{      
        e.preventDefault();
    });
    document.getElementById("button3").addEventListener("click",(e)=>{
        reset();
    });
    document.getElementById("button2").addEventListener("click",(e)=>{
        updateOrder2(id,document.getElementById("producto").value,
        document.getElementById("precio").value);
    });
    document.getElementById("producto").value=producto;
    document.getElementById("precio").value=precio;
}

function updateOrder2(id, producto, precio){
    var productUpdated={
         id:id,
         producto:producto,
         precio:precio
    }
    let db= firebase.database().ref("producto/"+id);
    db.set(productUpdated);
    document.getElementById("cardSection").innerHTML="";
    readInsertProduct();
    reset();
}


function deleteProduct(id){
    console.log(id);
    var producto=firebase.database().ref("producto/"+id);
    producto.remove();
    reset();
    document.getElementById("cardSection").innerHTML="";
    readInsertProduct();
}

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
    var order= document.getElementById("order").value;
    var total= document.getElementById("total").value;
    var estado= document.getElementById("estado").value;
    e.preventDefault();
    createOrder(order,total, estado);
    form.reset();
  });
  //Create new order
function createOrder(order,total, estado){
    console.log(counter);
    counter+=1;
    console.log(counter);
    var newOrder={
        id:counter,
        order:order,
        total:total,
        estado:estado

    }
    let db= firebase.database().ref("order/"+counter);
    db.set(newOrder);
    document.getElementById("cardSection").innerHTML='';
    readOrder();
}                 
function readOrder(){                  
    var order= firebase.database().ref("order/");
    order.on("child_added", function(data){                         
        var orderValue= data.val();
        document.getElementById("cardSection").innerHTML+=`
        <div class="card mb-3">                    
            <div class="card-body">
            <h5 class="card-tittle">Orden: ${orderValue.order}</h5>                       
            <p class="card-text">Total:${orderValue.total} </p>
            <p class="card-text">Estado:${orderValue.estado} </p>
            <button type="submit" style="color:white" class="btn btn-warning"
            onclick="updateOrder(${orderValue.id}, '${orderValue.order}',
            '${orderValue.total}', '${orderValue.estado}')"><i class="fas fa-edit"> </i> Editar Orden</button>

            <button type="submit" class="btn btn-danger"
            onclick="deleteOrder(${orderValue.id}, '${orderValue.order}',
            '${orderValue.total}','${orderValue.estado}')"><i class="fas fa-trash-alt"> </i> Eliminar Orden</button>
            </div> 
        </div>
        `
    });
};
function reset(){
    document.getElementById("firstSection").innerHTML=`
    <form class="border p-4 mb-4" id="form">
        <div class="form-group">
            <label>Orden</label>
            <input type="text" class="form-control" id="order"
            placeholder="order">
        </div>
        <div class="form-group">
            <label>Total</label>
            <input type="text" class="form-control" id="total"
            placeholder="total">
        </div>
        <div class="form-group">
            <label>Estado</label>
            <input type="text" class="form-control" id="estado"
            placeholder="estado">
        </div>
            <button type="submit" id="button1" class="btn
            btn-primary"><i class="fas fa-plus"></i>Agregar Orden</button>
            <button style="display:none" id="button2" class="btn btn-success">Actualizar Orden</button>
            <button style="display:none" id="button3" class="btn btn-danger">Cancelar</button>
    </form>
    
    `;
    document.getElementById("form").addEventListener("submit", (e)=>{
        var order= document.getElementById("order").value;
        var total= document.getElementById("total").value;
        var estado= document.getElementById("estado").value;
        e.preventDefault();
        createOrder(order,total, estado);
        form.reset();
      });
}
function updateOrder(id, order, total, estado){
    document.getElementById("firstSection").innerHTML=`
    <form class="border p-4 mb-4" id="form2">
    <div class="form-group">
        <label>Orden</label>             
        <input type="text" class="form-control" id="order"                                
        placeholder="orden">
    </div>
    <div class="form-group">
        <label>Total</label>
        <input type="text" class="form-control" id="total"
        placeholder="total">
    </div>
    <div class="form-group">
    <label>Estado</label>
    <input type="text" class="form-control" id="estado"
    placeholder="estado">
</div>
    <button style="display:none" type="submit" id="button1" class="btn
    btn-primary"><i class="fas fa-plus"></i>Agregar Orden</button>
    <button  id="button2" class="btn btn-success">Actualizar Orden</button>                  
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
        updateOrder2(id,document.getElementById("order").value,
        document.getElementById("total").value, document.getElementById("estado").value);
    });
    document.getElementById("order").value=order;
    document.getElementById("total").value=total;
    document.getElementById("estado").value=estado;
}
function updateOrder2(id, order, total, estado){
    var orderUpdated={                  
         id:id,
         order:order,
         total:total,
         estado:estado
    }
    let db= firebase.database().ref("order/"+id);
    db.set(orderUpdated);
    document.getElementById("cardSection").innerHTML="";
    readOrder();
    reset();
}
function deleteOrder(id){
    console.log(id);
    var order=firebase.database().ref("order/"+id);
    order.remove();
    reset();
    document.getElementById("cardSection").innerHTML="";
    readOrder();
}

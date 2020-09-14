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
  var products = JSON.parse(localStorage.getItem('cart'));
  var cartItem= [];
  var cart_n= document.getElementById('cart_n');
  var table = document.getElementById('table');
  var total=0;
  //HTML
  function tableHTML(i){
      return `                                  
        <tr class==""> 
            <th scope="row">${i+1} </th>
            <td><img style="width:90px;" src="${products[i].url}"></td>
            <td>${products[i].name}</td>
            <td>${1}</td>
            <td>${products[i].price}</td>
        </tr>
      `
  }
                 
  //FORM CART
  document.getElementById('formCart').addEventListener('submit', function(e){
      e.preventDefault();
      userName= document.getElementById('userName');
      userEmail= document.getElementById('userEmail');
      userSelect= document.getElementById('userSelect');
      var d= new Date();                            
      var t= d.getTime();
      var counter=t;
      counter+=1;
      let db=firebase.database().ref("order/"+counter);
      let itemdb={                
          id:counter,
          order:counter-895,
          userName: userName.value,
          userEmail:userEmail.value,
          payment:userSelect.value,
          date: d.getDate()+ '/' + (d.getMonth()+1) + '/' + d.getFullYear(),
          hour: d.getHours()+ ':' + d.getMinutes()+ ':' + d.getSeconds(),
          year: d.getFullYear(),
          products:JSON.parse(localStorage.getItem("cart")),
          total:total
      }                                 
      db.set(itemdb);
      swal.fire({
        position:'center',
        type:'success',
        title:'Compra realizada con éxito!',
        text:`Su orden de compra es: ${itemdb.order}`,
        showConfirmButton:true,
        timer:50000
      });
      clean();
  });

  //Clean
  function clean(){
    localStorage.clear();
    for (let index = 0; index < products.length; index++) {
        table.innerHTML+= tableHTML(index);
        total= total+parseInt(products[index].price);
        
    }
    total=0;
    table.innerHTML=`
       <tr>
           <th></th>
           <th></th>
           <th></th>                                                 
           <th></th>                                              
           <th></th>
       </tr>
    `;
    cart_n.innerHTML='';
    document.getElementById("btnBuy").style.display="none";
    document.getElementById("btnClean").style.display="none";
}   
//RENDER
function render(){
    for(let index = 0; index < products.length; index++){
        table.innerHTML+= tableHTML(index);
        total= total+parseInt(products[index].price);
    }
    table.innerHTML+= `
        <tr>         
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"> Total $${total}.00</th>
        </tr>
        <tr>
            <th scope="col"></th>               
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">
            <button id="btnClean" onclick="clean()" class="btn yellow
            darken-4">Limpiar Carrito de Compra </button>
            </th>
            <th scope="col">
            <button id="btnBuy" href="#modal1" class="modal-trigger waves-effect 
            waves-light btn">Comprar</button>
            </th>
           
        </tr>
    `;
}
$(document).ready(function(){
    $('.modal').modal();
});
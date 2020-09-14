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
    var usuario= document.getElementById("usuario").value;
    var contrasenia= document.getElementById("contrasenia").value;
    e.preventDefault();
    createUsuario(usuario,contrasenia);
    form.reset();
  });
  //Create new producto
function createUsuario(usuario,contrasenia){
    console.log(counter);
    counter+=1;
    console.log(counter);
    var newUsuario={
        id:counter,
        usuario:usuario,
        contrasenia:contrasenia

    }
    let db= firebase.database().ref("usuario/"+counter);
    db.set(newUsuario);
    document.getElementById("cardSection").innerHTML='';
    readUsuario();
}

function readUsuario(){
    var usuario= firebase.database().ref("usuario/");
    usuario.on("child_added", function(data){
        var orderValue= data.val();
        document.getElementById("cardSection").innerHTML+=`
        <div class="card mb-3">                    
            <div class="card-body">
            <h5 class="card-tittle">Usuario: ${orderValue.usuario}</h5> 
            <p class="card-text">Contraseña:${orderValue.contrasenia} </p>
            <button type="submit" style="color:white" class="btn btn-warning"
            onclick="updateUsuario(${orderValue.id}, '${orderValue.usuario}',
            '${orderValue.contrasenia}')"><i class="fas fa-edit"> </i> Editar Usuario</button>

            <button type="submit" class="btn btn-danger"
            onclick="deleteUsuario(${orderValue.id}, '${orderValue.usuario}',
            '${orderValue.contrasenia}')"><i class="fas fa-trash-alt"> </i> Eliminar Usuario</button>
            </div> 
        </div>             
        `
    });
};


function reset(){
    document.getElementById("firstSection").innerHTML=`
    <form class="border p-4 mb-4" id="form">
        <div class="form-group">
            <label>Usuario</label>
            <input type="text" class="form-control" id="usuario"
            placeholder="usuario">
        </div>
        <div class="form-group">
            <label>Contraseña</label>
            <input type="text" class="form-control" id="contrasenia"
            placeholder="contraseña">
        </div>
            <button type="submit" id="button1" class="btn
            btn-primary"><i class="fas fa-plus"></i>Agregar Usuario</button>
            <button style="display:none" id="button2" class="btn btn-success">Actualizar Usuario</button>
            <button style="display:none" id="button3" class="btn btn-danger">Cancelar</button>
    </form>
    
    `;
    document.getElementById("form").addEventListener("submit", (e)=>{
        var usuario= document.getElementById("usuario").value;
        var contrasenia= document.getElementById("contrasenia").value;
        e.preventDefault();
        createUsuario(usuario,contrasenia);
        form.reset();
      });
}

function updateUsuario(id, usuario, contrasenia){
    document.getElementById("firstSection").innerHTML=`
    <form class="border p-4 mb-4" id="form2">
    <div class="form-group">
        <label>Usuario</label>
        <input type="text" class="form-control" id="usuario"
        placeholder="usuario">
    </div>
    <div class="form-group">
        <label>Contraseña</label>
        <input type="text" class="form-control" id="contrasenia"
        placeholder="contraseña">
    </div>
    <button style="display:none" type="submit" id="button1" class="btn
    btn-primary"><i class="fas fa-plus"></i>Agregar Usuario</button>
    <button  id="button2" class="btn btn-success">Actualizar Usuario</button>
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
        updateUsuario2(id,document.getElementById("usuario").value,
        document.getElementById("contrasenia").value);
    });
    document.getElementById("usuario").value=usuario;
    document.getElementById("contrasenia").value=contrasenia;
}

function updateUsuario2(id, usuario, contrasenia){
    var usuarioUpdated={
         id:id,
         usuario:usuario,
         contrasenia:contrasenia
    }
    let db= firebase.database().ref("usuario/"+id);
    db.set(usuarioUpdated);
    document.getElementById("cardSection").innerHTML="";
    readUsuario();
    reset();
}


function deleteUsuario(id){
    console.log(id);
    var usuario=firebase.database().ref("usuario/"+id);
    usuario.remove();
    reset();
    document.getElementById("cardSection").innerHTML="";
    readUsuario();
}

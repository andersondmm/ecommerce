var x= document.getElementById("email");
var p= document.getElementById("password");

document.getElementById("form").addEventListener("submit",(ee)=>{
    ee.preventDefault();
    console.log(x.value);
    console.log(p.value);             
    if (usuario==orderValue.usuario && usuario==orderValue.contrasenia) {
        swal.fire({
            title:'Bienvenido',
            html:'Acceso permitido',   
            type:'success'
        });
        setTimeout(()=>{
            loadPage();                        

        }, 3000);
    }else{
        swal.fire({
            title:'Error',
            html:'Acceso denegado',
            type:'error'
        });
    }
    function loadPage(){
        window.location.href="./admin.html";
    }
}); 


/*  function ingreso(){
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error){
        var errorCode= error.code;
        var errorMessage= error.message;
        console.log(errorCode);
        console.log(errorMessage);
        
    });
} 
 */
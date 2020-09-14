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
function renderTable(){
    var order= firebase.database().ref("order/");
    order.on("child_added", function(data){
        var orderValue= data.val();
        document.getElementById("table").innerHTML+=`
            <tr>
                <td>${orderValue.id}</d>
                <td>${orderValue.order}</d>
                <td>${orderValue.total}</d>
                <td>${orderValue.date}</d>
                <td>${orderValue.hour}</d>
                <td>${orderValue.year}</d>
                
                <td>${orderValue.products.map(function(product){
                    return `
                    <ul>
                        <li>${product.name}</li>
                        <li>${product.price} </li>
                    </ul>
                    `;
                })}</d>
                <td>${orderValue.payment}</d>
                <td>${orderValue.estado}</d>
            </tr>
        `;
    });
};


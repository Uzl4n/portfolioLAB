function logout(){
    firebase.auth().signOut().then(() => {
        window.location.href = "Login.html";
    }).catch(() =>{
         alert('Erro ao fazer logout');
    })
}
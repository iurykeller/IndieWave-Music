
function verificar () {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;


if (email === "iurykeller54@gmail.com" && senha === "tecnologia") { 
    alert("usuário autenticado");
    window.location.href = "../html/only_page.html";

    
} else {
    alert("usuário invalido")
    
}
}
document.addEventListener("DOMContentLoaded", function () {

        let nome  = document.querySelector("#nome")
        let email = document.querySelector("#email")
    
        let senha = document.querySelector("#senha")
        let senha_confirmar = document.querySelector("#senha_confirmar")

        let btn = document.querySelector("#btn")

        function verificar() {
            console.log(nome)
            if (senha.value != senha_confirmar.value || senha.value === "" ) {
    
                senha_confirmar.setCustomValidity("A senha não confere")
                //console.log(`A senha não confere\n\n nome:${nome.value}\n email:${email.value}\n\n  senha1:${senha.value}\n senha2:${senha_confirmar.value} `)
                
                //alert(senha.value)
                btn.setAttribute("disabled", "disabled")
            }

            else if (nome.value === "" || email.value === ""){
                btn.setAttribute("disabled", "disabled")
                //console.log(nome.value)
            }
    
            else{
                senha_confirmar.setCustomValidity("")

                btn.removeAttribute("disabled", "disabled")
    
               //console.log(`A senha confere\n\n nome:${nome.value}\n email:${email.value}\n\n  senha1:${senha.value}\n senha2:${senha_confirmar.value} `)
            }
    
            
            senha.onchange = verificar

            nome.onchange = verificar

            email.onchange = verificar
        
            senha_confirmar.onkeyup = verificar


        }

        
    
        verificar()
    

})
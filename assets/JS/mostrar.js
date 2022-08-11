document.addEventListener("DOMContentLoaded", function (params) {
    let validate = document.querySelectorAll(".Validade")
    let container = document.querySelectorAll(".container-start")

    let click = document.querySelectorAll(".clicking")

    let MC = document.querySelector("#MC")


            for (let i = 0; i < container.length; i++) {

            if ((container[i].classList.contains("status-1"))  && MC.checked == false ) {
                container[i].classList.add("d-none")
            } 
            else {
                container[i].classList.remove("d-none")
            }
            
        } //certo
    
    MC.addEventListener("click",function () {
        console.log(container)

        for (let i = 0; i < container.length; i++) {
            console.log(container[i].classList)

            if ((container[i].classList.contains("status-1") == false) || MC.checked ==  true) {
                container[i].classList.remove("d-none")
            } 
            else {
                container[i].classList.add("d-none")
            }
            
        }

    })




    for (let j = 0; j < click.length; j++) {


        click[j].addEventListener("click", function (){
            console.log(validate)
    
    
            let who = click[j].id

            let days 

            console.log(who)

            if (who == "i7") {
                days = 7
            }

            else if (who == "i30"){
                days = 30
            }

            else{
                days = 0 
            }

            //alert(days)


            for (let i = 0; i < validate.length; i++) {


                let limit = new Date()

                limit.setDate(limit.getDate() + days)
                
                limit = Date.parse(limit)

                let Data_validade = Date.parse(validate[i].innerHTML)

                console.log(`id:${who}\ndata:${Data_validade}\nlimite:${limit}`)

                if (days != 0 ) {
                    if ( Data_validade > limit){
                    container[i].classList.add("d-none")
                    //alert(true)
                    }
                    else{
                    container[i].classList.remove("d-none")
                    //alert(false)
                    }
                }
                else if ((container[i].classList.contains("status-1") == false) || MC.checked ==  true) {
                    container[i].classList.remove("d-none")
                }

                


                //alert(limit - Date.parse(validate[i].innerHTML))
                
            }
        })
    }





console.log(click)




})



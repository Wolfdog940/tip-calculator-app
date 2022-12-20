let input =document.getElementById("bill");
    let cinco=document.getElementById("cinco")
    let diez=document.getElementById("diez")
    let quince=document.getElementById("quince")
    let veinticinco=document.getElementById("veinticinco")
    let cincuenta=document.getElementById("cincuenta")
    let custom=document.getElementById("custom")
    let people=document.getElementById("people")
    let tipAmound =document.getElementById("tipAmound")
    let total=document.getElementById("total")
    let reset =document.getElementById("reset")


    
    
    
    cinco.addEventListener("mousedown",function(){
        
        let input =document.getElementById("bill").value
        let people=document.getElementById("people").value

        if (people !=0){

        let discount=(input*0.05)
        let TotalPerPerson=(parseInt(input)+parseInt(discount))/parseInt(people)
        let discountPerPerson=discount/people
        
        tipAmound.textContent=discountPerPerson.toFixed(2)
        total.textContent=TotalPerPerson.toFixed(2)
        }else{
            alert("Number of People can´t be zero")

        }
       
    })
    
    diez.addEventListener("mousedown",function(){
        
        let input =document.getElementById("bill").value
        let people=document.getElementById("people").value

        if (people !=0){

        let discount=(input*0.10)
        let TotalPerPerson=(parseInt(input)+parseInt(discount))/parseInt(people)
        let discountPerPerson=discount/people
        
        tipAmound.textContent=discountPerPerson.toFixed(2)
        total.textContent=TotalPerPerson.toFixed(2)
        }else{
            alert("Number of People can´t be zero")

        }
       
    })

    quince.addEventListener("mousedown",function(){
        
        let input =document.getElementById("bill").value
        let people=document.getElementById("people").value

        if (people !=0){

        let discount=(input*0.15)
        let TotalPerPerson=(parseInt(input)+parseInt(discount))/parseInt(people)
        let discountPerPerson=discount/people
        
        tipAmound.textContent=discountPerPerson.toFixed(2)
        total.textContent=TotalPerPerson.toFixed(2)
        }else{
            alert("Number of People can´t be zero")

        }
       
    })

    veinticinco.addEventListener("mousedown",function(){
        
        let input =document.getElementById("bill").value
        let people=document.getElementById("people").value

        if (people !=0){

        let discount=(input*0.25)
        let TotalPerPerson=(parseInt(input)+parseInt(discount))/parseInt(people)
        let discountPerPerson=discount/people
        
        tipAmound.textContent=discountPerPerson.toFixed(2)
        total.textContent=TotalPerPerson.toFixed(2)
        }else{
            alert("Number of People can´t be zero")

        }
       
    })
    cincuenta.addEventListener("keydown",function(){
        
        let input =document.getElementById("bill").value
        let people=document.getElementById("people").value

        if (people !=0){

        let discount=(input*0.50)
        let TotalPerPerson=(parseInt(input)+parseInt(discount))/parseInt(people)
        let discountPerPerson=discount/people
        
        tipAmound.textContent=discountPerPerson.toFixed(2)
        total.textContent=TotalPerPerson.toFixed(2)
        }else{
            alert("Number of People can´t be zero")

        }
       
    })

    custom.addEventListener("keydown",function(){
        
        let input =document.getElementById("bill").value
        let people=document.getElementById("people").value
        let custom=document.getElementById("custom").value
        if (people !=0){
        
        let customNumber=custom/10
        let discount=input*customNumber
        let TotalPerPerson=(parseInt(input)+parseInt(discount))/parseInt(people)
        let discountPerPerson=discount/people
        
        tipAmound.textContent=ddiscountPerPerson.toFixed(2)
        total.textContent=TotalPerPerson.toFixed(2)
        
        
        
        
        }else{
            alert("Number of People can´t be zero")

        }
       
    })


    reset.addEventListener("mousedown",function(){
        
        let input =document.getElementById("bill").value=""
        let people=document.getElementById("people").value=""
        let custom=document.getElementById("custom").value=""

        input
        people
        custom
        
       
    })
 
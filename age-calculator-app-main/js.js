
function  errorValidat(){

    const month=document.getElementById("month")
    const day=document.getElementById("day")
    const year=document.getElementById("year")
    
    const dayValue=document.getElementById("DD")
    const monthValue=document.getElementById("MM")
    const yearValue=document.getElementById("YY")

    const errDay=document.getElementById("errday")
    const errMonth=document.getElementById("errmonth")
    const errYear=document.getElementById("erryear")

    const displayDay=document.getElementById("displayDay")
    const displayMonth=document.getElementById("displayMonth")
    const displayYear=document.getElementById("displayYear")
    
    const Now=new Date()
    const yearNow=Now.getFullYear()
    
    const birthDay=new Date(yearValue.value,monthValue.value,dayValue.value)
    
    

    /* error empty day */

    if (dayValue.value=="") {
        errDay.innerHTML="this field is required"
        errDay.style.display ="block"
        day.style.color= "hsl(0, 100%, 67%)"
        displayDay.innerHTML="--"
        dayValue.style.borderColor="hsl(0, 100%, 67%)"
    }
    else{
    /* error valid day */    
        if (dayValue.value >0 && dayValue.value <32) {
            errDay.style.display="none"
            day.style.color= "black"
            dayValue.style.borderColor="black"
        
        } else {
            errDay.innerHTML="Must be a valid day"
            errDay.style.display ="block"
            day.style.color= "hsl(0, 100%, 67%)"
            displayDay.innerHTML="--"
            dayValue.style.borderColor="hsl(0, 100%, 67%)"
        }
    }

    /* error empty month */

    if (monthValue.value=="") {
        errMonth.innerHTML="this field is required"
        errMonth.style.display="block"
        month.style.color="hsl(0, 100%, 67%)"
        displayMonth.innerHTML="--"
        monthValue.style.borderColor="hsl(0, 100%, 67%)"
    } else {

    /* error valid month */    
        if (monthValue.value>0 && monthValue.value<13) {
            errMonth.style.display="none"
            month.style.color= "black"
            monthValue.style.borderColor="black"
        } else {
            errMonth.innerHTML="Must be a valid month"  
            errMonth.style.display ="block"
            month.style.color= "hsl(0, 100%, 67%)"
            displayMonth.innerHTML="--"
            monthValue.style.borderColor="hsl(0, 100%, 67%)"
        }
    }

    /* error empty year*/

    if (yearValue.value=="") {
        errYear.innerHTML="this feild is required"
        errYear.style.display="block"
        year.style.color="hsl(0, 100%, 67%"
        displayYear.innerHTML="--"
        yearValue.style.borderColor="hsl(0, 100%, 67%)"
    } else {

         /* error future time*/

        if (Now-birthDay >= 0) {
              
              errYear.style.display="none"
              year.style.color= "black"
              yearValue.style.borderColor="black"

        } else {
            errYear.style.display ="block"
            errYear.innerHTML="Must be in the past"
            yearValue.style.borderColor="hsl(0,100%,67%)"
            year.style.color= "hsl(0,100%,67%)"
        }
    }

                  /* hello put here 
                  */
                  if(birthDay.getDate()==dayValue.value) {
                    var ageYear=Now.getFullYear()-birthDay.getFullYear()
                    var ageMonth=Now.getMonth()-birthDay.getMonth()
                    var ageDay=Now.getDate()-birthDay.getDate()

                    while (ageDay<0) {
                        ageMonth=ageMonth-1
                        var setDate=new Date(yearValue.value,monthValue.value,"0")
                        ageDay=setDate.getDate()+ageDay
                    }
                   while (ageMonth<0) {
                    ageYear=ageYear-1
                    var setMonth=new Date(yearValue.value,"0","0")
                    ageMonth=setMonth.getMonth()+ ageMonth
                   }
                    displayYear.innerHTML=ageYear
                    displayMonth.innerHTML= ageMonth
                    displayDay.innerHTML=ageDay
                    


                  }
                  else{
                
                    errDay.style.display="block"
                    errDay.innerHTML="must be valid date"
                    day.style.color="hsl(0, 100%, 67%)"
                    month.style.color="hsl(0, 100%, 67%)"
                    year.style.color="hsl(0, 100%, 67%)"
                    dayValue.style.borderColor="hsl(0, 100%, 67%)"
                    monthValue.style.borderColor="hsl(0, 100%, 67%)"
                    yearValue.style.borderColor="hsl(0, 100%, 67%)"
                  } 

  
}

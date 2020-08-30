window.onload = function(calc) {
    "use strict";
        var date = document.getElementById("Ddate").value,
            newDate = date.split('-').reverse().join('.'),
            year = newDate.substr(newDate.length - 4, 4),
            month = newDate.substr(newDate.length - 7, 2),
            day = newDate.substr(newDate.length - 10, 2), //Bruk parseInt for å fjerne 0-er foran januar-sept.
            lyear = false;
            //Sjekk skuddår
		if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) ){
            var lyear = true
        }
        //Sjekk århundre
        var century = year.substr(year.length - 4, 2)
		console.log(century)
		
        while (century >=4)
            {
                century = century - 4
            }
        if (century == 0) {
            var a = 2;
        } else if (century == 1){
            var a = 0;
        } else if (century == 2){
            var a = 5;
        } else if (century == 3){
            var a = 3;
        }
        
        //Del siste to sifferene i året på 12
        var aartoos = year.substr(year.length -2,2)
        var b = Math.floor(aartoos/12);
        var c = aartoos % 12;
        var d = Math.floor(c/4);
        var e = Math.floor(a+b+c+d)
                
        //Finn et tall under 7
        while (e >= 7) {
            e = Math.floor(e - 7)
        }
        
        //Finn måneden 
        var dday = Number
        if (month == 1 && lyear == true) {
            dday = 4
        } else if (month == 2 && lyear == true) {
          dday = 29 
        } else if (month == 1) {
          dday = 3
        } else if (month == 2) {
          dday = 28
        } else if (month == 3) {
          dday = 14
        } else if (month == 4) {
          dday = 4
        } else if (month == 5) {
          dday = 9
        } else if (month == 6) {
          dday = 6
        } else if (month == 7) {
          dday = 11
        } else if (month == 8) {
          dday = 8
        } else if (month == 9) {
          dday = 5
        } else if (month == 10) {
          dday = 10
        } else if (month == 11) {
          dday = 7
        } else if (month == 12) {
          dday = 12
        }
        //var dayNum = Math(2mod4)
        
        
        var diff = Math.floor(day-dday)
        var dayNum = Math.floor(e+diff)
        
        
        //Del på 7 for å unngå overflow
        while (dayNum > 6) {
        dayNum = Math.floor(dayNum-7);
        }
    
        while (dayNum < 0) {
        dayNum = Math.floor(dayNum+7);
        }
        
        //var dayNum = dayNum % 7;
        //var dayNum = Math.floor(dday + dayNum)
        
        var dayOfWeek = "String"
        if (dayNum == 1) {
            dayOfWeek = "mandag"
        } else if (dayNum == 2) {
            dayOfWeek = "tirsdag"
        } else if (dayNum == 3) {
            dayOfWeek = "onsdag"
        } else if (dayNum == 4) {
            dayOfWeek = "torsdag"
        } else if (dayNum == 5) {
            dayOfWeek = "fredag"
        } else if (dayNum == 6) {
            dayOfWeek = "lørdag"
        } else if (dayNum == 0) {
            dayOfWeek = "søndag"
        }
    
        
        
        document.getElementById("Result").innerHTML = day + "." + month + "." + year + " er en " + dayOfWeek + ".";
    }
/*function calc() {
    "use strict";
    var date = document.getElementById("Ddate").value,
        newDate = date.split('-').reverse().join('.'),
        year = newDate.substr(newDate.length - 4, 4),
        month = newDate.substr(newDate.length - 7, 2),
        day = parseInt(newDate.substr(newDate.length - 10, 2), 10),
    // ENDRE SENERE, sjekk skuddår
        lyear = false;
    
    //Sjekk århundre
    if (year.substr(year.length - 4, 2) === 20) {
    var a = 2;
    }
    
    //Del siste to sifferene i året på 12
    var aartoos = year.substr(year.length -2,2)
    var b = Math.floor(aartoos/12);
    var c = aartoos % 12;
    var d = Math.floor(c/4);
    var e = Math.floor(a+b+c+d)
            
    //Finn et tall under 6
    while (e >= 6) {
        e = Math.floor(e - 7)
    }
    
    //Finn måneden 
    var dday = Number
    if (month = 1 && lyear == true) {
        dday = 4
    } else if (month = 2 && lyear == true) {
      dday = 29 
    } else  
    if (month == 1) {
      dday = 3
    } else if (month = 2) {
      dday = 28
    } else if (month == 3) {
      dday = 14
    } else if (month == 4) {
      dday = 4
    } else if (month == 5) {
      dday = 9
    } else if (month == 6) {
      dday = 6
    } else if (month == 7) {
      dday = 11
    } else if (month == 8) {
      dday = 8
    } else if (month == 9) {
      dday = 5
    } else if (month == 10) {
      dday = 10
    } else if (month == 11) {
      dday = 7
    } else if (month == 12) {
      dday = 12
    }
    //var realNum = Math(2mod4)
    
    
    var diff = Math.floor(day-dday)
    var dayNum = Math.floor(dday+diff)
    
    //Del på 7 for å unngå overflow
    while (dayNum > 6) {
    dayNum = Math.floor(dayNum/7);
    
    }
    //var realNum = dayNum % 7;
    //var realNum = Math.floor(dday + dayNum)
    
    var dayOfWeek = "String"
    if (realNum == 1) {
        dayOfWeek = "mandag"
    } else if (realNum == 2) {
        dayOfWeek = "tirsdag"
    } else if (realNum == 3) {
        dayOfWeek = "onsdag"
    } else if (realNum == 4) {
        dayOfWeek = "torsdag"
    } else if (realNum == 5) {
        dayOfWeek = "fredag"
    } else if (realNum == 6) {
        dayOfWeek = "lørdag"
    } else if (realNum == 0) {
        dayOfWeek = "søndag"
    }
    
    
    
    document.getElementById("Result").innerHTML = day + "." + month + "." + year + " er en " + dayOfWeek + "." + dday + " " + diff + " " + dayNum + " " + realNum;
    }
        */
/* function calc(){
            var date = document.getElementById("Ddate").value;
            var newDate = date.split('-').reverse().join('.');
            var year = newDate.substr(newDate.length -4,4);
            var month = newDate.substr(newDate.length -7,2);
            var day = newDate.substr(newDate.length -10,2);
            // ENDRE SENERE, sjekk skuddår
            //var lyear = false 
            
            //Sjekk århundre
            if (year.substr(year.length -4,2) == 20) {
            var a = 2;
            }
            
            //Del siste to sifferene i året på 12
            var aartoos = year.substr(year.length -2,2)
            var b = Math.floor(aartoos/12);
            var c = aartoos % 12;
            var d = Math.floor(c/4);
            var e = Math.floor(a+b+c+d)
            
            //Finn et tall under 6
            while (e > 6) {
                e = Math.floor(e - 7)
            }
            
            //Finn måneden 
            var dday = 0
            if (month = 1 && lyear == true) {
                dday = 4
            } else if (month = 1 && lyear == false) {
              dday = 3
            }else if (month = 2 && lyear == true) {
              dday = 29 
            } else if (month = 2 && lyear == false) {
              dday = 28
            } else if (month = 3) {
              dday = 14
            } else if (month = 4) {
              dday = 4
            } else if (month = 5) {
              dday = 9
            } else if (month = 6) {
              dday = 6
            } else if (month = 7) {
              dday = 11
            } else if (month = 8) {
              dday = 8
            } else if (month = 9) {
              dday = 5
            } else if (month = 10) {
              dday = 10
            } else if (month = 11) {
              dday = 7
            } else if (month = 12) {
              dday = 12
            }
            
            //var f = Math.floor(dday + e)
            
            document.getElementById("Result").innerHTML = day + " " + month + " " + year + " " + dday;
            
        }*/
// 'use strict';

let operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


let Seattle={

    location:'seattle',
    minnumber: 23,
    maxnumber: 65,
    avgcookie: 6.3,
    allcookieperhour:[],
    sum:0,

    randomnumber:function(){
        for(let i=0;operationHour.length;i++){
            let randomcust=Math.floor(math.random()*(this.maxnumber-this.minnumber+1)+this.minnumber);
            this.allcookieperhour.push(cookieperhour);
            this.sum=this.sum+cookieperhour;
        }
        } 
    },

    let render:function(){
        this.randomnumber();
        let unorder = document.getElementById('ul');
        let citylocation = document.createElement('li');
        citylocation=this.location;
        unorder.appendChild(citylocation);
        for(let j=0;j<operationHour.length;j++)
        {
            let workinghours=document.createElement('li');
            workinghours=operationHour[j]; +':'+this.allcookieperhour[j]+'cookiesseller';
            unorder.appendChild(workinghours);

        }
        let totalcookies = document.createElement('li');
        totalcookies='total: '+this.sum+'cookieseller';
        unorder.appendChild(totalcookies);
    }

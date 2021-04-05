'use strict';

let operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
 console.log(operationHour);

function random(min,max){
    return Math.floor(Math.random() * (max-min +1) +min);
}

let Seattle={

    location:'seattle',
    minnumber: 23,
    maxnumber: 65,
    avgcookie: 6.3,
    allcustperhour:[],
    allcookiesperhour:[],
    totalcookie:0,

// calcrandom number of custmors for each hour

    randomnumber:function(){
        for(let i=0;i<operationHour.length;i++){
     this.allcustperhour.push(random(this.minnumber,this.maxnumber));
        }
    },
cookieseachhour:function(){
    for(let i=0;i<this.allcustperhour.length;i++){
        this.allcookiesperhour.push(Math.floor(this.allcustperhour[i]*this.avgcookie));
       
        this.totalcookie+=this.allcookiesperhour[i];
}
},

render:function(){
    //get the perent by id
    let parent=document.getElementById('parent');
    console.log(parent);
    //create name
    let shopename=document.createElement('h3');
    //apend to perent
    parent.appendChild(shopename);

    //add text content
    shopename.textContent=this.location;

    //creating unorderlist
     let unorder=document.createElement('ul');
     //append parent
     parent.appendChild(unorder);

     //creating li's
     for(let i=0;i<operationHour.length;i++){
         
        //create li elment
        let liunorder=document.createElement('li');

    //apended to ul 
    unorder.appendChild(liunorder);

    //give textcontent
    liunorder.textContent=`${operationHour[i]}:${this.allcookiesperhour[i]} cookies`

     }
     let totalcookie=document.createElement('li');
     unorder.appendChild(totalcookie);
     totalcookie.textContent=`Total: ${this.totalcookie} Cookies`
}
    
}
Seattle.randomnumber();
Seattle.cookieseachhour();
Seattle.render();
console.log(Seattle);



let Tokyo={

    location:'Tokyo',
    minnumber: 3,
    maxnumber: 24,
    avgcookie:1.2,
    allcustperhour:[],
    allcookiesperhour:[],
    totalcookie:0,

// calcrandom number of custmors for each hour

    randomnumber:function(){
        for(let i=0;i<operationHour.length;i++){
     this.allcustperhour.push(random(this.minnumber,this.maxnumber));
        }
    },
cookieseachhour:function(){
    for(let i=0;i<this.allcustperhour.length;i++){
        this.allcookiesperhour.push(Math.floor(this.allcustperhour[i]*this.avgcookie));
       
        this.totalcookie+=this.allcookiesperhour[i];
}
},

render:function(){
    //get the perent by id
    let parent=document.getElementById('parent');
    console.log(parent);
    //create name
    let shopename=document.createElement('h3');
    //apend to perent
    parent.appendChild(shopename);

    //add text content
    shopename.textContent=this.location;

    //creating unorderlist
     let unorder=document.createElement('ul');
     //append parent
     parent.appendChild(unorder);

     //creating li's
     for(let i=0;i<operationHour.length;i++){
         
        //create li elment
        let liunorder=document.createElement('li');

    //apended to ul 
    unorder.appendChild(liunorder);

    //give textcontent
    liunorder.textContent=`${operationHour[i]}:${this.allcookiesperhour[i]} cookies`

     }
     let totalcookie=document.createElement('li');
     unorder.appendChild(totalcookie);
     totalcookie.textContent=`Total: ${this.totalcookie} Cookies`
}
    
}

Tokyo.randomnumber();
Tokyo.cookieseachhour();
Tokyo.render();
console.log(Tokyo);



let Dubai={

    location:'Dubai',
    minnumber: 11,
    maxnumber: 38,
    avgcookie:3.7,
    allcustperhour:[],
    allcookiesperhour:[],
    totalcookie:0,

// calcrandom number of custmors for each hour

    randomnumber:function(){
        for(let i=0;i<operationHour.length;i++){
     this.allcustperhour.push(random(this.minnumber,this.maxnumber));
        }
    },
cookieseachhour:function(){
    for(let i=0;i<this.allcustperhour.length;i++){
        this.allcookiesperhour.push(Math.floor(this.allcustperhour[i]*this.avgcookie));
       
        this.totalcookie+=this.allcookiesperhour[i];
}
},

render:function(){
    //get the perent by id
    let parent=document.getElementById('parent');
    console.log(parent);
    //create name
    let shopename=document.createElement('h3');
    //apend to perent
    parent.appendChild(shopename);

    //add text content
    shopename.textContent=this.location;

    //creating unorderlist
     let unorder=document.createElement('ul');
     //append parent
     parent.appendChild(unorder);

     //creating li's
     for(let i=0;i<operationHour.length;i++){
         
        //create li elment
        let liunorder=document.createElement('li');

    //apended to ul 
    unorder.appendChild(liunorder);

    //give textcontent
    liunorder.textContent=`${operationHour[i]}:${this.allcookiesperhour[i]} cookies`

     }
     let totalcookie=document.createElement('li');
     unorder.appendChild(totalcookie);
     totalcookie.textContent=`Total: ${this.totalcookie} Cookies`
}
    
}
Dubai.randomnumber();
Dubai.cookieseachhour();
Dubai.render();
console.log(Dubai);



let Paris={

    location:'Paris',
    minnumber: 20,
    maxnumber: 38,
    avgcookie:2.3,
    allcustperhour:[],
    allcookiesperhour:[],
    totalcookie:0,

// calcrandom number of custmors for each hour

    randomnumber:function(){
        for(let i=0;i<operationHour.length;i++){
     this.allcustperhour.push(random(this.minnumber,this.maxnumber));
        }
    },
cookieseachhour:function(){
    for(let i=0;i<this.allcustperhour.length;i++){
        this.allcookiesperhour.push(Math.floor(this.allcustperhour[i]*this.avgcookie));
       
        this.totalcookie+=this.allcookiesperhour[i];
}
},

render:function(){
    //get the perent by id
    let parent=document.getElementById('parent');
    console.log(parent);
    //create name
    let shopename=document.createElement('h3');
    //apend to perent
    parent.appendChild(shopename);

    //add text content
    shopename.textContent=this.location;

    //creating unorderlist
     let unorder=document.createElement('ul');
     //append parent
     parent.appendChild(unorder);

     //creating li's
     for(let i=0;i<operationHour.length;i++){
         
        //create li elment
        let liunorder=document.createElement('li');

    //apended to ul 
    unorder.appendChild(liunorder);

    //give textcontent
    liunorder.textContent=`${operationHour[i]}:${this.allcookiesperhour[i]} cookies`

     }
     let totalcookie=document.createElement('li');
     unorder.appendChild(totalcookie);
     totalcookie.textContent=`Total: ${this.totalcookie} Cookies`
}
    
}
Paris.randomnumber();
Paris.cookieseachhour();
Paris.render();
console.log(Paris);

let Lima={

    location:'Lima',
    minnumber: 2,
    maxnumber: 16,
    avgcookie:4.6,
    allcustperhour:[],
    allcookiesperhour:[],
    totalcookie:0,

// calcrandom number of custmors for each hour

    randomnumber:function(){
        for(let i=0;i<operationHour.length;i++){
     this.allcustperhour.push(random(this.minnumber,this.maxnumber));
        }
    },
cookieseachhour:function(){
    for(let i=0;i<this.allcustperhour.length;i++){
        this.allcookiesperhour.push(Math.floor(this.allcustperhour[i]*this.avgcookie));
       
        this.totalcookie+=this.allcookiesperhour[i];
}
},

render:function(){
    //get the perent by id
    let parent=document.getElementById('parent');
    console.log(parent);
    //create name
    let shopename=document.createElement('h3');
    //apend to perent
    parent.appendChild(shopename);

    //add text content
    shopename.textContent=this.location;

    //creating unorderlist
     let unorder=document.createElement('ul');
     //append parent
     parent.appendChild(unorder);

     //creating li's
     for(let i=0;i<operationHour.length;i++){
         
        //create li elment
        let liunorder=document.createElement('li');

    //apended to ul 
    unorder.appendChild(liunorder);

    //give textcontent
    liunorder.textContent=`${operationHour[i]}:${this.allcookiesperhour[i]} cookies`

     }
     let totalcookie=document.createElement('li');
     unorder.appendChild(totalcookie);
     totalcookie.textContent=`Total: ${this.totalcookie} Cookies`
}
    
}
Lima.randomnumber();
Lima.cookieseachhour();
Lima.render();
console.log(Lima);
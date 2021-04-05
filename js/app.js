'use strict';

// let operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//  console.log(operationHour);

// function random(min,max){
//     return Math.floor(Math.random() * (max-min +1) +min);
// }

// let Seattle={

    // location:'seattle',
    // minnumber: 23,
    // maxnumber: 65,
    // avgcookie: 6.3,
    // allcustperhour:[],
    // allcookiesperhour:[],
    // totalcookie:0,

// // calcrandom number of custmors for each hour

//     randomnumber:function(){
//         for(let i=0;i<operationHour.length;i++){
//      this.allcustperhour.push(random(this.minnumber,this.maxnumber));
//         }
//     },
// cookieseachhour:function(){
//     for(let i=0;i<this.allcustperhour.length;i++){
//         this.allcookiesperhour.push(Math.floor(this.allcustperhour[i]*this.avgcookie));
       
//         this.totalcookie+=this.allcookiesperhour[i];
// }
// },

// render:function(){
//     //get the perent by id
//     let parent=document.getElementById('parent');
//     console.log(parent);
//     //create name
//     let shopename=document.createElement('h3');
//     //apend to perent
//     parent.appendChild(shopename);

//     //add text content
//     shopename.textContent=this.location;

//     //creating unorderlist
//      let unorder=document.createElement('ul');
//      //append parent
//      parent.appendChild(unorder);

//      //creating li's
//      for(let i=0;i<operationHour.length;i++){
         
//         //create li elment
//         let liunorder=document.createElement('li');

//     //apended to ul 
//     unorder.appendChild(liunorder);

//     //give textcontent
//     liunorder.textContent=`${operationHour[i]}:${this.allcookiesperhour[i]} cookies`

//      }
//      let totalcookie=document.createElement('li');
//      unorder.appendChild(totalcookie);
//      totalcookie.textContent=`Total: ${this.totalcookie} Cookies`
// }
    
// }
// Seattle.randomnumber();
// Seattle.cookieseachhour();
// Seattle.render();
// console.log(Seattle);



// let Tokyo={

//     location:'Tokyo',
//     minnumber: 3,
//     maxnumber: 24,
//     avgcookie:1.2,
//     allcustperhour:[],
//     allcookiesperhour:[],
//     totalcookie:0,

// // calcrandom number of custmors for each hour

//     randomnumber:function(){
//         for(let i=0;i<operationHour.length;i++){
//      this.allcustperhour.push(random(this.minnumber,this.maxnumber));
//         }
//     },
// cookieseachhour:function(){
//     for(let i=0;i<this.allcustperhour.length;i++){
//         this.allcookiesperhour.push(Math.floor(this.allcustperhour[i]*this.avgcookie));
       
//         this.totalcookie+=this.allcookiesperhour[i];
// }
// },

// render:function(){
//     //get the perent by id
//     let parent=document.getElementById('parent');
//     console.log(parent);
//     //create name
//     let shopename=document.createElement('h3');
//     //apend to perent
//     parent.appendChild(shopename);

//     //add text content
//     shopename.textContent=this.location;

//     //creating unorderlist
//      let unorder=document.createElement('ul');
//      //append parent
//      parent.appendChild(unorder);

//      //creating li's
//      for(let i=0;i<operationHour.length;i++){
         
//         //create li elment
//         let liunorder=document.createElement('li');

//     //apended to ul 
//     unorder.appendChild(liunorder);

//     //give textcontent
//     liunorder.textContent=`${operationHour[i]}:${this.allcookiesperhour[i]} cookies`

//      }
//      let totalcookie=document.createElement('li');
//      unorder.appendChild(totalcookie);
//      totalcookie.textContent=`Total: ${this.totalcookie} Cookies`
// }
    
// }

// Tokyo.randomnumber();
// Tokyo.cookieseachhour();
// Tokyo.render();
// console.log(Tokyo);



// let Dubai={

//     location:'Dubai',
//     minnumber: 11,
//     maxnumber: 38,
//     avgcookie:3.7,
//     allcustperhour:[],
//     allcookiesperhour:[],
//     totalcookie:0,

// // calcrandom number of custmors for each hour

//     randomnumber:function(){
//         for(let i=0;i<operationHour.length;i++){
//      this.allcustperhour.push(random(this.minnumber,this.maxnumber));
//         }
//     },
// cookieseachhour:function(){
//     for(let i=0;i<this.allcustperhour.length;i++){
//         this.allcookiesperhour.push(Math.floor(this.allcustperhour[i]*this.avgcookie));
       
//         this.totalcookie+=this.allcookiesperhour[i];
// }
// },

// render:function(){
//     //get the perent by id
//     let parent=document.getElementById('parent');
//     console.log(parent);
//     //create name
//     let shopename=document.createElement('h3');
//     //apend to perent
//     parent.appendChild(shopename);

//     //add text content
//     shopename.textContent=this.location;

//     //creating unorderlist
//      let unorder=document.createElement('ul');
//      //append parent
//      parent.appendChild(unorder);

//      //creating li's
//      for(let i=0;i<operationHour.length;i++){
         
//         //create li elment
//         let liunorder=document.createElement('li');

//     //apended to ul 
//     unorder.appendChild(liunorder);

//     //give textcontent
//     liunorder.textContent=`${operationHour[i]}:${this.allcookiesperhour[i]} cookies`

//      }
//      let totalcookie=document.createElement('li');
//      unorder.appendChild(totalcookie);
//      totalcookie.textContent=`Total: ${this.totalcookie} Cookies`
// }
    
// }
// Dubai.randomnumber();
// Dubai.cookieseachhour();
// Dubai.render();
// console.log(Dubai);



// let Paris={

//     location:'Paris',
//     minnumber: 20,
//     maxnumber: 38,
//     avgcookie:2.3,
//     allcustperhour:[],
//     allcookiesperhour:[],
//     totalcookie:0,

// // calcrandom number of custmors for each hour

//     randomnumber:function(){
//         for(let i=0;i<operationHour.length;i++){
//      this.allcustperhour.push(random(this.minnumber,this.maxnumber));
//         }
//     },
// cookieseachhour:function(){
//     for(let i=0;i<this.allcustperhour.length;i++){
//         this.allcookiesperhour.push(Math.floor(this.allcustperhour[i]*this.avgcookie));
       
//         this.totalcookie+=this.allcookiesperhour[i];
// }
// },

// render:function(){
//     //get the perent by id
//     let parent=document.getElementById('parent');
//     console.log(parent);
//     //create name
//     let shopename=document.createElement('h3');
//     //apend to perent
//     parent.appendChild(shopename);

//     //add text content
//     shopename.textContent=this.location;

//     //creating unorderlist
//      let unorder=document.createElement('ul');
//      //append parent
//      parent.appendChild(unorder);

//      //creating li's
//      for(let i=0;i<operationHour.length;i++){
         
//         //create li elment
//         let liunorder=document.createElement('li');

//     //apended to ul 
//     unorder.appendChild(liunorder);

//     //give textcontent
//     liunorder.textContent=`${operationHour[i]}:${this.allcookiesperhour[i]} cookies`

//      }
//      let totalcookie=document.createElement('li');
//      unorder.appendChild(totalcookie);
//      totalcookie.textContent=`Total: ${this.totalcookie} Cookies`
// }
    
// }
// Paris.randomnumber();
// Paris.cookieseachhour();
// Paris.render();
// console.log(Paris);

// let Lima={

//     location:'Lima',
//     minnumber: 2,
//     maxnumber: 16,
//     avgcookie:4.6,
//     allcustperhour:[],
//     allcookiesperhour:[],
//     totalcookie:0,

// // calcrandom number of custmors for each hour

//     randomnumber:function(){
//         for(let i=0;i<operationHour.length;i++){
//      this.allcustperhour.push(random(this.minnumber,this.maxnumber));
//         }
//     },
// cookieseachhour:function(){
//     for(let i=0;i<this.allcustperhour.length;i++){
//         this.allcookiesperhour.push(Math.floor(this.allcustperhour[i]*this.avgcookie));
       
//         this.totalcookie+=this.allcookiesperhour[i];
// }
// },

// render:function(){
//     //get the perent by id
//     let parent=document.getElementById('parent');
//     console.log(parent);
//     //create name
//     let shopename=document.createElement('h3');
//     //apend to perent
//     parent.appendChild(shopename);

//     //add text content
//     shopename.textContent=this.location;

//     //creating unorderlist
//      let unorder=document.createElement('ul');
//      //append parent
//      parent.appendChild(unorder);

//      //creating li's
//      for(let i=0;i<operationHour.length;i++){
         
//         //create li elment
//         let liunorder=document.createElement('li');

//     //apended to ul 
//     unorder.appendChild(liunorder);

//     //give textcontent
//     liunorder.textContent=`${operationHour[i]}:${this.allcookiesperhour[i]} cookies`

//      }
//      let totalcookie=document.createElement('li');
//      unorder.appendChild(totalcookie);
//      totalcookie.textContent=`Total: ${this.totalcookie} Cookies`
// }
    
// }
// Lima.randomnumber();
// Lima.cookieseachhour();
// Lima.render();
// console.log(Lima);

//constructor function Lab 7.
const operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min,max){
    return Math.floor(Math.random() * (max-min +1) +min);
}
let allinfo=[];
function allinfo(location,minnumber,maxnumber,avgcookie,allcustperhour,allcookiesperhour,totalcookie){

    this.location=location;
    this.minnumber=minnumber;
    this.maxnumber=maxnumber;
    this.avgcookie=avgcookie;
    this.allcustperhour=[];
    this.allcookiesperhour=[];
    this.totalcookie=0;

    allinfo.push(this);

}
allinfo.prototype.minnumber=function(){
    this.minnumber=random()
        for(let i=0;i<operationHour.length;i++){
     this.allcustperhour.push(random(this.minnumber,this.maxnumber));
        }
    }
   allinfo.prototype.render function(){
        //get the perent by id
        let parent=document.getElementById('parent');
        console.log(parent);
        //create name
        let shopename=document.createElement('h3');
        //apend to perent
        parent.appendChild(shopename);
    
        //add text content
        shopename.textContent=this.location;
    //get the perent by id
    let parent=document.getElementById('parent');
    console.log(parent);
    //create name
    let shopename=document.createElement('h3');
    //apend to perent
    parent.appendChild(shopename);

    //add text content
    shopename.textContent=this.location;
        }
       

let Seattle=new allinfo('Seattle',['minnumber','maxnumber','avgcookie','allcustperhour','allcookiesperhour','totalcookie'],23,65,6.3);
let Tokyo=new allinfo('Tokyo',['minnumber','maxnumber','avgcookie','allcustperhour','allcookiesperhour','totalcookie']3,24,1.2);
let Dubai=new allinfo('Dubai',['minnumber','maxnumber','avgcookie','allcustperhour','allcookiesperhour','totalcookie'],11,38,3.7);
let Paris=new allinfo('Paris',['minnumber','maxnumber','avgcookie','allcustperhour','allcookiesperhour','totalcookie'],20,38,2.3);
let Lima=new allinfo('Lima',['minnumber','maxnumber','avgcookie','allcustperhour','allcookiesperhour','totalcookie'],2,16,4.6);

for(let i=0;i<allinfo.length;i++){
    allinfo[i].push(this);
    allinfo[i].render();

}

======================================================================

//Table Lab 7

let parent=document.getElementById('keeper');

//creaate element
let table=document.createElement('table');

//append to parent
parent.appendChild(table);

//create heading row
let headingrow=document.createElement('tr');

//append header row
table.appendChild(headingrow);

let headingrow=[operationHour];
for(let i=0;i<operationHour;i++)
{
//creating th
let thtable=document.createElement('th');
headingrow.appendChild(thtable);
thtable.textContent=headings[i];
}
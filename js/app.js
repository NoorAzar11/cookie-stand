'use strict';
//constructor function Lab 7.
let operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//const allInfo=[];
let AllInfo2 = [];

function Allinfo(location, minnumber, maxnumber, avgcookie) {

    this.location = location;
    this.minnumber = minnumber;
    this.maxnumber = maxnumber;
    this.avgcookie = avgcookie;
    this.allcustperhour = [];
    this.allcookiesperhour = [];
    this.totalcookie = 0;

    AllInfo2.push(this);

}
Allinfo.prototype.getCust = function () {
    for (let i = 0; i < operationHour.length; i++) {
        this.allcustperhour.push(random(this.minnumber, this.maxnumber));
    }
};

Allinfo.prototype.getCookies = function () {
    for (let i = 0; i < operationHour.length; i++) {
        this.allcookiesperhour.push(Math.floor(this.allcustperhour[i] * this.avgcookie));
        this.totalcookie += this.allcookiesperhour[i];
    }
};
let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);

function firstrow1() {

    let firstrow = document.createElement('tr');
    table.appendChild(firstrow);
    //
    let secrow = document.createElement('th');
    firstrow.appendChild(secrow);
    secrow.textContent = 'Name';
    for (let i = 0;i<operationHour;i++) {
        let headerrow = document.createElement('th');
        firstrow.appendChild(headerrow);
        headerrow.textContent=operationHour[i];
    }
    let totalheader = document.createElement('th');

    firstrow.appendChild(totalheader);
    totalheader.textContent="location total";

}


Allinfo.prototype.render = function () {
    let allstorerow = document.createElement('tr');
    table.appendChild(allstorerow);
    let inforow= document.createElement('td');
    allstorerow.appendChild(inforow);
    inforow.textContent=this.location;
    for (let i = 0; i < operationHour; i++) {
     let inoTd=document.createElement('td');
     allstorerow.appendChild(inoTd);
     inoTd.textContent=this.allcookiesperhour[i];
    }
    let inototal= document.createElement('td');
    allstorerow.appendChild(inototal);
    inototal.textContent=this.totalcookie;
}

function footer(){
let footer1 = document.createElement('tr');
    table.appendChild(footer1);
    //
    let footer2 = document.createElement('th');
    footer1.appendChild(footer2);
    footer2.textContent = 'Total';
    let totaloftotal=0;
    for (let i = 0;i<operationHour;i++) {
        let totalperhours=0;
        for(let j=0;j<AllInfo2;j++){
            totalperhours +=AllInfo2[j].allcookiesperhour[i];
            totaloftotal +=AllInfo2[j].allcookiesperhour[i];
        }

        let footer3 = document.createElement('th');
        footer1.appendChild(footer3);
        footer3.textContent=totalperhours;
    }
    let totalfooter = document.createElement('th');

    footer1.appendChild(totalfooter);
    totalfooter.textContent=totaloftotal;

} 

let Seattle = new Allinfo('Seattle', 23, 65, 6.3);
// Seattle.getCust();
// Seattle.getCookies();
console.log(Seattle);
let Tokyo = new Allinfo('Tokyo', 3, 24, 1.2);
console.log(Tokyo);
let Dubai = new Allinfo('Dubai', 11, 38, 3.7);
console.log(Dubai);
let Paris = new Allinfo('Paris', 20, 38, 2.3);
console.log(Paris);
let Lima = new Allinfo('Lima', 2, 16, 4.6);
console.log(Lima);

firstrow1();

for (let i = 0; i < AllInfo2.length; i++) {

    AllInfo2[i].getCust();
    AllInfo2[i].getCookies();
    AllInfo2[i].render();
    
}
footer();
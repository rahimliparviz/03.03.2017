x = new Array ("img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg","img/10.jpg","img/11.jpg");



i = 0;

function next() {


if(i==x.length) i=0;
document.getElementById("gallery").setAttribute("style","background-image:url("+x[i]+")")
i++;
}


function pre() {

if(i==0){i=x.length;}
i--;
document.getElementById("gallery").setAttribute("style","background-image:url("+x[i]+")")

}


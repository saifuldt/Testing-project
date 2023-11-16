const home = document.querySelector(".home");
const myself = document.querySelector("#myself");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");

function homepage(){
    myself.style.display = "block";
    tab1.style.display = "none";
    tab2.style.display = "none";
    tab3.style.display = "none";
}

function web1(){
    fetch('tab1/index.html')
            .then(response => response.text())
            .then(html => {
                document.querySelector('.tab1').innerHTML = html;
            })
            .catch(error => console.error('Error fetching HTML:', error));
    tab1.style.display = "block";
    tab2.style.display = "none";
    tab3.style.display = "none";
    myself.style.display = "none";

};

function web2(){
    fetch('tab2/index.html')
            .then(response => response.text())
            .then(html => {
                document.querySelector('.tab2').innerHTML = html;
            })
            .catch(error => console.error('Error fetching HTML:', error));
    tab1.style.display = "none";
    tab2.style.display = "block";
    tab3.style.display = "none";
    myself.style.display = "none";
};

function web3(){
    fetch('tab3/index.html')
    .then(response => response.text())
    .then(html => {
        document.querySelector('.tab3').innerHTML = html;
    })
    .catch(error => console.error('Error fetching HTML:', error));
    tab2.style.display = "none";
    tab1.style.display = "none";
    tab3.style.display = "block";
    myself.style.display = "none";
};
home.onclick = homepage;
btn1.onclick = web1;
btn2.onclick = web2;
btn3.onclick = web3;
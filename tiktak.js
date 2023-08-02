const divs = document.querySelectorAll(".divs");
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");
const div5 = document.querySelector("#div5");
const div6 = document.querySelector("#div6");
const div7 = document.querySelector("#div7");
const div8 = document.querySelector("#div8");
const div9 = document.querySelector("#div9");
const btn = document.querySelector("#btn");
const c=document.querySelector('.c')



let current = "X";
divs.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.textContent === "") {
      if (current == "X") {
        item.innerHTML = `<h1 style="color: white; text-shadow: 0 0 10px white, 0 0 10px white, 0px 0px 10px red,0px 0px 10px red;">${current}</h1>`;
      } else {
        item.innerHTML = `<h1 style="color: white; text-shadow:0 0 7px #fff,
                0 0 10px #fff,
                0 0 21px #fff,
                0 0 42px #0fa,
                0 0 82px #0fa,
                0 0 92px #0fa,
                0 0 102px #0fa,
               0 0 151px #0fa;">${current}</h1>`;
      }
      check();
      if (current == "X") {
        current = "O";
      } else {
        current = "X";
      }
    }
  });
});

function check() {
  let arr = [
    [div1.textContent, div2.textContent, div3.textContent],
    [div4.textContent, div5.textContent, div6.textContent],
    [div7.textContent, div8.textContent, div9.textContent],
    [div1.textContent, div5.textContent, div9.textContent],
    [div3.textContent, div5.textContent, div7.textContent],
    [div1.textContent, div4.textContent, div7.textContent],
    [div2.textContent, div5.textContent, div8.textContent],
    [div3.textContent, div6.textContent, div9.textContent],
  ];
  arr.forEach((item) => {
    if (
      item[0] != "" &&
      item[0] == "X" &&
      item[0] == item[1] &&
      item[0] == item[2]
    ) {
        setTimeout(() => {
            create()
        }, 300);
      console.log("x is win");
    } else if (
      item[0] != "" &&
      item[0] == "O" &&
      item[0] == item[1] &&
      item[0] == item[2]
    ) {
        setTimeout(() => {
            create()
        }, 300);
      console.log("o is win");
    }
  });
}
function create(){
c.style.borderRadius="1px solid white"
    if(current=="O"){
        c.innerHTML=`
        <div class=" d-flex justify-content-around align-items-center  " style="width: 420px; height: 420px;border: 1px solid white ">
        <h1 style="color: white; text-shadow: 0 0 10px white, 0 0 10px white, 0px 0px 10px red,0px 0px 10px red;">X IS WIN...</h1>
        </div>
`
    }else{
        c.innerHTML=`<div class=" d-flex justify-content-around align-items-center  " style="width: 420px; height: 420px;border: 1px solid white ">
        <h1 style="color: white; text-shadow:0 0 7px #fff,
0 0 10px #fff,
0 0 21px #fff,
0 0 42px #0fa,
0 0 82px #0fa,
0 0 92px #0fa,
0 0 102px #0fa,
0 0 151px #0fa;">O IS WIN...</h1>
        </div>`;

    }

}
btn.addEventListener('click',()=>{
    location.reload();
})
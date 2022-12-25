let before=3;
let now;
let cont;
function start(){

    slide(1)
}

function slide(n){
    começar_auto()
    let text1 = document.getElementById('text-main-1')
    let main = document.getElementById('main')
    let text2 = document.getElementById('text-main-2')
    let text3 = document.getElementById('text-main-3')
    let text4 = document.getElementById('text-main-4')
    let buttom = document.getElementById(`mm${n}`)
    let buttombf = document.getElementById(`mm${before}`)
    let list=[text1,text2,text3,text4]
    for(let i in list){
        list[i].style.display='none'
    }
    buttombf.style.backgroundColor='white'
    buttom.style.backgroundColor='#96F2A6'
    before=n
    switch(n){
        case 1:
            main.style.backgroundImage ="url(./img/m1.jpg)"
            text1.style.display='inline'
           
            break
        case 2:
            main.style.backgroundImage ="url(./img/m3.jpg)";
            text2.style.display='inline'
           break
        case 3:
            main.style.backgroundImage ="url(./img/m5.jpg)"
            text3.style.display='inline'
           break
        case 4:
            main.style.backgroundImage ="url(./img/m2.jpg)"
            main.style.backgroundPosition='50% 50%'
            text4.style.display='inline'
           break
        default:
           
    }

 
}
function começar_auto(){
     clearInterval(cont)
     cont = setInterval(()=>{
    before==4 ?now=1 :now=before+1
        slide(now)
    },15000)
}
let now_slide_2=0
function slide_2(n){
    let imgs = document.querySelectorAll('.slide_img')
    imgs[now_slide_2].style.opacity='50%'
    imgs[now_slide_2].style.width='0'
 
    now_slide_2==4?now_slide_2=0:now_slide_2+=n;
    now_slide_2==-1?now_slide_2=3:false;
    imgs[now_slide_2].style.opacity='100%'
    imgs[now_slide_2].style.width='100%'

}
let i_btn=1;
function menu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
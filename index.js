let countDown=document.getElementById("countdown");
let count=10;
countDown.innerHTML=count--;
const mycount=()=>{
     setTimeout(()=>{
      countDown.innerHTML=count--;
      setTimeout(()=>{
        countDown.innerHTML=count--;
        setTimeout(()=>{
          countDown.innerHTML=count--;
          setTimeout(()=>{
            countDown.innerHTML=count--;
            setTimeout(()=>{
              countDown.innerHTML=count--;
              setTimeout(()=>{
                countDown.innerHTML=count--;
                setTimeout(()=>{
                  countDown.innerHTML=count--;
                  setTimeout(()=>{
                    countDown.innerHTML=count--;
                    setTimeout(()=>{
                      countDown.innerHTML=count--;
                      setTimeout(()=>{                        
                           countDown.innerHTML="Have A Great Day";
                      },1000);
                    },1000);
                  },1000);
                },1000);
              },1000);
            },1000);
          },1000);
        },1000)
      },1000);
    },1000);
 }
mycount();
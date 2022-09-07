const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length


// up/down button functionality
let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

// paly audio

const playBtn = document.getElementsByClassName("btn btn-outline-light")[0];
const con = document.getElementsByClassName("content")[0];
const myAudio = document.getElementById("myAudio");
playBtn.addEventListener('click', () => playAudio())

const playAudio = (onOff) => {
  if (onOff) {
    myAudio.play();
    onOff = false;
  } else {
    myAudio.pause();
    onOff = true;
    // this.className = "play";
  }
  const txt = document.getElementById("poem");
  const Poem = txt.value; 
const peomArr = Poem.split("<br>");
let html = "";
for (let i=0; i< peomArr.length; i++) {
     const arr = peomArr[i].split("\n");
     const text = arr[0];
     if (text) {
        html += "<p>"+text+"</p>";
     }
     con.innerHTML = html;
}
}

const oP = con.getElementsByTagName("p");

let num = 0;
myAudio.addEventListener("click", () => {
  const curTime = parseInt(this.currentTime);

  if(document.getElementById(curTime)){
     for(let i=0; i<oP.length; i++ ){
       oP[i].style.cssText = "color: #fff; font-size:12px;";  
     }

     document.getElementById(curTime).style.cssText = "color:rgb(242, 110, 111); font-size:18px;";
     
     if (oP[num].id === curTime){
      con.style.top = -20*num +"px";
      num++;
     }
  }

})

myAudio.addEventListener("start", () => {
 playBtn.className = "pause";
 onOff = false;
 con.style.top = 0 ;
 this.currentTime = 0;
});



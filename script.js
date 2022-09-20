const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length
// const moreButton = document.querySelector(".btn btn-outline-light")


// up/down button functionality
let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))
moreButton.addEventListener('click', () => upButton)

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'down') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'up') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`

}

// innerHTML arr of poem

const con1 = document.getElementsByClassName("content1")[0];
const con2 = document.getElementsByClassName("content2")[0];
const con3 = document.getElementsByClassName("content3")[0];
const poem1 = document.getElementById("poem1").innerHTML; 
const poem2 = document.getElementById("poem2").innerHTML; 
const poem3 = document.getElementById("poem3").innerHTML; 

const poem =[poem1, poem2, poem3];
const con =[con1, con2, con3];

for(let i=0; i < con.length; i++) {
    conItem = con[i];

        poem.map((poemItem) => {
        const poemArr = poemItem.split("\n");
        // console.log(poemArr);

        let html = "";
        for (let i=0; i< poemArr.length; i++){
            const arr = poemArr[i].replace(/(^\s*)|(\s*$)/g, "");
            // console.log(arr);
            const text = arr;
            html += "<p>"+text+"</p>";
            conItem.innerHTML = html;
            //  console.log(con);
        }
    })
}

// const poem =[poem1, poem2, poem3];
// const con =[con1, con2, con3];

// const Html = (poem, con) => {

//     for(let i=0; i < con.length; i++) {
//             const poemArr = poem[i].split("\n");
//             console.log(poemArr);
            
//             let html = "";
//             for (let i=0; i< poemArr.length; i++){
//                 const arr = poemArr[i].replace(/(^\s*)|(\s*$)/g, "");
//                 // console.log(arr);
//                 const text = arr;
//                 html += "<p>"+text+"</p>";
//                 con[i].innerHTML = html;
//                 //  console.log(con);
//             }
//   }

// }


//word change
    let oP = con[0].getElementsByTagName("p");
    function wordChange(event) {
        for(let i=0; i<oP.length; i++ ){
            oP[i].style.cssText = " font-size:1.8rem;font-family: 'Dancing Script', cursive;";  
        } ;
            con.style.cssText = " font-size:1rem; lead font-family:'Open Sans', sans-serif;"; 

    }




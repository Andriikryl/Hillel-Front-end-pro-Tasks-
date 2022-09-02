
const imageStyle = "style-img";
// const test = document.querySelector(".test");
const prevButton = document.querySelector(".prev-image");
const nextButton = document.querySelector(".next-image");


function slider(maxImg){
    let i = 1;
    prevButton.addEventListener("click", function (){
        if ((i -= 1) == 0) {
            i = maxImg;
        }
        console.log(i)
        document.querySelector(
            ".content-img"
        ).innerHTML = `<img src="./images/${i}.jpg" alt ="img ${i}" class ="${imageStyle}"/>`
    })
    nextButton.addEventListener("click", function (){
        if ((i += 1) == maxImg + 1){
            i = 1;
        }
        console.log(i);
        document.querySelector(
            ".content-img"
        ).innerHTML = (`<img src="./images/${i}.jpg" alt ="img ${i}" class ="${imageStyle}"/>`);
        // const doc = document.createElement
        // doc.appendChild(content-img)
        // document.body.appendChild(doc);
    });

 
}

slider(10)
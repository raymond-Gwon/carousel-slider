const contents = document.querySelector('.slider-contents');
let contentsList = document.querySelectorAll('.slider-contents-content')
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
let counter = 0;
let navDots = document.querySelector('.nav-dots');
let dots = [];


// 슬라이딩 기능 (좌우 버튼 ver)
nextBtn.addEventListener('click', moveToRight);
prevBtn.addEventListener('click', moveToLeft);

function moveToRight() {
    if(counter<contentsList.length-1) {
        counter++;
        let distance = -100 * counter;
        contents.style.left = `${distance}vw`;
        dotHighlight(counter);
        removeHighlight(counter-1);
    }
}
function moveToLeft() {
    if(counter>0) {
        counter--;
        let distance = -100 * counter;
        contents.style.left = `${distance}vw`;
        dotHighlight(counter);
        removeHighlight(counter+1);
    }
}

// 콘텐츠 만큼 nav-dot 만들기
function createDots(num){
    for(let i=1;i<=num;i++) {
        let newDot = document.createElement('div');
        newDot.className = 'dot';
        newDot.id = 'item'+i;
        navDots.appendChild(newDot);
        dots.push(newDot.id);
    };
};
createDots(contentsList.length);


// nav-dot 하이라이트
function dotHighlight(num) {
    let dotId = document.getElementById(dots[num]);
    dotId.classList.add('highlight');
}
function removeHighlight(num) {
    let dotId = document.getElementById(dots[num]);
    dotId.classList.remove('highlight');
}
dotHighlight(0);

// 슬라이딩 기능 (nav-dots ver)
function dotSlider() {
    let navDot = document.querySelectorAll('.dot');
    for (const dot of navDot) {
        dot.addEventListener('click',function(){
            for(let i=0;i<=contentsList.length-1;i++) {
                removeHighlight(i);
            };
            dotHighlight((dot.id.substr(4,1)-1));
            let distance = -100 * (dot.id.substr(4,1)-1);
            contents.style.left = `${distance}vw`;
        });
    };
};
dotSlider();
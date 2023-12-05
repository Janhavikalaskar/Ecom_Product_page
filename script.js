const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);


/*Menu*/
function toggleMenu(res,p){
    if(p){

        let mobmenu = document.querySelector(".overly");
        res ==="open" ? mobmenu.style.display="flex":mobmenu.style.display="none"
    }
}

/* Quantity */
 const addItemButton = document.getElementById("quantity-plus");
 const removeItemButton = document.getElementById("quantity-minus");
 const numberOfItems = document.getElementById("numberOfItems");

 let a = 0;


addItemButton.addEventListener("click", () =>{
    a++;
    numberOfItems.innerText = a;
});

 removeItemButton.addEventListener("click", () =>{
    if (a>1){
        a--;
        numberOfItems.innerText = a;
    }
});

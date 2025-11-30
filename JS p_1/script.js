// make a rectanle and when we move on that rectangle on the left side i want to gradually change the color of the rectangle to red and when we move mouse to the right side we want to change the color to blue

var rectangle = document.querySelector(".center");

rectangle.addEventListener("mousemove" , (e) => {
    var rectLocation = rectangle.getBoundingClientRect();
    var insideRectVal = e.clientX - rectLocation.left;

    if(insideRectVal < rectLocation.width /2) {
        
    }
})
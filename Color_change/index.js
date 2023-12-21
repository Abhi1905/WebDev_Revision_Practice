var rect = document.querySelector("#center");


//mousemove = it checks if the mouse came(movement done) on the particular area or not
rect.addEventListener("mousemove", function(details){
    var rect_location = rect.getBoundingClientRect();
    var rect_inside = details.clientX - rect_location.left;


if(rect_inside<rect_location.width/2){
    var redColor = gsap.utils.mapRange(0, rect_location.width/2, 255, 0, rect_inside);
    gsap.to(rect, {
        backgroundColor: `rgb(${redColor},0,0)`,
        ease: Power4,
    })
}
else{
    var blueColor = gsap.utils.mapRange(rect_location.width/2,500,0,255,rect_inside);
    gsap.to( rect , {
        backgroundColor : `rgb(0,0,${blueColor})`,
        ease: Power4,
    })
}

})

// this will make the rectangle color back to white when cursor is not on the rectangle.
rect.addEventListener("mouseleave", function(){
    gsap.to( rect, {
        backgroundColor:"white",
    })
})

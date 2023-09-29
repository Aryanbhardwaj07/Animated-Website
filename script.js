function videoconAnimation(){
    var videocon = document.querySelector("#video-container")
var playbtn= document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    } )
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    } )
})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-25,
        top:dets.y-25
    } )
})
}
videoconAnimation();
function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration :0.9,
        stagger:0.2
    })
}
loadingAnimation();

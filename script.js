document.addEventListener("DOMContentLoaded", function() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    circlemousefollower();
});


function circlemousefollower() {
    window.addEventListener("mousemove",function (dets){
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    } )
};


window.addEventListener("DOMContentLoaded", ()=> {
    gsap.from("#heading", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out',
    });
    gsap.from("#smallheading", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out',
    });
    gsap.from("#nav", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out',
    });
    gsap.from("#herofooter", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out',
    });
});


document.querySelectorAll(".elem").forEach(function (elem) {
    const img = elem.querySelector('img');
    elem.addEventListener("mousemove", function(dets) {
        const rect = elem.getBoundingClientRect();
        const diffX = dets.clientX - rect.left;
        const diffY = dets.clientY - rect.top;
        const imgWidth = img.offsetWidth / 2;
        const imgHeight = img.offsetHeight / 2;
        gsap.to(img, {
            opacity: 1,
            ease: "none",
            left: diffX - imgWidth,
            top: diffY - imgHeight
        });
    });
    elem.addEventListener("mouseleave", function() {
        gsap.to(img, {
            opacity: 0,
            ease: "none"
        });
    });
});


















// document.querySelectorAll(".elem").forEach(function (elem) {
//     elem.addEventListener("mouseleave", function(dets) {
//          gsap.to(elem.querySelector('img'), {
//             opacity: 0,
//             ease: 'none'           
//         });   
//     })
//     elem.addEventListener("mousemove", function(dets) {
//         const diff = dets.clientY - elem.getBoundingClientRect().top;
//         gsap.to(elem.querySelector('img'), {
//             opacity: 1,
//             ease: "none",
//             top: diff - imgHeight,
//             left: dets.clientX - imgWidth
//         });
//     });
// });

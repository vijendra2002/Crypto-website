var button = document.querySelector("#button")
button.addEventListener("mouseenter",function(){
   button.style.backgroundColor = "#bcf3ff"
})
button.addEventListener("mouseleave",function(){
    button.style.backgroundColor = "#000512"
 })

function lineAnime(){    
    nava.addEventListener("mousemove",function(){
        gsap.to("#nava .line1",{
            width : "100%",
            duration : 0.2,
            ease : "none" 
        })
    })

    nava.addEventListener("mouseleave",function(){
        gsap.to("#nava .line1",{
            width : 0,
            duration : 0.2,
            ease : "none"
        })
    })

    nava2.addEventListener("mousemove",function(){
        gsap.to("#nava2 .line1",{
            width : "100%",
            duration : 0.2,
            ease : "none" 
        })
    })

    nava2.addEventListener("mouseleave",function(){
        gsap.to("#nava2 .line1",{
            width : 0,
            duration : 0.2,
            ease : "none"
        })
    })

    nava3.addEventListener("mousemove",function(){
        gsap.to("#nava3 .line1",{
            width : "100%",
            duration : 0.2,
            ease : "none" 
        })
    })

    nava3.addEventListener("mouseleave",function(){
        gsap.to("#nava3 .line1",{
            width : 0,
            duration : 0.2,
            ease : "none"
        })
    })

    nava4.addEventListener("mousemove",function(){
        gsap.to("#nava4 .line1",{
            width : "100%",
            duration : 0.2,
            ease : "none" 
        })
    })

    nava4.addEventListener("mouseleave",function(){
        gsap.to("#nava4 .line1",{
            width : 0,
            duration : 0.2,
            ease : "none"
        })
    })

    nava5.addEventListener("mousemove",function(){
        gsap.to("#nava5 .line1",{
            width : "100%",
            duration : 0.2,
            ease : "none" 
        })
    })

    nava5.addEventListener("mouseleave",function(){
        gsap.to("#nava5 .line1",{
            width : 0,
            duration : 0.2,
            ease : "none"
        })
    })
} 
function rTs(){
    document.querySelectorAll(".reveal")
    .forEach(function (elem){
        let spanParent = document.createElement("span");
        let spanChild = document.createElement("span");
        
        spanParent.classList.add("parent");
        spanChild.classList.add("child");
        
        spanChild.textContent = elem.textContent;
        spanParent.appendChild(spanChild);
        
        elem.innerHTML = "";
        elem.appendChild(spanParent);
    })
}
function valueSetter(){
    let nava  = document.querySelector("#nava");
    let nava2 = document.querySelector("#nava2");
    let nava3 = document.querySelector("#nava3");
    let nava4 = document.querySelector("#nava4");
    let nava5 = document.querySelector("#nava5");
}

rTs()

gsap.from("#nav",{
    y: "-100%",
    duration : 1
})

gsap.to("#imgaio",{
    width: "100%",
    duration : 1
})

var tl =  gsap.timeline();
tl.to("#imgaio",{
    rotate : 1440,
    duration : 33,
    repeat : -1,
    ease: "none",
})

gsap.to(".parent .child",{
    y : 0,
    stagger : 0.08,
    duration : 0.3,
    ease : "none",
    stagger:0.2,
})

gsap.to("#seal #seal-child",{
    x : 0,
    duration : 0.4,
    delay : 1,
    ease : "none",
    stagger:0.2,

})

valueSetter();
lineAnime();

gsap.to("#vcard",{
    width : "100%",
    opacity : 1,
    scrollTrigger:{
        trigger:"#vcard",
    },
    onComplete: function () {
        gsap.to(".partsv",{
            y:0,
            opacity:1
        })
    }
})

gsap.to("#hero2",{
    y:0,
    opacity : 1,
    scrollTrigger:{
        trigger:"#hero2",
        start: "top 120%"
    }
})

gsap.from("#post3 img",{
    rotate:60,
    opacity:0.8,
    duration:4,
    delay:1,
    stagger:1,
    scrollTrigger:{
        trigger:"#hero3",
        scroller:"body",
        start:"top 75%",
        scrub:true
    }
})

gsap.to("#post3",{
    scale:1,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:"#post3",
        start:"top 50%",
        scrub:1,

    }
})
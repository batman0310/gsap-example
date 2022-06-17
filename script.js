// gsap.from('.header',{duration:1, y:'-100%', ease:'power2' })

// gsap.from('.links',{duration:1, opacity:0,delay:1, stagger:.2})

// gsap.from('.right',{duration:1, x:'-100vw',delay:1, ease:'power2.in' })

// gsap.from('.left',{duration:1, x:'-100%',delay:1.5, ease:'power2.in' })

// gsap.to('.footer',{duration:1, y:0 , delay:2.5, ease:'elastic'  }) 

// gsap.fromTo('.button',{opacity:0, scale:0, rotation:720},{duration:1,delay:3,opacity:1,scale:1,rotation:0})


const timeline = gsap.timeline({default:{duration:1}})
timeline
    .from('.header',{ y:'-100%', ease:'power2' })
    .from('.link',{opacity:0, stagger: .2 })
    .from('.right',{x:'-100vw',ease:'power2.in'},'1')
    .from('.left',{x:'-100%',ease:'power2.in'},'<.2')
    .to('.footer',{y:0 , ease:'steps(3)'})
    .fromTo('.button',{opacity:0, scale:0, rotation:720},{opacity:1,scale:1,rotation:0})

    const button = document.querySelector(".button")
    button.addEventListener('click', ()=> {
        timeline.reverse()
    })
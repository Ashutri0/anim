var tl = gsap.timeline();

tl
.from("#left", {
    width: 0,
    duration: 1,
    Ease: Expo.easeInOut,
})

.from("#five", {
    width: 0,
    duration: 1.5,
    Ease: Expo.easeInOut,
})

.from("#fiveone", {
    width: 0,
    duration: 1,
    Ease: Expo.easeInOut,
})

.from("#six", {
    width: 0,
    duration: 0.5,
    Ease: Expo.easeInOut,
},"-=1")

.from("#right", {
    opacity: 0,
    width: 0,
    duration: 1,
    Ease: Expo.easeInOut,
})


.from(".dd", {
    width: 0,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    // Ease: Expo.easeFade,
}, "-=1")

.to('.c', {
    x: 745,
    scale: 1,
    // repeat: -1,
    duration: 1.5,
    ease: "bounce"
})
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text1', { top: "0px", duration: 1 });
tl.to('.text2', { top: "0px", duration: 0.3 });
tl.to('.text3', { top: "0px", duration: 0.3 });
tl.to('.overlay', { top: "-100%", duration: 2, delay: 1 });
tl.to('.overlay-texts', { top: "-100%", duration: 2, delay: -1.5 });
tl.fromTo('.hero-text-span', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo('.logo', { width: "18px" }, { width: "80px", duration: 1 })
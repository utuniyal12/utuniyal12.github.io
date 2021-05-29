anime({
    targets: '.main-wrapper h1',
    opacity: 1,
    scale: [8,2],
    duration: 2000,
    easing: "easeOutExpo",
  });

  anime({
    targets: 'nav',
    opacity: 1,
    scale: [8,1],
    duration: 2000,
    easing: "easeOutExpo",
  });


  $('.skills img').waypoint(function(direction) {
    if(direction=='down'){
        anime({
            borderRadius: "400px",
            scale: [1, 0.8],
            targets: this.element,
            duration: 1000,
            easing: "linear",
          });
    }
    }, { offset: '100%' });
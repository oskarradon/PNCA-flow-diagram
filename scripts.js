$(() => {
  function animate() {
    let tl = new TimelineLite();
    // circles
    let blue = '#flow__blue-circle';
    let white = '#flow__white-circle';
    let black = '#flow__black-circle';
    // titles
    let thesisTitle = $('#flow__title-thesis');
    //other objects
    let line = $('#flow__line');



    tl.add( TweenLite.to(blue, 2, {x: 200}),
            TweenLite.to(white, 2, {x:300}),
            TweenLite.to(black, 2, {x:300}),
           );
    tl.add( TweenLite.to(thesisTitle, 1, {opacity:1, delay: 1.2}),
            TweenLite.to(line, 2, {x: 300, width: 680, delay: 1.2})
          );
  }

  setTimeout(()=>{animate()}, 1000);
});

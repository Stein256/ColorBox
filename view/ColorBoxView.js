function ColorBoxView (colorCounterList, parentElem) {
  this.show = function () {
    var box = document.createElement('div');
    
    colorCounterList.forEach(counter => {
      counter.addActionOnUpdate(() => {
        box.style.backgroundColor = counter.get('color');
      });
    });
    
    box.classList.add('box');
    parentElem.appendChild(box);
  };
}
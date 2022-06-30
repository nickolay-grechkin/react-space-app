export const controlIndicator = () => {
  let nav = document.getElementById('nav');
  let pointer = document.getElementById('pointer');
  let links = nav.getElementsByClassName('barItem');
  let barItem = document.querySelector('.barItem');

  pointer.style.width = `${barItem.clientWidth}px`;

  for (let i = 0; i < links.length; i++) {
    let current = links[i];
    current.dataset.order = i * 100 + '%';
    current.addEventListener('click', movePointer);
  }

  function movePointer(e) {
    let order = e.currentTarget.dataset.order;
    pointer.style.transform = 'translate3d(' + order + ',0,0)';
  }
};

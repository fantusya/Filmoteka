export function textModalBtn(id) {
  const btnQueue = document.querySelector('#queue-btn');
  const btnWatch = document.querySelector('#watched-btn');

  if (inList(id, 'watched')) {
    btnWatch.textContent = 'Adding to watched';
    btnWatch.disabled = true;

    function changeText() {
      btnWatch.disabled = false;
      btnWatch.textContent = 'REMOVE FROM WATCHED';
      btnWatch.classList.add('active');
    }
    
    setTimeout(changeText, 300);
  } else {
    btnWatch.textContent = 'ADD TO WATCHED';
    btnWatch.classList.remove('active');
    btnWatch.disabled = false;
  }

  if (inList(id, 'queue')) {
    btnQueue.textContent = 'Adding to queue';
    btnQueue.disabled = true;

    function changeText() {
      btnQueue.disabled = false;
      btnQueue.textContent = 'REMOVE FROM QUEUE';
      btnQueue.classList.add('active');
    }

    setTimeout(changeText, 300);
  } else {
    btnQueue.textContent = 'ADD TO QUEUE';
    btnQueue.classList.remove('active');
    btnQueue.disabled = false;
  }
}

function inList(id, list) {
  let localListJson = load(list);

  if (localListJson === undefined) {
    return;
  } else {
    const findMovie = localListJson.find(item => item.id == id);
    return findMovie ? true : false;
  }
}

function load (key ) {
  try {
    let serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return;
    } else {
      return (serializedState = JSON.parse(serializedState) || undefined);
    }
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

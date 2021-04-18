function makeContainers(size) {
    const main = document.querySelector('#main-container');
    
    for(let row=0; row<size; row++) {    
        const div = document.createElement('div');
        div.classList.add(`row${row}`);
        div.classList.add('row');
        main.appendChild(div);
        for(let col=0; col<size; col++) {
            const div = document.createElement('div');
            let currRow = document.querySelector(`.row${row}`);
            div.addEventListener('mouseenter', () => {
                div.style.backgroundColor = 'black';
            });
            currRow.appendChild(div);
        }
    }
}

function clear() {
    
    const subContainers = document.querySelectorAll('.row');
    const main = document.getElementById('main-container');

    subContainers.forEach(subContainer => {
        main.removeChild(subContainer);
    });

    setTimeout(() => {
        makeContainers(getSize());
    }, 500);
    
}

function getSize() {
    let size = 0;
    size = prompt("Enter a number between 1-100 for the size.");
    return size;
}

window.addEventListener('load', () => {
    const clearBtn = document.getElementById('clear');

    makeContainers(16);

    clearBtn.addEventListener('click', () => {
        clear();
    });

});
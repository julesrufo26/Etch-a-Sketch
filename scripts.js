function makeContainers(size) {
    const main = document.querySelector('#main-container');
    
    for(let row=0; row<size; row++) {    
        const div = document.createElement('div');
        div.classList.add(`row${row}`);
        div.classList.add('row');
        main.appendChild(div);
        for(let col=0; col<size; col++) {
            const div = document.createElement('div');
            let currRow = document.querySelector('.row' + row);
            currRow.appendChild(div);
        }
    }
}

window.addEventListener('load', () => {
    makeContainers(16);
});
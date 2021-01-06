const toggles = document.querySelectorAll('.toggle')
const one  = document.querySelector('#first')
const two = document.querySelector('#second')
const three = document.querySelector('#third')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if(one.checked && two.checked && three.checked) {
        if(one === theClickedOne) {
            three.checked = false
        }

        if(two === theClickedOne) {
            one.checked = false
        }

        if(three === theClickedOne) {
            two.checked = false
        }
    }
}
const panels = document.querySelectorAll(".panel");
let activePanel = 0;

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add("active")
    })
});

const removeActiveClass = function () {
    panels.forEach((panel) => {
        panel.classList.remove("active")
    })
};

document.onkeyup = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        activePanel--;

        if (activePanel < 0) {
            activePanel = panels.length - 1;
        }
        currentSlide();
    }
    else if (e.keyCode == '39') {
        activePanel++;

        if (activePanel > panels.length - 1) {
            activePanel = 0;
        }
        currentSlide();
    }

};

function currentSlide() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })

    panels[activePanel].classList.add('active');
};
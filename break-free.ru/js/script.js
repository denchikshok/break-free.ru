const toggleButton = document.getElementById('toggleButton');
const faceImage = document.getElementById('faceImage');
const newObjectsContainer = document.querySelector('.new-objects');
const background = document.querySelector('.background');

let isEdward = true;
let currentBackground = 1; 

toggleButton.addEventListener('click', function () {
    if (isEdward) {
        faceImage.src = 'img/tyler.png';
        newObjectsContainer.innerHTML = `
            <div class="upper-left-box">
                <p> "Слушайте, недоноски. Вы не уникальны, неповторимая красота снежинки — это не про вас.
                    Вы — разлагающая органическая масса, как и всё вокруг."</p>
            </div>
            <div class="lower-left-box">
                <p>
                    "Твоя работа — это не ты сам, как и твои деньги в банке, и твоя машина, как и твой бумажник. И твоя одежда. Ты — лишь кучка испражнений жизни…"
                </p>
            </div>
        `;
    } else {
        faceImage.src = 'img/edward.png';
        newObjectsContainer.innerHTML = '';
    }

    if (currentBackground === 1) {
        background.style.backgroundImage = "url('img/back5.jpg')";
        currentBackground = 2;
    } else {
        background.style.backgroundImage = "url('img/back2.jpg')";
        currentBackground = 1;
    }
    background.style.backgroundPosition = "center";

    isEdward = !isEdward; 

});

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
                <p> "��������, ���������. �� �� ���������, ������������ ������� �������� � ��� �� ��� ���.
                    �� � ����������� ������������ �����, ��� � �� ������."</p>
            </div>
            <div class="lower-left-box">
                <p>
                    "���� ������ � ��� �� �� ���, ��� � ���� ������ � �����, � ���� ������, ��� � ���� ��������. � ���� ������. �� � ���� ����� ����������� �����"
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

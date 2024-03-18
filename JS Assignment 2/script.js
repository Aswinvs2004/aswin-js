document.addEventListener('DOMContentLoaded', function() {
    const studentIdentity = 'YourUniqueStudentID'; // Update this with your real ID
    const imageList = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg']; // Example image names
    const bgColorInput = document.getElementById('color-control-input');
    const setColorButton = document.getElementById('apply-color-btn');
    const randomColorButton = document.getElementById('randomize-color-btn');
    const imageSelector = document.getElementById('image-picker');
    const imageDisplay = document.getElementById('image-showcase');
    const idText = document.getElementById('id-display');

    // Setting up the image dropdown
    imageList.forEach(image => {
        let option = document.createElement('option');
        option.value = image;
        option.text = image.split('.')[0]; // Display without file extension
        imageSelector.appendChild(option);
    });

    // Display student ID
    idText.textContent = `Your ID: ${studentIdentity}`;

    // Background color change on button click
    setColorButton.addEventListener('click', () => changeBackground(parseInt(bgColorInput.value)));
    randomColorButton.addEventListener('click', () => changeBackground(Math.floor(Math.random() * 101)));

    // Update displayed image
    imageSelector.addEventListener('change', () => {
        const selected = imageSelector.value;
        imageDisplay.src = `img/${selected}`;
        imageDisplay.hidden = false;
    });

    function changeBackground(value) {
        let color = 'red'; // Default color
        if (value <= 20) color = 'lime';
        else if (value <= 40) color = 'dodgerblue';
        else if (value <= 60) color = 'gold';
        else if (value <= 80) color = 'orange';
        else if (value <= 100) color = 'fuchsia';
        document.body.style.backgroundColor = color;
    }
});

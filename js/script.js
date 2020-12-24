const ballElement = document.getElementById('ball');
const frameElement = document.getElementById('frame');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');


let animationID = null;
let direction = 1;
const movement = 5;
const xMin = 0;
const ballWidth = parseFloat(getComputedStyle(ballElement).width);


const animateBall = () => {
    const xBall = parseFloat(getComputedStyle(ballElement).left);
    const xMax = parseFloat(getComputedStyle(frameElement).width);

    if (xBall < xMin || xBall + ballWidth > xMax - 20) {
        direction *= -1;
    }
    ballElement.style.left = `${xBall + direction * movement}px`;
    animationID = requestAnimationFrame(animateBall);
};


startButton.onclick = () => {
    animateBall();
    startButton.disabled = true;
    stopButton.disabled = false;

    startButton.style.backgroundColor = 'rgba(242, 242, 242, 0.4)';
    startButton.style.color = 'gray';
    startButton.style.cursor = 'default';

    stopButton.style.backgroundColor = 'rgba(51, 230, 51, 0.8)';
    stopButton.style.color = 'rgb(255, 255, 255)';
    stopButton.style.cursor = 'pointer';
};

stopButton.onclick = () => {
    cancelAnimationFrame(animationID);
    startButton.disabled = false;
    stopButton.disabled = true;

    stopButton.style.backgroundColor = 'rgba(242, 242, 242, 0.4)';
    stopButton.style.color = 'gray';
    stopButton.style.cursor = 'default';

    startButton.style.backgroundColor = 'rgba(51, 230, 51, 0.8)';
    startButton.style.color = 'rgb(255, 255, 255)';
    startButton.style.cursor = 'pointer';

};
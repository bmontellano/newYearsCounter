var checkTime = new Date(2021, 0, 1).getTime() - Date.now();
var spanDays = document.getElementById('days');
var spanSeconds = document.getElementById('seconds');
var firstElem = document.getElementById('first');
var daysLeft = Math.floor((new Date(2021, 0, 1).getTime() - Date.now()) / 86400000);
var secondsLeft = (((new Date(2021, 0, 1).getTime() - Date.now()) / 86400000) - daysLeft) * 86400;
var initVar = 0;
var counter = 0;

if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    alert("Let's get this party started")
}

console.log(.6*60, "minutes");

if(checkTime < 0) {
    firstElem.style.opacity = "1.0";
    firstElem.innerHTML = "<p style='color:red;font-size:50px; opacity:0.01'>HAPPY NEW YEAR!! 2021</p>";
    var firstChild = firstElem.firstChild;
    var initVar = parseFloat(firstElem.firstChild.style.opacity);
    refInterval = setInterval(() => {
        counter += 1;
        if (counter > 10){
            initVar += 0.01;
            firstChild.style.opacity = initVar.toString();
            if(parseFloat(firstChild.style.opacity) > 0.99 ) {
                clearInterval(refInterval);  
            }
        }
      },30); 
} else {
    firstElem.style.opacity = "1.0";
    spanDays.innerText = daysLeft.toString();
    spanSeconds.innerText = secondsLeft.toFixed(0);

    console.log("This should be Span for days ---> ", spanDays);
    console.log("This should be first h1 ---> ", firstElem);

    var timeInterval = setInterval(() => {
        checkTime = new Date(2021, 0, 1).getTime() - Date.now();
        daysLeft = Math.floor((new Date(2021, 0, 1).getTime() - Date.now()) / 86400000);
        secondsLeft = (((new Date(2021, 0, 1).getTime() - Date.now()) / 86400000) - daysLeft) * 86400;
        if (checkTime < 0) {
            firstElem.innerHTML = "<p style='color:red;font-size:50px'>HAPPY NEW YEAR!! 2021</p>";
            clearInterval(timeInterval);
        }
        spanDays.innerText = daysLeft.toString();
        spanSeconds.innerText = secondsLeft.toFixed(0);
        console.log("interval running")
    }, 1000);
    console.log(daysLeft);
}

//code using android for phone access
const controls = document.querySelector('.controls');
const cameraOptions = document.querySelector('.video-options>select');
const video = document.querySelector('video');
const canvas = document.querySelector('canvas');
const screenshotImage = document.querySelector('img');
const buttons = [...controls.querySelectorAll('button')];
let streamStarted = false;

const [play, pause, screenshot] = buttons;

const constraints = {
  video: {
    width: {
      min: 1280,
      ideal: 1920,
      max: 2560,
    },
    height: {
      min: 720,
      ideal: 1080,
      max: 1440
    },
  }
};

var sneakyCounter = 0;

const getCameraSelection = async () => {
  const devices = await navigator.mediaDevices.enumerateDevices();
  console.log('These are the found devices --> ', devices);
  const videoDevices = devices.filter(device => device.kind === 'videoinput');
  const options = videoDevices.map(videoDevice => {
    sneakyCounter ++;
    return `<option value="${videoDevice.deviceId}">${videoDevice.label}</option>`;
  });
  cameraOptions.innerHTML = options.join('');
};

const startStream = async (constraints) => {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleStream(stream);
  };

play.onclick = () => {
  if (streamStarted) {
    video.play();
    play.classList.add('d-none');
    pause.classList.remove('d-none');
    return;
  }
  if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
    const updatedConstraints = {
      ...constraints,
      deviceId: {
        exact: cameraOptions.value
      }
    };
    startStream(updatedConstraints);
  }
};

const handleStream = (stream) => {
  video.srcObject = stream;
  play.classList.add('d-none');
  pause.classList.remove('d-none');
  screenshot.classList.remove('d-none');
  streamStarted = true;
};

cameraOptions.onchange = () => {
  const updatedConstraints = {
    ...constraints,
    video: {
        deviceId: {
          exact: cameraOptions.value
        }
    }
  };
  startStream(updatedConstraints);
};

const pauseStream = () => {
  video.pause();
  play.classList.remove('d-none');
  pause.classList.add('d-none');
};

const doScreenshot = () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  screenshotImage.src = canvas.toDataURL('image/webp');
  screenshotImage.classList.remove('d-none');
};

pause.onclick = pauseStream;
screenshot.onclick = doScreenshot;

getCameraSelection();
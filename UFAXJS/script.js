

(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const display = document.querySelector('.display');
  
  let deg = 0;
  let zoneSize = 36; // deg

  const symbolSegments = {
    1: "100บาท",
    2: "100บาท",
    3: "SAMSUNG S21",
    4: "TV 65 นิ้ว",
    5: "Ipad Pro",
    6: "500บาท",
    7: "500บาท",
    8: "5,000บาท",
    9: "50บาท",
    10: "Iphone 12",
  }

  const handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    display.innerHTML = symbolSegments[winningSymbolNr];
    console.log(winningSymbolNr)

  }

  startButton.addEventListener('click', () => {
    playSound()
    display.innerHTML = "โชคดีนะค่ะ ลุย!!";
     
    startButton.style.pointerEvents = 'none';
     
    deg = Math.floor(5000 + Math.random() * 5000);
     
    wheel.style.transition = 'all 10s ease-out';
    
    wheel.style.transform = `rotate(${deg}deg)`;
    
    wheel.classList.add('blur');
    
  });

  wheel.addEventListener('transitionend', () => {
     
    wheel.classList.remove('blur');
    
    startButton.style.pointerEvents = 'auto';
    
    wheel.style.transition = 'none';
     
    const actualDeg = deg % 360;
     
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    stopSound();
    handleWin(actualDeg);
    console.log(actualDeg)
  });
})();

var h1 = document.querySelector("h1");

let audio = new Audio('https://firebasestorage.googleapis.com/v0/b/ufax24-960eb.appspot.com/o/%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%87%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A4%E0%B8%81%E0%B8%A9%E0%B9%8C%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%AA%E0%B8%B1%E0%B9%89%E0%B8%99.mp3?alt=media&token=297b1601-54d0-456c-a1d1-dbf0ab32502e')

function playSound()
{
        audio.currentTime = 0;
        audio.play();
        audio.loop = true;
}

function stopSound()
{
	audio.pause();
}

// var example1 = new Vue({
//     el: '#example-1',
//     data: {
//       counter: 0
//     }
//   })

const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [],
}

const flash = document.getElementById('flash');
const startBtn = document.getElementById('startBtn');

// ৪ মিনিট 
const countdownTime = (4 * 60);

// অ্যালার্ম সাউন্ড
let alarmSound = new Audio("./mixkit.wav");

function startCountdown() {
  let endTime = Date.now() + countdownTime * 1000;

  setInterval(() => {
    let now = Date.now();
    let timeLeft = Math.max(0, Math.floor((endTime - now) / 1000));

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    flash.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    if (timeLeft <= 0) {
      flash.textContent = "⏰ Alarm!";
      flash.classList.add('alarm');
      alarmSound.currentTime = 0;
      alarmSound.play();

      // ১ সেকেন্ড পরে আবার শুরু
      setTimeout(() => {
        flash.classList.remove('alarm');
        endTime = Date.now() + countdownTime * 1000;
      }, 1000);
    }
  }, 250);
}

// ক্লিক করলে সাউন্ড প্লে করার অনুমতি
startBtn.addEventListener('click', () => {
  alarmSound.play().then(() => {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    startCountdown();
    startBtn.style.display = 'none';
  });
});

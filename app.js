const flash = document.getElementById('flash');

// ৪ মিনিট ৪৫ সেকেন্ড = মোট সেকেন্ড
const countdownTime = (4 * 60) + 45;

// অ্যালার্ম সাউন্ড
let alarmSound = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");

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
  }, 250); // প্রতি 0.25 সেকেন্ডে আপডেট
}

startCountdown();

const flash = document.getElementById('flash');

// ৪ মিনিট
const countdownTime = (4 * 60);

// অ্যালার্ম সাউন্ড (ফাইল একই ফোল্ডারে থাকতে হবে)
let alarmSound = new Audio("./mixkit.wav");

function startCountdown() {
  let endTime = Date.now() + countdownTime * 1000;

  let timer = setInterval(() => {
    let now = Date.now();
    let timeLeft = Math.max(0, Math.floor((endTime - now) / 1000));

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    flash.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    if (timeLeft <= 0) {
      clearInterval(timer);

      // অ্যালার্ম দেখানো ও বাজানো
      flash.textContent = "⏰ Alarm!";
      flash.classList.add('alarm');
      alarmSound.currentTime = 0;
      alarmSound.play();

      // ১ সেকেন্ড পরে আবার নতুন কাউন্টডাউন শুরু
      setTimeout(() => {
        flash.classList.remove('alarm');
        startCountdown();
      }, 1000);
    }
  }, 250);
}

// পেজ লোড হলে সাথে সাথে শুরু
startCountdown();

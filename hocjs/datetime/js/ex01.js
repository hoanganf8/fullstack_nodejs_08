// const today = new Date();

// const date = new Date("2024-08-27 09:30:59");
// console.log(date.getDate());

const targetDate = `2024-08-31 23:59:59`;

const countdown = () => {
  let diffTime = (new Date(targetDate).getTime() - new Date().getTime()) / 1000;
  const days = Math.floor(diffTime / 86400);
  diffTime -= days * 86400;
  const hours = Math.floor(diffTime / 3600);
  diffTime -= hours * 3600;
  const minutes = Math.floor(diffTime / 60);
  diffTime -= minutes * 60;
  const seconds = Math.floor(diffTime);
  const daysEl = document.querySelector(".days .value");
  const hoursEl = document.querySelector(".hours .value");
  const minutesEl = document.querySelector(".minutes .value");
  const secondsEl = document.querySelector(".seconds .value");
  daysEl.innerHTML = days < 10 ? "0" + days : days;
  hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
  minutesEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;
};
setInterval(countdown, 1000);

//^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$

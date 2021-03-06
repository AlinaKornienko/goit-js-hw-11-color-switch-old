const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
  ];
  
  const refs = {
    style: document.querySelector("style"),
    startBtn: document.querySelector("[data-action=start]"),
    stopBtn: document.querySelector("[data-action=stop]"),
  };
  
  refs.startBtn.addEventListener("click", onStartBtnClick);
  refs.stopBtn.addEventListener("click", onStopBtnClick);
  
  let timerId = null;
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  function onStartBtnClick() {
    refs.startBtn.disabled = true;
    changeBgColorOnBodyWithInterval();
  }
  
  function changeBgColorOnBodyWithInterval() {
    setTimeout(function setRandomBgColorOnBody() {
        document.body.style.backgroundColor =
            colors[randomIntegerFromInterval(0, colors.length - 1)];

        timerId = setTimeout(setRandomBgColorOnBody, 1000);
    }, 0);
  };


  function onStopBtnClick() {
    refs.startBtn.disabled = false;
    clearInterval(timerId);
  }
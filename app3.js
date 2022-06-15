const remainTimess = document.querySelector("#remain-timess");

function diffDay() {
    const masTime = new Date("2022-09-01");
    const todayTime = new Date();
    const diff = masTime - todayTime;

    const diffDay = Math.floor(diff / (1000*60*60*24));
    const diffHour = Math.floor((diff / (1000*60*60)) % 24);
    const diffMin = Math.floor((diff / (1000*60)) % 60);
    const diffSec = Math.floor(diff / 1000 % 60);
    remainTimess.innerText = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`;
    
}
diffDay();
setInterval(diffDay, 1000);
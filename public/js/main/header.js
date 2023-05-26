const headerLogo = document.querySelector(".header-logo");
const headerPharm = document.querySelector(".header-pharm");
const headerMedicine = document.querySelector(".header-medicine");
const headerCalendar = document.querySelector(".header-calendar");
const headerAnnouncement = document.querySelector(".header-announcement");
const headerLogin = document.querySelector(".header-login");
const headerJoin = document.querySelector(".header-join");
const headerMypage = document.querySelector(".header-mypage");

headerLogo.addEventListener(('click'), () => {
    location.href="/main/index";
});
headerPharm.addEventListener(('click'), () => {
    location.href="/main/drugstore";
});
headerMedicine.addEventListener(('click'), () => {
    location.href="/main/medicine";
});
headerCalendar.addEventListener(('click'), () => {
    location.href="/main/calendar";
});
headerAnnouncement.addEventListener(('click'), () => {
    location.href="/main/announcement";
});
headerLogin.addEventListener(('click'), () => {
    location.href="/main/login";
});
headerJoin.addEventListener(('click'), () => {
    location.href="/main/join";
});
headerMypage.addEventListener(('click'), () => {
    location.href="/main/mypage";
});

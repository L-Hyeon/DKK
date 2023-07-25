const popStars = [
  {
    name: "BTS",
    iframe: "https://www.youtube.com/embed/gdZLi9oWNZg",
    youtube: "https://www.youtube.com/channel/UCLkAepWjdylmXSltofFvsYQ",
    website: "https://ibighit.com/bts/eng/profile/",
  },
  {
    name: "BLACKPINK",
    iframe: "https://www.youtube.com/embed/IHNzOHi8sJs",
    youtube: "https://www.youtube.com/@BLACKPINK",
    website:
      "https://www.ygfamily.com/artist/About.asp?LANGDIV=K&ATYPE=2&ARTIDX=70",
  },
  {
    name: "TWICE",
    iframe: "https://www.youtube.com/embed/c7rCyll5AeY",
    youtube: "https://www.youtube.com/channel/UCzgxx_DM2Dcb9Y1spb9mUJA",
    website: "https://twice.jype.com/",
  },
];

const musicItemList = document.querySelector("#music .wrapper .item-list");
popStars.forEach((val) => {
  musicItemList.innerHTML += `<li class="item">
                                <div class="item-title">
                                  <span>${val.name}</span>
                                  <div>
                                    <a href="${val.youtube}" target="_blank"
                                      ><img src="assets/youtube.svg" alt="youtube" width="50"
                                    /></a>
                                    <a href="${val.website}" target="_blank"
                                      ><img src="assets/home.svg" alt="website" width="50"
                                    /></a>
                                  </div>
                                </div>
                                <iframe
                                  class="item-content"
                                  src="${val.iframe}"
                                  title="YouTube video player"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowfullscreen></iframe>
                              </li>`;
});
let musicIdx = 0;
const moveMusicItem = (idx) => {
  musicItemList.style.left = `${-idx * 62}dvw`;
  musicIdx = idx;
};
let musicLeftBtn = document.querySelector("#music-left-button");
musicLeftBtn.addEventListener("click", () => {
  if (musicIdx !== 0) moveMusicItem(musicIdx - 1);
});
let musicRightBtn = document.querySelector("#music-right-button");
musicRightBtn.addEventListener("click", () => {
  if (musicIdx !== popStars.length - 1) {
    moveMusicItem(musicIdx + 1);
  }
});

const sportsStars = [
  {
    name: "Son Heung-Min",
    team: "Tottenham",
    backnumber: 7,
    iframe: "https://www.youtube.com/embed/9O_C1ZVavCk",
    insta: "https://www.instagram.com/hm_son7/",
  },
  {
    name: "Kim Min-Jae",
    team: "FC Bayern",
    backnumber: 3,
    iframe: "https://www.youtube.com/embed/wBir7h5-AW8",
    insta: "https://www.instagram.com/kiminjae3/",
  },
  {
    name: "Lee Kang-In",
    team: "PSG",
    backnumber: 19,
    iframe: "https://www.youtube.com/embed/sBTfsCVtRwI",
    insta: "https://www.instagram.com/kanginleeoficial/",
  },
  {
    name: "Kim Ha-Seong",
    team: "San Diego Padres",
    backnumber: 7,
    iframe: "https://www.youtube.com/embed/HOaLHdP2KCc",
    insta: "https://www.instagram.com/hhh_07/",
  },
];

const sportsItemList = document.querySelector("#sports .wrapper .item-list");
sportsStars.forEach((val) => {
  sportsItemList.innerHTML += `<li class="item">
                                <div class="item-title">
                                  <span>${val.name}/${val.team} #${val.backnumber}</span>
                                  <div>
                                    <a href="${val.insta}" target="_blank"
                                      ><img src="assets/insta.svg" alt="website" width="50"
                                    /></a>
                                  </div>
                                </div>
                                <iframe
                                  class="item-content"
                                  src="${val.iframe}"
                                  title="YouTube video player"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowfullscreen></iframe>
                              </li>`;
});
let sportsIdx = 0;
const moveSportsItem = (idx) => {
  sportsItemList.style.left = `${-idx * 62}dvw`;
  sportsIdx = idx;
};
let sportsLeftBtn = document.querySelector("#sports-left-button");
sportsLeftBtn.addEventListener("click", () => {
  if (sportsIdx !== 0) moveSportsItem(sportsIdx - 1);
});
let sportsRightBtn = document.querySelector("#sports-right-button");
sportsRightBtn.addEventListener("click", () => {
  if (sportsIdx !== sportsStars.length - 1) {
    moveSportsItem(sportsIdx + 1);
  }
});

const videos = [
  {
    name: "Squid Game",
    iframe: "https://www.youtube.com/embed/oqxAJKy0ii4",
    website: "https://www.netflix.com/kr-en/title/81040344",
  },
  {
    name: "Parasite",
    iframe: "https://www.youtube.com/embed/5xH0HfJHsaY",
    website: "https://www.netflix.com/kr-en/title/81221938",
  },
  {
    name: "Train to Busan",
    iframe: "https://www.youtube.com/embed/1ovgxN2VWNc",
    website: "https://www.netflix.com/kr-en/title/80117824",
  },
];

const videoItemList = document.querySelector("#video .wrapper .item-list");
videos.forEach((val) => {
  videoItemList.innerHTML += `<li class="item">
                                <div class="item-title">
                                  <span>${val.name}</span>
                                  <div>
                                    <a href="${val.website}" target="_blank"
                                      ><img src="assets/netflix.svg" alt="website" width="50"
                                    /></a>
                                  </div>
                                </div>
                                <iframe
                                  class="item-content"
                                  src="${val.iframe}"
                                  title="YouTube video player"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowfullscreen></iframe>
                              </li>`;
});
let videoIdx = 0;
const moveVideoItem = (idx) => {
  videoItemList.style.left = `${-idx * 62}dvw`;
  videoIdx = idx;
};
let videoLeftBtn = document.querySelector("#video-left-button");
videoLeftBtn.addEventListener("click", () => {
  if (videoIdx !== 0) moveVideoItem(videoIdx - 1);
});
let videoRightBtn = document.querySelector("#video-right-button");
videoRightBtn.addEventListener("click", () => {
  if (videoIdx !== videos.length - 1) {
    moveVideoItem(videoIdx + 1);
  }
});

githubIcon = document.querySelector("footer .github");
let githubAnimation = bodymovin.loadAnimation({
  container: githubIcon,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "assets/github.json",
});
githubIcon.addEventListener("mouseenter", () => {
  githubAnimation.play();
});
githubIcon.addEventListener("mouseleave", () => {
  githubAnimation.goToAndStop(0);
});

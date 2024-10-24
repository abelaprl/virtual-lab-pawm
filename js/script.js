let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('.close-side-bar').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}

   // Fungsi untuk mendapatkan query parameter dari URL
function getQueryParameter(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
   }

   // Ambil data dari URL
   const videoSrc = getQueryParameter('video');
   const videoTitle = getQueryParameter('title');
   const videoPoster = getQueryParameter('poster');

   // Update elemen video dan judul
   if (videoSrc) {
      const videoPlayer = document.getElementById('video-player');
      videoPlayer.src = 'images/' + videoSrc;  // Sesuaikan dengan folder video
      videoPlayer.poster = 'images/' + videoPoster;  // Sesuaikan dengan folder gambar
   }

   if (videoTitle) {
      document.getElementById('video-title').innerText = decodeURIComponent(videoTitle);
   }
console.log("Welcome to spotify");

//initialize the variables 
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs=[

   /*01*/   {songName: "Galib", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
   /*02*/   {songName: "Na ji na", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
   /*03*/   {songName: "Soch", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
   /*04*/   {songName: "Yaar na mileya", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
   /*05*/   {songName: "Sham", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
   /*06*/   {songName: "Main Jahan Rahoon", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
   /*07*/   {songName: "Aaoge jab tum", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
   /*08*/   {songName: "Aas pass khuda", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
   /*09*/   {songName: "Phir sa Ud Chala", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
   /*10*/   {songName: "Yahin hoon main", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element,i)=>{
   //console.log(element,i);
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// handle play/pause event 
masterPlay.addEventListener('click', ()=>{
   if(audioElement.paused || audioElement.currentTime <=0){
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
       gif.style.opacity = 1;
   }
   else{
       audioElement.pause();
       masterPlay.classList.remove('fa-pause-circle');
       masterPlay.classList.add('fa-play-circle');
       gif.style.opacity = 0;
   }
})

//event listners

audioElement.addEventListener('timeupdate',()=>{
   //update seekbar
   progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>
{
   audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.add('fa-play-circle');
      element.classList.remove('fa-pause-circle');
   })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click',(e)=>{
      console.log(e.target);
      makeAllPlays();
      songIndex=parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle'); 
      audioElement.src=`songs/${songIndex+1}.mp3`;
      audioElement.currentTime=0;
      audioElement.play();
      masterSongName.innerText = songs[songIndex].songName;
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
   })
})

document.getElementById('next').addEventListener('click',()=>{
   
   if(songIndex>=9)
   {
      songIndex=0;
   }
   else
   {
      songIndex+=1;
   }
   masterSongName.innerText = songs[songIndex].songName;
   audioElement.src=`songs/${songIndex+1}.mp3`;
   audioElement.currentTime=0;
   audioElement.play();
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
   
   if(songIndex<=0)
   {
      songIndex=0;
   }
   else
   {
      songIndex-=1;
   }
   masterSongName.innerText = songs[songIndex].songName;
   audioElement.src=`songs/${songIndex+1}.mp3`;
   audioElement.currentTime=0;
   audioElement.play();
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');

})
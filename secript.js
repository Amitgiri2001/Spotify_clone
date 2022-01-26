console.log("welcome to Spotify");
// initialized the variable
let songIndex=0;
let audioElement=new Audio("songs/2.mpeg");
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: "Shawn_mendes:",filePath:"songs/1.mpeg",coverPath:"covers/1.jpg"},
    {songName: "only_music",filePath:"songs/2.mpeg",coverPath:"covers/2.jpg"},
    {songName: "The_kid_laroi",filePath:"songs/3.mpeg",coverPath:"covers/3.jpg"},
    {songName: "oo na na na",filePath:"songs/4.mpeg",coverPath:"covers/4.jpg"},
    {songName: "Shawn_mendes_ca",filePath:"songs/5.mpeg",coverPath:"covers/5.jpg"},
    {songName: "Ed_Sheeren_shap",filePath:"songs/6.mpeg",coverPath:"covers/6.jpg"}, 
    {songName: "baby",filePath:"songs/7.mpeg",coverPath:"covers/7.jpg"},
    {songName: "Alan Walker--Faded",filePath:"songs/8.mpeg",coverPath:"covers/8.jpg"},
    {songName: "Love_me_Like_you_do",filePath:"songs/9.mpeg",coverPath:"covers/9.jpg"},
    {songName: "justin_Bieber-- Baby",filePath:"songs/10.meg3",coverPath:"covers/10.jpg"}
]

// handle play paused click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

// audio element time listen and update it------
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    let progress=parseInt((audioElement.currentTime / audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;

})
// when i change my progress bar--
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value  * audioElement.duration)/ 100;
})


songItems.forEach((element, i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    
});

// which paly button was clicked-----
const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        })
    
    
    
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        
        songIndex=parseInt(e.target.id);
        console.log(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= `songs/${songIndex+1}.mpeg`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })


})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mpeg`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mpeg`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
// audioElement.play();
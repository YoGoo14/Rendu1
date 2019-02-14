window.addEventListener("keydown", function(e) {
  if (e.keyCode == 32 ) {
				var sounds = document.getElementsByTagName('audio');
 				for(i=0; i<sounds.length; i++) sounds[i].pause();
};
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
 if(!audio) return;
 audio.currentTime = 0 ;
 audio.play();
 key.classList.add("playing");
});

function removeTransition(e){
 e.currentTarget.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend",removeTransition));

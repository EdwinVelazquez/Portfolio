//prototype
// function Person(name, age,job,sex,race){
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sex = sex;
//   this.race = race;
//   this.greeting = function(){
//     return "Hello " + this.name;
//   }
//   this.isLegalage = function(){
//     if (this.age > 18){
//     return "yes";
//   }
//   };
// }
function choice(){
  var songs = ['Canon.m4a','Bambo.m4a'];
  var choose = document.getElementById("chosen").value
document.getElementById("audio").innerHTML=songs[0]

current = songs[0];
// var state = document.getElementById("currState").value
function jukebox(){
    this.play = function(){
$('#player').get(current).play();
  }
  this.pause = function(){
$('#player').get(current).pause();
}
  this.nextSong = function(){
    current [i] = current;
    i++;
    return current;
$('#player').get(current).play();
  }
  this.prevSong = function(){
    current [i] = current;
    i--;
    return current;
$('#player').get(current).play();
  }
}
function song(){
   this.song = true  jukebox.apply(this, arguments);
// Call parent constructor with song prototype context.}
   song.prototype = new jukebox();
//song now has all of the traits of a jukebox as well as its //own admin boolean flag
}

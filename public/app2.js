$(document).ready(function() {
  function Jukebox(playing) {
    this.isPlaying = playing;
    const audio = $("#audio1").get(0);
    var songName = $("audio[name]")
    var tracks = ['Canon.m4a', 'Bambo.m4a'];
    var trackNum = 0;
    $('#audio1').attr('src', tracks[trackNum]);
    this.playIt = function() {
      if (this.isPlaying) {
        audio.play();
        this.isPlaying = false;
      } else {
        audio.pause();
        this.isPlaying = true;
      }
    }
    this.stopIt = function() {
      audio.pause();
      audio.currentTime = 0;
      this.isPlaying = true;
    }
    this.loadNext = function() {
      if(trackNum == tracks.length-1){
        $('#audio1').attr('src', tracks[trackNum])
        audio.play();
      }else{
        trackNum++;
        $('#audio1').attr('src', tracks[trackNum]);
        console.log(trackNum);
        audio.play();
      }
    }
    this.loadPrev = function() {
      if(trackNum==0){
        $('#audio1').attr('src', tracks[0]);
        audio.play();
      }else{
        trackNum--;
        $('#audio1').attr('src', tracks[trackNum]);
        console.log(trackNum);
        audio.play();
      }
     }
     this.addSong = function() {
       path = $("#addSong").val();
       tracks.push(path);
       console.log(tracks);
     }
     this.spotiSong = function() {
     }
     }
  juke = new Jukebox(true);
});

function Song(title, artist) {
  this.title = title;
  this.artist = artist;
  this.play = () => {
    console.log(`Playing : ${this.artist} - ${this.title}`);
  };
}

let myFavSong1 = new Song("All Soft Inside", "AURORA");
myFavSong1.play();
let myFavSong2 = new Song("Numb", "Linkin Park");
myFavSong2.play();
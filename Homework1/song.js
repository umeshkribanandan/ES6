/**
 * This file describes usages various datatypes in Javascript
 * via an example of a song which i like 
 * Author : Umesh Kribanandan
 * Date: Friday 25, January 2019
 */

//String Datatype
var artist = "U2";
var songName = "Beautiful Day";
var genre = "Rock";
console.log(artist);
console.log(songName);
console.log(genre);

var albumName = "All That You Can't Leave Behind";
var lyricsBy = "Bono";
console.log(albumName);
console.log(lyricsBy);

//Number Datatype
var releasedYear = 2000;
console.log(releasedYear);

//Array Datatype
var producers = ["Daniel Lanois", "Brian Eno", "Steve Lillywhite"];
var awards = ["Song of the Year", "Record of the Year", "Best Rock Performance by a Duo or Group with Vocal"];
console.log(producers);
console.log(awards);

//Boolean Datatype
var isIrish = true;
console.log(isIrish);

//Object Datatype
function songConstructor(artist, songName, genre, albumName, lyricsBy, releasedYear, producers, awards, isIrish){
    this.artist = artist;
    this.songName = songName;
    this.genre = genre;
    this.albumName = albumName;
    this.lyricsBy = lyricsBy;
    this.releasedYear = releasedYear;
    this.producers = producers;
    this.awards = awards;
    this.isIrish = isIrish;
    this.whoWroteLyrics = function () {
        console.log(this.lyricsBy);
    }
    this.whatIsTheGenre = function () {
        console.log(this.genre)
    }
}
var mySong = new songConstructor(artist, songName, genre, albumName, lyricsBy, releasedYear, producers, awards, isIrish);
console.log(mySong);
mySong.whoWroteLyrics();
mySong.whatIsTheGenre();
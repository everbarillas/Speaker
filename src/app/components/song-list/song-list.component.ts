import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {
  song0;
  song0state = false;
  song1;
  song1state = false;
  song2;
  song2state = false;
  song3;
  song3state = false;
  song4;
  song4state = false;

  constructor() {
    this.song0 = new Howl({ src: ['assets\\music\\song_00.mp3'] });
    this.song1 = new Howl({ src: ['assets\\music\\song_01.mp3'] });
    this.song2 = new Howl({ src: ['assets\\music\\song_02.mp3'] });
    this.song3 = new Howl({ src: ['assets\\music\\song_03.mp3'] });
    this.song4 = new Howl({ src: ['assets\\music\\song_04.mp3'] });
  }

  ngOnInit() {
  }

  onClickMe(songId) {
    switch (songId) {
      case 0: {
        if (this.song0state) {
          this.pauseAllSongs();
        } else {
          this.stopAllSongsExceptCurrent(songId);
          this.guiSongOn(songId);
          this.song0state = true;
          this.song0.play();
        }
        break;
      }
      case 1: {
        if (this.song1state) {
          this.pauseAllSongs();
        } else {
          this.stopAllSongsExceptCurrent(songId);
          this.guiSongOn(songId);
          this.song1state = true;
          this.song1.play();
        }
        break;
      }
      case 2: {
        if (this.song2state) {
          this.pauseAllSongs();
        } else {
          this.stopAllSongsExceptCurrent(songId);
          this.guiSongOn(songId);
          this.song2state = true;
          this.song2.play();
        }
        break;
      }
      case 3: {
        if (this.song3state) {
          this.pauseAllSongs();
        } else {
          this.stopAllSongsExceptCurrent(songId);
          this.guiSongOn(songId);
          this.song3state = true;
          this.song3.play();
        }
        break;
      }
      case 4: {
        if (this.song4state) {
          this.pauseAllSongs();
        } else {
          this.stopAllSongsExceptCurrent(songId);
          this.guiSongOn(songId);
          this.song4state = true;
          this.song4.play();
        }
        break;
      }
    }
  }

  pauseAllSongs() {
    this.song0.pause();
    this.song0state = false;

    this.song1.pause();
    this.song1state = false;

    this.song2.pause();
    this.song2state = false;

    this.song3.pause();
    this.song3state = false;

    this.song4.pause();
    this.song4state = false;

    this.guiSongsOff();
  }

  stopAllSongsExceptCurrent(id) {
    if (id !== 0) {
      this.song0.stop();
      this.song0state = false;
    }

    if (id !== 1) {
      this.song1.stop();
      this.song1state = false;
    }

    if (id !== 2) {
      this.song2.stop();
      this.song2state = false;
    }

    if (id !== 3) {
      this.song3.stop();
      this.song3state = false;
    }

    if (id !== 4) {
      this.song4.stop();
      this.song4state = false;
    }

    this.guiSongsOff();
  }

  guiSongsOff() {
    for (let i = 0; i <= 4; i++) {
      const elem = document.querySelector('#tr_' + i);
      if (elem instanceof HTMLElement) {
        elem.style.backgroundColor = 'rgb(37, 40, 61)';
      } else {
        throw new Error('element not in document');
      }

      const image = document.querySelector('#song_' + i);
      if (image instanceof Image) {
        image.src = 'assets/images/play.svg';
      } else {
        throw new Error('image not in document');
      }
    }
  }

  guiSongOn(id) {
    const elem = document.querySelector('#tr_' + id);
    if (elem instanceof HTMLElement) {
      elem.style.backgroundColor = 'rgb(0, 191, 165)';
    } else {
      throw new Error('element not in document');
    }

    const image = document.querySelector('#song_' + id);
    if (image instanceof Image) {
      image.src = 'assets/images/pause.svg';
    } else {
      throw new Error('image not in document');
    }
  }
}

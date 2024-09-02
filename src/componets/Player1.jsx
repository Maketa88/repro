import React from "react";
import Player from "@madzadev/audio-player";
import amarilla from "../assets/Music/Amarilla Se Pone.mp3";
import amor from "../assets/Music/Amor De Primavera.mp3";
import conmigo from "../assets/Music/Aunque No Sea Conmigo.MP3";
import careta from "../assets/Music/Caretas.mp3";
import corre from "../assets/Music/Corre Corre.mp3";
import parara from "../assets/Music/Cuando Parara La Lluvia En Mi Corazon.MP3";
import desde from "../assets/Music/Desde Lejos.mp3";
import dueles from "../assets/Music/Dueles.mp3";
import ecos from "../assets/Music/Ecos De Amor.MP3";
import ella from "../assets/Music/Ella Es.mp3";
import mujer from "../assets/Music/Esa Mujer.mp3";
import escombro from "../assets/Music/Escombros.MP3";
import frente from "../assets/Music/Frente A Frente.mp3";
import queria from "../assets/Music/No Queria Engañarte.mp3";
import noviembre from "../assets/Music/Noviembre Sin Ti.MP3";
import pagina from "../assets/Music/Pagina De Amor.mp3";
import amo from "../assets/Music/Porque Te Amo.mp3";
import enamorar from "../assets/Music/Que Locura Enamorarme De Ti.MP3";
import quedarme from "../assets/Music/Quiero Quedarme En Ti.mp3";
import fuiste from "../assets/Music/Te Fuiste De Aqui.mp3";
import amante from "../assets/Music/Un Amante Como Yo.MP3";
import cura from "../assets/Music/Uno Se Cura.mp3";
import devorar from "../assets/Music/Ven Devorame Otra Vez.mp3";
import quedas from "../assets/Music/Y Si Te Quedas Que.MP3";

const colors = {
  tagsBackground: "#51E5FF",
  tagsText: "#ffffff",
  tagsBackgroundHoverActive: "#6e65f1",
  tagsTextHoverActive: "#ffffff",
  searchBackground: "#000000",
  searchText: "#ffffff",
  searchPlaceHolder: "#FCFCFC",
  playerBackground: "#000000",
  titleColor: "#ffffff",
  timeColor: "#ffffff",
  progressSlider: "#51E5FF",
  progressUsed: "#ffffff",
  progressLeft: "#FCFCFC",
  bufferLoaded: "#FCFCFC",
  volumeSlider: "#51E5FF",
  volumeUsed: "#ffffff",
  volumeLeft: "#FCFCFC",
  playlistBackground: "#000000",
  playlistText: "#FCFCFC",
  playlistBackgroundHoverActive: "#000000",
  playlistTextHoverActive: "#ffffff",
};

const tracks = [
  {
    url: amarilla,
    title: "Amarilla Se Pone",
    tags: ["house"],
  },
  {
    url: amor,
    title: "Amor De Primavera",
    tags: ["house"],
  },
  {
    url: conmigo,
    title: "Aunque No Sea Conmigo",
    tags: ["house"],
  },
  {
    url: careta,
    title: "Caretas",
    tags: ["house"],
  },
  {
    url: corre,
    title: "Corre",
    tags: ["house"],
  },
  {
    url: parara,
    title: "Cuando Parara La Lluvia En Mi Corazon",
    tags: ["house"],
  },
  {
    url: desde,
    title: "Desde Lejos",
    tags: ["house"],
  },
  {
    url: dueles,
    title: "Dueles",
    tags: ["house"],
  },
  {
    url: ecos,
    title: "Ecos De Amor",
    tags: ["house"],
  },

  {
    url: ella,
    title: "Ella Es ",
    tags: ["house"],
  },
  {
    url: mujer,
    title: "Esa Mujer",
    tags: ["house"],
  },
  {
    url: escombro,
    title: "Escombros",
    tags: ["house"],
  },
  {
    url: frente,
    title: "Frente A Frente",
    tags: ["house"],
  },
  {
    url: queria,
    title: "No Queria Engañarte",
    tags: ["house"],
  },
  {
    url: noviembre,
    title: "Noviembre Sin Ti",
    tags: ["house"],
  },
  {
    url: pagina,
    title: "Pagina De Amor",
    tags: ["house"],
  },
  {
    url: amo,
    title: "Porque Te Amo",
    tags: ["house"],
  },
  {
    url: enamorar,
    title: "Que Locura Enamorarme De Ti",
    tags: ["house"],
  },

  {
    url: quedarme,
    title: "Quiero Quedarme En Ti",
    tags: ["house"],
  },
  {
    url: fuiste,
    title: "Te Fuiste De Aqui",
    tags: ["house"],
  },
  {
    url: amante,
    title: "Un Amante Como Yo",
    tags: ["house"],
  },
  {
    url: cura,
    title: "Uno Se Cura",
    tags: ["house"],
  },
  {
    url: devorar,
    title: "Ven Devorame Otra Vez",
    tags: ["house"],
  },
  {
    url: quedas,
    title: "Y Si Te Quedas Que",
    tags: ["house"],
  },
];

export const Player1 = () => {
  return (
    <div>
      <Player
        trackList={tracks}
        includeTags={false}
        includeSearch={false}
        showPlaylist={false}
        sortTracks={true}
        autoPlayNextTrack={true}
        customColorScheme={colors}
      />
    </div>
  );
};

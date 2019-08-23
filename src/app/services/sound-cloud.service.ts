import { Injectable } from '@angular/core';
import { Posiciones } from '../interfaces/interfacePosicionMic';

@Injectable({
  providedIn: 'root'
})
export class SoundCloudService {

  constructor() {}

    // Injeccion SoundCloud
    getSoundCloudUrl (url: string) {
      const soundCloudUrl = `https://w.soundcloud.com/player/?url=${url}`;
      return soundCloudUrl;
    }

    inyectarUrlSoundCloud (url: string){
      return this.getSoundCloudUrl(url);
    }

    posicionesInyectadas(urls: Posiciones[]) {

      let inyectados: Posiciones[];
      inyectados = urls;

      inyectados.forEach((item, index) => {
        inyectados[index].urlSonido = this.inyectarUrlSoundCloud(urls[index].urlSonido);
      });

      return inyectados;
    }


}

import { Injectable } from '@angular/core';

import { Microfono } from '../interfaces/interfaceMicrofonos';
import { HttpClient } from '@angular/common/http';
import { ClasificacionMicrofonos } from '../interfaces/interfaceClasificacionMic';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ObjMic: Microfono;

  constructor(private http: HttpClient) {}

    // QUERY API PROPIA
  // tslint:disable-next-line: no-shadowed-variable
  getQueryApi<ClasificacionMicrofonos>(query: string) {
      // const url = `http://localhost:3000/${query}`;
      const url = `https://sonusbackend.herokuapp.com/${query}`;
      return this.http.get<ClasificacionMicrofonos>(url);
}

      // FUNCIONALIDADES API//
  getMicsBajos() {
      return this.getQueryApi(`getBajos`);
  }
  getMicsGuitarras() {
    return this.getQueryApi(`getGuitarras`);
  }
  getMicsList(tipo: string) {
    return this.getQueryApi(`get${tipo}`);
  }

  // Funciones para pasar un microfono desde el componente lista-microfono Component y el presentacion-mic Component.

  getObjMic () {
    return this.ObjMic;
  }
  setObjMic (microfono: Microfono) {
    this.ObjMic = microfono;
    // console.log(this.ObjMic);
  }

}

import { Microfono } from './interfaceMicrofonos';

export interface ClasificacionMicrofonos {
    nombreClasificacion: string;
    modelo: string;
    id?: number;
    microfonos: Microfono[];
}
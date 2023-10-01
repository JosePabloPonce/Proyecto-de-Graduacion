export interface IConteoDeHuevecillos {
    id: string;
    codigo_sustrato: string;
    fecha_colocacion: string;
    fecha_retiro: string;
    huevos_intactos: number;
    huevos_eclosionados: number;
    huevos_canoa: number;
    total_huevos: number;
    generacion: string;
    responsable: string;
    id_user: number;
    id_datos: number;
}
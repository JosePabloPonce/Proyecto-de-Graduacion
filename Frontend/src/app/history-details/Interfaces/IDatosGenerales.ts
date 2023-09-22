export interface IDatosGenerales {
    id: string;
    cepa: string;
    generacion: string;
    codigo_crianza: string;
    especie: string;
    codigo_responsable: string;
    total_huevos_intactos?: number;
}
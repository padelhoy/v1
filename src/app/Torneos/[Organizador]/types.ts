export type DireccionT = {
    calle: string
    numero: string
    localidad: string
    provincia: string
    cp: string
}
export type TorneoT = {
    id: string
    categoria: string
    fecha: string
    hora: string
    lugar: string
    cupo: number
    cancha: number
    anotados: number
}
export type Organizador = {
    id: string
    code: string
    name: string
    description: string
    direccion: DireccionT
    telefono: string
    instagram: string
    torneos: TorneoT[]
}

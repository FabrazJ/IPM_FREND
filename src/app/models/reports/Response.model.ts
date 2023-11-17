//INTERFAZ DE RESPONSIDAD
export interface Response<T>{
    success: string,
    message: string,
    data: T
}
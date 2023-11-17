//MODEL DEL USUARIO DE LOS DATOS QUE SE VAN A CONSUMIR
export interface User {
   //Variables que estan en la base de datos 
   //Id, Identificacion, Nombres, Apellidos, Correo(email), contraseña, confirmacion de contraseña y estado
   id:number;
   identificacion:string;
   nombres:string;
   apellidos:string;
   email: string;
   contraseña:string;
   confirmarClave:string;
   estado:string;
}

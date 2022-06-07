// INTERFACES : moldes que representar estructuras 
// Clase : molde para crear objetos 
interface IClub{
    id:number;
    name: string;
}
interface IResponse extends IClub{
    msg:string;
    
}
const clubes:IClub[] = []

const createClub = (id:number , name : string ) : IResponse=> {
clubes.push({id,name})
return {msg:'club susefully created' , id : id , name:name}
}
export default createClub
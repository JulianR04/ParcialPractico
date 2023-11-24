export class Restaurante {
    id: number;
    nombre: string;
    pais: string;
    tipocomida: string;
    fundacion: number; 
    raiting: number;
    description: string;
    image: string;
   
    public constructor(id: number, nombre: string, pais: string, tipocomida: string, fundacion: number, raiting: number, description: string, image: string) {
      this.id = id; 
      this.nombre = nombre;
      this.pais = pais;
      this.tipocomida = tipocomida;
      this.fundacion = fundacion;
      this.raiting = raiting;
      this.description = description; 
      this.image = image 

    }
    getId():number{
        return this.id;
    }
    setId(id:number){
        this.id = id;
    }
    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre:string){
        this.nombre = nombre;
    }
    getPais():string{
        return this.pais;
    }
    setPais(pais:string){
        this.pais = pais;
    }
    getFundacion():number{
        return this.fundacion;
    }
    setFundacion(fundacion:number){
        this.fundacion= fundacion;
    }
    getTipocomida():string{
        return this.tipocomida;
    }
    setTipoComida(tipocomida:string){
        this.tipocomida = tipocomida;
    }
    getDescription():string{
        return this.description;
    }
    setDescription(description:string){
        this.description = description;
    }
    getRaiting():number{
        return this.raiting;
    }
    setRaiting(raiting:number){
        this.raiting = raiting;
    }
    getImage():string{
        return this.image;
    }
    setImage(image:string){
        this.image = image;
    }
   }
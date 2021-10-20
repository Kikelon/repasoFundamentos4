export class Punto{

    // Atributos

    private x : number;
    private y : number;

    // Constructor

    public constructor (x: number, y: number){
        this.x = x;
        this.y = y;
    };

    // Setters y Getters

    public setX(x: number){
        this.x = x;
    };

    public getX(): number {
        return this.x;
    };

    public setY(y: number){
        this.y = y;
    };

    public getY(): number {
        return this.y;
    };

    // Métodos

    public toString(): string{
        const resultado : string = "("+this.x+","+this.y+")";
        return resultado;        
    };

    public distanciaAlOrigen(): number {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };

    public calcularDistancia(otroPunto: Punto): number {
        return Math.sqrt(Math.pow((this.x-otroPunto.x), 2) + Math.pow((this.y-otroPunto.y), 2));
    };

    public calcularCuadrante(): number{
        let resultado = 0;
        if(this.x > 0){
            ((this.x * this.y) > 0) ? resultado = 1 : resultado = 4;
        }
        else if(this.x<0) {
            ((this.x * this.y) > 0) ? resultado = 3 : resultado = 2;
        }
        return resultado;
    }

    public calcularMasCercano(puntos: Punto[]): number{
        let cercano : number = 0;
        let distancia : number = this.calcularDistancia(puntos[0]);
        puntos.forEach((element, index) => {
            if (this.calcularDistancia(element) > distancia) {cercano = index}
        })
        return cercano;
    }

}
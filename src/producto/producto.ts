
export class Producto {
    private nombreProducto: string;
    private precio: number;

    public constructor(nombreProducto: string, precio: number) {
        this.nombreProducto = nombreProducto;
        this.precio = precio;
    }

    public getNombreProducto(): string {
        return this.nombreProducto;
    }
    
    public getPrecio(): number {
        return this.precio;
    }
}
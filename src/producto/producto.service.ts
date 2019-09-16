import { Injectable } from '@nestjs/common';

import * as fs from 'fs';
import { Producto } from './producto';

@Injectable()
export class ProductoService {
    private static readonly CANTIDAD_PRODUCTOS = 10;
    private listaProductos: Producto[];

    public constructor() {
        this.loadProductos();
    }

    public getProductos(): Producto[] {
        return this.listaProductos;
    }

    public getProducto(index: number): Producto {
        // Más adelante agregar manejo de status code
        if (index < 0 || index >= this.listaProductos.length)
            return null;

        return this.listaProductos[index];
    }

    public create(prod: any) {
        console.log("PRODUCTO: ");
        console.log(prod);
        console.log(typeof prod);
        console.log("----------------");
        let nombre = prod['nombreProducto'];
        let precio = prod['precio'];
        if (nombre && precio && parseInt(precio) > 0) {
            const producto = new Producto(nombre, precio);
            this.listaProductos.push(prod);
            console.log(producto);
            fs.appendFileSync('productos.csv',
                "\n"+
                producto.getNombreProducto() + ","
                + producto.getPrecio());
            return "ok";
        }
        else
            return "parametros incorrectos";
    }

    private loadProductos(): void {
        let archivo = fs.readFileSync('productos.csv', 'utf8');

        const elementos = archivo.split('\n').map(p => p.replace('\r', '')).map(p => p.split(','));

        this.listaProductos = [];
        for (let i = 0; i < elementos.length; i++) {
            let producto = new Producto(elementos[i][0], parseInt(elementos[i][1]));
            this.listaProductos.push(producto);
        }
    }

    public deleteProducto(position: number): boolean {
        let removed = this.listaProductos.splice(position,1);
        return removed.length == 1;
    }
}
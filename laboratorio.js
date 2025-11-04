//  Ejercicio 1: Sistema básico de vehículos
class Vehiculo {
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    };

    obtenerDetalles(){
        console.log(`Marca: ${this.marca} modelo: ${this.modelo} año: ${this.año}`)
    };
};

class Coche extends Vehiculo{
    constructor(marca, modelo, año, numeroPuertas){
        super(marca, modelo, año);
        this.numeroPuertas = numeroPuertas;
    };
};

class Moto extends Vehiculo{
    constructor(marca, modelo, año, Cilindrada){
        super(marca, modelo, año);
        this.Cilindrada = Cilindrada;
    };
};

const Coche1 = new Coche("BMW","M4","2025","4");
const Moto1 = new Moto("Suzuki","Gixxer SF Fi","2025","150");
Coche1.obtenerDetalles();
Moto1.obtenerDetalles();

//  Ejercicio 2: Sistema de empleados
class Empleado{
    constructor(nombre, edad, salarioBase){
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = salarioBase;
    };

    calcularSalario(){
        console.log(`${this.nombre} Su salario es: ${this.salarioBase}`);
    };
};

class Gerente extends Empleado{
    constructor(nombre, edad, salarioBase, bonificacion){
        super(nombre, edad, salarioBase);
        this.bonificacion = bonificacion;
    };

    calcularSalario(){
        const salarioTotal = this.salarioBase + this.bonificacion;
        console.log(`${this.nombre} (Gerente) - Salario total: ${salarioTotal}`)
    };
};

class Desarrollador extends Empleado{
    constructor(nombre, edad, salarioBase, lenguaje){
        super(nombre, edad, salarioBase);
        this.lenguaje = lenguaje;
    };
};

const empleadoNormal = new Empleado("Laura Valentina", 23 , 1700000);
const gerente1 = new Gerente("Anderson", 25, 1700000, 500000)
const Desarrollador1 = new Desarrollador("Darwin Ortiz", 23, 1700000);

empleadoNormal.calcularSalario();
gerente1.calcularSalario();
Desarrollador1.calcularSalario();

//  Ejercicio 3: Sistema de productos electrónicos

class Producto {
    constructor(nombre, precio, marca){
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    };

    descripcion(){
        console.log(`El nombre es: ${this.nombre} Marca: ${this.marca} Precio: ${this.precio}`);
    };
};

class Telefono extends Producto{
    constructor(nombre, precio, marca,almacenamiento,ram){
        super(nombre,precio,marca);
        this.almacenamiento = almacenamiento;
        this.ram = ram;
    };
};

class Laptop extends Producto{
    constructor(nombre, precio, marca,procesador,pulgadas){
        super(nombre,precio,marca);
        this.procesador = procesador;
        this.pulgadas = pulgadas;
    };
};

const Producto1 = new Producto("Scyrox ", 300000, "V6");
const Telefono1 = new Producto("Iphone", 5000000, "17 pro max", "256 GB", "16 ram");
const Laptop1 = new Producto("HP", 1779990, "HP 15-FC0012LA", "AMD RYZEN 7-7730U", 15);

Producto1.descripcion();
Telefono1.descripcion();
Laptop1.descripcion();

//  Ejercicio 4: Sistema de figuras geométricas
class Figura{
    constructor(Color){
        this.color = this.color;
    };

    area(){
        return 0;
    };
};

class Rectangulo extends Figura{
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    };

    area(){
        const Area = this.base * this.altura;
        console.log(`El area del rectangulo es: ${Area}`)
    };
};

class Circulo extends Figura{
    constructor(color, radio){
        super(color);
        this.radio = radio;
    };

    area(){
        const Area = Math.PI * this.radio**2
        console.log(`El area del rectangulo es: ${Area}`)
    };
};

const Figura1 = new Figura("Verde");
const Rectangulo1 = new Rectangulo("Verde", 3, 4);
const Circulo1 = new Circulo("Verde", 1);

Figura1.area();
Rectangulo1.area();
Circulo1.area();

//  Ejercicio 5: Sistema de animales
class Animal{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    };

    emitirSonido(){
        console.log();
    };
};

class Perro extends Animal{
    constructor(nombre, edad){
        super(nombre, edad);
    };

    emitirSonido(){
        console.log("Woofff Woofff")
    };
};

class Gato extends Animal{
    constructor(nombre, edad){
        super(nombre, edad);
    };

    emitirSonido(){
        console.log("Miauu Miauuu")
    };
};

const Perro1 = new Perro();
const Gato1 = new Gato();

Perro1.emitirSonido();
Gato1.emitirSonido();

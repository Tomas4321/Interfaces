"use strict"

class Ficha {
    constructor(posX, posY, radius, fill, context, borde, img) {
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
        this.fill = fill;
        this.ctx = context;
        this.borde = borde;
        this.img = img;
    }


    dibujar() {
        // Guarda el estado actual del lienzo
        this.ctx.save();

        // Comienza un nuevo camino
        this.ctx.beginPath();

        // Crea un arco/círculo
        this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);

        // Recorta el lienzo
        this.ctx.clip();

        // Dibuja la imagen
        this.ctx.drawImage(this.img, this.posX - this.radius, this.posY - this.radius, this.radius * 2, this.radius * 2);

        // Restaura el lienzo a su estado original (antes del recorte)
        this.ctx.restore();

        // Dibuja el borde
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.ctx.strokeStyle = this.borde;
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        this.ctx.closePath();
    }


}



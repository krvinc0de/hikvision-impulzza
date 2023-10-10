import fs from 'fs'


export const faceRecognitionController = (req, res) => {

    //convertir imagen base64 a imagen y guardarla en el temp
    //subir la imagen a cloudinary
    //comparar la imagen con la base de datos (a definir)
    //devolver el resultado de la comparacion (a definir)
    //insertar registro de cara/evento en la base de datos
    const image = req.body.Data.Image

    const buffer = Buffer.from(image, "base64");

    fs.writeFile("image.webp", buffer, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("La imagen se ha guardado correctamente.");
        }
      });

    res.send(buffer)
}


import { Schema, model } from "mongoose";


//MODELO DE EJEMPLO
const faceRecognitionModel = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default model('facerecognitions', faceRecognitionModel);


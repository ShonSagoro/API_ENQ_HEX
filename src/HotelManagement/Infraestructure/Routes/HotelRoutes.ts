import { Express } from "express";
import multer from 'multer';
import JWTMiddleware from "../../../Middleware/JWTMiddlewre";
import dotenv from 'dotenv';
import { addImageHotelController, createHotelController, deleteHotelController, deleteHotelImagesController, deleteHotelRoomController, getByNameHotelController, getByUuidHotelController, listHotelController, listHotelImagesController, listHotelRoomController, registerHotelRoomController, storageService, updateHotelController } from "../dependencies";
dotenv.config();

const Verifytoken = JWTMiddleware.VerifyTokenTry;
const MODEL_URL = "hotels";
const BASE_URL = process.env.BASE_URL || "/api/v1/";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
    }
  });
const upload = multer({ storage });

export function setUpHotelRoutes(app: Express) {
    app.delete(`${BASE_URL}${MODEL_URL}/:uuid`, Verifytoken, deleteHotelController.execute.bind(deleteHotelController));
    app.delete(`${BASE_URL}${MODEL_URL}/:uuid/image/:uuid_image`, Verifytoken, deleteHotelImagesController.execute.bind(deleteHotelImagesController));
    app.delete(`${BASE_URL}${MODEL_URL}/:uuid/room/:uuid_room`, Verifytoken, deleteHotelRoomController.execute.bind(deleteHotelRoomController));
    app.get(`${BASE_URL}${MODEL_URL}/name/:name`, Verifytoken, getByNameHotelController.execute.bind(getByNameHotelController));
    app.get(`${BASE_URL}${MODEL_URL}/uuid/:uuid`, Verifytoken, getByUuidHotelController.execute.bind(getByUuidHotelController));
    app.get(`${BASE_URL}${MODEL_URL}`, Verifytoken, listHotelController.execute.bind(listHotelController));
    app.get(`${BASE_URL}${MODEL_URL}/:uuid/images`, Verifytoken, listHotelImagesController.execute.bind(listHotelImagesController));
    app.get(`${BASE_URL}${MODEL_URL}/:uuid/rooms`, Verifytoken, listHotelRoomController.execute.bind(listHotelRoomController));
    app.put(`${BASE_URL}${MODEL_URL}/:uuid`, Verifytoken, updateHotelController.execute.bind(updateHotelController));
    app.post(`${BASE_URL}${MODEL_URL}/`, Verifytoken, createHotelController.execute.bind(createHotelController));
    app.post(`${BASE_URL}${MODEL_URL}/:uuid/register_room`, Verifytoken, registerHotelRoomController.execute.bind(registerHotelRoomController));
    app.post(`${BASE_URL}${MODEL_URL}/:uuid/upload/img`, Verifytoken,  upload.single("image"), addImageHotelController.execute.bind(addImageHotelController));
}
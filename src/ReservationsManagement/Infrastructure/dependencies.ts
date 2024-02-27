import { CreateReservationUseCase } from "../Application/UseCase/CreateReservationUseCase";
import { DeleteReservationUseCase } from "../Application/UseCase/DeleteReservationUseCase";
import { FindByUUIDReservationUseCase } from "../Application/UseCase/FindByUUIDReservationUseCase";
import { UpdateReservationUseCase } from "../Application/UseCase/UpdateReservationUseCase";

import { CreateReservationController } from "./Controllers/CreateReservationController";
import { DeleteReservationController } from "./Controllers/DeleteReservationController";
import {FindByUUIDReservationController} from "./Controllers/FindByUUIDReservationController"
import { UpdateReservationController } from "./Controllers/UpdateReservationController";

import {MongoDBReservationRepository} from "./Repositories/MongoReservationRepositoy"


export const mongoDBReservationRepository = new MongoDBReservationRepository();

const databaseRepository = mongoDBReservationRepository;


export const createReservationUseCase = new CreateReservationUseCase(databaseRepository);
export const deleteReservationUseCase = new DeleteReservationUseCase(databaseRepository);
export const findByUUIDReservationUseCase = new FindByUUIDReservationUseCase(databaseRepository);
export const updateReservationUseCase = new UpdateReservationUseCase(databaseRepository);



export const createReservationController = new CreateReservationController(createReservationUseCase);
export const deleteReservationController = new DeleteReservationController(deleteReservationUseCase);
export const findByUUIDReservationController = new FindByUUIDReservationController(findByUUIDReservationUseCase);
export const updateReservationController = new UpdateReservationController(updateReservationUseCase);

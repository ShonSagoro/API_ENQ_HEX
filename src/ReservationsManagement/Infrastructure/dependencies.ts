import { CreateReservationUseCase } from "../Application/UseCase/CreateReservationUseCase";
import { DeleteReservationUseCase } from "../Application/UseCase/DeleteReservationUseCase";
import { FindAllByUserUUIDUseCase } from "../Application/UseCase/FindAllByUserUUIDUseCase";
import { FindByUUIDReservationUseCase } from "../Application/UseCase/FindByUUIDReservationUseCase";
import { UpdateReservationUseCase } from "../Application/UseCase/UpdateReservationUseCase";
import { CreateReservationController } from "./Controllers/CreateReservationController";
import { DeleteReservationController } from "./Controllers/DeleteReservationController";
import { FindAllByUUIDUserReservationController } from "./Controllers/FindAllReservationController";
import FindByUUIDReservationController from "./Controllers/FindByUUIDReservationController";
import { UpdateReservationController } from "./Controllers/UpdateReservationController";
import { MongoDBReservationRepository } from "./Repositories/MongoReservationRepositoy";


export const database = new MongoDBReservationRepository
export const createReservationUseCase = new CreateReservationUseCase(database);
export const deleteReservationUseCase = new DeleteReservationUseCase(database);
export const findAllByUserUUIDUseCase = new FindAllByUserUUIDUseCase(database);
export const findByUUIDReservationUseCase = new FindByUUIDReservationUseCase(database);
export const updateReservationUseCase = new UpdateReservationUseCase(database);

export const createReservationController = new CreateReservationController(createReservationUseCase);
export const deleteReservationController = new DeleteReservationController(deleteReservationUseCase);
export const findAllByUUIDUserReservationController = new FindAllByUUIDUserReservationController(findAllByUserUUIDUseCase);
export const findByUUIDReservationController = new FindByUUIDReservationController(findByUUIDReservationUseCase);
export const updateReservationController = new UpdateReservationController(updateReservationUseCase);
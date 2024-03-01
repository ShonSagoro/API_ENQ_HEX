import { Request, Response } from "express";
import { FindAllByUserUUIDUseCase } from "../../Application/UseCase/FindAllByUserUUIDUseCase";

export class FindAllByUUIDUserReservationController {
    constructor(readonly findAllByUserUUIDUseCase: FindAllByUserUUIDUseCase) { }

    async execute(req: Request, res: Response) {
        const { uuid } = req.params;
        try {
            const result = await this.findAllByUserUUIDUseCase.execute(uuid);
            if (result){
                return res.status(200).json(result)
            }else{
                res.status(500).send({
                    status: "internal server error",
                    data: "Ha ocurrido un error con tu peticion, inténtelo más tarde.",
                });
            }
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ha ocurrido un error durante su petición.",
                msg: error,
            });
        }
    }
}
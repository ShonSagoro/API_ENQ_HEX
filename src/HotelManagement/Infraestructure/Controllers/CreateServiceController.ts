import { CreateServiceCase } from "../../Application/UseCase/CreateServiceCase";
import { Request, Response } from "express";
import { Service } from "../../Domain/Entities/Service";

export class CreateServiceController {
    constructor(readonly createServiceCase: CreateServiceCase) {}
    async excute(req: Request, res: Response) {
        const data = req.body;
        let serviceData = new Service(data.title, data.description);
        try {
            let service = await this.createServiceCase.excute(serviceData);
            if (service) {
                res.status(200).send({
                    status: "success",
                    data: {
                        id: service.uuid,
                        title: service.getTitle(),
                        description: service.getDescription(),
                    },
                });
            } else {
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
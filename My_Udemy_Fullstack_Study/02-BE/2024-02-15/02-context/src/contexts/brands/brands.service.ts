import { Request, Response } from "express";
import brandsModel from "./brands.model";

class BrandsService {
  async getBrands(req: Request, res: Response) {
    const brands = await brandsModel.findMany();

    req.user;

    // res.json(brands);
    res.json(`${req.user}유저임`);
  }

  async getBrand(req: Request, res: Response) {
    const brandId = Number(req.params.brandId);
    const brand = await brandsModel.findUnique(brandId);

    res.json(brand);
  }
}

const brandsService = new BrandsService();

export default brandsService;

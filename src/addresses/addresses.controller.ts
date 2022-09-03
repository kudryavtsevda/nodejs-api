import { Request, Response } from 'express';
import { Address } from './addresses.model';

export const createAddress =
  (createAddressDal: (address: Address) => Promise<Address>) => async (req: Request, res: Response) => {
    const addressDto: Address = req.body;
    const address = await createAddressDal(addressDto);
    return res.status(200).send(address);
  };

export const updateAddress =
  (updateAddressDal: (id: number, address: Address) => Promise<[count: number]>) =>
  async (req: Request, res: Response) => {
    const addressDto: Address = req.body;
    const id = Number(req.params.id);
    const count = await updateAddressDal(id, addressDto);
    return res.status(201).send(count);
  };

export const deleteAddress =
  (deleteAddressDal: (id: number) => Promise<number>) => async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const deleted = await deleteAddressDal(id);
    return res.status(204).send({ success: deleted });
  };

import { Router } from 'express';
import { createAddress, updateAddress, deleteAddress } from './addresses.controller';
import { Address } from './addresses.model';

export const addressRouter = (
  createAddressDal: (address: Address) => Promise<Address>,
  updateAddressDal: (id: number, address: Address) => Promise<[count: number]>,
  deleteAddressDal: (id: number) => Promise<number>,
) => {
  const router = Router();
  router.post('/addresses', createAddress(createAddressDal));
  router.put('/addresses/:id', updateAddress(updateAddressDal));
  router.delete('/addresses/:id', deleteAddress(deleteAddressDal));
  return router;
};

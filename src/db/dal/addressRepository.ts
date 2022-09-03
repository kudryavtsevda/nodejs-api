import Address from '../models/address';

export const createAddress = async (address: Partial<Address>) => {
  return await Address.create(map(address));
};

export const updateAddress = async (id: number, address: Partial<Address>) => {
  return await Address.update(map(address), { where: { id } });
};

export const deleteAddress = async (id: number) => {
  return await Address.destroy({ where: { id } });
};

const map = (address: Partial<Address>) => {
  return { userId: address.userId, line1: address.line1, name: address.name };
};

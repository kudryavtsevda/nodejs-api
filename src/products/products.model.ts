export interface Product {
  id: number;
  name: string;
  extras: Extra[];
  composition: string | null;
}

export interface Extra {
  name: string;
}

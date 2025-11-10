import { PartialType } from '@nestjs/mapped-types';

export enum Divisa {
  MXN = 'MXN',
  USD = 'USD',
  EUR = 'EUR',
}

// DTO base: crear
export class ProveedoresRepositoryDto {
  // IDs públicos de productos asociados (ManyToMany)
  productos: string[];

  // Nombre del proveedor
  nom_proveedor: string;

  // Precio del proveedor
  precio_proveedor: number;

  // Divisa en la que está expresado el precio
  currency: Divisa;

  // Estado del proveedor
  status: boolean;
}

// DTO para respuestas (GET)
export interface GetProveedoresRepositoryDto extends ProveedoresRepositoryDto {
  // UUID público (autogenerado)
  publicId: string;

  // Fechas de control (si tu BaseEntity las maneja)
  createdAt: Date;
  updatedAt: Date;
}

//Dto para actualizar provedores
export class UpdateProveedoresRepositoryDto extends PartialType(
  ProveedoresRepositoryDto,
) {}

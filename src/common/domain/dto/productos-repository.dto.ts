import { PartialType } from '@nestjs/mapped-types';

enum Divisa {
  MXN = 'MXN',
  USD = 'USD',
  EUR = 'EUR',
}
//Dto base para craear
export class ProductosRepositoryDto {
  //  indetificador del producto en la base de datos del cliente
  cod_art: string;

  // Id de los clientes
  cliente: string;

  // Id de los proveedores del porducto
  proveedores: string[];

  // Nombre del producto
  nombre: string;

  // Precio al que ofrecen al producto
  precio: number;

  // Tipo de divisa al que se vende del producto
  currency: Divisa;

  // Estado del producto si se vende o no
  status: boolean;
}

export interface GetProductosRepositoryDto extends ProductosRepositoryDto {
  // UUID publico
  publicId: string;
  // Fechas de control (si tu BaseEntity las maneja)
  createdAt: Date;
  updatedAt: Date;
}

//Dto para actualizar productos
export class UpdateProductosRepositoryDto extends PartialType(
  ProductosRepositoryDto,
) {}

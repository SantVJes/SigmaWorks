import { PartialType } from '@nestjs/mapped-types';

export class ClientesRepositoryDto {
  // Nombre del cliente
  nom_clie: string;

  // Telefono del clientes
  telefono: string;

  // Correo del cliente
  correo: string;

  // Pais del cliente
  pais: string;

  // Rfc del cliente
  rfc: string;

  // Numero de indetificacion fiscal
  idFiscal: string;

  // Status del cliente
  status: boolean;
}

export interface GetClientesRepositoryDto extends ClientesRepositoryDto {
  // UUID publico
  publicId: string;
  // Fechas de control (si tu BaseEntity las maneja)
  createdAt: Date;
  updatedAt: Date;
}

//Dto para actualizar clientes
export class UpdateProveedoresRepositoryDto extends PartialType(
  ClientesRepositoryDto,
) {}

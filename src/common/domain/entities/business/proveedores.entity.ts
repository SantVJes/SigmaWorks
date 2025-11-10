import { Entity, Column, ManyToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { BaseEntity, Productos } from '../entity-index';

enum Divisa {
  MXN = 'MXN',
  USD = 'USD',
  EUR = 'EUR',
}
@Entity('proveedores')
export class Proveedores extends BaseEntity {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Id público que se va a mostrar en frontend',
  })
  @Column({ type: 'uuid', unique: true, default: () => 'gen_random_uuid()' })
  publicId: string; // UUID público para frontend

  @ApiProperty({
    type: () => [Productos],
    description: 'Productos que ofrece este proveedor',
  })
  @ManyToMany(() => Productos, (producto) => producto.proveedores)
  productos: Productos[];

  @ApiProperty({
    example: 'DICER',
    description: 'nombre del proveedor ',
  })
  @Column({ name: 'nom_proveedor', type: 'text' })
  nom_proveedor: string;

  @ApiProperty({
    example: 129.99999,
    description: 'Precio unitario del producto con hasta dos decimales',
  })
  @Column({
    name: 'precio_proveedor',
    type: 'decimal',
    precision: 10,
    scale: 5,
    nullable: false,
  })
  @ApiProperty({
    example: 'MXN',
    description: 'Divisa en la que está expresado el precio (MXN o USD)',
    enum: Divisa,
  })
  precio_proveedor: number;
  @Column({
    name: 'currency',
    type: 'enum',
    enum: Divisa,
    default: Divisa.MXN,
  })
  currency: Divisa;
  @ApiProperty({
    example: true,
    description: 'El estado del proveedor si le compramos todavia o no',
  })
  @Column({ name: 'status', type: 'boolean', default: true })
  status: boolean;
}

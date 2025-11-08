import { Entity, Column, ManyToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { BaseEntity, Productos } from '../entity-index';

@Entity('proveedores')
export class Proveedores extends BaseEntity {
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
  precio_proveedor: number;

  @ApiProperty({
    example: true,
    description: 'El estado del proveedor si le compramos todavia o no',
  })
  @Column({ name: 'status', type: 'boolean', default: true })
  status: boolean;
}

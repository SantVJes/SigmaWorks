import { Column, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { BaseEntity, Clientes, Proveedores } from '../entity-index';

export enum Divisa {
  MXN = 'MXN',
  USD = 'USD',
  EUR = 'EUR',
}
export class Productos extends BaseEntity {
  @ApiProperty({
    example: 'RS0201052',
    description: 'Identificador del producto en la database del cliente',
  })
  @Column({ name: 'cod_art', type: 'varchar', unique: true })
  cod_art: string; //codijo del porducto en la database del cliente

  @ApiProperty({
    example: 1,
    description: 'ID del cliente que posee este cod_art del cliente',
  })
  @ManyToOne(() => Clientes)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Clientes;

  @ApiProperty({
    type: () => [Proveedores],
    description: 'Proveedores que distribuyen este producto',
  })
  @ManyToMany(() => Proveedores, (proveedor) => proveedor.productos)
  @JoinTable() // crear la tabla intermedia automáticamente
  proveedores: Proveedores[];

  @ApiProperty({
    example: 'ESPATULA TAPIZADORA 12" COD 14461 CLAVE ETA-12 TRUPER',
    description: 'El nombre del producto ',
  })
  @Column({ name: 'nombre', type: 'text' })
  nombre: string;

  @ApiProperty({
    example: 129.99999,
    description: 'Precio unitario del producto con hasta dos decimales',
  })
  @Column({
    name: 'precio',
    type: 'decimal',
    precision: 10,
    scale: 5,
    nullable: false,
  })
  precio: number;

  @ApiProperty({
    example: 'MXN',
    description: 'Divisa en la que está expresado el precio (MXN o USD)',
    enum: Divisa,
  })
  @Column({
    name: 'currency',
    type: 'enum',
    enum: Divisa,
    default: Divisa.MXN,
  })
  currency: Divisa;

  @ApiProperty({
    example: true,
    description: 'El estado del producto si lo seguimos vendiendo o no ',
  })
  @Column({ name: 'status', type: 'boolean', default: true })
  status: boolean;
}

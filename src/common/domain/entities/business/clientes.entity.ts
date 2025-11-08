import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { BaseEntity } from '../entity-index';


export class Clientes extends BaseEntity {
  @ApiProperty({
    example: 'AlPEZZI',
    description: 'Nombre del cliente ',
  })
  @Column({ name: 'name ', type: 'varchar', length: 100 })
  nom_clie: string;

  @ApiProperty({
    example: '+52 33 1234 5678',
    description: 'Telefono de contacto del cliente',
  })
  @Column({ name: 'telefono', type: 'varchar', length: 20, nullable: true })
  telefono: string;

  @ApiProperty({
    example: 'cliente@gmail.com',
    description: 'Correo electrónico de contacto del cliente',
  })
  @Column({ name: 'correo', type: 'varchar', length: 120, unique: true })
  correo: string;

  @ApiProperty({
    example: 'USA',
    description: 'Código ISO del país (ej. MEX, USA, ESP)',
  })
  @Column({ name: 'pais', type: 'varchar', length: 3 })
  pais: string;

  @ApiProperty({
    example: 'ABC123456T78',
    description: 'Registro Federal de Contribuyentes (RFC) del cliente',
  })
  @Column({ name: 'rfc', type: 'varchar', length: 13, unique: true })
  rfc: string;

  @ApiProperty({
    example: '84-1234567',
    description:
      'Número de identificación fiscal en el país de origen (NIF, VAT, EIN, etc.)',
    required: false,
  })
  @Column({ name: 'id_fiscal', type: 'varchar', length: 20, nullable: true })
  idFiscal: string | null;

  @ApiProperty({
    example: true,
    description: 'El estado del cliente si le seguimos vendiendo o no ',
  })
  @Column({ name: 'status', type: 'boolean', default: true })
  status: boolean;
}

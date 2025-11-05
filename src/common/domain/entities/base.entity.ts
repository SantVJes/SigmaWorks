import { PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';


export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'create_at', type: 'timestamptz' })
  createAt: Date;

  @CreateDateColumn({ name: 'update_at', type: 'timestamptz' })
  updateAt: Date;
}

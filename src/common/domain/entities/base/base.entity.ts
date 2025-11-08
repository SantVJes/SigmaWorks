import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'create_at', type: 'timestamptz' })
  createAt: Date;

  @UpdateDateColumn({ name: 'update_at', type: 'timestamptz' })
  updateAt: Date;
}

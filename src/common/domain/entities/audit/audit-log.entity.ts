import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';

import { AccessLog, BaseEntity } from '../entity-index';

@Entity('audit_log')
export class AuditLog extends BaseEntity {
  @ManyToOne(() => AccessLog)
  @JoinColumn({ name: 'access_log_id' })
  accessLog: AccessLog;

  @Column({ name: 'user_id', type: 'int', unsigned: true })
  userId: number;

  @Column({ name: 'action', type: 'varchar', length: 100, nullable: false })
  action: string;

  @Column({ name: 'entity', type: 'varchar', length: 100, nullable: false })
  entity: string;

  @Column({ name: 'entity_id', type: 'int', nullable: false })
  entityId: number;

  @Column({ name: 'timestamp', type: 'timestamptz', nullable: false })
  timestamp: Date;

  @Column({ name: 'ip_address', type: 'varchar', length: 45, nullable: true })
  ipAddress: string;

  @Column({ name: 'old_values', type: 'jsonb', nullable: true })
  oldValues: Record<string, any>;

  @Column({ name: 'new_values', type: 'jsonb', nullable: true })
  newValues: Record<string, any>;
}

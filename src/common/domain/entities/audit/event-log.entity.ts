import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../entity-index';

@Entity('event_log')
export class EventLog extends BaseEntity {
  @Column({ name: 'event_type', type: 'varchar', length: 100, nullable: false })
  eventType: string;

  @Column({ name: 'description', type: 'text', nullable: false })
  description: string;

  @Column({
    name: 'triggered_by',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  triggered_by: string;

  @Column({ name: 'timestamp', type: 'timestamptz', nullable: false })
  timestamp: Date;
  @Column({ name: 'metadata', type: 'jsonb', nullable: true })
  metadata: Record<string, any> | null;
}

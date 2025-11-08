import { Entity, Column } from 'typeorm';

import { BaseEntity } from '../entity-index';

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}
@Entity('access_log')
export class AccessLog extends BaseEntity {
  @Column({ name: 'user_id', type: 'int' })
  userId: number;

  @Column({ name: 'timestamp', type: 'timestamptz', nullable: false })
  timestamp: Date;

  @Column({ name: 'endpoint', type: 'varchar', length: 255, nullable: false })
  endpoint: string;

  @Column({ name: 'method', type: 'enum', enum: HttpMethod, nullable: false })
  method: HttpMethod;

  @Column({ name: 'status_code', type: 'int', nullable: false })
  statusCode: number;

  @Column({ name: 'ip_address', type: 'varchar', length: 45, nullable: false })
  ipAddress: string;

  @Column({ name: 'user_agent', type: 'varchar', length: 255, nullable: false })
  userAgent: string;

  @Column({ name: 'response_time', type: 'int', nullable: false })
  responseTime: number;

  @Column({ name: 'metadata', type: 'jsonb', nullable: true })
  metadata: Record<string, any> | null;
}

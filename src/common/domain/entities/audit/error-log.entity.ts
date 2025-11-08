import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import { BaseEntity, AccessLog, EventLog } from '../entity-index';

enum LogLevel {
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  CRITICAL = 'CRITICAL',
}
enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}
@Entity('error_log')
export class ErrorLog extends BaseEntity {
  @ManyToOne(() => AccessLog)
  @JoinColumn({ name: 'access_log_id' })
  accessLog: AccessLog;

  @ManyToOne(() => EventLog)
  @JoinColumn({ name: 'event_log_id' })
  eventLog: EventLog;

  @Column({ name: 'timestamp', type: 'timestamptz', nullable: false })
  timestamp: Date;

  @Column({
    name: 'level_error',
    type: 'enum',
    enum: LogLevel,
    nullable: false,
  })
  level: LogLevel;

  @Column({ name: 'message', type: 'text', nullable: false })
  message: string;

  @Column({ name: 'stack_trace', type: 'text', nullable: true })
  stackTrace: string;

  @Column({ name: 'endpoint', type: 'varchar', length: 255, nullable: false })
  endpoint: string;

  @Column({ name: 'method', type: 'enum', enum: HttpMethod, nullable: false })
  method: HttpMethod;

  @Column({ name: 'status_code', type: 'int', nullable: false })
  estatusCode: number;

  @Column({ name: 'ip_address', type: 'varchar', length: 45, nullable: true })
  ipAddress: string;
}

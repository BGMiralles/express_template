import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Appointment } from "./Appointment";


@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column()
  phone_number!: number;

  @Column()
  password!: string;

  @Column()
  role!: string;

  @Column()
  is_active!: boolean;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;

  @OneToMany(() => Appointment, appointment => appointment.user)
  appointments!: Appointment[];
}

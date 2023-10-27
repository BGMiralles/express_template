import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Appointment } from "./Appointment";

@Entity("tattoos")
export class Tattoo extends BaseEntity{
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  tatto!: string;

  @Column()
  description!: string;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;

  @OneToMany(() => Appointment, appointment => appointment.user)
  appointments!: Appointment[];
}

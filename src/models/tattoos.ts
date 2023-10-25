import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}

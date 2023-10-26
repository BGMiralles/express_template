import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User";


@Entity("appointments")
export class Appointment extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column()
    user_id!: number;
  
    @Column()
    tattoo_artist_id!: number;
  
    // @Column()
    // tattoo_id!: number;
  
    @Column()
    date!: Date;
  
    @Column()
    status!: string;
  
    @Column()
    created_at!: Date;
  
    @Column()
    updated_at!: Date;
  
    @ManyToOne(() => User, user => user.appointments)
    @JoinColumn({ name: "user_id"})
    user!: User;
  }

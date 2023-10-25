import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("tattoo_artists")
export class Tattoo_artist extends BaseEntity{
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  role!: string;
  
  @Column()
  created_at!: Date
  
  @Column()
  updated_at!: Date
}

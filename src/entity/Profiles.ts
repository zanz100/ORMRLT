import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { SharedProp } from './sharedProp';

@Entity()
export class Profile extends SharedProp {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    gender: string

    @Column()
    photo: string
}
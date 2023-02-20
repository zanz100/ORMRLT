import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { SharedProp } from './sharedProp';
import { Profile } from "./Profiles";

@Entity()
export class Users extends SharedProp {

    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'first_Name', nullable: false})
    firstName: string

    @Column({ name: 'last_Name', nullable: false })
    lastName: string

    @Column({name: 'age_Now', nullable: false})
    age: number

    @Column({name: 'user_Email',  unique: true})
    email: string

    @Column({ name: 'is_Active', nullable: false })
    isActive: boolean

    @Column({ name: 'birth_Date',type: 'date', nullable: false })
    bod: Date

    @Column({nullable: false })
    password: string

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile

}



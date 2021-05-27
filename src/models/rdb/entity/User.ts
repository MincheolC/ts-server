import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    firstName: string;

    @Column({ length: 50 })
    lastName: string;

    @Column({ unique: true })
    phone: string

    @Column()
    isActive: boolean;

}
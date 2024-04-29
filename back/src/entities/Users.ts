import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Credentials } from "./Credentials";
import { Appointments } from "./Appointments";

@Entity({
  name: "users",
})
//* Inicializaoms la entidad con el decorador entity, indicandole que su nombre sera "users".
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 25,
  })
  name: string;

  @Column({
    length: 35,
  })
  email: string;

  @Column({
    length: 30,
  })
  birthdate: string;

  @Column()
  nDni: number;

  @OneToOne(() => Credentials, (credential) => credential.user)
  @JoinColumn()
  credentials: Credentials;

  @OneToMany(() => Appointments, (appointment) => appointment.user)
  UserAppointments: Appointments[];
}

//* Decimos que cada valor ira en una columna distinta, y a los strings les asignamos el valor de caracteres máximo dependiendo para que serán, y al id le indicamos que sera el valor especial de sql reservado a los ids que los hace autoincrementales y auto asignados.

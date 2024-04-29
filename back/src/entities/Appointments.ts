import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";

@Entity({
  name: "appointments",
})
//* Creamos una nueva entidad que llamamos appointments para los turnos.
export class Appointments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 15,
  })
  date: string;

  @Column({
    length: 15,
  })
  time: string;

  @Column({
    length: 10,
  })
  status: string;

  @ManyToOne(() => Users, (user) => user.UserAppointments)
  user: Users;
}

//* Le asignamos todos los valores que debe tener dentro la entidad, osea sus propiedades y a algunas les ponemos indicaciones, cómo que solo puede tener 10 carácteres máximo.

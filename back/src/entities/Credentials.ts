import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";

@Entity({
  name: "credentials",
})
//* Creamos una nueva entidadd con el nombre de "credentials".
export class Credentials {
  @PrimaryGeneratedColumn()
  id: number;
  //* Asignamos id como una propiedad especial de postgres autoasignada y autoincremental.

  @Column({
    length: 30,
  })
  username: string;

  @Column()
  password: string;

  @OneToOne(() => Users, (user) => user.credentials)
  user: Users;
}

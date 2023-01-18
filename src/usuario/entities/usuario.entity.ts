import { IsEmail, IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TweetEntity } from './tweet.entity';
@Entity({ name: 'usuario' })
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  @IsNotEmpty({ message: 'Favor informar o nome' })
  nome: string;

  @Column()
  @IsEmail({}, { message: 'Favor informar email válido' })
  @IsNotEmpty({ message: 'Favor informar email' })
  email: string;

  @Column()
  foto_url: string;

  @OneToMany(() => TweetEntity, (tweet) => tweet.usuario)
  tweets: TweetEntity[];
}

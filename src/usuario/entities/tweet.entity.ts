import { UsuarioEntity } from './usuario.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'tweet' })
export class TweetEntity {
  @PrimaryGeneratedColumn()
id_tweet: number;

  @Column()
  texto: string;

  @Column()
  data: string;

  @JoinColumn({name:'id_usuario'})
  @ManyToOne(() => UsuarioEntity, (usuario) => usuario.tweets)
  usuario: UsuarioEntity;
}
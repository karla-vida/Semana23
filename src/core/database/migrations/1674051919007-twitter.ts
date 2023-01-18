import { MigrationInterface, QueryRunner } from "typeorm";

export class twitter1674051919007 implements MigrationInterface {
    name = 'twitter1674051919007'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tweet" ("id_tweet" SERIAL NOT NULL, "texto" character varying NOT NULL, "data" character varying NOT NULL, "id_usuario" integer, CONSTRAINT "PK_9986c9ed983d1c4806def4fd376" PRIMARY KEY ("id_tweet"))`);
        await queryRunner.query(`CREATE TABLE "usuario" ("id_usuario" SERIAL NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "foto_url" character varying NOT NULL, CONSTRAINT "PK_dd52716c2652e0e23c15530c695" PRIMARY KEY ("id_usuario"))`);
        await queryRunner.query(`ALTER TABLE "tweet" ADD CONSTRAINT "FK_6ba0dd8b7d43e8411251cca5024" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tweet" DROP CONSTRAINT "FK_6ba0dd8b7d43e8411251cca5024"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
        await queryRunner.query(`DROP TABLE "tweet"`);
    }

}

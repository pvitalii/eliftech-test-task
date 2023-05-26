import { MigrationInterface, QueryRunner } from 'typeorm';

export class FillShop1685060210007 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "shop"("name") 
        VALUES 
            ('McDonny'), 
            ('CFC'), 
            ('BurgerQueen');
        `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM "shop"');
  }
}

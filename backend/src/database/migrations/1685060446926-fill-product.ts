import { MigrationInterface, QueryRunner } from 'typeorm';

export class FillProduct1685060446926 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO 
            "product"("name", "image", "price", "shopId") 
        VALUES 
            ('Hamburger', 'mc-donny_hamburger.jpg', 2, 1), 
            ('Cheeseburger', 'mc-cheeseburger.jpg', 3, 1), 
            ('Double Cheeseburger', 'mc-donny_double-cheeseburger.jpg', 4, 1),
            ('Big Mac', 'mc-donny_big-mac.jpg', 5, 1),
            ('Big Tasty', 'mc-donny_big-tasty.jpg', 6, 1);
        `
    );

    await queryRunner.query(
      `INSERT INTO 
            "product"("name", "image", "price", "shopId") 
        VALUES 
            ('Hot Wings x5', 'cfc_hot-wings.png', 4, 2), 
            ('Chicken Tenders x6', 'cfc_tenders.jpg', 7, 2), 
            ('Nuggets x9', 'cfc_nuggets.png', 6, 2),
            ('Strawberry Lemonade 0.5L', 'cfc_lemonade.png', 4, 2),
            ('Large Potato Wedges', 'cfc_potato.jpg', 4, 2);
        `
    );

    await queryRunner.query(
      `INSERT INTO 
            "product"("name", "image", "price", "shopId") 
        VALUES 
            ('Whopper', 'bq_whopper.jpg', 5, 3), 
            ('Soft Drink 0.5L', 'bq_soft-drink.jpg', 2, 3), 
            ('Medium Onion Rings', 'bq_onion.jpg', 2, 3),
            ('Salad', 'bq_salad.jpg', 2, 3),
            ('Apple Pie', 'bq_pie.jpg', 1, 3);
    `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM "product"');
  }
}

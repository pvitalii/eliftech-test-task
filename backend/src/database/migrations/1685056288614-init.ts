import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1685056288614 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "shop" (
                id serial PRIMARY KEY,
                name varchar(255)
        )`
    );

    await queryRunner.query(
      `CREATE TABLE "product" (
                id serial PRIMARY KEY,
                name varchar(255),
                image varchar(255),
                price integer,
                "shopId" int REFERENCES shop
        )`
    );

    await queryRunner.query(
      `CREATE TABLE "cart" (
                id serial PRIMARY KEY
        )`
    );

    await queryRunner.query(
      `CREATE TABLE "order" (
                id serial PRIMARY KEY,
                name varchar(255),
                email varchar(255),
                phone varchar(255),
                address varchar(255),
                "totalPrice" integer
        )`
    );

    await queryRunner.query(
      `CREATE TABLE "order_item" (
            id serial PRIMARY KEY,
            count int,
            "productId" int REFERENCES product,
            "orderId" int REFERENCES "order"
        )`
    );

    await queryRunner.query(
      `CREATE TABLE "cart_item" (
            id serial PRIMARY KEY,
            count int,
            "productId" int REFERENCES product,
            "cartId" int REFERENCES cart
        )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "shop"');
    await queryRunner.query('DROP TABLE "product"');
    await queryRunner.query('DROP TABLE "cart"');
    await queryRunner.query('DROP TABLE "cart_item"');
    await queryRunner.query('DROP TABLE "order"');
    await queryRunner.query('DROP TABLE "order_item"');
  }
}

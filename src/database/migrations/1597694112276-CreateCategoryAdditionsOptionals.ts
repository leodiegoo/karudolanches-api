import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateCategoryAdditionsOptionals1597694112276
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'category_addition_optionals',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'category_addition_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'price',
            type: 'decimal(10, 2)',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'blocked',
            type: 'boolean',
            default: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'category_addition_optionals',
      new TableForeignKey({
        name: 'CategoryAdditionOptionalCategoryAddition',
        columnNames: ['category_addition_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'category_additions',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'category_addition_optionals',
      'CategoryAdditionOptionalCategoryAddition',
    );
    await queryRunner.dropTable('category_addition_optionals');
  }
}

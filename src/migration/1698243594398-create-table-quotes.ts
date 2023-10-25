import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableQuotes1698243594398 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "quotes",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "user_id",
            type: "varchar",
            length: "50",
          },
          {
            name: "tattoo_artist_id",
            type: "varchar",
            length: "50",
          },
          {
            name: "tattoo_id",
            type: "varchar",
            length: "50",
          },
          {
            name: "date",
            type: "varchar",
            length: "50",
          },
          {
            name: "status",
            type: "enum",
            enum: ["pending", "accomplish"],
            default: '"pending"',
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("quotes");
  }
}

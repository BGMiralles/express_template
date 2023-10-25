import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTasksTable1698146272912 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(
                new Table({
                    name: "tattoo_artists",
                    columns: [
                        {
                            name: "id",
                            type: "int",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: "increment",
                        },
                        {
                            name: "name",
                            type: "varchar",
                            length: "50", 
                        },
                        {
                            name: "role",
                            type: "enum",
                            enum: ["user", "admin", "super_admin"],
                            default: '"admin"'
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
                            onUpdate: "CURRENT_TIMESTAMP"                 
                        },
                    ]
                }),
                true
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tattoo_artists");
    }

}

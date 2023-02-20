import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/User"
import { UserEntity, Profile } from "./entity/app"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "ELYDEV",
    database: "ORM_pg",
    synchronize: true,
    logging: true,
    entities: [UserEntity, Profile],
    migrations: [],
    subscribers: [],
})

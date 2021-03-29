module.exports = {
  "type": "postgres",
  "host": "ec2-23-21-229-200.compute-1.amazonaws.com",
  "port": 5432,
  "username": "erzooyoykayliw",
  "password": "a18ad2457027d144f4398272c1424e85ca6dabedf3f5422284a7654e756ea551",
  "database": "dccrjuv652n8vd",
  "migrations": ["dist/migration/*{.ts,.js}"],
  "ssl": {
    "rejectUnauthorized": false
  },
  "synchronize": false,
  "migrationsTableName": "migration_table",
  "cli": { "migrationsDir": "src/migration" },
  "entities": ["dist/**/*.entity{.ts,.js}"],
  // "entities": ["./src/entity/*.ts"]
}

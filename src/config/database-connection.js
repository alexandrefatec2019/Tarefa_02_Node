import Sequelize from "sequelize";

class DatabaseConnection {
  constructor() {
    if (!DatabaseConnection._instance) {
      DatabaseConnection._instance = this;
      DatabaseConnection._connection = null;
    }
    return DatabaseConnection._instance;
  }

  connect() {
    return this._connection();
  }

  _connection() {
    if (DatabaseConnection._connection) {
      return DatabaseConnection._connection;
    }
    const sequelize = new Sequelize(
      "postgres://fggqoxgi:GKvMjvU-n0RQ-FV1Y_cmZUyhhEeZOgsR@hansken.db.elephantsql.com/fggqoxgi",
    );
    DatabaseConnection._connection = sequelize;
    return sequelize;
  }
}

const databaseConnection = new DatabaseConnection();

export default databaseConnection.connect();

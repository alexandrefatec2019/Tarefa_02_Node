import * as bcrypt from "bcrypt";
import { ErrorCustom } from "../../errors/error-custom.js";

class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async getAll() {
    return await this.userModel.findAll();
  }
  
  async findById(id) {
    return await this.userModel.findByPk(id)
  }

  async update(id, nome, email, password) {
    return await this.userModel.update({ nome, email, password }, { where: { id } })
  }

  async delete(id) {
    return await this.userModel.destroy({ where: { id } })
  }

  async create({ name, password, email }) {
    const SALT_ROUND = 10;
    const pwd = await bcrypt.hash(password, SALT_ROUND);
    const { count } = await this.userModel.findfAndCountAll({
      where: {
        email,
      },
    });
    if (count) {
      throw new ErrorCustom({
        status: 400,
        error: 'e-mail inválido'
      });
    }
    return this.userModel.create({ name, email, password: pwd });
  }
}

export { UserService };

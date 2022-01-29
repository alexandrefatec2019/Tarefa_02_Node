class UpdateUserController {
    constructor(userService) {
      this.userService = userService;
    }
  
    /**
     * Execute
     * @param {*} req
     * @param {*} resp
     * @returns
     */
    async execute(req, resp) {
      const { body } = req;
      const { id, name, email, password } = body;
      const user = await this.userService.update({ id, name, email, password });
      return resp.status(201).send(user);
    }
  }
  
  export { UpdateUserController };
  
class GetUserController {
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
      const user = await this.userService.GetAll();
      return resp.status(200).send(user);
    }
  }
  
  export { GetUserController };
  
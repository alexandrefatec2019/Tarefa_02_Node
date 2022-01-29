class DeleteUserController {
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
        const { id } = body;
        const user = await this.userService.delete({ id });
        return resp.status(201).send(user);
    }
}

export { DeleteUserController };

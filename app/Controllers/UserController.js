const UserRepository=require("../Repository/UserRepositorty.js")
const Db =  require("../../bootstrap/Db.js")

module.exports = class UserController {

  constructor(req, res) {
    this.db = new Db();
    this.req = req
    this.res = res
}
   async getAll() {
        const users = new UserRepository(this.req, this.res);
       const results = await users.all();
       return results;
   }
   async get(id) {
    const users = new UserRepository(this.req, this.res);
   const results = await users.get(id);
   return results;
}
   async post(name, email, password){
    const users = new UserRepository(this.req, this.res);
    const results = await users.create(name, email, password);
    return results;
   }
   async update(id, name, email, password){
    const users = new UserRepository(this.req, this.res);
    const results = await users.update(id, name, email, password);
    return results;
   }
   async delete(id){
    const users = new UserRepository(this.req, this.res);
    const results = await users.delete(id);
    return results;
   }
}

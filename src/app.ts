import { tables } from "./database/tables";

class main {
    private _tables;
    private _userTable;

    constructor() {
        this._tables = new tables;
        this._userTable = this._tables.userTable;
    }

    public callMain() {
        return [this._userTable()]
    }
}

const init = new main;
init.callMain()

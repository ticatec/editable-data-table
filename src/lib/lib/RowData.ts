import {utils} from "@ticatec/enhanced-utils";
import type BaseValidator from "@ticatec/web-bean-validator/lib/BaseValidator";
import beanValidator from "@ticatec/web-bean-validator";
import tableUtils from "../lib/TableUtils";

export default class RowData {
    id: any;
    data: any;
    errors: any= {};
    private _hasErrors: boolean = false;

    constructor(data: any) {
        this.data = utils.clone(data);
        this.id = tableUtils.genId()
    }

    validate(rules: Array<BaseValidator>) {
        let result = beanValidator.validate(this.data, rules);
        if (result.valid) {
            this.errors = {};
            this._hasErrors = false;
        } else {
            this.errors = result.errors;
            this._hasErrors = true;
        }
    }

    get hasErrors() {
        return this._hasErrors;
    }

}
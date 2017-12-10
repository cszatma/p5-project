// @flow

class Enum {
    static create(cases: string[]) {
        return Object.freeze(Object.assign.apply({}, cases.map(c => ({ [c]: Symbol(c) }))));
    }
}

export default Enum;
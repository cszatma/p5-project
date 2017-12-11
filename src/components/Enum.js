// @flow

class Enum {
    static create(cases: string[]) {
        // $FlowIgnore
        return Object.freeze(Object.assign.apply({}, cases.map(c => ({ [c]: Symbol(c) }))));
    }
}

export default Enum;
export class Lib {
    constructor (
        lib:string,
        version?:string
    ) {}
}

export class Site {
    constructor (
        url:string,
        title:string,
        owner:string,
        description:string,
        date:Date,
        serverLibs:Lib[],
        clientLibs:Lib[],
        styleLibs:Lib[]
    ) {}
}
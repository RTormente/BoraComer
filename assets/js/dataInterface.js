export class dataInterface {

    #_db;

    constructor (db) {   
        this.db = db;
    };

    get db() {
        return this.#_db;
    };

    set db(db) {
        if ( this.validateDB(db) )
            this.#_db = db;
    };

    validateDB(db) {
        throw this.error("validateData() implements required");
    };

    connect () {
        throw this.error("connect() implements required");
    };

    disconnect () {
        throw this.error("disconnect() implements required");
    };

    async consult (terms, filter = undefined, short = undefined, limit = undefined, page = undefined) {
        let consultTerms;

        try {
            this.isValidConsultTerms(terms);
            consultTerms = this.standardizationConsultTerms(terms);
            console.log(consultTerms);

            /*this.connect();*/
        }
        catch (e) {
            throw e;
        };



        try {
            /*this.disconnect();*/
        }
        catch (e) {
            throw e;
        };
    };

    isValidConsultTerms (terms) {
        if (
            !terms || terms == "" || terms == " " ||
            Array.isArray(terms) && !terms.length ||
            typeof terms === 'object' && Object.keys(terms).length === 0
        )
            throw this.error("Query terms are mandatory");
        
        return true;
    };

    standardizationConsultTerms (terms) {
        const regex = /[^A-Za-z0-9-_,]+/g;
        let termsInLine = terms;

        if ( Array.isArray(termsInLine) ) {
            termsInLine = terms;
        } else if ( typeof terms === 'object' ) {
            termsInLine = terms;
        }

        return termsInLine.replace(regex, "");
    };

    add () {
        throw this.error("add() implements required");
    };

    del () {
        throw this.error("del() implements required");
    };

    edit () {
        throw this.error("edit() implements required");
    };

    log () {
        throw this.error("log() implements required");
    };

    error (err) {
        const error = new Error(err);
        error.name = "Data_Error";
        return error;
    };

}


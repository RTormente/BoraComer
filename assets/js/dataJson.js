import { dataInterface } from "./dataInterface.js";

/*******  CLASS TO FUTURE USE  *******/
export class dataJson extends dataInterface {

    validateDB(db) {
        return true
    }
    

}


/*******  FUNCTIONS TO FUTURE ADAPTATION  *******/
export async function getJson (path) {
    let result = [];

    await fetch(path)
        .then((response) => {
            if (!response.ok) throw new Error('Network response error.');

            return response.json();
        })
        .then((data) => {
            data.map((item) => {
                return result.push(item);
            });
        })
        .catch(err => {
            console.log('Error json: ', err.message);
        });

    return result;

}
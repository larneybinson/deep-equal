/**
 * The method to pick deep
 * @param {object} obj The objecty
 * @param {object} structure The structure
 */
 const pickDeep = (obj, structure) => {
    if (typeof obj == "undefined" || obj == null) {
        return null;
    }
    let returnItem = null;
    if (Array.isArray(structure)) {
        returnItem = [];
        let innerStructure = structure[0];
        for (let innerObj of obj) {
            let newItem = {};
            returnItem.push(newItem);
            Object.keys(innerStructure).forEach((key) => {
                if (innerStructure[key] == null) {
                    newItem[key] = innerObj[key];
                    return;
                }
                newItem[key] = pickDeep(innerObj[key], innerStructure[key]);
            });
        }
    } else {
        returnItem = {};
        Object.keys(structure).forEach(key => {
            if (structure[key] == null) {
                returnItem[key] = obj[key];
                return;
            }
            returnItem[key] = pickDeep(obj[key], structure[key]);
        });
    }

    return returnItem;
}

module.exports = {
    pickDeep
}
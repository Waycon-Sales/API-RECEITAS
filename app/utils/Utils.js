const Utils = {
    naoNulo(value) {
        return value != '' && value != undefined && value != null ? true : false; 
    },
};
    
module.exports = Utils;
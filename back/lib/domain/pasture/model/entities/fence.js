const { uuid } = require('uuidv4');
class Fence{
    constructor(length){
        this.id = uuid();
        this.length = length;
    }

    enlarge(length){
        this.length = length
    }
} 
module.exports = Fence;
class Block {

    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;

    }
    toString() {
        return ` Block -
            TimeStamp:  ${this.timestamp}
            Last Hash:  ${this.lastHash}
            Hash:       ${this.hash}
            Data:       ${this.data} `;      
        
    }

    static genesis(){
        return new this("Genesis time", "-------", "f1hkx1", ["data1","data2"]);  
    
    }

    static mineBlock(lastBlock,ownData){
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = "to do Hash";

        return new this(timestamp, lastHash, hash, ownData); 



    }




}



module.exports = Block; 
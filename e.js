class PhepTinh {
    constructor(soA, soB, tenPhepTinh) {
        if(typeof soA !== 'number') throw new Error('Type error!');
        this.soA = soA;
        this.soB = soB;
        this.tenPhepTinh = tenPhepTinh;
    }

    getResult() {
        switch (this.tenPhepTinh) {
            case 'CONG': return +this.soA + +this.soB;
            case 'TRU': return this.soA - this.soB;
            case 'NHAN': return this.soA * this.soB;
            default: return this.soA / this.soB;
        }
    }
}

const a = new PhepTinh('s', 10, 'CONG');
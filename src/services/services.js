export default class Service {
    _product = [
        {id: 1, name: "ttttttttttttt ",sum: "8492", material: "металл."},
        {id: 2, name: "ttttttttttttt ",sum: "8492", material: "металл и пластик и дерево."},
        {id: 3, name: "ttttttttttttt ",sum: "8492", material: "металл и пластик и дерево."},
        {id: 4, name: "ttttttttttttt ",sum: "8492", material: "металл и пластик и дерево."},
    ];
    _block = [
        {id: 1, name: "rywerywrey ",sum: "8492", description: "металл.", type:"windows-1", price: "5235"},
        {id: 2, name: "rywerywrey ",sum: "8492", description: "металл.", type:"windows-1", price: "5235" },
        {id: 3, name: "rywerywrey ",sum: "8492", description: "металл.", type:"windows-1", price: "5235"},
        {id: 4, name: "rywerywrey ",sum: "8492", description: "металл.", type:"windows-1", price: "5235"},
        {id: 5, name: "2222rywerywrey ",sum: "8492", description: "металл.", type:"windows-2", price: "5235"},
        {id: 6, name: "2222rywerywrey ",sum: "8492", description: "металл.", type:"windows-2", price: "5235"},
        {id: 7, name: "2222rywerywrey ",sum: "8492", description: "металл.", type:"windows-2", price: "5235"},
        {id: 8, name: "2222rywerywrey ",sum: "8492", description: "металл.", type:"windows-2", price: "5235"},
        {id: 9, name: "2222rywerywrey ",sum: "8492", description: "металл.", type:"windows-2", price: "5235"},
        {id: 10, name: "rywerywrey ",sum: "8492", description: "металл.", type:"windows-3", price: "5235"},
        {id: 11, name: "rywerywrey ",sum: "8492", description: "металл.", type:"windows-3", price: "5235"},
        {id: 12, name: "rywerywrey ",sum: "8492", description: "металл.", type:"windows-3", price: "5235"},
        {id: 13, name: "rywerywrey ",sum: "8492", description: "металл.", type:"windows-3", price: "5235"},
        {id: 14, name: "rywerywrey ",sum: "8492", description: "металл.", type:"windows-3", price: "5235"},
        {id: 15, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"input-doors-1", price: "5235"},
        {id: 16, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"input-doors-1", price: "5235"},
        {id: 17, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"input-doors-1", price: "5235"},
        {id: 18, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"input-doors-2", price: "5235"},
        {id: 19, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"input-doors-2", price: "5235"},
        {id: 20, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"input-doors-2", price: "5235"},
        {id: 21, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"input-doors-2", price: "5235"},
        {id: 22, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"input-doors-3", price: "5235"},
        {id: 23, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"input-doors-3", price: "5235"},
        {id: 24, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"input-doors-3", price: "5235"},
        {id: 25, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"input-doors-3", price: "5235"},
        {id: 26, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"interior-doors-1", price: "5235"},
        {id: 27, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"interior-doors-1", price: "5235"},
        {id: 28, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"interior-doors-1", price: "5235"},
        {id: 29, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"interior-doors-2", price: "5235"},
        {id: 30, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"interior-doors-2", price: "5235"},
        {id: 31, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"interior-doors-2", price: "5235"},
        {id: 32, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"interior-doors-3", price: "5235"},
        {id: 33, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"interior-doors-3", price: "5235"},
        {id: 34, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"interior-doors-3", price: "5235"},
        {id: 35, name: "r333ywerywrey ",sum: "8492", description: "металл.", type:"interior-doors-3", price: "5235"},
]
    getProduct = async () => {
        return this._product;
    };
   
    getBlock = async () => {
        return this._block;
    }

    getInfoById = async (id) => {
        return this._block.filter( (item) => item.id == id);
    };
}

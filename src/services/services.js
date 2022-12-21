export default class Service {
    _product = [
        {id: 1, name: "Двери люкс ",sum: "8492", material: "металл."},
        {id: 2, name: "Двери люкс ",sum: "8492", material: "металл и пластик и дерево."},
        {id: 3, name: "Двери люкс ",sum: "8492", material: "металл и пластик и дерево."},
        {id: 4, name: "Двери люкс ",sum: "8492", material: "металл и пластик и дерево."},




    ];
    getProduct = async () => {
        return this._product;
    };
}
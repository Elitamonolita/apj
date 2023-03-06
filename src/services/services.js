import a1 from "../product-image/1.png"
import a2 from "../product-image/2.png"
import a3 from "../product-image/3.png"
import a4 from "../product-image/4.png"
import a5 from "../product-image/5.jpg"
import a6 from "../product-image/6.png"
import a7 from "../product-image/7.png"
import a8 from "../product-image/8.png"
import a9 from "../product-image/9.png"
import a10 from "../product-image/10.png"
import a11 from "../product-image/11.png"
import a12 from "../product-image/12.png"
import a13 from "../product-image/13.png"
import a14 from "../product-image/14.png"
import a15 from "../product-image/15.png"

export default class Service {
    _product = [
        {id: 1, name: "ttttttttttttt ",sum: "8492", material: "металл."},
        {id: 2, name: "ttttttttttttt ",sum: "8492", material: "металл и пластик и дерево."},
        {id: 3, name: "ttttttttttttt ",sum: "8492", material: "металл и пластик и дерево."},
        {id: 4, name: "ttttttttttttt ",sum: "8492", material: "металл и пластик и дерево."},
    ];
    _block = [
        {id: 1, name: "Проверка наименования",sum: "8492", type:"windows-1", price: "6653235",descriptionFull:"Проверка полного описания для меню", pictures: "" },
        {id: 2, name: "Проверка наименования",sum: "8492", type:"windows-2", price: "43235",descriptionFull:"Проверка полного описания для меню", pictures: "" },
        {id: 3, name: "Проверка наименования",sum: "8492", type:"windows-3", price: "4322354",descriptionFull:"Проверка полного описания для меню", pictures: "" },
        {id: 4, name: "Проверка наименования",sum: "8492", type:"input-doors-1", price: "2535",descriptionFull:"Проверка полного описания для меню", pictures: "" },
        {id: 5, name: "Проверка наименования",sum: "8492", type:"input-doors-2", price: "1352335",descriptionFull:"Проверка полного описания для меню", pictures: "" },
        {id: 6, name: "Проверка наименования",sum: "8492", type:"input-doors-3", price: "12512235",descriptionFull:"Проверка полного описания для меню", pictures: "" },
        {id: 7, name: "Проверка наименования",sum: "8492", type:"interior-doors-1", price: "52235",descriptionFull:"Проверка полного описания для меню", pictures: "" },
        {id: 8, name: "Проверка наименования",sum: "8492", type:"interior-doors-2", price: "525535",descriptionFull:"Проверка полного описания для меню", pictures: "" },
        {id: 9, name: "Проверка наименования",sum: "8492", type:"interior-doors-3", price: "5235435",descriptionFull:"Проверка полного описания для меню", pictures: "" },
        {id: 10, name: "Проверка наименования",sum: "8492", type:"interior-doors-3", price: "5235435",descriptionFull:"Проверка полного описания для меню", pictures: "" },
        {id: 11, name: "Проверка наименования",sum: "8492", type:"interior-doors-3", price: "5235435",descriptionFull:"Проверка полного описания для меню", pictures: "" },
        {id: 12, name: "Проверка наименования",sum: "8492", type:"interior-doors-3", price: "5235435",descriptionFull:"Проверка полного описания для меню", pictures: "" },
        {id: 13, name: "Проверка наименования",sum: "8492", type:"interior-doors-3", price: "5235435",descriptionFull:"Проверка полного описания для меню", pictures: "" },
        {id: 14, name: "Проверка наименования",sum: "8492", type:"interior-doors-3", price: "5235435",descriptionFull:"Проверка полного описания для меню", pictures: "" },
        {id: 15, name: "Проверка наименования",sum: "8492", type:"interior-doors-3", price: "5235435",descriptionFull:"Проверка полного описания для меню", pictures: "" },

]
    getProduct = async () => {
        return this._product;
    };
   
    getBlock = async () => {
        return this._block.map((item) => {
            item.pictures = this.getImageById(item.id)
            return item
        });
    }

    getInfoById = async (id) => {
        return this._block
            .filter( (item) => item.id == id)
          ;
    };

    getImageById = (id) => {
        if (id==1){
        return (a1);
    }if (id==2){
        return (a2);
    }if (id==3){
        return (a3);
    }if (id==4){
        return (a4);
    }if (id==5){
        return (a5);
    }if (id==6){
        return (a6);
    }if (id==7){
        return (a7);
    }if (id==8){
        return (a8);
    }if (id==9){
        return (a9);
    }if (id==10){
        return (a10);
    }if (id==11){
        return (a11);
    }if (id==12){
        return (a12);
    }if (id==13){
        return (a13);
    }if (id==14){
        return (a14);
    }if (id==15){
        return (a15);
    }

    };


}

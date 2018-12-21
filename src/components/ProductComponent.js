export default class ProductComponent{
    constructor(parent){
        this.parent=parent;
        this.render();
    }
    render(){
        $(this.parent).html('<p>Hi!!</p>');

    }
}
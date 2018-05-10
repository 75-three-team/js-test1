class Bar{
    constructor(item=document.getElementById('bar')){
        this.container=item;
        this.colorBox = this.render();
        this.container.appendChild(this.colorBox);
        this.begin();
    }
    render(){
        let colorBox=document.createElement('div');
        colorBox.className='inside';
        return colorBox;
    }
    begin(status = 0) {
        this.status = status;
        this.loading(this.colorBox);
    }
    loading(ele){
        ele.style.width=this.status+'%';
    }
}
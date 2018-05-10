class circle{
    constructor(item=document.getElementById('circle')){
        this.ctx=item.getContext('2d');
        this.begin();
    }
    begin(percent=0){
        this.drawOutside(percent);
        this.drawInside();
        this.drawText(percent, 0);
    }
    drawOutside(percent){
        let timer=null;
        clearInterval(timer)
        
        let lastPercent=this.lastPercent||0;
        let dis = percent-lastPercent;
        if(dis==0) return ;
        timer=setInterval(()=>{
            this.ctx.beginPath();
            this.ctx.moveTo(100,100);        
            if (dis > 0){
                ++lastPercent
                if (percent <= lastPercent) {
                    this.lastPercent = percent;
                    clearInterval(timer);
                }
                
            }else{
                this.ctx.clearRect(0,0,200,200);
                --lastPercent
                if (percent >= lastPercent) {
                    this.lastPercent = percent;
                    clearInterval(timer);
                }
            }
            this.ctx.arc(100, 100, 80, Math.PI * 1.5, Math.PI * (1.5 + lastPercent / 50), false)
            this.ctx.closePath();
            this.ctx.fillStyle='#5E97F6';
            this.ctx.fill();
            this.drawInside();
            this.drawText(percent, lastPercent);
        },10)
    }
    drawInside(){
        this.ctx.beginPath();
        this.ctx.moveTo(100,100);
        this.ctx.arc(100,100,50,0,2*Math.PI);
        this.ctx.closePath();
        this.ctx.fillStyle='#fff';
        this.ctx.fill();
    }
    drawText(percent, lastPercent){
        this.ctx.font = "20px Georgia";
        this.ctx.fillStyle='#5E97F6';
        this.ctx.fillText(lastPercent+'%',80,110);
    }
}
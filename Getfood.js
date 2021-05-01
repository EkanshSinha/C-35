class food{
    constructor(){

        display(){
            var x=80,y=100

            imageMode(CENTER);
            image(this.image,720,220,70,70);

            if(this.foodStock!=0){
                for(var i=0;i<this.foodStock;i++){
                    if(i%10==0){
                        x=80;
                        y=y+50;
                    }
                    imge(this.image,x,y,50,50);
                    x=x+30;
                }
            }

        feed=createButton("Feed the dog");
        feed.position(700,95);
        feed.mousePresssd(feedDog);

        addFood=createButton("Add food")
        addFood.position(800,95);
        addFood.mousePressed(addFoods);
        }
    }

   
}
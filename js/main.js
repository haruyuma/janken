var pics_src = new Array("img/gu.jpg","img/chi.jpg","img/pa.jpg");
var num = -1;
var temp = 3;

slideshow_timer();

function slideshow_timer(){

    if (num == 2){
        num = 0;
    } 
    else {
        num ++;
    }
    if(temp == 3){
        document.getElementById("mypic").src=pics_src[num];
        setTimeout("slideshow_timer()",1000);
    }else if(temp == 0){
        document.getElementById("mypic").src=pics_src[0];
    }else if(temp == 1){
        document.getElementById("mypic").src=pics_src[1];
    }else{
        document.getElementById("mypic").src=pics_src[2];
    }
}
 
new Vue({
    el:'#app',
    data:{
        judge:3,
        resultState:3,
        selectState:3
    },
    methods:{
        reset:function(){
            temp = 3;
            slideshow_timer();
            this.selectState = 3;
            this.resultState = 3;
            this.judge = 3;
        },
        getResult:function(){
            var min = 0;
            var max = 2;
            var randNum = Math.floor( Math.random() * (max + 1 - min) ) + min ; //0-2の範囲で乱数発生
            this.resultState = randNum;
            temp =  this.resultState;

            return randNum;
        },
        onButtonClick:function(states){
            /* 0:勝ち */
            /* 1:負け */
            /* 2:ドロー */

            var resultNum = this.getResult();
            var result = 0;
            this.selectState = states;

            if(states == resultNum){
                result = 2;               /* draw */
            }else{
                if(states == 0){        /* gu */
                    if(resultNum == 1){ /* win */
                        result = 0;
                    }else{              /* lose */
                        result = 1;
                    }
                }else if(states == 1){  /* chi */
                    if(resultNum == 2){ /* win */
                        result = 0;
                    }else{              /* lose */
                        result = 1;
                    }
                }else{                  /* pa */
                    if(resultNum == 0){ /* win */
                        result = 0;
                    }else{              /* lose */
                        result = 1;
                    }
                }
            }
            this.judge = result;

            return result;
        }/* onButtonClick */
    }/* methods */
});
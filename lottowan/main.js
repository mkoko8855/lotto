var p = Array("10", "15", "20", "25", "30", "35")
// var p = [10,15,20,25,30,35];      
var r = Array("0", "0", "0", "0", "0", "0")


r[0] = Math.floor(Math.random() * 45) + 1;
document.write(r[0]);
document.write("<br>");


while(true){
    r[1] = Math.floor(Math.random() * 45) + 1;
    if(r[0] != r[1]){   // r[1]!=[0] = 빠짐
        document.write(r[1]);
        document.write("<br>");
        break;
    }
}

while(true){
    r[2] = Math.floor(Math.random() * 45) + 1;
    if(r[2] != r[0] && r[2] != r[1] ){   // r[2] = r[0] or r[1] > 다시
        document.write(r[2]);
        document.write("<br>");
        break;
    }
}

while(true){
    r[3] = Math.floor(Math.random() * 45) + 1;
    if(r[3] != r[0] && r[3] != r[1] && r[3] != r[2]){
        document.write(r[3]);
        document.write("<br>");
        break;
    }
}

while(true){
    r[4] = Math.floor(Math.random() * 45) + 1;
    if(r[4] != r[0] && r[4] != r[1] && r[4] != r[2] && r[4] != r[3]){
        document.write(r[4]);
        document.write("<br>");
        break;
    }
}

while(true){
    r[5] = Math.floor(Math.random() * 45) + 1;
    if(r[5] != r[0] && r[5] != r[1] && r[5] != r[2] && r[5] != r[3] && r[5] != r[4]){
        document.write(r[5]);
        document.write("<br>");
        break;
    }
}

var b = 0; //보너스
while(true){
    b = Math.floor(Math.random() * 45) + 1;
    if(b != r[0] && b != r[1] && b != r[2] && b != r[3] && b != r[4] && b != r[5]){
        document.write("B:"+b);
        document.write("<br>");
        break;
    }
}

var win = 0;  //10~35 내 수 비교
for(var i=0;i<=5;i=i+1){
    for(var j=0;j<=5;j=j+1){
        if(p[i]==r[j]){
            win = win + 1;
        }
    }
}

document.write("맞은 번호 갯수 : "+win+"<br>");
var str = "";
switch(win){
    case 0:
        str = "다 틀렸으면 1등!!"

        document.write("<b>");

        for(var i=0;i<6;i=i+1)

            if(b==p[i]){

                str = "1등인데 무효처리!!";

                document.write("<b>");
            }
        break;
    case 1:
        str = "2"
        break;
    case 2:
        str = "3"
        break;
    case 3:
        str = "4"
        break;
    case 4:
        str = "5"
        break;
    case 5:
        str = "6"
        break;
    case 6:
        str = "등수X.";
        break;        
    }
document.write(str);
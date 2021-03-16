document.getElementById("submit").addEventListener('click',function (){
    var value = [];
    
    value[0] = parseInt(document.getElementById("value1").value);
    value[1] = parseInt(document.getElementById("value2").value);
    value[2] = parseInt(document.getElementById("value3").value);
    var maximum = value[0];
    var minimum = value[0];
    var mean;
    var median;
    var range;
    var sum = value[0] + value[1] + value[2];
    if((Number.isFinite(value[0])) && (Number.isFinite(value[1])) && (Number.isFinite(value[2]))){
        document.getElementById("warning-message").style.display = "none";
        for(var i = 0; i < 3; i += 1){
            console.log(value[i]);
            if(value[i] > maximum){
                maximum = value[i];
            }
        }
            for(var x = 0; x < 3; x += 1){
                console.log("working");
                if(value[x] < minimum){
                    minimum = value[x];
                }
            }
            for(var z = 0; z < 3; z += 1){
                if(value[z] !== maximum && value[z] !== minimum){
                    median = value[z];
                }
            }
            console.log(sum);
            mean = (sum / 3).toFixed(2);
            range = maximum - minimum;
            console.log(maximum);
            console.log(minimum);
            console.log(range);
            document.getElementById("max").innerHTML = "Max : " + maximum;
            document.getElementById("min").innerHTML = "Min : " + minimum;
            document.getElementById("mean").innerHTML = "Mean : " + mean;
            document.getElementById("range").innerHTML = "Range : " + range;
            document.getElementById("med").innerHTML = "Median : " + median;
    }
    else{
        document.getElementById("warning-message").style.display = "block";
    }
});

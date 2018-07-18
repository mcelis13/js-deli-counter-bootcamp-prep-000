var katzDeliLine = [];

var num = 0;
function takeANumber(num){
    return `Welcome, you are number ${num++} in line.`;
};

function nowServing(katzDeliLine){
    if(katzDeliLine.length > 0){
        var name = katzDeliLine.shift();
        return `Currently serving ${name}.`;
    }else{
        return 'There is nobody waiting to be served!';
    }
};

function currentLine(katzDeliLine){
    var string = 'The line is currently: ';

    if(katzDeliLine.length === 0){
        return 'The line is currently empty.';
    }

    for(var i = 0; i < katzDeliLine.length; i++){
        var name = katzDeliLine[i];

        if(i === katzDeliLine.length -1){
            string += `${i + 1}. ${name}`;
        }else{
            string += `${i + 1}. ${name}, `;
        }
    }

    return string;
}

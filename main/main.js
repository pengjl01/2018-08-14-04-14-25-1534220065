module.exports = function main(a) {
    var array=new Array();
    while(a>0){
    	array.unshift(a%10);
    	a=parseInt(a/10);
    };
    var ans=new Array();
    for(var j=0;j<lcd.length;++j){
    	for(var i=0;i<array.length;++i){
        	ans.push(lcd[j][array[i]]);
        	ans.push(" ");
        }
    	ans.pop();
    	ans.push("\n");
    };
    return ans.join("");
};
var lcd=[
	['._.','...','._.','._.','...','._.','._.','._.','._.','._.'],
	['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'],
	['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|'],
];
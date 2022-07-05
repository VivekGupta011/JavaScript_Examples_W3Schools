function callback(text,formatcb){ 
    return typeof  formatcb==='function' ? formatcb(text): text.toUpperCase();
}

let func=callback("vivek",function(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
    

});
console.log(func);

// cancel , ok (empty string) ==> alert 
// > 100 ==> invalid degree
// > 90  ==> Excellent
// > 80 ==> very good
// > 70 ==> good
// < 70 ==> failed



var degree = prompt("enter your degree")
if(degree==null || degree=="" ){
    alert('please enter your degree')
}
else if(degree>100){
    alert('invalid degree')
}
else if(degree>90){
    alert('Excellent')
}
else if(degree>80){
    alert('very good')
}else if(degree>70){
    alert('good')
}
else {
    alert('fail')
}









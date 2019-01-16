let main=()=>{
    setTimeout(()=>{
       console.log(printStatement());
    },300)
}
let printStatement=()=>'TIMED OUT!';
//main()
module.exports={main,printStatement};
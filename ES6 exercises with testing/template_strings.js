function template_strings(){
    if (typeof(process.argv[2])!=='string'){
        return `Input is not a string`;
    }
   return (`Hello, ${process.argv[2]}!
Your name lowercased is "${process.argv[2].toLowerCase()}".`);}
module.exports=template_strings
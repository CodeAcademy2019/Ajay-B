function logger(namespace) {
    //console.log(namespace);
    return console.log.bind(console,namespace);
}
//console.log(logger('INFO:'));
let info = logger('INFO:');
info('this is an info message','some more info');
module.exports=logger;
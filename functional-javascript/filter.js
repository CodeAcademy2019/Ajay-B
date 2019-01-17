function getShortMessages(messages) {
    // SOLUTION GOES HERE
    var filtered=[]
    var filtered=messages.filter(function(message){
        return message.message.length<50
    }).map(x=>x.message)
    return filtered


  }

  module.exports = getShortMessages
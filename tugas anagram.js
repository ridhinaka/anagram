var words = ['kita', 'atik', 'tika','aku', 'kia', 'makan','kua']

function kata_1 (){
    var y = words.length
    var index = 0
    var yuyu = []

    for (var i = 0 ; i < y ; i ++){
       var jmlkt = []
       for(var j = 0 ; j < words[i].length ; j++){
        jmlkt.push(words[i][j].charCodeAt(index))  //googling
       }
       let sum = 0
       for (const n of jmlkt) sum += n //googling
       yuyu.push(sum)
 }   
 return yuyu
}

console.log(kata_1())

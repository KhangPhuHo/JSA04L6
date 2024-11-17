let string = 'Em là Hồ Phú Khang, năm nay em 15 tuổi.';
let subStrings = string.split(',');
console.log(subStrings)

var data = 'tôi thích làm 300 bài code thiếu nhi';
var a = data.toUpperCase()
console.log(a)

let x = 'Hồ Phú Khang';
let y = 15;
console.log(`Em tên là ${x}, em năm nay ${y} tuổi `)

function wordCount( val ){
    var wom = val.match(/\S+/g);
    return {
        charactersNoSpaces : val.replace(/\s+/g, '').length,
        characters         : val.length,
        words              : wom ? wom.length : 0,
        lines              : val.split(/\r*\n/).length
    };
}
var textarea = document.getElementById("text");
var result   = document.getElementById("result");
textarea.addEventListener("input", function(){
  var v = wordCount( this.value );
  result.innerHTML = (
      "<br>Characters (no spaces):  "+ v.charactersNoSpaces +
      "<br>Characters (and spaces): "+ v.characters +
      "<br>Words: "+ v.words +
      "<br>Lines: "+ v.lines
  );
}, false);

var pinyin = require("../src/pinyin");

var hans = [
  "爱中国(china)",
];

for(var i=0,l=hans.length; i<l; i++){
  console.log(hans[i], 
    pinyin(hans[i], {
      style: pinyin.STYLE_FINALS,
      heteronym:true
    }));
}

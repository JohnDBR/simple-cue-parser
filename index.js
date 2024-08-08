const parser = require('cue-parser');

const cuesheet = parser.parse('input.cue');

console.log('\n' + cuesheet.performer + ' - ' + cuesheet.files[0].name + '\n');

for (let i = 1; i < cuesheet.files.length; i++) {
  let x = cuesheet.files[i].tracks[0].title + ' - ' + cuesheet.files[i].tracks[0].performer
  console.log(x);
}

console.log('\n Enjoy! \n');

var rootInput = prompt("Type your root note below:", "Use CAPs for note then '#' for Sharp or 'b' for Flat!");

var chordInput = prompt("Select your chord type using the key below:\n[maj]   = Major (I III V)\n\
[m]  = Minor (I IIIb V)\n[2]  = Suspended 2nd (I II V)\n[4]  = Suspended 4th (I IV V)\n\
[o5] = Diminished 5th (I IIIb Vb)\n[+5] = Augmented 5th (I III V#)\n[6]  = 6th (I III V VI)\n\
[m6] = Minor 6th (I IIIb V VI)\n[7]  = Dominant 7th (I III V VIIb)\n[m7] = Minor 7th (I IIIb V VIIb)\n\
[M7] = Major 7th (I III V VII)\n[9]  = Dominant 9th (I III V VIIb IX)\n\
[M9] = Major 9th (I III V VII IX)\n[m9] = Minor 9th (I IIIb V VIIb IX)");


var chromScale = [
    ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
    ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"]
];

if((rootInput[0] == "F" && rootInput.length == 1) || rootInput[1] == "b") {
    var key = 1;
}
else {
	var key = 0;
}


for (i = 0; chromScale[key][i] != rootInput; i++);
var root = i;


var chordType = {
	"maj": [0, 4, 7], //Major
	"m": [0, 3, 7],//Minor
	"2": [0, 2, 7], //Suspended 2nd
	"4": [0, 5, 7], //Suspended 4th
	"o5": [0, 3, 6],//Dim 5th
	"+5": [0, 4, 8],//Aug 5th
	"6": [0, 4, 7, 9],//6th
	"m6": [0, 3, 7, 9],//Minor 6th
	"7": [0, 4, 7, 10],//Dom 7th
	"m7": [0, 3, 7, 10],//Minor 7th
	"M7": [0, 4, 7, 11],//Major 7th
	"9": [0, 4, 7, 10, 14],	//Dom 9th
	"M9": [0, 4, 7, 11, 14],//Major 9th
	"m9": [0, 3, 7, 10, 14]//Minor 9th
};

var result = [];

for(i = 0; i < chordType[chordInput].length; i++){
	result.push(chromScale[key][(root + chordType[chordInput][i]) % 12]);
}


console.log(rootInput + chordInput + " uses the notes: " + result);

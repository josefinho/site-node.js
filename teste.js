let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let hi; 
let mi; 
let hf; 
let mf; 

let ti, tf, t;
const dayMin = 1440;

function end(val) {
	let zeroCounter = 0;

	for(let key in val) {
		if(val[key] === 0)
			zeroCounter++;
	}
	
	if(zeroCounter === 4)
		return true;
	else 
		return false;
}

do {
	hi = parseInt(lines.shift());
	mi = parseInt(lines.shift()); 
	hf = parseInt(lines.shift());
	mf = parseInt(lines.shift());

	ti = (hi/60) + mi;
	tf = (hf/60) + mf;

	if(ti > tf)
		t = tf + dayMin - ti;
	else if(ti < tf)
		t = tf - ti;
	else
		console.log(dayMin);

	console.log(t);
} while(end({hi, mi, hf, mf,}));

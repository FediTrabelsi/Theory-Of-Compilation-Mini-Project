import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-automate',
  templateUrl: './create-automate.component.html',
  styleUrls: ['./create-automate.component.css']
})
export class CreateAutomateComponent implements OnInit {
  Initial = [];
  Final = [];
  Alphabet = [];
  alpha = '';
  ini = '';
  finale = '';
  num;
  Number;
  Automate;
  transission = '';
  Result = [];
  word = '';
  isword="";


  constructor() { }

  ngOnInit() {

  }

  submitStates() {

      this.Number = this.num;

  }

  addAlphabet() {
    if (this.alpha != '' ) {
    this.Alphabet.push(this.alpha);
    this.alpha = '';
    }
  }

  addInitial() {
    if (this.ini != '' ) {
      const x = +this.ini;
      this.Initial.push(x);
      this.ini = '';
      }
  }

  addFinal() {
    if (this.finale != '' ) {
      const x = + this.finale;
      this.Final.push(x);
      this.finale = '';
      }
  }

  createArray(length) {
    let arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        const args = Array.prototype.slice.call(arguments, 1);
        while (i--) { arr[length - 1 - i] = this.createArray.apply(this, args); }
    }

    return arr;
}

addNewTransission() {
const t = this.transission.split(' ');
let s, a, ns;
a = this.Alphabet.indexOf(t[1]);

s = +t[0];
a = this.Alphabet.indexOf(t[1]);
ns = +t[2];
console.log('T[' + a + ',' + s + ']=' + ns);
this.Automate[a][s].push(ns);
console.log(this.Automate[a][s]);
}

createAutomate() {
  let i, j;
  const myarray = new Array(this.Alphabet.length);
  for (i = 0; i < this.Alphabet.length; i++) {
  myarray[i] = new Array(this.Number);
  for (j = 0; j < this.Number; j++) {
    myarray[i][j] = [];
  }

  }
  this.Automate = myarray;
  console.log(myarray);
}



checkWord(states, wordToCheck) {
  this.Result = [];
  const ch = wordToCheck;
  let i = 0;
  let j;
  const test = false;

  const sample = ch.charAt(0);

  if (ch.length === 1) {
    if (!this.Alphabet.includes(sample)) {
      return false;
    } else {
      for (i = 0; i < states.length; i++) {
        let x = this.Alphabet.indexOf(sample);
        for (j = 0; j < this.Final.length; j++) {
        if (this.Automate[x][states[i]].includes(this.Final[j])) {
          return true;
        }
      }
    }
      if (!test) {
      return false;
    }

    }
  } else {
    let newQ=[];
    let x = this.Alphabet.indexOf(sample);
    for (i = 0; i < states.length; i++) {
      for(j=0;j<this.Automate[x][states[i]];j++){
        newQ.push(this.Automate[x][states[i]][j]);
      }
  }
  return(this.checkWord(newQ,ch.substring(1,ch.length)));

  }
}

checkOne() {
  var t= this.checkWord(this.Initial,this.word);
  this.isword="----> "+t+" the word : "+this.word+" is recognized by the automate"
}



}

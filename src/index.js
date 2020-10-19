const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let result = [];
    let symbol = '';

     for( let i = 0; i < expr.length; i = i + 10){
      symbol = expr.slice(i,i+10);
   
      if(symbol=== '**********'){
          symbol='';
      }else{
       let symbolMorse='';
           for(let j = 0; j < symbol.length; j+=2){
              
                
               switch(symbol.slice(j,j+2)){
                   case '00': symbolMorse +=''; break;
                   case '10': symbolMorse +='.'; break;
                   case '11': symbolMorse +='-'; break;
                   default: break;
               }
           }
           symbol=symbolMorse;
      }
   
       
      arr.push(symbol);
   
      if(symbol){
          result += MORSE_TABLE[symbol];;
      }else{
          result+=' '
      }
     }  
      return result;
   }

module.exports = {
    decode
}
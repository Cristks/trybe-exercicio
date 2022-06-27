
/*
  Como podemos acessar a posição de uma string da mesma forma que
  acessamos um array, podemos então, comparar o caracter da
  posição 0 (primeira) com o caracter da última posição (length - 1).
  Dessa forma conseguimos verificar se a sequência de caracteres
  na string é a mesma do inicio ao fim e do fim ao inicio 😉
*/
 word = (arara);

function verificaPalindrome(word) {
  for(index in word){
    if(word[index] != word[(word.length - 1) - index]) {
      return false;
    }
  }
  return true;}

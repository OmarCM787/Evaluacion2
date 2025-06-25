function cuadrilatero(alto, ancho) {
  for (let k = 0; k < 1; k++) {
    console.log('*'.repeat(ancho));

    for (let i = 0; i < alto - 2; i++) {
      console.log('*' + ' '.repeat(ancho - 2) + '*');
    }
    console.log('*'.repeat(ancho));
  }
}

cuadrilatero(20, 10);
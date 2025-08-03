exports.resta = (a, b) => {
  const numA = Number(a);
  const numB = Number(b);
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error("Argumentos inválidos");
  }
  return numA - numB;
};
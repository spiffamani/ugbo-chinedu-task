
function validateCardLength(user, cardNumber) {
  const cardLengths = {
    Visa: 16,
    MasterCard: 16,
    Discover: 16,
    AmericanExpress: 15
  };
  const expectedLength = cardLengths[user];
  if (cardNumber.length === expectedLength) {
    return ( valid: true, valid );
  }
  return ( valid: false, Invalid Length );
}

  if (cardNumber || cardNumber.length === 0) {
    return { valid: false, message: "Invalid card number" };
  }

switch (firstDigit) {
    case 4:
      return validateCardLength("Visa", cardNumber);
    case 5:
      return validateCardLength("MasterCard", cardNumber);
    case 6:
      return validateCardLength("Discover", cardNumber);
    case 3:
      return validateCardLength("AmericanExpress", cardNumber);
    default:
      return { valid: false, message: "Unknown card issuer" };
  }
}

console.log("   card number:", validateCardLength([4, 5, 6, 2, 4, 5, 7, 8, 9, 2, 1, 4, 5, 6, 7, 7]))







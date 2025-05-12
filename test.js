// Trigger GitHub Actions run
const assert = (desc, cond) => console.log(desc + ':', cond ? 'PASS' : 'FAIL');


function calculateFare(distance) {
    return distance * 2;
}


function validateName(name) {
    return name.trim().length > 0;
}


function toggleFavorite(tripName, favorites) {
    const index = favorites.findIndex(trip => trip.trip === tripName);
    if (index !== -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push({ trip: tripName });
    }
    return favorites;
}


function formatCardNumber(cardNumber) {
    const digits = cardNumber.replace(/\s/g, '');
    return digits.match(/.{1,4}/g)?.join(' ') || '';
}


// Tests for calculateFare
assert('Fare of 5km = 10', calculateFare(5) === 10);
assert('Fare of 0km = 0', calculateFare(0) === 0);

// Tests for validateName
assert('Valid name "Sara"', validateName("Sara") === true);
assert('Invalid name "   "', validateName("   ") === false);

// Tests for toggleFavorite
let favList = [];
favList = toggleFavorite("Trip A", favList);
assert('Add Trip A to empty list', favList.length === 1 && favList[0].trip === "Trip A");
favList = toggleFavorite("Trip A", favList);
assert('Remove Trip A from list', favList.length === 0);

// Tests for formatCardNumber
assert('Format "1234567890123456"', formatCardNumber("1234567890123456") === "1234 5678 9012 3456");
assert('Format "4444 3333"', formatCardNumber("4444 3333") === "4444 3333");

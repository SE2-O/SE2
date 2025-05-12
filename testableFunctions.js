
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

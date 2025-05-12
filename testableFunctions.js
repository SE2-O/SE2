
function validateUsername(username) {
    return username.trim().length >= 6;
}

function showSuccess(message) {
    return "Success: " + message;
}

function selectPayment(method) {
    const validMethods = ["mada", "visa", "paypal"];
    return validMethods.includes(method);
}

function generateQRCode(ticketId) {
    return `QR-${ticketId}`;
}

function removeExpiredTickets(tickets) {
    const now = Date.now();
    return tickets.filter(ticket => new Date(ticket.date).getTime() >= now);
}

function renderHistory(history) {
    return history.map(h => `${h.station} at ${h.time}`);
}

function dijkstra(start, end, graph) {
    if (!graph[start] || !graph[end]) return null;
    const visited = new Set();
    const distances = { [start]: 0 };
    const queue = [start];

    while (queue.length) {
        const node = queue.shift();
        visited.add(node);
        for (const neighbor in graph[node]) {
            const newDist = distances[node] + graph[node][neighbor];
            if (distances[neighbor] === undefined || newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                queue.push(neighbor);
            }
        }
    }
    return distances[end] ?? null;
}

function showQRCode(ticket) {
    return `QR for: ${ticket.id}`;
}

function goHome() {
    return "Redirected to home";
}

function initializeDefaults(data) {
    return {
        tripName: data.tripName || "Unknown",
        distance: data.distance || 0,
        duration: data.duration || "",
        price: data.price || 0
    };
}

function formatExpiryDate(input) {
    return input.replace(/[^0-9]/g, "").slice(0, 4).replace(/(\d{2})(\d{2})/, "$1/$2");
}

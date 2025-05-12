
const assert = (desc, cond) => console.log(desc + ':', cond ? 'PASS' : 'FAIL');

// validateUsername
assert("Valid username 'myuser'", validateUsername("myuser") === true);
assert("Invalid username 'abc'", validateUsername("abc") === false);

// showSuccess
assert("Show success with message", showSuccess("done") === "Success: done");

// selectPayment
assert("Valid payment 'visa'", selectPayment("visa") === true);
assert("Invalid payment 'cash'", selectPayment("cash") === false);

// generateQRCode
assert("Generate QR from id 123", generateQRCode("123") === "QR-123");

// removeExpiredTickets
const future = new Date(Date.now() + 86400000).toISOString();
const past = new Date(Date.now() - 86400000).toISOString();
assert("Remove expired ticket", removeExpiredTickets([{ date: past }, { date: future }]).length === 1);

// renderHistory
const history = [{ station: "A", time: "10:00" }, { station: "B", time: "10:30" }];
assert("Render history entries", renderHistory(history).length === 2);

// dijkstra
const graph = { A: { B: 2 }, B: { C: 3 }, C: {} };
assert("Shortest path from A to C", dijkstra("A", "C", graph) === 5);
assert("Path not found from A to D", dijkstra("A", "D", graph) === null);

// showQRCode
assert("Show QR for ticket", showQRCode({ id: 7 }) === "QR for: 7");

// goHome
assert("Go home returns redirect text", goHome() === "Redirected to home");

// initializeDefaults
const defaults = initializeDefaults({ tripName: "Riyadh", distance: 10 });
assert("Defaults sets tripName", defaults.tripName === "Riyadh");
assert("Defaults fills missing with default", initializeDefaults({}).distance === 0);

// formatExpiryDate
assert("Format expiry '1225'", formatExpiryDate("1225") === "12/25");

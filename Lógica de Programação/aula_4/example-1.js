let cakeIsBaked = false
let totalMinutes = 0
let minutesToBake = 30

while (!cakeIsBaked) {
  totalMinutes = totalMinutes + 10 // Wait 10 minutes

  if (totalMinutes === minutesToBake) {
    cakeIsBaked = true // Exit condition
  }
}

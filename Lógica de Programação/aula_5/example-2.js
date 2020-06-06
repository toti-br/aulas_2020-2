function welcomeMessage (hour) {
  if (hour < 12) {
    console.log('Good morning')
  } else if (hour >= 12 && hour <= 17) {
    console.log('Good afternoon')
  } else if (hour > 17) {
    console.log('Good night')
  }
}

welcomeMessage(10) // will print "Good morning"
welcomeMessage(15) // will print "Good afternoon"
welcomeMessage(21) // will print "Good night"

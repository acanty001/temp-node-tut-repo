// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./4-names")
const sayPeace = require("./5-utils")
const itemsData = require("./6-alternative-flavor")
require("./7-mind-grenade")

// un-comment to activaate required modules
// console.log(names)
// sayPeace(names.justice)
// console.log(itemsData)
// sayPeace(itemsData.singlePerson.name)
// sayPeace(malcolm)
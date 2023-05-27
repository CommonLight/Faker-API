const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 8000;

const createUser = () => {
  const newUser = {
    _id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }
  return newUser
}

const createCompany = () => {
  const newCompany = {
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
      street: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    }
  }
  return newCompany
}

// req is short for request
// res is short for response
app.get("/api/users/new", (req, res) => {
  const newUser = createUser()
  res.json( newUser )
})

app.get("/api/companies/new", (req, res) => {
  const newCompany = createCompany()
  res.json( newCompany )
})

app.get("/api/user/company", (req, res) => {
  const newUser = createUser()
  const newCompany = createCompany()
  const response = { user: newUser, company: newCompany }
  res.json( response )
})

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
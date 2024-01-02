/// <reference types="cypress" />

describe("drchrono tests", () => {

  const dayjs = require('dayjs')
  const currentDate = dayjs().format('YYYY-MM-DD')
  const nextDate = dayjs().add(1, 'days').format('YYYY-MM-DD')
  const dataObject = ["currentDate", "nextDate", "currentDateHasFreeSlots", "nextDateHasFreeSlots"]

  it("Validations on drchrone api", () => {

    cy.request({
      method: "GET",
      url: Cypress.env('API_URL'),
      qs: {
        "date": currentDate,
        "clinicId": Cypress.env('CLINIC_ID'),
        "examRoom": Cypress.env('EXAM_ROOM')
      }
    }).then((response) => {
      // verify status code of request
      expect(response.status).to.eq(200)

      // Verify SUCCESS property in the response body
      expect(response.body.success).to.equal(true)

      // Verify ERROR property in the response body
      expect(response.body.error).to.equal(null)

      // Verify DATA object in the response body
      expect(response.body.data).to.be.an('object').has.all.keys(dataObject)

      // Verify length of DATA object keys in the response body
      expect(Object.keys(response.body.data)).to.have.length(4)

      // Verify type of currentDate and nextDate in the response body
      expect(response.body.data.currentDate).to.be.an("array")
      expect(response.body.data.nextDate).to.be.an("array")

      // Verify that START properties include current date
      cy.wrap(response.body.data.currentDate).each(items => {
        expect(items.start).to.contains(currentDate)
      })

      cy.wrap(response.body.data.nextDate).each(items => {
        expect(items.start).to.contains(nextDate)
      })

      // Verify that END properties include current date

      cy.wrap(response.body.data.currentDate).each(items => {
        expect(items.end).to.contains(currentDate)
      })

      cy.wrap(response.body.data.nextDate).each(items => {
        expect(items.end).to.contains(nextDate)
      })
    })

  });

});

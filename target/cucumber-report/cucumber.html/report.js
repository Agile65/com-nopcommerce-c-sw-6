$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ElectronicsTest.feature");
formatter.feature({
  "line": 1,
  "name": "Electronics menu test case",
  "description": "",
  "id": "electronics-menu-test-case",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3662513500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify that the product added successfully and place order successfully",
  "description": "",
  "id": "electronics-menu-test-case;verify-that-the-product-added-successfully-and-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I hove on \u0027Electronics\u0027 Tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I hover and click on \u0027Cell phones\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I can see the text \"Cell phones\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on List View Tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on product name “Nokia Lumia 1020” link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can see the text “Nokia Lumia 1020”",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I can see the price “$349.00”",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I change quantity to 2",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on “ADD TO CART” tab",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I can see the Message \u0027The product has been added to your shopping cart\u0027 on Top green Bar",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "after that close the bar clicking on the cross button.",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "MouseHover on \u0027Shopping cart\u0027 and Click on \"GO TO CART\" button.",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I can see the message \u0027Shopping cart\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I can see the quantity is 2",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I can see the Total $698.00",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on checkbox “I agree with the terms of service”",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on the \u0027CHECKOUT\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I can see Text “Welcome, Please Sign In!”",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I click on \u0027REGISTER\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I can see the text \u0027Register\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I fill the mandatory fields",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on \u0027REGISTER\u0027 Button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I can see the message “Your registration completed”",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I click on \u0027CONTINUE\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I can see the text “Shopping card”",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 185468900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iHoveOnElectronicsTab()"
});
formatter.result({
  "duration": 168457600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iHoverAndClickOnCellPhones()"
});
formatter.result({
  "duration": 981861900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 20
    }
  ],
  "location": "ElectronicsSteps.iCanSeeTheText(String)"
});
formatter.result({
  "duration": 47570000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnListViewTab()"
});
formatter.result({
  "duration": 55964300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1020",
      "offset": 37
    }
  ],
  "location": "ElectronicsSteps.iClickOnProductNameNokiaLumiaLink(int)"
});
formatter.result({
  "duration": 2755000300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1020",
      "offset": 32
    }
  ],
  "location": "ElectronicsSteps.iCanSeeTheTextNokiaLumia(int)"
});
formatter.result({
  "duration": 35324500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "349",
      "offset": 22
    },
    {
      "val": "00",
      "offset": 26
    }
  ],
  "location": "ElectronicsSteps.iCanSeeThePrice$(int,int)"
});
formatter.result({
  "duration": 24820600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "ElectronicsSteps.iChangeQuantityTo(int)"
});
formatter.result({
  "duration": 97044000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnADDTOCARTTab()"
});
formatter.result({
  "duration": 86408500,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iCanSeeTheMessageTheProductHasBeenAddedToYourShoppingCartOnTopGreenBar()"
});
formatter.result({
  "duration": 234728500,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.afterThatCloseTheBarClickingOnTheCrossButton()"
});
formatter.result({
  "duration": 91392800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GO TO CART",
      "offset": 44
    }
  ],
  "location": "ElectronicsSteps.mousehoverOnShoppingCartAndClickOnButton(String)"
});
formatter.result({
  "duration": 1594810900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iCanSeeTheMessageShoppingCart()"
});
formatter.result({
  "duration": 38110100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "ElectronicsSteps.iCanSeeTheQuantityIs(int)"
});
formatter.result({
  "duration": 53845500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "698",
      "offset": 21
    },
    {
      "val": "00",
      "offset": 25
    }
  ],
  "location": "ElectronicsSteps.iCanSeeTheTotal$(int,int)"
});
formatter.result({
  "duration": 28818900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnCheckboxIAgreeWithTheTermsOfService()"
});
formatter.result({
  "duration": 60293900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnTheCHECKOUT()"
});
formatter.result({
  "duration": 697127800,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iCanSeeTextWelcomePleaseSignIn()"
});
formatter.result({
  "duration": 40416600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnREGISTERTab()"
});
formatter.result({
  "duration": 377559900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iCanSeeTheTextRegister()"
});
formatter.result({
  "duration": 34267300,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iFillTheMandatoryFields()"
});
formatter.result({
  "duration": 386645600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnREGISTERButton()"
});
formatter.result({
  "duration": 652008000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iCanSeeTheMessageYourRegistrationCompleted()"
});
formatter.result({
  "duration": 39957500,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnCONTINUETab()"
});
formatter.result({
  "duration": 353099400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iCanSeeTheTextShoppingCard()"
});
formatter.result({
  "duration": 48073000,
  "status": "passed"
});
formatter.after({
  "duration": 141400,
  "status": "passed"
});
});
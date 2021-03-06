function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

Survey
    .StylesManager
    .applyTheme("bootstrap");
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

var json = 
{
  pages: [
   {
    name: "Question 0",
    elements: [
     {
      type: "checkbox",
      name: "question1",
      title: "Please select the categories you must review.",
      choices: [
       {
        value: "item1",
        text: "Institution and facility eligibility and agreements"
       },
       {
        value: "item2",
        text: "Enrollment, attendance, and participant eligibility"
       },
       {
        value: "item3",
        text: "Meal service, menus, and food safety"
       },
       {
        value: "item4",
        text: "Financial management and audits"
       },
       {
        value: "item5",
        text: "Procurement, vending, and contracts"
       },
       {
        value: "item6",
        text: "Meal counting and claiming"
       },
       {
        value: "item7",
        text: "Civil rights"
       },
       {
        value: "item8",
        text: "Facility monitoring"
       },
       {
        value: "item9",
        text: "Training, health, and safety"
       }
      ],
      otherText: "Other (describe)"
     }
    ]
   },
   {
    name: "Question 1.1",
    elements: [
     {
      type: "radiogroup",
      name: "question1.1",
      visibleIf: "{question1} contains \"item1\"",
      title: "Do you have concerns regarding the program application?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item1\"",
    title: "Institution and facility eligibility and agreements"
   },
   {
    name: "Question 1.1.1",
    elements: [
     {
      type: "radiogroup",
      name: "question1.1.1",
      visibleIf: "{question1.1} = \"item1\"",
      title: "Was false information submitted on the institution's program application?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.1} = \"item1\""
   },
   {
    name: "Question 1.1.1.1",
    elements: [
     {
      type: "radiogroup",
      name: "question1.1.1.3",
      visibleIf: "{question1.1.1} = \"item1\"",
      title: "Did the applicant conceal a conviction for an activity that indicates a lack or business integrity that happened within the past seven years?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.1} = \"item1\""
   },
   {
    name: "Question 1.1.1.1.1",
    elements: [
     {
      type: "checkbox",
      name: "question1.1.1.1.1",
      visibleIf: "{question1.1.1.1} = \"item1\"",
      title: "Which convictions apply?",
      choices: [
       {
        value: "item1",
        text: "Fraud"
       },
       {
        value: "item2",
        text: "Antitrust violations"
       },
       {
        value: "item3",
        text: "Embezzlement"
       },
       {
        value: "item4",
        text: "Theft"
       },
       {
        value: "item5",
        text: "Forgery"
       },
       {
        value: "item6",
        text: "Bribery"
       },
       {
        value: "item7",
        text: "Falsification or destruction of record"
       },
       {
        value: "item8",
        text: "Making false statements"
       },
       {
        value: "item9",
        text: "Receiving stolen property"
       },
       {
        value: "item10",
        text: "Making false claims"
       },
       {
        value: "item11",
        text: "Obstruction of justice"
       },
       {
        value: "item12",
        text: "Any other activity indicating a lack of business integrity as defined by the State agency"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.1.1} = \"item1\""
   },
   {
    name: "Question 1.1.1.2",
    elements: [
     {
      type: "radiogroup",
      name: "question1.1.1.2",
      visibleIf: "{question1.1.1} = \"item1\"",
      title: "Was the application missing one or more required, general elements?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.1} = \"item1\""
   },
   {
    name: "Question 1.1.1.2.1",
    elements: [
     {
      type: "radiogroup",
      name: "question1.1.1.2.1",
      visibleIf: "{question1.1.1.2} = \"item1\"",
      title: "Was a complete management plan submitted?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.1.2} = \"item1\""
   },
   {
    name: "Question 1.1.1.2.2",
    elements: [
     {
      type: "radiogroup",
      name: "question1.1.1.2.2",
      visibleIf: "{question1.1.1.2} = \"item1\"",
      title: "Did the management plan account for an appropriate staffing level?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.1.2} = \"item1\""
   },
   {
    name: "Question 1.1.1.2.2.1",
    elements: [
     {
      type: "radiogroup",
      name: "question1.1.1.2.2.1",
      visibleIf: "{question1.1.1.2.2} = \"item2\"",
      title: "Did the management plan outline a training plan?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.1.2.2} = \"item2\""
   },
   {
    name: "Question 1.1.1.2.3",
    elements: [
     {
      type: "radiogroup",
      name: "question1.1.1.2.3",
      visibleIf: "{question1.1.1.2} = \"item1\"",
      title: "Did the institution submit an application for which either the institution or any of its principals was on the National disqualified list?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.1.2} = \"item1\""
   },
   {
    name: "Question 1.1.1.2.2.1.1",
    elements: [
     {
      type: "checkbox",
      name: "question1.1.1.2.2.1.1",
      visibleIf: "{question1.1.1.2.2.1} = \"item2\"",
      title: "Which parts of the management plan were missing?",
      choices: [
       {
        value: "item1",
        text: "The sponsor's management plan makes no reference to training sponsoring organization staff"
       },
       {
        value: "item2",
        text: "The sponsor's management plan makes no reference to training sponsored facilities"
       },
       {
        value: "item3",
        text: "The sponsor's management plan does not have adequate references to proposed training sponsoring organization staff and facilities"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.1.2.2.1} = \"item2\""
   },
   {
    name: "Question 1.1.1.2.4",
    elements: [
     {
      type: "radiogroup",
      name: "question1.1.1.2.4",
      visibleIf: "{question1.1.1.2} = \"item1\"",
      title: "Did the institution submit an application for which the institution or any of its principals were disqualified from one or more public assistance programs for reasons related to program violations?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.1.2} = \"item1\""
   },
   {
    name: "Question 1.1.2",
    elements: [
     {
      type: "radiogroup",
      name: "question1.1.2",
      visibleIf: "{question1.1} = \"item1\"",
      title: "Was the application missing one or more required certification elements?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.1} = \"item1\""
   },
   {
    name: "Question 1.1.2.1",
    elements: [
     {
      type: "radiogroup",
      name: "question1.1.2.1",
      visibleIf: "{question1.1.2} = \"item1\"",
      title: "Was the application missing a statement of publicly funded programs in which the institution and its principals have begun to participate since the institution's previous application?\n",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.2} = \"item1\""
   },
   {
    name: "Question 1.1.2.2",
    elements: [
     {
      type: "radiogroup",
      name: "question1.1.2.2",
      visibleIf: "{question1.1.2} = \"item1\"",
      title: "Was the application missing a certification that, during the past seven years, neither the institution nor any of its principals have been declared ineligible to participate in any other publicly funded program by reason of violating that program's requirements?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.2} = \"item1\""
   },
   {
    name: "Question 1.1.2.2.1",
    elements: [
     {
      type: "radiogroup",
      name: "question1.1.2.2.1",
      visibleIf: "{question1.1.2.2} = \"item1\"",
      title: "Did the institution provide documentation that proves that institution or principal was fully reinstated?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.2.2} = \"item1\""
   },
   {
    name: "Question 1.1.2.2.1.2",
    elements: [
     {
      type: "radiogroup",
      name: "question1.1.2.2.1.2",
      visibleIf: "{question1.1.2.2.1} = \"item1\"",
      title: "Did the aforementioned documentation include payments of debts owed?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.2.2.1} = \"item1\""
   },
   {
    name: "Question 1.1.2.3",
    elements: [
     {
      type: "radiogroup",
      name: "question1.1.2.3",
      visibleIf: "{question1.1.2} = \"item1\"",
      title: "Was the application missing information on criminal conviction for any activity that occurred during the past seven years that indicates a lack of business integrity; or certification that no such activity occured",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.2} = \"item1\""
   },
   {
    name: "Question 1.1.2.3.1",
    elements: [
     {
      type: "checkbox",
      name: "question1.1.2.3.1",
      visibleIf: "{question1.1.2.3} = \"item1\"",
      title: "Which crimes did the criminal conviction include?",
      choices: [
       {
        value: "item1",
        text: "Fraud"
       },
       {
        value: "item2",
        text: "Antitrust violations"
       },
       {
        value: "item3",
        text: "Embezzlement"
       },
       {
        value: "item4",
        text: "Theft"
       },
       {
        value: "item5",
        text: "Forgery"
       },
       {
        value: "item6",
        text: "Bribery"
       },
       {
        value: "item7",
        text: "Falsification or destruction of records"
       },
       {
        value: "item8",
        text: "Making false statements"
       },
       {
        value: "item9",
        text: "Receiving stolen property"
       },
       {
        value: "item10",
        text: "Making false claims"
       },
       {
        value: "item11",
        text: "Obstruction of justice"
       },
       {
        value: "item12",
        text: "Any other activity indicating a lack of business integrity as defined by the State agency"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.2.3} = \"item1\""
   },
   {
    name: "Question 1.1.2.4",
    elements: [
     {
      type: "radiogroup",
      name: "question1.1.2.4",
      visibleIf: "{question1.1.2} = \"item1\"",
      title: "Was the application missing certification that all information provided is true and correct, with all necessary contact information?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.2} = \"item1\""
   },
   {
    name: "Question 1.1.2.4.1",
    elements: [
     {
      type: "checkbox",
      name: "question1.1.2.4.1",
      visibleIf: "{question1.1.2.4} = \"item1\"",
      title: "Which contact information is missing?",
      choices: [
       {
        value: "item1",
        text: "Name"
       },
       {
        value: "item2",
        text: "Mailing address"
       },
       {
        value: "item3",
        text: "DOB for institution's executive director and chairman of the board of directors, or owner (for-profit centers only)"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.2.4} = \"item1\""
   },
   {
    name: "Question 1.1.2.5",
    elements: [
     {
      type: "radiogroup",
      name: "question1.1.2.5",
      visibleIf: "{question1.1.2} = \"item1\"",
      title: "Was the application missing an outside employment policy certifying that no other employment interferes with program operations?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.2} = \"item1\""
   },
   {
    name: "Question 1.1.2.6",
    elements: [
     {
      type: "radiogroup",
      name: "question1.1.2.6",
      visibleIf: "{question1.1.2} = \"item1\"",
      title: "Did the application fail to demonstrate VCA?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.2} = \"item1\""
   },
   {
    name: "Question 1.1.2.6.1",
    elements: [
     {
      type: "checkbox",
      name: "question1.1.2.6.1",
      visibleIf: "{question1.1.2.6} = \"item1\"",
      title: "Which performance standards did the application fail to meet?",
      choices: [
       {
        value: "item1",
        text: "Performance Standard 1 - Financial Viability and Financial Management"
       },
       {
        value: "item2",
        text: "Performance Standard 2 - Administrative Capability"
       },
       {
        value: "item3",
        text: "Performance Standard 3 - Program Accountability"
       }
      ]
     }
    ],
    visibleIf: "{question1.1.2.6} = \"item1\""
   },
   {
    name: "Question 1.1.3",
    elements: [
     {
      type: "radiogroup",
      name: "question1.1.3",
      visibleIf: "{question1.1} = \"item1\"",
      title: "Did the applicant fail to maintain application and supporting documents submitted to the State agency to support the institution’s eligibility and approval to participate in the CACFP?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.1} = \"item1\""
   },
   {
    name: "Question 1.2",
    elements: [
     {
      type: "radiogroup",
      name: "question1.2",
      visibleIf: "{question1} contains \"item1\"",
      title: "Do you have concerns regarding the institution/facility eligibility? ",
      choices: [
       {
        value: "item1",
        text: "Yes "
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item1\""
   },
   {
    name: "Question 1.2.1",
    elements: [
     {
      type: "checkbox",
      name: "question1.2.1",
      visibleIf: "{question1.2} = \"item1\"",
      title: "Which issues are there with the institution/facility eligibility?",
      choices: [
       {
        value: "item1",
        text: "Area eligibility data/documentation was missing"
       },
       {
        value: "item2",
        text: "Area eligibility was erroneously conferred (i.e. Institution/Center participating as area eligible but not geographically located in area eligible community)"
       },
       {
        value: "item3",
        text: "Facility did not qualify for current tiering category"
       },
       {
        value: "item4",
        text: "Institution/Facility did not serve eligible populations based on age/income requirements"
       }
      ]
     }
    ],
    visibleIf: "{question1.2} = \"item1\""
   },
   {
    name: "Question 1.3",
    elements: [
     {
      type: "radiogroup",
      name: "question1.3",
      visibleIf: "{question1} contains \"item1\"",
      title: "Was the institution/facility profit/non-profit status incorrect?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item1\""
   },
   {
    name: "Question 1.4",
    elements: [
     {
      type: "radiogroup",
      name: "question1.4",
      visibleIf: "{question1} contains \"item1\"",
      title: "Was the Institution/Facility type not correct or documentation missing (Centers, FDCHs, OSHCCs, Emergency Shelters, and At-Risk Afterschool Care Centers)?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item1\""
   },
   {
    name: "Question 1.5",
    elements: [
     {
      type: "radiogroup",
      name: "question1.5",
      visibleIf: "{question1} contains \"item1\"",
      title: "Is this a for-profit center?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item1\""
   },
   {
    name: "Question 1.5.1",
    elements: [
     {
      type: "radiogroup",
      name: "question1.5.1",
      visibleIf: "{question1.5} = \"item1\"",
      title: "Did the center not maintain record for each month reimbursement claimed documenting that at least 25 percent of enrollees or 25 percent of their licensed capacity, whichever was less were either Title XX or Title XIX beneficiaries or were eligible for F/RP meal benefits?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.5} = \"item1\""
   },
   {
    name: "Question 1.5.2",
    elements: [
     {
      type: "radiogroup",
      name: "question1.5.2",
      visibleIf: "{question1.5} = \"item1\"",
      title: "Did the center not provide annual report to SA on # of enrolled children eligible for free, reduced price, and paid rates of reimbursement, or at other times requested by SA?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.5} = \"item1\""
   },
   {
    name: "Question 1.6",
    elements: [
     {
      type: "radiogroup",
      name: "question1.6",
      visibleIf: "{question1} contains \"item1\"",
      title: "Is the center a temporary residential setting?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item1\""
   },
   {
    name: "Question 1.6.1",
    elements: [
     {
      type: "radiogroup",
      name: "question1.6.1",
      visibleIf: "{question1.6} = \"item1\"",
      title: "Is the institution not operated by a public or nonprofit org supporting homeless children in temp residential settings?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.6} = \"item1\""
   },
   {
    name: "Question 1.7",
    elements: [
     {
      type: "radiogroup",
      name: "question1.7",
      visibleIf: "{question1} contains \"item1\"",
      title: "Are there concerns regarding the program agreement?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item1\""
   },
   {
    name: "Question 1.7.1",
    elements: [
     {
      type: "radiogroup",
      name: "question1.7.1",
      visibleIf: "{question1.7} = \"item1\"",
      title: "Was there a record of the Program agreement at the institution?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.7} = \"item1\""
   },
   {
    name: "Question 1.7.1.1",
    elements: [
     {
      type: "checkbox",
      name: "question1.7.1.1",
      visibleIf: "{question1.7.1} = \"item2\"",
      title: "Check all that apply.",
      choices: [
       {
        value: "item1",
        text: "Agreement does not provide that the institution accepts final financial and administrative responsibility for management of a proper, efficient, and effective food service not that the institution will comply with all requirements under this part"
       },
       {
        value: "item2",
        text: "Agreement does not state that the sponsor must comply with all requirements of title VI of the Civil Rights Act of 1964, title IX of the Education Amendments of 1972, section 504 of the Rehabilitation Act of 1973, the Age Discrimination Act of 1975, and the Department's regulations concerning nondiscrimination (parts 15; 15a; and 15b of this title), including requirements for racial and ethnic participation data collection, public notification of the nondiscrimination policy, and reviews to assure compliance with such policy, to the end that no person may, on the grounds of race, color, national origin, sex, age, or disability, be excluded from participation in, be denied the benefits of, or be otherwise subjected to discrimination under, the Program"
       },
       {
        value: "item3",
        text: "Agreement does not notify the institution of the right of the State agency, the Department, and other State or Federal officials to make announced or unannounced reviews of their operations during the institution's normal hours of child or adult care operations, and that anyone making such reviews must show photo identification that demonstrates that they are employees of one of these entities."
       }
      ]
     }
    ],
    visibleIf: "{question1.7.1} = \"item2\""
   },
   {
    name: "Question 1.7.2",
    elements: [
     {
      type: "radiogroup",
      name: "question1.7.2",
      visibleIf: "{question1.7} = \"item1\"",
      title: "Was there a record of the current year's application at the institution?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.7} = \"item1\""
   },
   {
    name: "Question 1.7.3",
    elements: [
     {
      type: "radiogroup",
      name: "question1.7.3",
      visibleIf: "{question1.7} = \"item1\"",
      title: "Were there records of supporting documentation for the current year's application at the institution?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.7} = \"item1\""
   },
   {
    name: "Question 1.7.3.1",
    elements: [
     {
      type: "checkbox",
      name: "question1.7.3.1",
      visibleIf: "{question1.7.3} = \"item2\"",
      title: "Check all that apply",
      choices: [
       {
        value: "item1",
        text: "There was no evidence that these supporting documents were submitted to the State agency at the institution"
       },
       {
        value: "item2",
        text: "The supporting documents did not provide evidence of the institution's eligibility at the institution"
       },
       {
        value: "item3",
        text: "The supporting documents did not provide evidence of the institution's approval to participate in the CACFP at the institution"
       }
      ]
     }
    ],
    visibleIf: "{question1.7.3} = \"item2\""
   },
   {
    name: "Question 1.7.4",
    elements: [
     {
      type: "radiogroup",
      name: "question1.7.4",
      visibleIf: "{question1.7} = \"item1\"",
      title: "Were there records of all DCH agreements with the sponsoring organization?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1.7} = \"item1\""
   },
   {
    name: "Question 1.8",
    elements: [
     {
      type: "radiogroup",
      name: "question1.8",
      visibleIf: "{question1} contains \"item1\"",
      title: "Are there concerns regarding the institutions license?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item1\""
   },
   {
    name: "Question 1.8.1",
    elements: [
     {
      type: "checkbox",
      name: "question1.8.1",
      visibleIf: "{question1.8} = \"item1\"",
      title: "Check all that apply regarding the license",
      choices: [
       {
        value: "item1",
        text: "There was no license posted at the place which care is provided"
       },
       {
        value: "item2",
        text: "The license was not current"
       },
       {
        value: "item3",
        text: "The license did not have the correct name of the institution on it"
       },
       {
        value: "item4",
        text: "The posted license did not have a number of approved children or adults for which the institution can care"
       },
       {
        value: "item5",
        text: "There were more children or adults than allowed by license"
       },
       {
        value: "item6",
        text: "Participants at the institution exceeded the approved age range posted on the license"
       },
       {
        value: "item7",
        text: "The license was not approved by Federal, State, or local authority"
       },
       {
        value: "item8",
        text: "The institution did not meet State or local health and safety standards"
       },
       {
        value: "item9",
        text: "(If the institution operates on a reservation) The license was not approved by an Indian Tribal Organization"
       },
       {
        value: "item10",
        text: "The institution's meal claim exceeded the approved number of participants on its license"
       },
       {
        value: "item11",
        text: "(If the institution prepares food) The institution does not have a food production permit"
       },
       {
        value: "item11.1",
        text: "The food production permit is not current",
        visibleIf: "{question1.8.1} contains \"item11\""
       },
       {
        value: "item12",
        text: "The institution is a proprietary (for-profit) center"
       },
       {
        value: "item12.1",
        text: "The institution does not have records for each month Program reimbursement is claimed",
        visibleIf: "{question1.8.1} contains \"item12\""
       },
       {
        value: "item12.2",
        text: "The records did not provide evidence of enrollee or licensed capacity is Title XX or Title XIX or were eligible for free or reduced price meal benefits",
        visibleIf: "{question1.8.1} contains \"item12\""
       },
       {
        value: "item12.3",
        text: "The records did not provide the names of enrollees or licensed capacity",
        visibleIf: "{question1.8.1} contains \"item12\""
       },
       {
        value: "item12.4",
        text: "The names on the records did not match with the claiming record of the review month",
        visibleIf: "{question1.8.1} contains \"item12\""
       },
       {
        value: "item13",
        text: "The institution had area eligibility for at-risk afterschool centers"
       },
       {
        value: "item13.1",
        text: "The institution did not operate within a geographical boundary of an elementary, middle, or high school",
        visibleIf: "{question1.8.1} contains \"item13\""
       },
       {
        value: "item13.2",
        text: "There were not 50 of the elementary, middle, or high school's enrolled participants eligible for free or reduced-price school meals",
        visibleIf: "{question1.8.1} contains \"item13\""
       },
       {
        value: "item13.3",
        text: "The institution did not offer education or enrichment activities",
        visibleIf: "{question1.8.1} contains \"item13\""
       },
       {
        value: "item13.3.1",
        text: "The activities were not organized",
        visibleIf: "{question1.8.1} contains \"item13.3\""
       },
       {
        value: "item13.3.2",
        text: "The activities were not regularly scheduled",
        visibleIf: "{question1.8.1} contains \"item13.3\""
       },
       {
        value: "item14",
        text: "The is institution is a temporary residential setting (emergency shelter)"
       },
       {
        value: "item14.1",
        text: "The program was not operated by a public or nonprofit organization",
        visibleIf: "{question1.8.1} contains \"item14\""
       },
       {
        value: "item14.2",
        text: "The public or nonprofit organization did not support homeless children living in temporary residential settings",
        visibleIf: "{question1.8.1} contains \"item14\""
       }
      ]
     }
    ],
    visibleIf: "{question1.8} = \"item1\""
   },
   {
    name: "Question 1.9",
    elements: [
     {
      type: "checkbox",
      name: "question1.9",
      visibleIf: "{question1} contains \"item1\"",
      title: "Check all that apply regarding the agreement.",
      choices: [
       {
        value: "item1",
        text: "The agreement did not provide that the institution accepts final financial and administrative responsibility for management of a proper, efficient, and effective food service, and will comply with all requirements under this part"
       },
       {
        value: "item2",
        text: "The agreement did not state that the sponsor must comply with the requirements of title VI of the Civil Rights Act of 1964"
       },
       {
        value: "item3",
        text: "The agreement did not state that the sponsor must comply with the requirements of title IX of the Education Amendments of 1972"
       },
       {
        value: "item4",
        text: "The agreement did not state that the sponsor must comply with the requirements of section 504 of the Rehabilitation Act of 1973"
       },
       {
        value: "item5",
        text: "he agreement did not state that the sponsor must comply with the requirements of the Age Discrimination Act of 1975"
       },
       {
        value: "item6",
        text: "The agreement did not state that the sponsor must comply with the requirements of the Department's regulations concerning  nondiscrimination, including requirements for racial and ethnic participation data collection, nondiscrimination, including requirements for racial and ethnic participation data collection, nondiscrimination policy, and reviews to assure compliance with such policy"
       },
       {
        value: "item7",
        text: "The agreement did not notify the institution of the right of the State agency, the Department, and other State or Federal officials to make announced or unannounced reviews of their operations during the institution's normal hours of child or adult care operations, and that anyone making such reviews must show photo identification that demonstrates that they are employees of one of these entities"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item1\""
   },
   {
    name: "Question 2.1",
    elements: [
     {
      type: "radiogroup",
      name: "question2.1",
      visibleIf: "{question1} contains \"item2\"",
      title: "Do you have concerns regarding the daycare center enrollment records?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\""
   },
   {
    name: "Question 2.2",
    elements: [
     {
      type: "radiogroup",
      name: "question2.2",
      visibleIf: "{question1} contains \"item2\"",
      title: "Were the enrollment records for the sponsor's daycare missing?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\""
   },
   {
    name: "Question 2.2.1",
    elements: [
     {
      type: "comment",
      name: "question2.2.1",
      visibleIf: "{question2.2} = \"item1\"",
      title: "Please enter the sponsor's response or reaction."
     }
    ],
    visibleIf: "{question2.2} = \"item1\""
   },
   {
    name: "Question 2.3",
    elements: [
     {
      type: "radiogroup",
      name: "question2.3",
      visibleIf: "{question1} contains \"item2\"",
      title: "Does the daycare center have enrollment records that do not match up with the children who attend the center?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\""
   },
   {
    name: "Question 2.3.1",
    elements: [
     {
      type: "comment",
      name: "question2.3.1",
      visibleIf: "{question2.3} = \"item1\"",
      title: "Please enter the sponsor's response or reaction."
     }
    ],
    visibleIf: "{question2.3} = \"item1\""
   },
   {
    name: "Question 2.4",
    elements: [
     {
      type: "radiogroup",
      name: "question2.4",
      visibleIf: "{question1} contains \"item2\"",
      title: "Does the daycare center (or centers) have enrollment records for all the children who attend the center, but the records are missing some of the required information?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\""
   },
   {
    name: "Question 2.4.1",
    elements: [
     {
      type: "radiogroup",
      name: "question2.4.1",
      visibleIf: "{question2.4} = \"item1\" and {question1} contains \"item2\"",
      title: "Were the children's first and/or last name missing for ALL the children in one or more of the sponsor's daycare centers.",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question2.4} = \"item1\""
   },
   {
    name: "Question 2.4.2",
    elements: [
     {
      type: "radiogroup",
      name: "question2.4.2",
      visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\"",
      title: "Were the children's birthdates are missing for ALL the children in one or more of the sponsor's daycare centers?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\""
   },
   {
    name: "Question 2.4.3",
    elements: [
     {
      type: "radiogroup",
      name: "question2.4.3",
      visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\"",
      title: "Were the hours of care are missing for ALL the children in one or more of the sponsor's daycare centers?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\""
   },
   {
    name: "Question 2.4.4",
    elements: [
     {
      type: "radiogroup",
      name: "question2.4.4",
      visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\"",
      title: "Were the meals the child normally eats while in care is missing for ALL the children in one or more of the sponsor's daycare centers?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\""
   },
   {
    name: "Question 2.4.5",
    elements: [
     {
      type: "radiogroup",
      name: "question2.4.5",
      visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\"",
      title: "Was annual documentation that the information is updated and current missing for all the children who attend the center?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\""
   },
   {
    name: "Question 2.4.6",
    elements: [
     {
      type: "radiogroup",
      name: "question2.4.6",
      visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\"",
      title: "Was the annual documentation that shows the information is updated and current available, but not signed by the children's parents or guardians?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\""
   },
   {
    name: "Question 2.4.7",
    elements: [
     {
      type: "radiogroup",
      name: "question2.4.7",
      visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\"",
      title: "Was Head Start or Early Head Start claiming status documentation is missing or out of date?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\""
   },
   {
    name: "Question 2.4.7.1",
    elements: [
     {
      type: "radiogroup",
      name: "question2.4.7.1",
      visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\" and {question2.4.7} = \"item1\"",
      title: "Was there a statement of enrollment in Head Start/Early Head Start?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\" and {question2.4.7} = \"item1\""
   },
   {
    name: "Question 2.4.7.2",
    elements: [
     {
      type: "radiogroup",
      name: "question2.4.7.2",
      visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\" and {question2.4.7} = \"item1\"",
      title: "Was there a list of participants provided by a Head Start/Early Head Start official?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\" and {question2.4.7} = \"item1\""
   },
   {
    name: "Question 2.4.8",
    elements: [
     {
      type: "radiogroup",
      name: "question2.4.8",
      visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\"",
      title: "Were there enrolled children/adults that did not meet the age status requirements?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\""
   },
   {
    name: "Question 2.4.8.1",
    elements: [
     {
      type: "radiogroup",
      name: "question2.4.8.1",
      visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\" and {question2.4.8} = \"item1\"",
      title: "Were there persons age 12 and under?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\" and {question2.4.8} = \"item1\""
   },
   {
    name: "Question 2.4.8.2",
    elements: [
     {
      type: "radiogroup",
      name: "question2.4.8.2",
      visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\" and {question2.4.8} = \"item1\"",
      title: "Were there persons age 15 and under who are children of migrant workers?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\" and {question2.4.8} = \"item1\""
   },
   {
    name: "Question 2.4.8.3",
    elements: [
     {
      type: "radiogroup",
      name: "question2.4.8.3",
      visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\" and {question2.4.8} = \"item1\"",
      title: "Were there persons with disabilities?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\" and {question2.4.8} = \"item1\""
   },
   {
    name: "Question 2.4.8.4",
    elements: [
     {
      type: "radiogroup",
      name: "question2.4.8.4",
      visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\" and {question2.4.8} = \"item1\"",
      title: "For at-risk afterschool care centers, were there persons age 18 and under at the start of the school year?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\" and {question2.4.8} = \"item1\""
   },
   {
    name: "Question 2.4.8.5",
    elements: [
     {
      type: "radiogroup",
      name: "question2.4.8.5",
      visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\" and {question2.4.8} = \"item1\"",
      title: "For adult participants, were there persons 60 and older?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.4} = \"item1\" and {question2.4.8} = \"item1\""
   },
   {
    name: "Question 2.5",
    elements: [
     {
      type: "radiogroup",
      name: "question2.5",
      visibleIf: "{question1} contains \"item2\"",
      title: "Do you have concerns regarding attendance?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\""
   },
   {
    name: "Question 2.5.1",
    elements: [
     {
      type: "radiogroup",
      name: "question2.5.1",
      visibleIf: "{question1} contains \"item2\" and {question2.5} = \"item1\"",
      title: "Are accurate attendance records not maintained on a daily basis/daily attendance records missing?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.5} = \"item1\""
   },
   {
    name: "Question 2.5.2",
    elements: [
     {
      type: "radiogroup",
      name: "question2.5.2",
      visibleIf: "{question1} contains \"item2\" and {question2.5} = \"item1\"",
      title: "Are attendance records not maintained separately from meal count records (3b p.21)?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.5} = \"item1\""
   },
   {
    name: "Question 2.5.3",
    elements: [
     {
      type: "checkbox",
      name: "question2.5.3",
      visibleIf: "{question1} contains \"item2\" and {question2.5} = \"item1\"",
      title: "Are daily attendance records incomplete or missing information? (check all that apply)",
      choices: [
       {
        value: "item1",
        text: "Student names"
       },
       {
        value: "item2",
        text: "Meals served by type (i.e. breakfast, lunch, supper, snack)"
       },
       {
        value: "item3",
        text: "Time of meal service"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.5} = \"item1\""
   },
   {
    name: "Question 2.5.4",
    elements: [
     {
      type: "radiogroup",
      name: "question2.5.4",
      visibleIf: "{question1} contains \"item2\" and {question2.5} = \"item1\"",
      title: "Did the attendance records include children not documented in enrollment records?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.5} = \"item1\""
   },
   {
    name: "Question 2.6",
    elements: [
     {
      type: "radiogroup",
      name: "question2.6",
      visibleIf: "{question1} contains \"item2\"",
      title: "Do you have concerns regarding the F/RP applications?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\""
   },
   {
    name: "Question 2.6.1",
    elements: [
     {
      type: "radiogroup",
      name: "question2.6.1",
      visibleIf: "{question1} contains \"item2\" and {question2.6} = \"item1\"",
      title: "Were F/RP meal applications not on file for each participant for whom meals claimed F/RP rate?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.6} = \"item1\""
   },
   {
    name: "Question 2.6.2",
    elements: [
     {
      type: "radiogroup",
      name: "question2.6.2",
      visibleIf: "{question1} contains \"item2\" and {question2.6} = \"item1\"",
      title: "Were the F/RP applications on file incomplete?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.6} = \"item1\""
   },
   {
    name: "Question 2.6.3",
    elements: [
     {
      type: "radiogroup",
      name: "question2.6.3",
      visibleIf: "{question1} contains \"item2\" and {question2.6} = \"item1\"",
      title: "Did the FR/P applications have incorrect eligibility determinations?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.6} = \"item1\""
   },
   {
    name: "Question 2.6.4",
    elements: [
     {
      type: "radiogroup",
      name: "question2.6.4",
      visibleIf: "{question1} contains \"item2\" and {question2.6} = \"item1\"",
      title: "Does the enrollment roster not have the names/eligibility statuses of all participants enrolled?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.6} = \"item1\""
   },
   {
    name: "Question 2.6.5",
    elements: [
     {
      type: "radiogroup",
      name: "question2.6.5",
      visibleIf: "{question1} contains \"item2\" and {question2.6} = \"item1\"",
      title: "Did the enrollment roster or other documentation allow for overt identification?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\" and {question2.6} = \"item1\""
   },
   {
    name: "Question 2.7",
    elements: [
     {
      type: "radiogroup",
      name: "question2.7",
      visibleIf: "{question1} contains \"item2\"",
      title: "Were the enrollment/eligibility records shared with or made available to unauthorized persons?",
      choices: [
       {
        value: "item1",
        text: "Yes"
       },
       {
        value: "item2",
        text: "No"
       }
      ]
     }
    ],
    visibleIf: "{question1} contains \"item2\""
   }
  ]
 };

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});

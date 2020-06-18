# CACFP-SD

Homepage
  -HTML
  -Bootstrap

Survey Questions
  -Uses SurveyJS
  -Questions and format are saved as JSON
  -To make the questions shown dependent on previous answers, use the "VisibleIf" logic
  -Questions are labeled by subquestions depth (ie 1.1 is the first subquestion of question 1)
  
Scaling
  -To add more questions:
    1) Go to SurveyJS and set up account
    2) Create a new survey
    3) Go to Questionaire.js file in this repository
    4) Copy the contents of "var = json" (this holds all the question data

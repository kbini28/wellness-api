
# Back in 10!
Back in 10 is a client application that emphasises wellness and personal and mental health. The application is based on creating calendar events to remind the user to take a break during a hectic work schedule. Maintaining an appropriate work-life balance is one of the most important practices for improving both physical and mental health, as well as increasing productivity while at work.

This application will generate a calendar unique to each user, which will schedule wellness activities within their day-to-day tasks. In a future version, Back in 10 will be able to sync with a user's personal or work calendar, such as a Google or Outlook Calendar, to be able to schedule events within an existing calendar. It is important to make time for breaks, and often during a busy work day, breaks and wellness activities will be the first activity postponed to make room for more productivity. While that seems like a good idea in the short term, it will actually reduce productivity over the course of the day.

## Functionality

Back in 10 allows a user to Crete, Read, Update and Delete a calandar event with a date, time (start and end time), type of activity, and an optional location. The current version allows the user to input an activity of their choosing, however the next version will provide a pre-created dropdown list of activities to choose from, as well as a blank input field to generate a custom option. Version two will also feature a live calendar in which to input events, rather than a list-style display. Future versions will also feature a random activity generator, to motivate an individual to try new or different activities from their typical routine.

## Additional Stretch Goals
Users will be able to sync their existing calendar applications (like Google, Apple or Outlook Calendars), to be able to input wellness activities within their personal or work schedules.
A user will be allowed to invite other users to their wellness activities, similar to a meeting or appointment request in an Outlook calendar.

### Live Links
Deployed Site: Not yet deployed
Deployed API: [Heroku](https://protected-refuge-08536.herokuapp.com)

API Repository: [GitHub-Wellness-API](https://github.com/kbini28/wellness-api)
Client Repository: [GitHub-Wellness-Client](https://github.com/kbini28/wellness-client)

### Technologies Used (API)
Express.js, MongoDB, Mongoose, Javascript

### Entity Relationship Diagram

### Route Catalog
**Methods Used**
  - GET
  - POST
  - PATCH
  - DELETE

**Paths Used**
  - /wellnessEvents
  - /wellnessEvents/:id
  - /sign-up
  - /sign-in
  - /change-password
  - /sign-out

## Unsolved Problems
Ending on a high note, I fell short on a few areas that I had hoped to complete in Version 1. I was not able to get the Update form to populate with existing data from the event. Also the calendar library/catalog from React was not finished in time. Obviously styling was not in the forefront either, as I wanted to try to push myself to complete the calendar first. One other thing I wanted to complete was to populate ONLY the owner's events to their calendar. That may be the most important feature to fix for the next version.

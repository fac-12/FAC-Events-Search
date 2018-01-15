# FAC-Events-Search

## Intro

We hope that this app makes it easier to find, share and discuss events of interest to the London FAC community without having to wade through Meetup.com or monitor Gitter channels, while building a sense of broader FAC community.

Our initial prototype is available here: https://invis.io/RBF7TJ4J8

## Accessing the site and database for Code Review


We hope that this app makes it easier to find, share and discuss events of interest to the London FAC community without having to wade through Meetup.com or monitor Gitter channels, while building a sense of broader FAC community.

Our initial prototype is available here:  https://invis.io/RBF7TJ4J8

## Accessing the site and database for Code Review

Our app in its current state is available at fac-eventfinder.herokuapp.com

Our heroku database url is postgres://ljgmdukbulvykn:ee0db791d0f97be746902f36257f9256fdbd6c9e90c7c741ecbb70cfe32523c9@ec2-54-217-243-160.eu-west-1.compute.amazonaws.com:5432/d8d8busu9hibb8

The basic scaffolding is all up now, but there is still clearly lots and lots of work to get done this week!


 ## Getting Started 

 clone the repo ```Git clone https://github.com/fac-12/FAC-Events-Search```
 
 go into FAC-Events-Search by typing ``` cd FAC-Events-Search ```
 
 go into the client folder ``` cd client ``` 
 
 ```npm install``` in client folder then ``` cd .. ```
 ``` npm install ``` in root folder 
 
 ## connecting to db 
 while in root directory 
 
 set up a dev.js file in config ``` touch config/dev.js ``` 
 
 in dev.js insert the following code ```
 module.exports = {
    githubClientID: "7c5862763ead8eed95b1",
    githubClientSecret: "contact us for client secret",
    DATABASE_URL: "postgres://ljgmdukbulvykn:ee0db791d0f97be746902f36257f9256fdbd6c9e90c7c741ecbb70cfe32523c9@ec2-54-217-243-                    160.eu-west-1.compute.amazonaws.com:5432/d8d8busu9hibb8", 
    COOKIE_KEY: "this can be any sequence of characters you like"
};
 

## Tech Stack 

React, Redux, postgresql, express 


## User Stories

Some of these are a bit granular, so as to be useful for us as a checklist.

#### Sign up/Sign In & Landing Page


* [x] The user can log in with their github account.
* [ ] The user cannot log in if they are not a member of founders and coders on github. They will receive an appropriate message of explanation.
* [ ] The landing page will have a preview of upcoming events. If the user clicks on one, they will be directed to the associated meetup page.
* [x] Users can logout
  #### Profile Page
* [x] The user's profile page is pre-populated with information from their github account.
* [ ] The user can edit their profile information, aside from their gitter handle and photo.
* [ ] The user is directed to the profile page upon login if they have not yet filled out their cohort, otherwise directed to the events page
  #### Events Page
* [x] The user can view upcoming events on the events page.
* [ ] The user can see basic details about upcoming events, with the option to click and view more information.
* [ ] The user can see how many other users have expressed interest in an event.
* [ ] The user can indicate interest in an event.
* [ ] The user can filter events via:
  * [ ] My Events (events they expressed interest in)
  * [ ] Popular events (events sorted by popularity among users)
  * [ ] Suggested events (events hosted by organizations the user has tagged)
  * [ ] All events matching a search by text or date
* [x] The user can add events.
  * [x] The user can add events just by Meetup url
  * [ ] The user can add events manually
  * [ ] The user will receive an appropriate message if something goes wrong adding an event

#### Event Page

* [ ] The user can view detailed information about an event with full information pulled from Meetup where possible.
* [ ] The user can view which other users have indicated interest in attending the event.
* [ ] The user can comment on the event.
* [ ] The user can see if other events by the same organization are in the database

#### Hosts Page

* [ ] Certain organizations will have all of their meetup events automatically added to the database.
* [ ] Users can tag a selection of these organizations to have their events show up in the "suggested" filter.
* [ ] Users can add new organizations to the list of organizations whose events are auto-included.

#### About Page

* [x] Users can read about how the app works and its purpose.

#### Stretch/Future User stories

* [ ] The user can view more information about a host organization, including past events with ratings.
* [ ] Users can review past events with star system. Those ratings will be summarized and displayed for individual host organizations.
* [ ] Users can connect their Meetup account so they can rsvp etc through the app
* [ ] Users can add events to the database via a Chrome extension

- [x] The user can log in with their github account.
- [ ] The user cannot log in if they are not a member of founders and coders on github. They will receive an appropriate message of explanation.
- [ ] The landing page will have a preview of upcoming events. If the user clicks on one, they will be directed to the associated meetup page.
- [x] Users can logout
#### Profile Page
- [x] The user's profile page is pre-populated with information from their github account.
- [ ] The user can edit their profile information, aside from their gitter handle and photo.
- [ ] The user is directed to the profile page upon login if they have not yet filled out their cohort, otherwise directed to the events page
#### Events Page
- [x] The user can view upcoming events on the events page.
- [ ] The user can see basic details about upcoming events, with the option to click and view more information.
- [ ] The user can see how many other users have expressed interest in an event.
- [ ] The user can indicate interest in an event.
- [ ] The user can filter events via:
    - [ ] My Events (events they expressed interest in)
    - [ ] Popular events (events sorted by popularity among users)
    - [ ] Suggested events (events hosted by organizations the user has tagged)
    - [ ] All events matching a search by text or date
- [x] The user can add events.
    - [x] The user can add events just by Meetup url
    - [ ] The user can add events manually
    - [ ] The user will receive an appropriate message if something goes wrong adding an event

#### Event Page
- [ ] The user can view detailed information about an event with full information pulled from Meetup where possible.
- [ ] The user can view which other users have indicated interest in attending the event.
- [ ] The user can comment on the event.
- [ ] The user can see if other events by the same organization are in the database

#### Hosts Page
- [ ] Certain organizations will have all of their meetup events automatically added to the database. 
- [ ] Users can tag a selection of these organizations to have their events show up in the "suggested" filter.
- [ ] Users can add new organizations to the list of organizations whose events are auto-included.

#### About Page
- [x] Users can read about how the app works and its purpose.

#### Stretch/Future User stories
- [ ] The user can view more information about a host organization, including past events with ratings.
- [ ] Users can review past events with star system. Those ratings will be summarized and displayed for individual host organizations.
- [ ] Users can connect their Meetup account so they can rsvp etc through the app
- [ ] Users can add events to the database via a Chrome extension


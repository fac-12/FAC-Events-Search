import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import expect from "expect";
import * as actions from "../actions/eventActions";
import * as types from "../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("fetchAllEvents actions", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("returns obj with events", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
          {
            id: 1,
            event_name:
              "Coinscrum {Presents} w/ Jimmy Song (Bitcoin Core Contributor ) & Brett Scott",
            event_datetime: "1516820400000",
            host_org_name: "Coinscrum",
            venue_name: "Monzo",
            venue_address: "230 City Road",
            venue_postcode: "EC1Y 1BE",
            event_url: "https://www.meetup.com/coinscrum/events/245909543/",
            event_desc: "eventDesc",
            venue_lat: "51.528488",
            venue_lon: "-0.093078",
            num_interested: "2",
            suggested: false,
            interested: true
          }
        ]
      });

      const expectedActions = [
        {
          type: actions.fetchAllEvents,
          payload: [
            {
              id: 1,
              event_name:
                "Coinscrum {Presents} w/ Jimmy Song (Bitcoin Core Contributor ) & Brett Scott",
              event_datetime: "1516820400000",
              host_org_name: "Coinscrum",
              venue_name: "Monzo",
              venue_address: "230 City Road",
              venue_postcode: "EC1Y 1BE",
              event_url: "https://www.meetup.com/coinscrum/events/245909543/",
              event_desc: "eventDesc",
              venue_lat: "51.528488",
              venue_lon: "-0.093078",
              num_interested: "2",
              suggested: false,
              interested: true
            }
          ]
        }
      ];

      const store = mockStore({ events: {} });

      return store.dispatch(actions.fetchAllEvents("29644807")).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("should return with an object of users interested in event", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("returns obj with events", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
          {
            id: "28806114",
            name: null,
            github_username: "m5019",
            email: null,
            photo_url: "https://avatars0.githubusercontent.com/u/28806114?v=4",
            cohort: null,
            bio: null,
            events_id: 1,
            users_id: "28806114"
          },
          {
            id: "29644807",
            name: "Mohamed Osman",
            github_username: "trc5019",
            email: null,
            photo_url: "https://avatars0.githubusercontent.com/u/29644807?v=4",
            cohort: null,
            bio: null,
            events_id: 1,
            users_id: "29644807"
          }
        ]
      });

      const expectedActions = [
        {
          type: actions.getEventInterest,
          payload: [
            {
              id: "28806114",
              name: null,
              github_username: "m5019",
              email: null,
              photo_url:
                "https://avatars0.githubusercontent.com/u/28806114?v=4",
              cohort: null,
              bio: null,
              events_id: 1,
              users_id: "28806114"
            },
            {
              id: "29644807",
              name: "Mohamed Osman",
              github_username: "trc5019",
              email: null,
              photo_url:
                "https://avatars0.githubusercontent.com/u/29644807?v=4",
              cohort: null,
              bio: null,
              events_id: 1,
              users_id: "29644807"
            }
          ]
        }
      ];

      const store = mockStore({ events: {} });

      return store.dispatch(actions.getEventInterest("1")).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

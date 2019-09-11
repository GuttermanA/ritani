# Ritani Code Challenge

## Local Setup

Install:

```sh
  yarn install
```

For personal development, please provide your own Github Personal Access token. If you do not, you will be rate limited to 50 reequests per hour per the Github API documentation.

Place it in a .env.local file in the root directory like so:

`REACT_APP_PERSONAL_ACCESS_TOKEN=YOUR TOKEN HERE`

Then you can start the application:

```sh
yarn start
```

Run tests:

```sh
yarn test
```

## Overview

This repository contains my one page application for the Ritani code challenge.

Features:

- Search for any Github username in the search bar to return their followers
  - Returns a list of followers if they exist
  - Returns links to user Github page and blog if it exists
  - Returns follower count
  - Search will be disabled until server request is successfully completed
  - Search will not fire if same username is passed as previous search
- Follower list
  - Contains a list of followers as their avatar 30 at a time
  - If there are more than 30 followers, the button at the bottom of the screen will become active to load more followers
  - Additional followers will be loaded 30 at a time
  - Loading additional followers will trigger a scroll to the load button if it leaves the screen
- Follower avatars
  - Can be moused over to display a button with their Github username
  - Clicking the button will fire off a search for that user, replacing the results in the current window
- Error messages from the server will be displayed in a conditionally rendered box at below the search bar

In the remainder of this README I will describe my design decisions regarding app structure, styling, and testing.

## Authentication

Github's API requires authentication otherwise it throttles your requests to 50 per hour. While it is possible to register an app with Github, I decided to created a read only personal access token for the purpose of this project as I expect it to be deployed to a public facing URL for a limited time. The auth token is stored in Heroku's config vars.

### App Structure

Since this is a React app, project structure is up to the user. In this case, I chose a slightly more complicated structure to demonstrate my understanding of separation of concerns and how to lay the foundation for expanding to a much larger application without the headache of refactoring in the future.

```bash
./src
├── index.css
├── index.js
├── App.css
├── App.js
├── App.test.js
├── api
├── lib
├── components
│   ├── Button
│   ├── Container
│   ├── Error
│   ├── Form
│   │   ├── FormButton.js
│   │   ├── Form.css
│   │   ├── FormField.js
│   │   ├── Form.js
│   │   ├── FormLabel.js
│   │   ├── index.js
│   │   └── __tests__
│   ├── Header
│   ├── Image
│   ├── List
│   └── index.js
└──  scenes
    ├── FollowerList
    │   ├── components
    │   ├── FollowerList.js
    │   ├── index.js
    │   └── __tests__
    ├── SearchBar
    ├── UserInfo
    └── index.js
```

The primary folders of the application are `api, lib, components, and scenes`.

- api
  - Contains application logic for connecting to the Github API through their recommended library Octokit
- lib
  - Contains utility functions
- components
  - Contains general purpose components. In the example file tree above I have exposed the Form component which is broken down into its primary parts. These components are written to be reusable anywhere.
- scenes
  -- Contains collections of components that make up parts of the application. Each subfolder contains the completed component and a folder containing all subcomponents that will only be used in particular scenes. Generally, these subcomponents are made up of the general purpose components folder mentioned above, but can also contain custom components.

Everything is put together in `App.js`. CSS can be found in component folders where it is necessary. General CSS logic can be found in

#### App.js

Ultimately I decided not to use Redux in this application because it would add unnecessary complexity. Therefore, application state has been hoisted into App.js. It contains all of the logic used to connect to the Github API and update the React application state with the response data. State is then passed down via props to the display components.

### Detailed Features Descriptions

In this section I will explain application features in more detail.

#### Search

Basic functionality:

- Search for any Github username in the search bar to return their followers
  - Returns a list of followers if they exist
  - Returns links to user Github page and blog if it exists
  - Returns follower count

Additional logic:

- Search will be disabled until server request is complete
- Search will not fire and no data will be updated if search string is the same as the previous search string
- Search field will update with the username currently displayed in the user data below the search bar. This is important in the case when searching through clicking user avatars.

Search takes place in three stages:

1. fetchUser
2. fetchFollowers - if fetchUser resolves successfully
3. Resolve errors - if any

`fetchUser` uses the `octokit.users.getByUsername` function passing the username. The `followers_url` attribute from the result is then passed to `fetchFollowers`, which uses `octokit.request` method.

Each result set from the server updates the React state with relevant data. The Link header is parsed and stored in the state for follower requests to assist with pagination.

#### Follower List

Basic functionality:

- Follower list
  - Contains a list of followers as their avatar 30 at a time
  - If there are more than 30 followers, the button at the bottom of the screen will become active to load more followers
  - Additional followers will be loaded 30 at a time
  - Loading additional followers will trigger a scroll to the load button if it leaves the screen

Additional functionality:

- Loading additional followers is done by taking the url labeled next in Link header data stored in the state and passing it to `fetchFollowers`
- The load more followers button is disabled once their is no longer a Link header labeled "next" in the state
- If the button ends outside of the view port after follower load, the app auto scrolls until its visible again using React hooks

#### Follower avatars

Basic functionality:

- Follower avatars
  - Can be moused over to display a button with their Github username
  - Clicking the button will fire off a search for that user, replacing the results in the current window

### Testing

Testing was limited to functional testing of the higher level components due to time and scope constraints. Jest with @testing-library/react were used to mock and test components. Tests can be found in the `__tests__` folders of their related component.

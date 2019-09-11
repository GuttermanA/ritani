# Ritani Code Challenge

### Local Setup

```sh
  yarn install
```

### Overview

This repository contains my one page application for the Ritani code challenge. In this overview I will take some time to explain my reasoning for certain design decisions.

#### App Structure

Since this is a React app, project structure is up to the user. In this case, I chose a slightly more complicated structure to demonstrate my understanding of separation of concerns and how to lay the foundation for expanding to a much larger application without the headache of refactoring in the future.

```bash
.
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
│   ├── index.js
│   └── List
└──  scenes
    ├── FollowerList
    │   ├── components
    │   ├── FollowerList.js
    │   ├── index.js
    │   └── __tests__
    ├── index.js
    ├── SearchBar
    └── UserInfo

```

#Pepper IHR

Pepper IHR is a vocal and graphical interface for Pepper robot used at the RoboCup@Home 2019.

It uses [React](https://reactjs.org/) for the GUI and `QiChat` for the vocal interface. 

Pepper's tablet run a modified Chromium version 35 which doesn't understand ECMA 2016+ so we use [Babel](https://babeljs.io/) to make JavaScript undestandable by Pepper. 

#Quick Start
This project uses [Yarn](https://yarnpkg.com/en/docs/install) as dependency manager.

First clone the project and install dependencies:
`git clone https://gitlab.com/Elyspio/pepper PepperIHR`
`cd PepperIHR`
`yarn install`




The entry point of the project is `localManager.py`

Then you can run the project with:
- Development : `yarn start`
- Production : `yarn build`

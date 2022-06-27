# IED - Icelandic Earthquake Data

## Screenshots

### Map Lightmode
![Map Lightmode](/screenshots/map-light.png)
### Map Darkmode
![Map Darkmode](/screenshots/map-dark.png)
### Table Lightmode
![Table Lightmode](/screenshots/table-light.png)
### Table Darkmode
![Table Darkmode](/screenshots/table-dark.png)

## Application Description

This frontend displays the latest earthquake data from the [apiis.is](https://apis.is/earthquake/is).
It is written in Javascript using React as a framework. There is a map that displays the location of recent earthquakes, as well as a tabular data view to examine the data.



## Table of Contents

* [Demo](#demo)
* [Tech Stack](#tech-stack)
* [Features](#features)
* [Installation](#installation)
* [Configuration Setup](#configuration-setup)
* [Usage](#usage)
* [License](#license)
* [Contact Information](#contact-information)

## Demo

View the application at [Icelandic Earthquake Data](http://earthquake-react-app-prod.herokuapp.com)

## Technology Stack

    React
    Redux (react-redux)
    Mapbox (react-map-gl)
    

## Features

This frontend features an interactable map. The map includes clickable map markers that display detailed information about each earthquake.
There is also a tabular data view, that can be sorted by any column. The frontend fetches data periodically, the interval can be configured in the navigation bar.
You can toggle between lightmode and darkmode as well in the navigation bar. There is also a rudimentary mobile view.

## Installation

1. `git clone git@github.com:R1klus/icelandic-earthquake-data.git`
2. `cd icelandic-earthquake-data`
3. `npm install`
4. `npm start`

## Configuration Setup

For the application to run properly you need to have a Mapbox API Key which can be retrieved [here](https://www.mapbox.com/), and configure a .env file according to the .env.template file that can be viewed in the repository

    REACT_APP_EARTHQUAKE_API_URL=
    REACT_APP_MAPBOX_API_KEY=

## Usage

### Map controls - Desktop
To pan the view you can left click and drag. \
To pitch and rotate the view you can right click and drag. \
To zoom in and out you can use the scroll wheel.

### Map controls - Mobile
To pan the view you can you a single finger and drag. \
To pitch and rotate the view you can use a two finger pinch and rotate. \
To zoom in and out you can use a two finger pinch.

### Navigation controls - Desktop
Map and Data redirect you to either the map view or the tabular data view respectively. \
Darkmode can be toggled with by clicking the toggle in the navigation bar. \
Fetch interval can be changed by clicking either the right arrow to increment by one minute or the left arrow to decrement by one minute.
Note: The quickest interval is 5 minutes (default) and the slowest is 20 minutes. 

### Navigation controls - Mobile
When in the mobile view you can click the burger menu icon to drop-down a navigation menu. And to close it again you can press the X. 
Other controls are the same as in the desktop mode

### Data controls - Desktop
You can hover over each row to highlight it. And you can click the heading of each column to sort the data by that column. If you click the same column twice you will reverse sort the data by that column.


## License

MIT License

Copyright (c) 2022 Ríkharður Friðgeirsson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact Information

[Email](rikhardur.fridgeirsson@gmail.com)
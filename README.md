# JSON Visualizer

This web-app helps in visualizing (and prettifying) any JSON input, using beautiful graph-like structures and color codes.

How does it work? It converts the user's JSON input into a special parent-child hierarchy understandable by the library D3.js, using a recursive function. It then adds nodes and links using that hierarchy, and special color codes and tooltips depending on whether it's a terminal node or not.

[Try it now!](https://jsonvisualizer.netlify.com)

## Screenshots

![JSON Visualizer](https://raw.githubusercontent.com/chaitanyabaranwal/JSON_Visualizer/master/public/screenshots.gif)

## Features
1. JSON-Input form takes the JSON-input from the user.
2. The Prettify view converts the unformatted JSON into having proper indentation and color codes.
3. The visualize view uses D3.js to convert the JSON into a graph-like structure, with different colors for terminal and internal nodes. Hovering over the nodes gives a tooltip showing the description of that particular node, and hence that particular element of the JSON.

## Getting Started Locally
1. Fork the repository and clone it into your local storage.
2. Install requirements from `npm install`.
4. Run the program using `npm start`.

## Deployment
The app has been deployed using netlify, and can be found [here](https://jsonvisualizer.netlify.com).

## Built With
* [React](https://reactjs.org/) - for web-app setup
* [D3.js](https://d3js.org/) - for JSON visualization
* [Material-UI](https://material-ui.com/) - for front-end components

## Authors
* **Chaitanya Baranwal** - Github: [chaitanyabaranwal](https://github.com/chaitanyabaranwal)

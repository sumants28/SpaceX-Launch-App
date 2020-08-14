This is an application which displays all the launches performed by SpaceX.
Few things to keep in mind:
1. ISP has restricted access to imgbox website which contains the images for each mission, hence I have downloaded one image from google and used it for all of the missions.
2. Due to time constraints I was unable to perform unit tests.I would like to let you know that I have some experience in using jest and enzyme as well.
3. As there was no ask to have a clear filters button, there is no way to clear filters for the user other than changing it.

## Getting Started
Download and extract the zip file of this repository.
Open terminal and navigate to the folder where zip file is extracted and execute the following command(install nodejs if it isnt already installed):
```bash
npm install
```
Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Technology Stack
# Major libraries user:
Reactjs
Nextjs
Sass

## Approach
While designing the application the idea was to make a component for anything that will be reused.
Styling and alignment:
Create a flex container for the application and set set flex direction to column.(Mobile view)
Split the application first in two grids(desktop view) which will have the filters in one column and the container with all the launches in the other.
Split the launch container in multiple grids to display launches as cards based on the width of the viewport.


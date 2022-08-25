# ICT Skills 2 Assignment.

Name: Grace DOyle

## Overview.

A React.js Web Application allowing to view List of Movies, List of TvShows, Favourite Movies, upcoming Movies, Must Watch(playslist), toprated movies via filter search, Most popular Actors.You cna also view a list of actors in the movie detail section, along with similar movies to that movie. You can favourite the movies from there and also add them to Must Watch playlist from the Upcoming Movie Section.

Added Features:

Top Rated Movies
Upcoming Movies
Popular Movies
Similar Movies
Movie Cast List with clickable button to show Modal of Actor Details
Popular Cast List
TvShow Page
Filtering on Movie Page and TvShow by Genre and Top Rating and Movie Search.

Actor Modal (pop up)- popularity, Actors Bio - Date of birth etc.

Extensive hyperlinking

atempted hyperlink from Popular cast page but not working.


## Setup requirements.

- to Clone this repo. -Open it up in your IDE. -run npm install -sign up for a TMDB account, go to settings and an API key. Add this to a .env file which you will add to the base folder of the application. Set REACT_APP_TMDB_KEY= variable to this value. -run npm run start to run application on local host 3000 -run npm run storybook to run storybook on local host 6006

## App Design.


### Routing/Navigation.

[List the set of routes your app supports - only mention new instances if you expanded the Movies Fan app. State the view linked with each route.] 

e.g.
+ /movies/:id - detailed information on a specific movie.
+ /movies/upcoming - lists movies soon to be shown in cinemas.
+ /movies/favourites - lists favourites chosen from movie list page
+ /movies/popular - lists movies that are most popular 
+ /movies/toprated - movies listed as top rated on system
+ /movies/playlist - this is the must watch list of movies page
+ /tv-series - lists all TV series
+ /tv/:id - detailed information on a specific movie.
+ /popularCast - lists actors that are most popular 


### Views/Pages.

[ For each view in your app, show a screenshot and caption - only new/modified ones in the case of the Movies Fan app. If necessary, use multiple screenshots to cover a view's full capability.

e.g.
>Favourites Page
![][fav]



### Component catalogue.

[ Use the Storybook UI to highlight the new components for which you developed stories.]
e.g.

![][rating]

## Caching.

[ List the TMDB server state cached by the app. Include a screenshot(s) of the react-query dev tools to validate your list.]

e.g.
+ Discover movies (pagination support)
+ Movie details
 + etc
+ etc

![][filtertv]

## Authentication (if relevant).

[Briefly state how you implemented authentication for the app, e.g. basic, Firebase, etc. Also, list the routes that are private/protected.]

e.g.
+ /reviews/:id
+ /movies/favourites

## Server-side persistence (if relevant)

[ Specify the persistence 
platform your app uses (e.g. TMDB lists, Firestore) and itemize the data it persists.]

## Additional features (if relevant),

[Mention any additional user features of your app that may not be obvious from the previous sections, e.g. pagination, extended filtering/sorting, searching.]

## Independent learning (if relevant),

[Briefly explain any aspects of your assignment work that required independent learning (i.e. not addressed in the lectures or labs) on your behalf., e.g. 3rd-party components, libraries, tools. Include source code references.]

[fav]: ./public/Favourites.png
[filtertv]: ./public/FilterTVShow.png
[rating]: ./public/MaxMinRating.png
[moviedetails]: ./public/MovieDetails.png
[popular]: ./public/Popular.png
[popularcast]: ./public/PopularCast.png
[toprated]: ./public/TopRated.png
[tvseries]: ./public/TvSeries.png
[upcoming]: ./public/upcoming.png


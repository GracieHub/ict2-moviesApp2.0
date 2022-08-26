# ICT Skills 2 Assignment.

Name: Grace Doyle
ID: 20002141

## Overview.

A React.js Web Application allowing to view List of Movies, List of TvShows, Favourite Movies, upcoming Movies, Must Watch(playslist), toprated movies via filter search, Most popular Actors.You cna also view a list of actors in the movie detail section, along with similar movies to that movie. You can favourite the movies from there and also add them to Must Watch playlist from the Upcoming Movie Section. You can filter movies or tv show by Min and Max Rating. 

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

- to Clone this repo. -Open it up in your IDE. 
  npm installSetup requirements.
- Node.js installed React installed Download repository
- run npm install -sign up for a TMDB account,
 - go to settings and an API key. 
- Add this to a .env file which you will add to the base folder of the application. 
 - Set REACT_APP_TMDB_KEY= variable to this value.
  -run npm run start to run application on local host 3000 
  -run npm run storybook to run storybook on local host 6006

## App Design  and  Routing/Navigation.

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
![][fav]
>Favourites Page; lists favourites chosen from movie list page

![][filtertv] 
>Here the user can filter the TV shows by Genre or Min/Max rating

![][filtermovie]
>filter by genre or rating on all pages, here is example of tvSeries page filter  and movie page

![][moviedetails]
>Detailed Movie page that shoes similar movies which has hyperlink to details page of that selected movie also.

![][upcoming]
>upcoming movies page 

![][mustwatch]
>Mustwatch playlist created by user by adding movies via the upcoming movie pagesection.

![][popular]
>most popular movies on the app

![][popularcast]
>The most popular Actors on the app, did not have time to get the Readmore button to link to CastModel but attempt was made

![][toprated]
>Top Rated Movies on the app by Rating

![][modal]
>Cast Modal displays some Actor Info such as bio, date of birth and birthplace and popularity. It show that no details are available for the actor if there are no details about them on the app.

![][rating]
>This show the filter section also now filters by Movie/TvRating by selecting Min and Max from the dropdown

![][tvseries]
>TVSeries Page showing list of popular TVSeries 

![][tvsdetails]
>TV Details page shows actors and similat TVShows also



### Component catalogue.
one of the the new components in storybook, not all were completed
![][storybook]


## Caching.
* Discover movies
* Favourites
* Upcoming
* MustWatch
* Popular
* TopRated
* TvSeries
* TVseries Details
* Popular Cast
* MovieDetials

![][caching]

## Additional features (if relevant),

Addional feature filtering/sorting, searching.]
![][filtertv]

## Independent learning (if relevant),

[Briefly explain any aspects of your assignment work that required independent learning (i.e. not addressed in the lectures or labs) on your behalf., e.g. 3rd-party components, libraries, tools. Include source code references.]

The Modal was independant learning, source: https://www.digitalocean.com/community/tutorials/react-modal-component
![][modal]


[fav]: ./public/Favourites.png
[filtertv]: ./public/FilterTVShow.png
[rating]: ./public/MaxMinRating.png
[moviedetails]: ./public/MovieDetails.png
[popular]: ./public/Popular.png
[popularcast]: ./public/PopularCast.png
[toprated]: ./public/TopRated.png
[tvseries]: ./public/TvSeries.png
[upcoming]: ./public/upcoming.png
[caching]: ./public/caching.png
[modal]: ./public/MovieModal.png
[storybook]: ./public/storybook.png
[mustwatch]: ./public/mustwatch.png
[tvsdetails]: ./public/tvsdetails.png
[filtermovie]: ./public/filtermovie.png




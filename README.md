## link to the web app :
https://blooming-inlet-72287.herokuapp.com/

## Introduction
This is a tool that allows to scrape a given search results page from AIESEC platform and shows the different opportunities in an interactive map, in which you can see a small description of each opportunity by hovering on its pin, and go to the opportunity page by clicking the pin. 

This is a NodeJS based app. 

## How it works
Here is a quick video explaining the app functionality :

<a href="http://www.youtube.com/watch?feature=player_embedded&v=y_RESWAAQZ0
" target="_blank"><img src="http://img.youtube.com/vi/y_RESWAAQZ0/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

## Dependencies 

* express: ^4.16.4
* express-session: ^1.16.1
* puppeteer: ^1.16.0
* cheerio: ^1.0.0-rc.3
* ejs: ^2.6.1
* node-geocoder: ^3.22.0
* nodemon: ^1.19.0

## Future Work

This is just a proof of concept, some possible improvements:
* the app shows only the first 25 opportunities due to the lazy loading functionality implemented on AIESEC platform, a future improvement is to manage this so that the app shows all the opportunities in the search result. 
* instead of copy paste the link of the search result, a direct search could be made directly from the app. 
* the app response is not stable, mainly due to the heavy time response of AIESEC servers. a more robust way to deal with this could be investigated. 
# AIESEC_Map

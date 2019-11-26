
class Message {
    static scrape(url, cb) {
        const puppeteer = require('puppeteer');
        const cheerio = require('cheerio');
        
        var NodeGeocoder = require('node-geocoder');
         
        var options = {
          provider: 'google',
         
          // Optional depending on the providers
          httpAdapter: 'https', // Default
          apiKey: 'API_Key', // for Mapquest, OpenCage, Google Premier
          formatter: null         // 'gpx', 'string', ...
        };
         
        var geocoder = NodeGeocoder(options);

        const pathToCity = 'app-opportunity-card .opportunity-card .no-underline .opportunity-details .opportunity-details-flex .text-left .info-section .name';
        const pathToImage = 'app-opportunity-card .opportunity-card .opportunity-image a';
        const pathToTitle = 'app-opportunity-card .opportunity-card .opportunity-image .opportunity-title-text';
              
        let data = [];
        let formattedData = [];
        
        (async () => {
            /* Initiate the Puppeteer browser */
            const browser = await puppeteer.launch({
              headless: true,
              args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
              ]
            });
            const page = await browser.newPage();
          
            /* Go to AIESEC page and wait for it to load */
            await page.goto(url, { timeout: 0, waitUntil: 'networkidle0' });
            
            const html = await page.content();
            
            const $ = await cheerio.load(html);
        
            $('.opportunity-list-flex-child').each((i, el) => {
                const city = $(pathToCity, el).text();
                const title = $(pathToTitle, el).text();
                const link = $(pathToImage, el).attr('href');
        
                data.push({city: city, title: title, link: link});
            });
            await browser.close();
        
            data.forEach((element, i,arr) => {
              geocoder.geocode(element.city, function(err, res) {
                if(!err) {
                formattedData.push({
                    coords: {lat: res[0].latitude, lng: res[0].longitude},
                    content: element.title,
                    link: 'https://aiesec.org' + element.link
                  })}
                if(i === arr.length - 1){
                  cb(formattedData)
                }
                //arr[i].coords = {latitude: res[0].latitude, longitude: res[0].longitude}
                //console.log(res[0].latitude);
              });
            });
            //console.log(formattedData);
        })();
    }

}

module.exports = Message

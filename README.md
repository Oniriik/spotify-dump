# spotify-dump
  Spotify Dump is an app that allows people to get their last 30 days top tracks as an image.
  For now, users can only get the image by doing a screenshot because i got issues to make it downloadable on IOS devices. As soon i fix it, download will be available.

# Disclaimer
   This code is not 'Public' ready, I will rewrite it ASAP !
   
# Config
  Configure the app following the spotify.json.template file (src/config/spotify.json.template).
  ```
    {
    "REDIRECT_URL":"https://domain/callback/",
    "CLIENT_ID":"SPOTIFY_CLIENT_ID",
    "CLIENT_SECRET":"SPOTIFY_CLIENT_SECRET"
    }
  ```
## Run the project 
    npm i
    npm run serve
# Deploy
    npm run build
# Preview
  Try it ! => https://spotify-dump.xyz/
![website preview](https://i.ibb.co/hDb6mdS/homepage.png)
![website preview](https://i.ibb.co/yWSW8Mg/dump.png)

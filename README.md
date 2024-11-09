---
Build and Ship Nuxt 3 fullstack starter apps with Auth, DB, Payments, Email & File storage 

---

## 
[Visit XQR here ](https://xqr-drab.vercel.app/)

# xqr - QR codes for sharing you socials quickly 

XQR is tool, where the data lives in the URL, user can easily add their various socails and links and access / share them quickly without hassel of opening saperate apps to browse their own profile links. 

The Link generated can be saved as a bookmark or on your home screen, ready for quick access.. it is your digital visting card with all that stored only with you for privacy.

## Walkthough
![XQR Walkthrough](./xqr_walkthrough.gif)

> **Note**
> Since the URL can become very long, it's better to use a link shortener like https://dub.co

Here's a demo page
https://xqr-drab.vercel.app/1?data=eyJuIjoiSm9obiBTbm93ICIsImQiOiJJ4oCZbSBKb2huIFNub3csIHRoZSBraW5nIGluIHRoZSBub3J0aC4gSSBrbm93IE5vdGhpbmcuIiwiaSI6Imh0dHBzOi8vaS5pbnNpZGVyLmNvbS81Njc0M2ZhZDcyZjJjMTJhMDA4YjZjYzAiLCJlbSI6Im5vcnRoa2luZ0BnbWFpbC5jb20iLCJwaCI6Iis5MTk5OTk5OTk5OTkiLCJ0Ijoiam9obl9zbm93IiwidGciOiJqb2huX3RnIiwidyI6Iis5MTk5OTk5OTk5OTkiLCJmIjoiam9obl9zbm93IiwiaWciOiJ1cnNqb2huIiwiZ2giOiJnZWVreWpvaG4iLCJ5IjoiQGpvaG5zbm93WVQiLCJsIjoiam9obl9zbm93IiwiZmMiOiJqb2huX3dlYjMiLCJscyI6W3sibCI6Ik15IFdlYnNpdGUiLCJpIjoicGg6Z2xvYmUtZHVvdG9uZSIsInUiOiJodHRwczovL2V4YW1wbGUuY29tIn0seyJsIjoiQmxvZyIsImkiOiJtZGk6YmxvZyIsInUiOiJodHRwczovL2Jsb2cuZXhhbXBsZS5jb20ifV19

The data is converted to a base 64 string which we onelink uses as a query parameter. I have tried to reduce the json keys to be as small as possible

Roadmap.
1. Add support to save web3 wallet addresses
2. QR codes for links that are saved
3. Count of scans done 
4. some more analytics
5. saving tickets other creative QR code uses

## Setup locally

Make sure to install the dependencies:

```bash

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

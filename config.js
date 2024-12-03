name: Deploy HTML with Secrets

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Create config.js
        run: |
          echo "const CONFIG = { API_KEY: '${{ secrets.API_KEY }}' };" > ./config.js

      - name: Deploy (example: GitHub Pages)
        run: |
          # Aquí puedes usar herramientas como Surge, Netlify CLI o GitHub Pages para publicar tu sitio
          cp -r * /path/to/hosting/directory

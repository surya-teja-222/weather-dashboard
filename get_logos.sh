#!/bin/bash

# Create a directory to store the images
mkdir -p src/assets/accuweather_images

# Loop through numbers from 1 to 44
for i in {1..44}
do
  # Format the number to be two digits
  num=$(printf "%02d" $i)
  
  # Construct the URL
  url="https://developer.accuweather.com/sites/default/files/${num}-s.png"
  
  # Download the image and save it in the directory
  curl -o src/assets/accuweather_images/${num}-s.png $url
done

echo "Download complete. Images are stored in the accuweather_images directory."

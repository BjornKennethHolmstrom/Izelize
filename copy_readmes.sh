#!/bin/bash

# Define the target temp folder inside Izelize
TEMP_FOLDER="./temp"

# Create the temp folder if it doesn't exist
mkdir -p "$TEMP_FOLDER"

# Debug: Print the working directory
echo "Current working directory: $(pwd)"
echo "Temp folder: $TEMP_FOLDER"

# Find all subfolders and process any README.md files found
find . -maxdepth 2 -type f -name "README.md" | while read -r file; do
    # Get the parent folder name
    FOLDER_NAME=$(basename "$(dirname "$file")")
    
    # Define the new filename
    NEW_NAME="${FOLDER_NAME}-README.md"
    
    # Copy and rename the file
    cp "$file" "$TEMP_FOLDER/$NEW_NAME"
    
    echo "Copied: $file -> $TEMP_FOLDER/$NEW_NAME"
done

echo "All README.md files have been processed. Check the $TEMP_FOLDER folder."


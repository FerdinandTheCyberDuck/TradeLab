#!/bin/bash
# Quick save script for TradeLab development

echo "Saving TradeLab progress..."

# Add all changes
git add .

# Commit with timestamp
git commit -m "Progress save: $(date '+%Y-%m-%d %H:%M')"

# Push to GitHub
git push

echo "✅ Work saved and pushed to GitHub!"

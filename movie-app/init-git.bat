@echo off
echo ========================================
echo Movie Suggestion App - Deploy Setup
echo ========================================
echo.
echo This script will initialize Git for deployment
echo.

cd /d c:\Users\Sanja\OneDrive\Desktop\NAGARJUN-SIVAKUMAR\movie-app

echo Initializing Git repository...
git init
echo.

echo Adding all files...
git add .
echo.

echo Creating initial commit...
git commit -m "Initial commit: Movie Suggestion App with Vercel and Railway config"
echo.

echo Renaming branch to main...
git branch -M main
echo.

echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Create a GitHub repository at https://github.com/new
echo 2. Run these git commands:
echo.
echo    git remote add origin https://github.com/YOUR_USERNAME/movie-suggestion-app.git
echo    git push -u origin main
echo.
echo Then follow the deployment guide in DEPLOY-NOW.md
echo.
pause

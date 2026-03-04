@echo off
echo ========================================
echo Movie Suggestion App - Startup Script
echo ========================================
echo.
echo Starting backend server...
cd server
start cmd /k "npm install && npm start"
echo.
echo Waiting 3 seconds before starting frontend...
timeout /t 3 /nobreak
echo.
echo Starting frontend server...
cd ..\client
start cmd /k "npm install && npm start"
echo.
echo ========================================
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo ========================================
echo.
echo Both servers are starting in new windows.
echo Please wait for npm install and server startup to complete.
pause

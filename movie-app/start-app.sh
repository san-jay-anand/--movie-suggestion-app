#!/bin/bash

echo "========================================"
echo "Movie Suggestion App - Startup Script"
echo "========================================"
echo ""
echo "Starting backend server..."
cd server
npm install &
npm start &

echo ""
echo "Waiting 3 seconds before starting frontend..."
sleep 3

echo ""
echo "Starting frontend server..."
cd ../client
npm install
npm start

echo ""
echo "========================================"
echo "Backend: http://localhost:5000"
echo "Frontend: http://localhost:3000"
echo "========================================"

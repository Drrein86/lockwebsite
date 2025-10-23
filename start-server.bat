@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo ========================================
echo   Starting Lockey24 Server
echo ========================================
echo.
echo Installing dependencies (if needed)...
call npm install --legacy-peer-deps
echo.
echo Starting development server...
echo Open your browser at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
npm run dev


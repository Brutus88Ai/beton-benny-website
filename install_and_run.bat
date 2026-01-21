@echo off
echo [Beton Benny] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] Installation failed. Please check your internet connection.
    pause
    exit /b %errorlevel%
)

echo.
echo [Beton Benny] Starting Development Server...
call npm run dev
pause

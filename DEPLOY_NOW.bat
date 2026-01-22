@echo off
echo ============================================
echo   BETON BENNY - AUTONOMOUS DEPLOYMENT
echo ============================================
echo.
echo [1/3] Installiere Abhaengigkeiten...
call npm install
if %errorlevel% neq 0 goto error

echo.
echo [2/3] Erstelle Production Build...
call npm run build
if %errorlevel% neq 0 goto error

echo.
echo [3/3] Deploye zu Vercel...
echo       Bitte "Y" druecken wenn gefragt!
call npx vercel --prod
if %errorlevel% neq 0 goto error

echo.
echo [ERFOLG] Website ist online!
pause
exit /b 0

:error
echo.
echo [FEHLER] Etwas ist schief gelaufen.
pause
exit /b 1

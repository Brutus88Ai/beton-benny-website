@echo off
echo ============================================
echo   BETON BENNY - Vercel Production Deploy
echo ============================================
echo.
echo [INFO] Starte Deployment zu Vercel...
echo.
echo WICHTIG: Bei der ersten Ausfuehrung:
echo   1. "Set up and deploy?" -> Tippe Y
echo   2. Waehle deinen Account
echo   3. "Link to existing project?" -> N (Neues Projekt)
echo   4. Projektname: beton-benny (oder Enter)
echo   5. Directory: Einfach Enter
echo   6. Framework: Next.js bestaetigen
echo.
echo Nach dem Deployment:
echo   -> Gehe zu vercel.com/dashboard
echo   -> Settings -> Domains -> Add "beton-benny-schlager.de"
echo   -> DNS bei Hostinger konfigurieren (siehe DOMAIN_SETUP.md)
echo.
pause
call npx vercel --prod
echo.
echo ============================================
if %errorlevel% equ 0 (
    echo [ERFOLG] Deployment abgeschlossen!
    echo Naechster Schritt: Domain in Vercel hinzufuegen
) else (
    echo [FEHLER] Deployment fehlgeschlagen.
)
echo ============================================
pause

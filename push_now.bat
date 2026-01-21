@echo off
echo ============================================
echo   BETON BENNY - FORCE UPLOAD TO GITHUB
echo ============================================
echo.
echo [INFO] Konfiguriere Git...
git config user.email "bot@betonbenny.de"
git config user.name "Beton Benny Bot"

echo.
echo [INFO] Remote wird neu gesetzt...
git remote remove origin
git remote add origin https://github.com/Brutus88Ai/beton-benny-website.git

echo.
echo [INFO] Dateien werden vorbereitet...
git add .
git commit -m "Force Push: Complete Site Update"

echo.
echo [INFO] Starte Upload...
echo WICHTIG: Falls ein Login-Fenster aufgeht, bitte einloggen!
echo.
git push -u origin main --force

echo.
echo ============================================
echo Falls oben Fehler stehen (z.B. Permission denied),
echo bist du in der Konsole evtl. nicht eingeloggt.
echo.
pause

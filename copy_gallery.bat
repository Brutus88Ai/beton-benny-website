@echo off
set SRC=C:\Users\pasca\Desktop\Bands\Band Beton Benny Schlager\FotosVideos
set DST=C:\Users\pasca\Desktop\Beton Benny Website\public\gallery

echo Kopiere Party Bilder...
copy "%SRC%\a_Crowd_Interaction__A.jpeg" "%DST%\party-01.jpg"
copy "%SRC%\a_The_Beer_Shower__Act.png" "%DST%\party-02.png"
copy "%SRC%\a_Street_Parade__A_sin.jpeg" "%DST%\party-03.jpg"
copy "%SRC%\a_The_Group_Hug__A_mas.png" "%DST%\party-04.png"
copy "%SRC%\a_Neon_Night__A_singer.jpeg" "%DST%\party-05.jpg"
copy "%SRC%\a_The_Mega-Park_Entran.jpeg" "%DST%\party-06.jpg"

echo Kopiere Backstage Bilder...
copy "%SRC%\b_The_Bratwurst_Stand_.jpeg" "%DST%\backstage-01.jpg"
copy "%SRC%\b_Morning_Pint_(Frühsc.png" "%DST%\backstage-02.png"
copy "%SRC%\b_The_Human_Pyramid__A.jpeg" "%DST%\backstage-03.jpg"
copy "%SRC%\b_Confetti_&_Columns__.jpeg" "%DST%\backstage-04.jpg"

echo Kopiere Fun Bilder...
copy "%SRC%\a_Balcony_Appearance__.png" "%DST%\fun-01.png"
copy "%SRC%\a_The_Polonaise_Leader.png" "%DST%\fun-02.png"
copy "%SRC%\a_German_Flag_Cape__A_.jpeg" "%DST%\fun-03.jpg"
copy "%SRC%\b_The_Tattoo_Reveal__A.jpeg" "%DST%\fun-04.jpg"

echo ✅ Fertig!
pause
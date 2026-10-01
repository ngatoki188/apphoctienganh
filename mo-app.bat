@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Dang mo app hoc tieng Anh tai http://localhost:5173
echo Giu cua so nay mo trong luc hoc. Dong cua so = tat app.
start "" http://localhost:5173
python -m http.server 5173 --bind 127.0.0.1

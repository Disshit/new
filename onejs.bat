:: Compile all scripts into One.
@echo off
setlocal

set "cdir=%~dp0"

set "outputMAX=%cdir%scripts\one.js"
if exist "%outputMAX%" del "%outputMAX%"
set "inputMAX=%cdir%scripts\oneJS\*.js"

set "outputMIN=%cdir%scripts\one.min.js"
if exist "%outputMIN%" del "%outputMIN%"
set "inputMIN=%cdir%scripts\oneJS\*.min.js"

for %%f in ("%inputMAX%") do (
    if exist "%%f" (
        (   type "%%f"
            echo.
            echo.
        ) >> "%outputMAX%"
    )
)

for %%f in ("%inputMIN%") do (
    if exist "%%f" (
        type "%%f" >> "%outputMIN%"
    )
)

endlocal

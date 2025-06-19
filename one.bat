:: Compile all scripts/styles into One.
@echo off

set "cdir=%~dp0"

set "output=%cdir%scripts\head.min.js"
if exist "%output%" del "%output%"
set "input=%cdir%scripts\head\*.min.js"

for %%f in ("%input%") do (
    if exist "%%f" (
        type "%%f" >> "%output%"
    )
)

set "output=%cdir%scripts\body.min.js"
if exist "%output%" del "%output%"
set "input=%cdir%scripts\body\*.min.js"

for %%f in ("%input%") do (
    if exist "%%f" (
        type "%%f" >> "%output%"
    )
)

set "output=%cdir%styles\interface.min.css"
if exist "%output%" del "%output%"
set "input=%cdir%styles\interface\*.min.css"

for %%f in ("%input%") do (
    if exist "%%f" (
        type "%%f" >> "%output%"
    )
)

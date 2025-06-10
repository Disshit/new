:: Compile all scripts into One.
@echo off

set "cdir=%~dp0"

set "output=%cdir%scripts\one.min.js"
if exist "%output%" del "%output%"
set "input=%cdir%scripts\oneJS\*.min.js"

for %%f in ("%input%") do (
    if exist "%%f" (
        type "%%f" >> "%output%"
    )
)

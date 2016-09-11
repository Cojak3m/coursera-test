@echo off
START cmd.exe /k "browser-sync --version & browser-sync start --server --directory --files "**/*" "

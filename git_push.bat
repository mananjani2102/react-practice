@echo off
SET GIT_TERMINAL_PROMPT=0
cd /d "c:\Users\parsh\OneDrive\Desktop\react-prep"
echo Current HEAD:
git rev-parse HEAD
echo.
echo Checking reachability of 7ebd9dad:
git cat-file -t 7ebd9dad5af90d85b86b6d94fa5ac9188aec84ba
echo.
echo Log from 7ebd9dad counting commits:
git --no-pager log --oneline 7ebd9dad5af90d85b86b6d94fa5ac9188aec84ba | find /c ":"
echo.
echo Current remote HEAD:
git ls-remote origin HEAD 2>&1

# Set environment to disable interactive prompts
$env:GIT_TERMINAL_PROMPT = "0"
$env:GCM_INTERACTIVE = "Never"
$env:GIT_ASKPASS = "echo"

Set-Location "c:\Users\parsh\OneDrive\Desktop\react-prep"

# Check current HEAD (local only, no network)
Write-Host "=== HEAD commit ==="
& git rev-parse HEAD

Write-Host "=== Check if 7ebd9dad exists ==="
& git cat-file -t 7ebd9dad5af90d85b86b6d94fa5ac9188aec84ba

Write-Host "=== Recent log ==="
& git log --oneline -5 7ebd9dad5af90d85b86b6d94fa5ac9188aec84ba

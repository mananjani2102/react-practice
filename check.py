import subprocess
import os

try:
    res = subprocess.run(["git", "status", "-s"], capture_output=True, text=True, check=True)
    with open("git_output.txt", "w") as f:
        f.write(res.stdout)
except Exception as e:
    with open("git_output.txt", "w") as f:
        f.write(str(e))

import os
import random
import string
import subprocess
import sys

def main():
    target_file = "random_letters.txt"
    total_commits = 1000
    letters_per_commit = 1000

    print(f"Generating {total_commits} commits. Each commit writes {letters_per_commit} random letters to '{target_file}'...")

    for i in range(1, total_commits + 1):
        random_letters = "".join(random.choices(string.ascii_letters, k=letters_per_commit))
        with open(target_file, "w", encoding="utf-8") as f:
            f.write(random_letters + "\n")

        subprocess.run(["git", "add", target_file], check=True)
        subprocess.run(
            ["git", "commit", "-m", f"Write random letters: commit {i} of {total_commits}"],
            check=True,
            stdout=subprocess.DEVNULL
        )

        if i % 100 == 0 or i == total_commits:
            print(f"[{i}/{total_commits}] commits created.")

    print("Pushing commits to remote origin/main...")
    subprocess.run(["git", "push", "origin", "main"], check=True)
    print("Successfully pushed all commits!")

if __name__ == "__main__":
    main()

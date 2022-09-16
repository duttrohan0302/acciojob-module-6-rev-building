## Pushing to Github Using VS Code

- Go to source control tab
- Click on initialize Repository
- Add the files you want
- Write a commit msg and click on commit
- Click on Sync Changes(or Publish Branch or Push(from three dots menu))
- If you're publishing the branch, it will ask for public/private repo & the repo name

## Pushing to Github using terminal
- Go to github.com, create a new repository
- Copy the origin link and run the following command in the folder
<pre>
git remote add origin https://github.com/your_github_username/github_repo_name.git
</pre>
- Then initialize the repository locally by running
<pre>
git init .
</pre>
- Whenever you need to check the status of the files
<pre>
git status
</pre>
- To add a file
<pre>
git add filename.extension
</pre>
- To add all files
<pre>
git add .
</pre>
- To commit 
<pre>
git commit -m "commit message"
</pre>
- Push for the first time
<pre>
git push -u origin master
</pre>
- For subsequent pushes
<pre>
git push
</pre>
- If by mistake you wrote the wrong commit message, to amend the last commit message
<pre>
git commit --amend -m "corrected commit message"
</pre>
- To see the history of git commits
<pre>
git log
</pre>
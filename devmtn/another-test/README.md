Last login: Mon Oct 31 16:35:46 on ttys000
Scotts-MacBook-Pro:~ scott$ git user.name
git: 'user.name' is not a git command. See 'git --help'.
Scotts-MacBook-Pro:~ scott$ user.name
-bash: user.name: command not found
Scotts-MacBook-Pro:~ scott$ git user
git: 'user' is not a git command. See 'git --help'.

Did you mean this?
	subtree
Scotts-MacBook-Pro:~ scott$ git --version
git version 2.9.3 (Apple Git-75)
Scotts-MacBook-Pro:~ scott$ git name
git: 'name' is not a git command. See 'git --help'.

Did you mean this?
	blame
Scotts-MacBook-Pro:~ scott$ name
-bash: name: command not found
Scotts-MacBook-Pro:~ scott$ clear




































Scotts-MacBook-Pro:~ scott$ ls
Applications	Desktop		Documents	Downloads	Library		Movies		Music		Pictures	Programming	Public
Scotts-MacBook-Pro:~ scott$ pwd
/Users/scott
Scotts-MacBook-Pro:~ scott$ cd Programming
Scotts-MacBook-Pro:Programming scott$ ls
Pre-MountProjects	WebstormProjects	devmtn			jquery			projectBuilder
Scotts-MacBook-Pro:Programming scott$ cd devmtn
Scotts-MacBook-Pro:devmtn scott$ ls
myProject
Scotts-MacBook-Pro:devmtn scott$ mkdir gitProject
Scotts-MacBook-Pro:devmtn scott$ ls
gitProject	myProject
Scotts-MacBook-Pro:devmtn scott$ cd gitProject
Scotts-MacBook-Pro:gitProject scott$ ls
Scotts-MacBook-Pro:gitProject scott$ pwd
/Users/scott/Programming/devmtn/gitProject
Scotts-MacBook-Pro:gitProject scott$ git init
Initialized empty Git repository in /Users/scott/Programming/devmtn/gitProject/.git/
Scotts-MacBook-Pro:gitProject scott$ ls
Scotts-MacBook-Pro:gitProject scott$ ls -la
total 0
drwxr-xr-x   3 scott  staff  102 Oct 31 19:29 .
drwxr-xr-x   4 scott  staff  136 Oct 31 19:29 ..
drwxr-xr-x  10 scott  staff  340 Oct 31 19:29 .git
Scotts-MacBook-Pro:gitProject scott$ pwd
/Users/scott/Programming/devmtn/gitProject
Scotts-MacBook-Pro:gitProject scott$ touch test.js
Scotts-MacBook-Pro:gitProject scott$ ls
test.js
Scotts-MacBook-Pro:gitProject scott$ touch testing.js test.html
Scotts-MacBook-Pro:gitProject scott$ ls
test.html	test.js		testing.js
Scotts-MacBook-Pro:gitProject scott$ vim test.html
Scotts-MacBook-Pro:gitProject scott$ clear





















Scotts-MacBook-Pro:gitProject scott$ git remote add origin https://github.com/crazycraka/gitProject.git
Scotts-MacBook-Pro:gitProject scott$ git status
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	test.html
	test.js
	testing.js

nothing added to commit but untracked files present (use "git add" to track)
Scotts-MacBook-Pro:gitProject scott$ git diff
Scotts-MacBook-Pro:gitProject scott$ git add .
Scotts-MacBook-Pro:gitProject scott$ git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   test.html
	new file:   test.js
	new file:   testing.js

Scotts-MacBook-Pro:gitProject scott$ git commit -m "just another test"
[master (root-commit) 34dfb2b] just another test
 3 files changed, 168 insertions(+)
 create mode 100644 test.html
 create mode 100644 test.js
 create mode 100644 testing.js
Scotts-MacBook-Pro:gitProject scott$ git push origin master
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 1011 bytes | 0 bytes/s, done.
Total 4 (delta 0), reused 0 (delta 0)
To https://github.com/crazycraka/gitProject.git
 * [new branch]      master -> master
Scotts-MacBook-Pro:gitProject scott$ clear













Scotts-MacBook-Pro:gitProject scott$ git status
On branch master
nothing to commit, working tree clean
Scotts-MacBook-Pro:gitProject scott$ vim test.html
Scotts-MacBook-Pro:gitProject scott$ vim test.html
Scotts-MacBook-Pro:gitProject scott$ git pull
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
From https://github.com/crazycraka/gitProject
   34dfb2b..068ec79  master     -> origin/master
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> master

Scotts-MacBook-Pro:gitProject scott$ git status
On branch master
nothing to commit, working tree clean
Scotts-MacBook-Pro:gitProject scott$ git diff
Scotts-MacBook-Pro:gitProject scott$ vim test.html
Scotts-MacBook-Pro:gitProject scott$ git branch --set-upstream origin master
The --set-upstream flag is deprecated and will be removed. Consider using --track or --set-upstream-to
Branch origin set up to track local branch master.
Scotts-MacBook-Pro:gitProject scott$ -set-upstream-to origin master
-bash: -set-upstream-to: command not found
Scotts-MacBook-Pro:gitProject scott$ git --set-upstream-to origin master
Unknown option: --set-upstream-to
usage: git [--version] [--help] [-C <path>] [-c name=value]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]
Scotts-MacBook-Pro:gitProject scott$ git pull
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> master

Scotts-MacBook-Pro:gitProject scott$ clear





Scotts-MacBook-Pro:gitProject scott$ git pull
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
From https://github.com/crazycraka/gitProject
   068ec79..64d5cd2  master     -> origin/master
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> master

Scotts-MacBook-Pro:gitProject scott$ vim test.html
Scotts-MacBook-Pro:gitProject scott$ ls
test.html	test.js		testing.js
Scotts-MacBook-Pro:gitProject scott$ git pull
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
From https://github.com/crazycraka/gitProject
   64d5cd2..e9f4892  master     -> origin/master
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> master

Scotts-MacBook-Pro:gitProject scott$ ls
test.html	test.js		testing.js
Scotts-MacBook-Pro:gitProject scott$ git origin master
git: 'origin' is not a git command. See 'git --help'.
Scotts-MacBook-Pro:gitProject scott$ git push origin master
To https://github.com/crazycraka/gitProject.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'https://github.com/crazycraka/gitProject.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
Scotts-MacBook-Pro:gitProject scott$ git push origin master -u
To https://github.com/crazycraka/gitProject.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'https://github.com/crazycraka/gitProject.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
Scotts-MacBook-Pro:gitProject scott$ clear

Scotts-MacBook-Pro:gitProject scott$ git pull
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> master

Scotts-MacBook-Pro:gitProject scott$ git branch --set-upstream-to=origin/master
Branch master set up to track remote branch master from origin.
Scotts-MacBook-Pro:gitProject scott$ ls
test.html	test.js		testing.js
Scotts-MacBook-Pro:gitProject scott$ git pull
Updating 34dfb2b..e9f4892
Fast-forward
 README.md |   2 ++
 test.html | 168 ++---------------------------------------------------------------------------------------------------------------------------------------------------------------
 2 files changed, 4 insertions(+), 166 deletions(-)
 create mode 100644 README.md
Scotts-MacBook-Pro:gitProject scott$ ls
README.md	test.html	test.js		testing.js
Scotts-MacBook-Pro:gitProject scott$ vim test.html
Scotts-MacBook-Pro:gitProject scott$ clear






























Scotts-MacBook-Pro:gitProject scott$ ls
README.md	test.html	test.js		testing.js
Scotts-MacBook-Pro:gitProject scott$ rm -r
usage: rm [-f | -i] [-dPRrvW] file ...
       unlink file
Scotts-MacBook-Pro:gitProject scott$ rm -rf
Scotts-MacBook-Pro:gitProject scott$ ls
README.md	test.html	test.js		testing.js
Scotts-MacBook-Pro:gitProject scott$ fr ..
-bash: fr: command not found
Scotts-MacBook-Pro:gitProject scott$ cd ..
Scotts-MacBook-Pro:devmtn scott$ rm -rf
Scotts-MacBook-Pro:devmtn scott$ ls
gitProject	myProject
Scotts-MacBook-Pro:devmtn scott$ rm -rf myProject
Scotts-MacBook-Pro:devmtn scott$ ls
gitProject
Scotts-MacBook-Pro:devmtn scott$ rm -rf gitProject
Scotts-MacBook-Pro:devmtn scott$ ls
Scotts-MacBook-Pro:devmtn scott$ ls -la
total 0
drwxr-xr-x   2 scott  staff   68 Oct 31 19:49 .
drwxr-xr-x  10 scott  staff  340 Oct 31 16:40 ..
Scotts-MacBook-Pro:devmtn scott$ clear
































Scotts-MacBook-Pro:devmtn scott$ pwd
/Users/scott/Programming/devmtn
Scotts-MacBook-Pro:devmtn scott$ mkdir another-test
Scotts-MacBook-Pro:devmtn scott$ ls
another-test
Scotts-MacBook-Pro:devmtn scott$ cd another-test
Scotts-MacBook-Pro:another-test scott$ pwd
/Users/scott/Programming/devmtn/another-test
Scotts-MacBook-Pro:another-test scott$ ls
Scotts-MacBook-Pro:another-test scott$ touch test.html
Scotts-MacBook-Pro:another-test scott$ touch tester.js
Scotts-MacBook-Pro:another-test scott$ ls
test.html	tester.js
Scotts-MacBook-Pro:another-test scott$ README.md
-bash: README.md: command not found
Scotts-MacBook-Pro:another-test scott$ touch README.md
Scotts-MacBook-Pro:another-test scott$ ls
README.md	test.html	tester.js
Scotts-MacBook-Pro:another-test scott$ vim README.md





































This is a test file just so I can see what the heck is going on.
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
~                                                                                                                                                                                  
-- INSERT --

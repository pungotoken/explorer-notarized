# My thoughts wading through this old bitcore/insight codebase

Best way to dev is to install the explorer, go to its node_modules folder and tweak things. Then refresh the hosted webpage to see the changes.
After a satisfactory state is reached, copy all the changed files and save them in a place so that they can be fetched to patch every new installation.

This works until it doesn't. It didn't work when I was modifying the angular controllers in the insight-ui part. That's because it uses minified files as the source and I was tweaking in the src folder.
To make it work, go to insight-ui directory

Execute:

```bash
/home/$USER/.nvm/versions/node/v4.9.1/bin/npm install
./node_modules/.bin/bower install
```

then change the src files to your hearts content and then do `./node_modules/.bin/grunt compile`
Now refresh the webpage to see your changes reflected :)

the grunt compile above replaces the main.min.css file. So if you had changes there, they are lost :(
Use git aggressively

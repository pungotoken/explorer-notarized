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

The commands are available in the script named `insight-ui-dev.sh` 

then change the src files to your hearts content and then do `./node_modules/.bin/grunt compile` to compile the js to minified & uglified and reflect your changes to the src in the live website. The output is at: `./public/js/ and /public/css/`
Now refresh the hosted webpage to see your changes reflected :)

To change css properly, change the css in ./public/src/css/common.css then compile it. The resulting main.min.css will have the necessary changes
To override specific css to reskin or change the theme of the explorer, add a file named common.min.css to the directory ./public/css/ and add all the overrides to it

See the Readme for more info.

the grunt compile above replaces the main.min.css file. So if you had changes there, they are lost :(
Use git aggressively

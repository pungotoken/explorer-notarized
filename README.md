# README

With this Patch, you can show the latest Notarization data on a Insight Explorer.

Works with Decker's repo: https://github.com/DeckerSU/komodo-explorers-install/ (Install all Komodo ecosystem daemons and explorers)

or my repo: https://github.com/gcharang/komodo-install-explorer (Useful to install just an explorer for a Komodo ecosystem daemon and blockchain you already have)

## Installation

You can use the patch like so:

```bash
#"cd" into the directory where the explorer is installed. i.e., the directories "ASSETCHAINNAME-explorer" and this repo should on the same level
git clone https://github.com/gcharang/explorer-notarized
cd explorer-notarized
./patch.sh ASSETCHAINNAME
```

## Apply custom styles to the explorer

After the patch is appled,

- Step1: `cd` to the directory: `ASSETCHAINNAME-explorer/node_modules/insight-ui-komodo/public`

- Step2: Edit the `index.html` in that directory to remove the comment: 
```
<!---Remove this comment, add a file named './css/common.min.css' in '/public' with the styles you want to override <link rel="stylesheet" href="css/common.min.css"> -->
```
and replace it with the line:
```
<link rel="stylesheet" href="css/common.min.css">
```

- Step3: Replace the existing `./css/common.min.css` (if it exists) with `./src/css/common.css`
```
cp ./src/css/common.css ./css/common.min.css
```

- Step4: Look at the file `./css/common.min.css` and change the styles that you wish to. These changes will override the styles that are in `./css/main.min.css`.

- Step5: Example can be seen at https://github.com/DeckerSU/komodo-explorers-install/tree/master/overlay/BNTN-explorer/node_modules/insight-ui-komodo/public
**Note:** Regarding `css` and `views` in the above directory; Don't replace the files from the patch with these files directly. See what changes were made by comparing with the files in the patch and just make those changes.

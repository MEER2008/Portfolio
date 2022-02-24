#user/bin/bash

echo "Updating..."
git add .
git commit -m "this is a commit made by the update.sh script"
git push
echo "Done!"

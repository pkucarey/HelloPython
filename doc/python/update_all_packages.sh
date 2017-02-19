pip list | awk -F ' ' '{print $1}' | xargs -l sudo pip install --upgrade  

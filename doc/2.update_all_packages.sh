pip3 list | awk -F ' ' '{print $1}' | xargs -l sudo pip3 install --upgrade  

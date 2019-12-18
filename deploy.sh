echo "$1"
if [ -z "$1" ]; then
  echo "Wrong usage: deploy.sh <IP of Pepper>"
else
  (cd robocup_pepper-hri_python && python deploy.py --ip "$1" && cd ..)
  (cd robocup_pepper-hri_js && node deploy.js --ip "$1" && cd ..)
fi

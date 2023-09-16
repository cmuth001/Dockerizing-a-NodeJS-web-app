aws ecr get-login-password --region eu-north-1 | docker login --username AWS --password-stdin 191719037956.dkr.ecr.eu-north-1.amazonaws.com

docker pull 191719037956.dkr.ecr.eu-north-1.amazonaws.com/nodejss:$1

echo 'docker pull succeded'

docker ps -a

docker rm -rf nodejss

docker ps -a 

docker run -itd -p 8080:8080 --name nodejss 191719037956.dkr.ecr.eu-north-1.amazonaws.com/nodejss:$1

docker ps -a 

echo 'docker deployed successfully'
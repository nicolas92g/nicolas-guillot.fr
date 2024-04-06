docker stop nicolas-guillot.fr
docker rm nicolas-guillot.fr
docker build -t nicolas-guillot.fr-img .
docker run -d -p 80:3000 --name nicolas-guillot.fr nicolas-guillot.fr-img
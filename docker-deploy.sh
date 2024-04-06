docker build -t nicolas-guillot.fr-img .
docker run -d --rm -p 80:3000 --name nicolas-guillot.fr nicolas-guillot.fr-img
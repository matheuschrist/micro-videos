FROM node:14.15.4-slim


RUN sed -i '/security.debian.org\/debian-security/c\deb http://archive.debian.org/debian-security stretch/updates main' /etc/apt/sources.list && \
    sed -i '/deb.debian.org\/debian/c\deb http://archive.debian.org/debian stretch main' /etc/apt/sources.list && \
    sed -i '/deb.debian.org\/debian/c\deb http://archive.debian.org/debian stretch-updates main' /etc/apt/sources.list && \
    apt-get update && \
    apt-get upgrade -y


RUN apt-get install -y --no-install-recommends git ca-certificates

USER node

WORKDIR /home/node/app

CMD ["sh", "-c", "npm install && tail -f /dev/null"]

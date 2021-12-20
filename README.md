# La Miranda - Torrox
##### This directory contains all requires configurations to run:
 - A Traefik reverse proxy (handling ssl certificates auto-renewals with let's encrypt http-01 challenge)
 - A mariadb (mysql)
 - A buggy script manager : scripts.lamirandatorrox.com
 - An adminer server (similar to php my admin): adminer.lamirandatorrox.com
 - A traefik dashboard : traefik.lamirandatorrox.com
 - A cadvisor service : cadvisor.lamirandatorrox.com
 - Two Directus backends for staging/prod : directus.lamirandatorrox.com and staging.directus.lamirandatorrox.com
 - A nodejs service returning the react app static files (NextJS SSG) for prod env: lamirandatorrox.com
 - A nodejs service rendering instantly the react app (NextJS SSR) for staging env : staging.lamirandatorrox.com
 
 ### Installation
1. Clone the repository on your server:
    - Create ssh keys : `ssh-keygen`
    - Add the public key from $HOME/.ssh/id_rsa.pub into your github account
    - Clone the repo : `git clone git@github.com:damioune123/lamirandatorrox-website.git`
2. Install docker and docker-compose 
`sudo apt-get install docker docker-compose `
3. Configure redirection of sub-domains panel to lamirandatorrox.com for :
      - staging.directus.lamirandatorrox.com
      - directus.lamirandatorrox.com
      - adminer.lamirandatorrox.com
      - traefik.lamirandatorrox.com
      - scripts.lamirandatorrox.com
      - staging.lamirandatorrox.com
      - cadvisor.lamirandatorrox.com
  
  You may also configure some additional redirection to the prod server (lamirandatorrox.com, ...)

4. Generate a cert.json empty file for CA 
 `cd traefik && touch letsencrypt/acme.json && chmod 0600 letsencrypt/acme.json`

5. Copy ".env.sample:  into ".env" and replace values with yours
6. Create the db_network and web docker networks :
 `sudo docker network create db_network  && sudo docker network create web`
7. Grant all access to the mysql root admin
` sudo docker ps`
` sudo docker exec -ti containerId sh`
` mysql -u root -p`
` GRANT ALL PRIVILEGES ON `%`.* TO 'admin'@'%' IDENTIFIED BY 'your_password' WITH GRANT OPTION;`
` flush PRIVILEGES;`
` exit`
8. Create a .env.prod and a .env.staging file in frontend folder based on the .env.sample template in the frontend directory
9. In the traefik directory, create a 'admin-users.txt' file based on 'admin-users.txt.sample', you can add your own admin users to access basic-auth protected url with following command :
 `sudo htpasswd myUserName`
10. Launch all docker services
 `sudo docker-compose up -d `
11. Import a staging database dump + assets directory (upon request at damienmeur@gmail.com) into mariadb
12. Run the migrate from staging to prod script via the buggy GUI.

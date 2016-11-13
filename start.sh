export WORKSPACE=$PWD

sudo pkill nginx;
sudo service nginx stop;
sudo nginx -c "$PWD/conf/nginx/nginx.conf";
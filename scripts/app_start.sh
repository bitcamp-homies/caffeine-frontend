#!/bin/bash
cd /home/ubuntu/server/src
pm2 start app.tsx
pm2 startup
pm2 save
pm2 restart all
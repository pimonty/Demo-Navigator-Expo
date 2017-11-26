#!/bin/bash
if grep -q 'fs.inotify.max_user_watches=582222' /etc/sysctl.conf ; 
then echo "(OK)encontrado fs.inotify.max_user_watches=582222 en /etc/sysctl.conf" ; 
else echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p ;fi 

exp start --dev --lan

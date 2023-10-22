FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/CYBER-THUSHAN/SHENU-QUEEN-MD /root/TSTHUSHAN
WORKDIR /root/CYBER-THUSHAN/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]

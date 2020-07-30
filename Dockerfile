FROM node:alpine as build
USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app
ENV PATH /home/node/app/node_modules/.bin:$PATH
COPY --chown=node:node package.json /home/node/app
COPY --chown=node:node yarn.lock /home/node/app
RUN yarn


COPY --chown=node:node public /home/node/app/public
COPY --chown=node:node src /home/node/app/src

RUN yarn build
CMD serve -s build

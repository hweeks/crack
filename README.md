# crack

## overview

in the `src` folder, there will be a folder for each problem. in the folder there will be an implementation of the concept next to a series of tests. the work is based off of the mandatory interview training manual, "Cracking the Coding Interview", which is horcrux for the continued domination of "big tech". the continued pursuit of the narrative that you should feel like an imposter as a developer is vital to creating classes of developers that are almost solely formed by the privilege afforded to them. i hope that seeing all problems solved in TypeScript for someone can help them play the "interview game" and be paid equitably.

## use

to run a suite you can type:

```
$ yarn demo <problem-number>
Now running tests matching pattern /problem-number/
...
Ran X suites in Y time
```

you can also run the tests in debug mode so that you can step through each part of the code via:

```
$ yarn debug:demo <problem-number>
debugger listening on <websocket-url>
...
```

this will allow you to attach chrome's node developers tools to this project.

## how was this made

in an attempt to also teach you about `meaningful` development, aka writing code that is functional _not_ academic, i will try and comment and outline all design choices i've made here. to get started i wanted this repo to do a few things:

  * be in typescript
  * use source control
  * easy to understand
  * os independent (can run on windows or mac or linux)

to that end the first step is to create the repo itself:

```bash
mkdir crack
cd crack
git init # create git repository
yarn init # intialize node project
yarn add -D typescript jest @types/jest @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript nodemon # add the minimum packages to support my vision
yarn tsc --init # allow typescript to bootstrap itself
```

after this we add a bunch of scaffolding and an origin.

> TODO: finish this section when i'm feeling more like it

## outro

i don't enjoy this part of the field, but we all have a price sadly, and this is one i know i have to pay to attain early retirement. i'm grateful that i have the bandwidth and background to do this. if you don't and want help please email me at `helpmeout@hweeks.com` and i will try my hardest to answer your questions.

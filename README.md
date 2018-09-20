# NgMat01

## Install:
You do not need cocoapods to install for iOS (Option)

## Prerequests:

## External Tools:
+ JDK
+ Android Studio (sdkmanager, avdmanager)
+ Gradel
+ XCode

## Node tools:
+ nvm (Virtualisation, use different node version and tools fit with that node version)
+ node v8.11.3
+ @angular/cli@6.2.1
+ bower@1.8.4
+ cordova@8.0.0
+ cordova-simulate@0.4.0
+ ios-deploy@1.9.3
+ npm@6.2.0

## Example: .bash_profile
## node version manager
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

## jdk on bash shell / finde by /usr/libexec/java_home -V
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home
export PATH=$PATH:/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home

## Android
 export ANDROID_HOME=/Volumes/dev2_photon/Library/Android/sdk
 export PATH=$PATH:$ANDROID_HOME/emulator
 export PATH=$PATH:$ANDROID_HOME/tools/bin/
 export PATH=$PATH:$ANDROID_HOME/platform-tools

## Gradel
export PATH=$PATH:/Volumes/dev2_photon/opt/gradle/gradle-4.10.1/bin

## Development:
+ `$ npm ci`
+ `$ cd cordova/`
+ `$ npm ci`
+ `$ cordova prepare`
+ `$ ng build --watch --base-href . --output-path cordova/www/`
+ In new terminal: `$ cordova run android` 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

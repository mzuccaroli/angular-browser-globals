# BrowserGlobals

A small lightweight angular service for prowser global variables like "window" or "browser"
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Getting Started

After installing it import the BrowserGlobalsService for a singleton instance of the classic browser global variables

```
import {BrowserGlobalsService} from 'browser-globals';
...
constructor(private browserGlobals: BrowserGlobalsService) { }
...
const window = this.browserGlobals.windowRef();
..
```
### Installing

In your Angular project run

```
npm i -save  browser-globals
```

## Authors

* **Marco Zuccaroli** - *Initial work* - [Marco Zuccaroli](https://github.com/mzuccaroli)

See also the list of [contributors](https://github.com/mzuccaroli/angular-browser-globals/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to [PurpleBooth](https://github.com/PurpleBooth) for the [Readme Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) 

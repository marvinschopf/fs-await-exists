# fs-await-exists

Simple package to check with `async / await` if a file exists. This replaces the `.exists()` function that has been deprecated since newer Node versions.

## Installation

Using `npm`:

```bash
npm install fs-await-exists
```

Using `yarn`:

```bash
yarn add fs-await-exists
```

## Usage

```javascript
const exists = require("fs-await-exists");

const fileExists = await exists("file");

if (fileExists) {
	console.log("File exists!");
} else {
	console.log("File does not exist.");
}
```

## License

**Apache 2.0**  
Copyright (c) 2021 Marvin Schopf  

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at  

http://www.apache.org/licenses/LICENSE-2.0  

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.  

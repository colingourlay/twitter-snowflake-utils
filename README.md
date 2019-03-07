<div align="center"><h1>twitter-snowflake-utils</h1><p><small>Utilities for working with Twitter's snowflake algorithm</small><br>🐦❄️🛠</p></div>

```sh
$ npm i twitter-snowflake-utils
```

## Usage

```js
import { generateId, getComponents } from 'twitter-snowflake-utils';

getComponents('1101668899018334209');
// > { creationTime: '1551493308201',
//     dataCenterId: '10',
//     machineId: '22',
//     sequenceId: '1',
//     workerId: '342' }

generateId('1551493308201', '342', '1');
// > '1101668899018334209'
```

## Authors

- Colin Gourlay ([colin@colin-gourlay.com](mailto:colin@colin-gourlay.com))

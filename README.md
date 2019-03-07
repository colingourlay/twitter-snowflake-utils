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

## Snowflake breakdown

```
| 00011110100010001101110000010010101110011 | 01011 | 11000 | 000000000001 |
| T (41)                                    | D (5) | M (5) | S (12)       |
| T                                         | W (10)        | S            |

T (creationTime) = Time (ms) since Snowflake EPOCH
D (dataCenterId) = Data Center ID
M (machineId)    = Machine ID
W (machineId)    = Worker ID
S (sequenceId)   = Sequence ID
```

## Authors

- Colin Gourlay ([colin@colin-gourlay.com](mailto:colin@colin-gourlay.com))

## Thanks

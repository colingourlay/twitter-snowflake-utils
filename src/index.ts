import { BigInteger } from 'jsbn';

const CREATION_TIME_EPOCH = new BigInteger('1288834974657');
const CREATION_TIME_SHIFT_PLACES = 22;
const DATA_CENTER_ID_SHIFT_PLACES = 17;
const MACHINE_ID_SHIFT_PLACES = 12;
const WORKER_ID_SHIFT_PLACES = 12;
const DATA_CENTER_ID_BIT_MASK = new BigInteger('31');
const MACHINE_ID_BIT_MASK = new BigInteger('31');
const SEQUENCE_ID_BIT_MASK = new BigInteger('4095');
const WORKER_ID_BIT_MASK = new BigInteger('1023');

const generateId = (creationTime: string, workerId: string, sequenceId: string): string =>
  new BigInteger(creationTime)
    .subtract(CREATION_TIME_EPOCH)
    .shiftLeft(CREATION_TIME_SHIFT_PLACES)
    .add(new BigInteger(workerId).shiftLeft(WORKER_ID_SHIFT_PLACES))
    .add(new BigInteger(sequenceId))
    .toString();

const getCreationTime = (id: string): string =>
  new BigInteger(id)
    .shiftRight(CREATION_TIME_SHIFT_PLACES)
    .add(CREATION_TIME_EPOCH)
    .toString();

const getDataCenterId = (id: string): string =>
  new BigInteger(id)
    .shiftRight(DATA_CENTER_ID_SHIFT_PLACES)
    .and(DATA_CENTER_ID_BIT_MASK)
    .toString();

const getMachineId = (id: string): string =>
  new BigInteger(id)
    .shiftRight(MACHINE_ID_SHIFT_PLACES)
    .and(MACHINE_ID_BIT_MASK)
    .toString();

const getSequenceId = (id: string): string => new BigInteger(id).and(SEQUENCE_ID_BIT_MASK).toString();

const getWorkerId = (id: string) =>
  new BigInteger(id)
    .shiftRight(WORKER_ID_SHIFT_PLACES)
    .and(WORKER_ID_BIT_MASK)
    .toString();

const getComponents = (id: string): object => ({
  creationTime: getCreationTime(id),
  dataCenterId: getDataCenterId(id),
  machineId: getMachineId(id),
  sequenceId: getSequenceId(id),
  workerId: getWorkerId(id)
});

export { generateId, getComponents, getCreationTime, getDataCenterId, getMachineId, getSequenceId, getWorkerId };

import { version } from '../package.json';
import { Point } from "./foo";
import answer from 'the-answer'
import _ from 'lodash';
export default function mainTest() {
  console.log('version' + version);
  console.log('test:', test)
  const point = new Point()
  console.log(point)
  console.log('answer' + answer)
}
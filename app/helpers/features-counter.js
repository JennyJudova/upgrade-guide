import { helper } from '@ember/component/helper';

export default helper(function counter(params) {
  let models = params[0].content;
  console.log('jen', models);
  let toVersion = params[1];
  let fromVersion = params[2];
  let featArr = models
    .filter((model) => model.id > fromVersion && model.id <= toVersion)
    .map((model) => model.__recordData.__data.changes)
    .flatMap((array) => array)
    .filter((object) => object.feature);
  return featArr.length;
});

module.exports = {
  name: 'a9-nx-gfather',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/a9-nx-gfather',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

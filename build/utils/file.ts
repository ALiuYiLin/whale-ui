import path from 'path';
export const projectRoot = path.resolve(__dirname, '../..');
console.log('projectRoot: ', projectRoot);
export const distDir = path.resolve(projectRoot, 'dist');

export const distWhaleUiDir = path.resolve(distDir, 'whale-ui');

export const packagesDir = path.resolve(projectRoot, 'packages');
export const componentsDir = path.resolve(packagesDir, 'components');
export const themeDir = path.resolve(packagesDir, 'theme');


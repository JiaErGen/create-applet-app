const fse = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
// const spawn = require('cross-spawn');

module.exports = (name) => {
  const processCwd = process.cwd();
  const appPath = path.join(processCwd, name);

  fse.copySync(path.join(__dirname, '../template/alipay'),appPath);

  console.log(chalk.green('\n 项目创建成功'), path.join(processCwd, name));

  // spawn.sync('npm', ['install'], {
  //   stdio: 'inherit',
  //   cwd: appPath,
  // });

  console.log(chalk.white(`\n 输入以下命令启动项目`));
  console.log(chalk.cyan(`\n cd ${name}`));
  console.log(chalk.cyan(`\n npm install`));
  console.log(chalk.cyan(`\n npm run dev`));

}

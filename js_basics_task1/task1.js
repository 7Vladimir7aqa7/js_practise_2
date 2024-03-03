import chalk from 'chalk';
const name = 'Вечер'
console.log(chalk.green(name , 'в радость'))

const log = console.log
log(chalk.red('Чефир ') + 'в ' + chalk.blue('сладость') + chalk.yellow('!'))

log(chalk.blue.bgRed.bold('Вечер в сладость'))
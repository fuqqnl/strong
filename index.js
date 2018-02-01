#!/usr/bin/env node
var fs = require('fs');
var program = require ('commander');
var chalk = require('chalk');
program
    .version('1.0.0')
    .arguments('<file>')
    .description('hello, Strong!!')
    .option('-n, --username <name>', 'your username')
    .option('-p, --password <password>', 'your password')
    .option('-c, --control <control>', 'your controller')
    .option('-e, --enjoy [enjoy]', 'enjoy')

program
    .usage('command');
program
    .command('strong_init')
    .description('初始化strong')
    .alias('gi')
    .action(function(){
        // 进行初始化操作,比如生成一个txt文件
        fs.mkdir('./static', function (err) {
            if (err) {
                console.log(chalk.red('目录已存在，创建目录失败'));
                return;
            }
            fs.open('./static/init.txt', "wx", function (err, fd) {
                // handle error
                fs.close(fd, function (err) {
                    // handle error
                    if (err) {
                        console.log(chalk.red('生成txt文件失败'));
                    } else {
                        console.log(chalk.green('生成txt文件成功'));
                    }
                 });
            });
        })

    });

program.parse(process.argv);


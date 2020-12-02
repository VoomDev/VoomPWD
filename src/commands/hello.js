const {Command, flags} = require('@oclif/command')

class HelloCommand extends Command {
  async run() {
    const {flags} = this.parse(HelloCommand)
    const name = flags.name || 'person'
    this.log(`Hello ${name} from VoomPWD! Run "voompwd folder" to show the current folder. `)
  }
}

HelloCommand.description = `Says hello and tells you the command to pwd.`

HelloCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = HelloCommand

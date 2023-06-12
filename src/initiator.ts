import fs from 'fs'
import path from 'path'
import { MissingCLIConfig } from './Errors/MissingCLIConfig'
import { MissingCommandsDirectory } from './Errors/MissingCommandsDirectory'

type Initiator = {
    project: {
        name: string
        version: string
    }
    commands: string[]
}

type LoaderOptions = {
    development?: boolean
    root: string
}

/**
 * Initiate the loader.
 */
export const initiate = (options: LoaderOptions): Initiator => {
    const location = options?.development ? 'src' : 'lib'

    const configPath = path.join(options.root, 'cli.json')
    const commandsPath = path.join(options.root, location, 'Commands')

    if (fs.existsSync(configPath) === false) {
        throw new MissingCLIConfig()
    }

    if (fs.existsSync(commandsPath) === false) {
        throw new MissingCommandsDirectory()
    }

    const config: Buffer = fs.readFileSync(configPath)

    return {
        project: JSON.parse(config.toString()),
        commands: fs.readdirSync(commandsPath)
    }
}

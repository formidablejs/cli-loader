import type { Application } from '@formidablejs/console'
import { initiate } from './initiator'
import path from 'path'

type LoaderOptions = {
    development?: boolean
    root: string
}

/**
 * Load commands into the CLI application.
 */
export const loader = (applcation: typeof Application, options: LoaderOptions): Application => {
    const { project, commands } = initiate(options)

    const app = new applcation(project.name, project.version, true)

    const location = options?.development ? 'src' : 'lib'

    commands.forEach(command => {
        const commandPath = path.join(options.root, location, 'Commands', command)
        const commandClass = require(commandPath).default

        app.register(commandClass)
    })

    return app
}

export class MissingCLIConfig extends Error {
    /**
     * Create a new instance.
     */
    constructor() {
        super('The cli.json file is missing.')
    }
}

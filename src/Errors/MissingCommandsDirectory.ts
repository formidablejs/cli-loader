export class MissingCommandsDirectory extends Error {
    /**
     * Create a new instance.
     */
    constructor() {
        super('The Commands directory is missing.')
    }
}

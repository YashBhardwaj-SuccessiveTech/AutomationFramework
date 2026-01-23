/**
 * Sleep - Adds a delay/pause in test execution
 * Used for synchronization when dynamic content needs time to load
 */
export class Sleep {
    /**
     * Pauses execution for the specified duration
     * @param ms - Duration to sleep in milliseconds
     */
    async execute(ms: number): Promise<void> {
        await new Promise(resolve => setTimeout(resolve, ms));
    }
}

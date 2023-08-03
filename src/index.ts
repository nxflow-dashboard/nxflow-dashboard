export * from "./types"

export const Routes = {
    /**
	 * Route for:
	 * - GET `/fivem/concession/access`
	 * - POST `/fivem/concession/access`
	 */
	fivemConcessionRoles() {
		return `/fivem/concession/access` as const;
	},

    /**
	 * Route for:
	 * - GET `/fivem/concession/access/{roleId}`
	 * - PATCH `/fivem/concession/access/{roleId}`
     * - DELETE `/fivem/concession/access/{roleId}`
	 */
	fivemConcessionRole(roleId: string) {
		return `/fivem/concession/access/${roleId}` as const;
	},

    /**
	 * Route for:
	 * - GET `/fivem/concession/clients`
	 */
	fivemConcessionClients() {
		return `/fivem/concession/clients` as const;
	},

    /**
	 * Route for:
	 * - GET `/fivem/concession/clients/{clientId}`
	 */
	fivemConcessionClient(clientId: string) {
		return `/fivem/concession/clients/${clientId}` as const;
	},

    /**
	 * Route for:
	 * - GET `/fivem/concession/logs`
	 */
	fivemConcessionLogs() {
		return `/fivem/concession/logs` as const;
	},

    /**
	 * Route for:
	 * - GET `/fivem/concession/sells`
     * - POST `/fivem/concession/sells`
	 */
	fivemConcessionSells() {
		return `/fivem/concession/sells` as const;
	},

    /**
	 * Route for:
	 * - GET `/fivem/concession/stats`
	 */
	fivemConcessionStats() {
		return `/fivem/concession/stats` as const;
	},

    /**
	 * Route for:
	 * - GET `/fivem/concession/users`
	 */
	fivemConcessionUsers() {
		return `/fivem/concession/users` as const;
	},

    /**
	 * Route for:
	 * - GET `/fivem/concession/users/{userId}`
     * - PATCH `/fivem/concession/users/{userId}`
     * - DELETE `/fivem/concession/users/{userId}`
	 */
	fivemConcessionUser(userId: string) {
		return `/fivem/concession/clients/${userId}` as const;
	},
    
     /**
	 * Route for:
	 * - GET `/fivem/concession/vehicles`
	 */
	fivemConcessionVehicles() {
		return `/fivem/concession/vehicles` as const;
	},
}
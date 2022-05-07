export interface CorePlugin {
	// Plugin Information
	displayName: string;
	name: string;
	version: string;

	// Other
	core: Core;
}

export interface CoreRegisterPlugin {
	// Plugin Information
	displayName: string;
	name: string;
	version: string;

	// Compatability
	minCoreVersion?: string;

	// Lifecycle
	detected(plugin: CorePlugin): void | Promise<void>;
}

export class Core {
	registerPlugin(options: CoreRegisterPlugin) {}
}

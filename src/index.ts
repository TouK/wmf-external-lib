export { FederatedModuleProvider } from "./FederatedModuleProvider";
export { useFederatedModule } from "./hooks";
export { FederatedComponent, getFederatedComponentLoader } from "./FederatedComponent";
export { createScript, splitUrl, loadFederatedModule } from "./tools";

export type { FederatedModuleProviderProps } from "./FederatedModuleProvider";
export type { FederatedComponentProps } from "./FederatedComponent";
export type { Module, ModuleUrl, ModuleString, ScriptUrl, PathString, QueryString, ScopeString } from "./types";

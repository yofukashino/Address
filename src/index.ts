import { Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
import { registerSettings } from "./Components/Settings";
export const PluginLogger = Logger.plugin("Address");
export const SettingValues = await settings.init("dev.tharki.Address", defaultSettings);
import { AddressMenuItem } from "./Components/MenuItem";

export const start = (): void => {
  registerSettings();
  HBCM.getAPI().addItem("Address", AddressMenuItem);
};

export const stop = (): void => {
  HBCM.getAPI().removeItem("Address");
};

export { Settings } from "./Components/Settings";

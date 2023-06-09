import { Logger, common, settings } from "replugged";
export const { toast: Toasts } = common;
import { defaultSettings } from "./lib/consts";
import { registerSettings } from "./Components/Settings";
export const PluginLogger = Logger.plugin("Address");
export const SettingValues = await settings.init("dev.tharki.Address", defaultSettings);
import { AddressMenuItem } from "./Components/MenuItem";

import HBCM from "./lib/HomeButtonContextMenuApi";

export const start = (): void => {
  registerSettings();
  HBCM.addItem("Address", AddressMenuItem);
};

export const stop = (): void => {
  HBCM.removeItem("Address");
};

export { Settings } from "./Components/Settings";

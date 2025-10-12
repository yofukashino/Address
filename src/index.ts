import { Logger, settings } from "replugged";
import { DefaultSettings, MENU_ITEM_ID } from "@consts";
import Settings from "@components/Settings";
import AddressMenuItem from "@components/MenuItem";
import HomeContext from "@HomeContext";

export const PluginLogger = Logger.plugin("Address", "#ffffff80");
export const SettingValues = settings.init("dev.tharki.Address", DefaultSettings);

export const start = (): void => {
  Settings.registerSettings();
  HomeContext.add(MENU_ITEM_ID, AddressMenuItem);
};

export const stop = (): void => {
  HomeContext.remove(MENU_ITEM_ID);
};

export { Settings } from "@components/Settings";

import { components, util } from "replugged";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import * as Types from "../types";
const { SwitchItem } = components;
export const registerSettings = (): void => {
  for (const key in defaultSettings) {
    if (SettingValues.has(key as keyof Types.Settings)) return;
    PluginLogger.log(`Adding new setting ${key} with value ${defaultSettings[key]}.`);
    SettingValues.set(key as keyof Types.Settings, defaultSettings[key]);
  }
};

export const Settings = () => {
  return (
    <div>
      <SwitchItem
        {...{
          note: "Get a confirmation/error message when copying the web address.",
          ...util.useSetting(SettingValues, "showToast", defaultSettings.showToast),
        }}>
        Pop-up/Toast
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Replace PTB/Canary links with normal (Stable) Discord links.",
          ...util.useSetting(SettingValues, "normalizeAddress", defaultSettings.normalizeAddress),
        }}>
        Normalize address
      </SwitchItem>
    </div>
  );
};

import { util } from "replugged";
import { Switch } from "replugged/components";
import { PluginLogger, SettingValues } from "@this";
import { defaultSettings } from "@consts";
import Types from "@types";

export const registerSettings = (): void => {
  for (const key in defaultSettings) {
    if (SettingValues.has(key as keyof Types.Settings)) return;
    PluginLogger.log(`Adding new setting ${key} with value ${defaultSettings[key]}.`);
    SettingValues.set(key as keyof Types.Settings, defaultSettings[key]);
  }
};

export const Settings = () => {
  return (
    <>
      <Switch
        label={"Pop-up/Toast"}
        description="Get a confirmation/error message when copying the web address."
        {...util.useSetting(SettingValues, "showToast", defaultSettings.showToast)}
      />
      <Switch
        label={"Normalize address"}
        description="Replace PTB/Canary links with normal (Stable) Discord links."
        {...util.useSetting(SettingValues, "normalizeAddress", defaultSettings.normalizeAddress)}
      />
    </>
  );
};

export default { registerSettings, Settings };

import { util } from "replugged";
import { Switch } from "replugged/components";
import { PluginLogger, SettingValues } from "@this";
import { DefaultSettings } from "@consts";

export const registerSettings = (): void => {
  type DefaultSettings = typeof DefaultSettings;
  type key = keyof DefaultSettings;
  type value = DefaultSettings[key];

  for (const key in DefaultSettings) {
    if (SettingValues.has(key as key)) return;
    PluginLogger.log(`Adding new setting ${key} with value ${DefaultSettings[key]}.`);
    SettingValues.set(key as key, DefaultSettings[key] as value);
  }
};

export const Settings = (): React.ReactElement => {
  return (
    <>
      <Switch
        label={"Pop-up/Toast"}
        description="Get a confirmation/error message when copying the web address."
        {...util.useSetting(SettingValues, "showToast", DefaultSettings.showToast)}
      />
      <Switch
        label={"Normalize address"}
        description="Replace PTB/Canary links with normal (Stable) Discord links."
        {...util.useSetting(SettingValues, "normalizeAddress", DefaultSettings.normalizeAddress)}
      />
    </>
  );
};

export default { registerSettings, Settings };

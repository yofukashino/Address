import { toast } from "replugged/common";
import { ContextMenu } from "replugged/components";
import { PluginLogger, SettingValues } from "@this";
import { defaultSettings } from "@consts";
import Icons from "@icons";

export default () => {
  const showToast = SettingValues.get("showToast", defaultSettings.showToast);
  const normalizeAddress = SettingValues.get("normalizeAddress", defaultSettings.normalizeAddress);
  const Address = normalizeAddress
    ? window.location.href.replace(/:\/\/\w+.discord.com/, "://discord.com")
    : window.location.href;

  return (
    <ContextMenu.MenuItem
      label="Copy Address"
      id="copy-address"
      icon={() => <Icons.globe width="24" height="24" />}
      action={() => {
        try {
          if (!Address) {
            PluginLogger.error("Whoops! I couldn't find the current web address.");
            if (showToast)
              toast.toast("Whoops! I couldn't find the current web address.", toast.Kind.FAILURE);
            return;
          }

          DiscordNative.clipboard.copy(Address);
          if (showToast) toast.toast("Address Copied to Clipboard.", toast.Kind.SUCCESS);
        } catch (error) {
          if (showToast) toast.toast(`Error Copying the address.`, toast.Kind.FAILURE);
          PluginLogger.error(error);
        }
      }}
    />
  );
};

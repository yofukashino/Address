import { toast as Toasts } from "replugged/common";
import { ContextMenu } from "replugged/components";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { DiscordNative } from "../lib/requiredModules";
import Icons from "./Icons";

const { MenuItem } = ContextMenu;
export const AddressMenuItem = (
  <MenuItem
    {...{
      label: "Copy Address",
      id: "copy-address",
      icon: () => Icons.glob("20", "20"),
      action: () => {
        try {
          const Address = SettingValues.get("normalizeAddress", defaultSettings.normalizeAddress)
            ? `https://discord.com/${window.location.href.split("discord.com/")[1]}`
            : window.location.href;
          if (!Address) {
            PluginLogger.error("Whoops! I couldn't find the current web address.");
            if (SettingValues.get("showToast", defaultSettings.showToast))
              Toasts.toast("Whoops! I couldn't find the current web address.", Toasts.Kind.FAILURE);
            return;
          }
          DiscordNative.clipboard.copy(Address);
          if (SettingValues.get("showToast", defaultSettings.showToast))
            Toasts.toast("Address Copied to Clipboard.", Toasts.Kind.SUCCESS);
        } catch (error) {
          if (SettingValues.get("showToast", defaultSettings.showToast))
            Toasts.toast(`Error: ${error}.`, Toasts.Kind.FAILURE);
          PluginLogger.error(error);
        }
      },
    }}
  />
);

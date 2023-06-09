import { components } from "replugged";
import { PluginLogger, SettingValues, Toasts } from "../index";
import { defaultSettings } from "../lib/consts";
import { DiscordNative } from "../lib/requiredModules";
import * as Icons from "./Icons";

const {
  ContextMenu: { MenuItem },
} = components;
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

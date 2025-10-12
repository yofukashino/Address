import { types } from "replugged";
import type { WebpackChunkGlobal } from "replugged/dist/types";
export namespace Types {
  export import DefaultTypes = types;
}

export default Types;

declare global {
  export const webpackChunkdiscord_app: WebpackChunkGlobal;

  export const DiscordNative: {
    clipboard: {
      copy: (content: string) => void;
    };
  };
}

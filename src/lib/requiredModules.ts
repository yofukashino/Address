import { webpack } from "replugged";
import * as Types from "../types";

export const DiscordNative = webpack.getByProps(
  "clipboard",
  "process",
) as unknown as Types.DiscordNative;

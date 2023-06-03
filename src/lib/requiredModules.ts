import { webpack } from "replugged";
import * as Types from "../types";

export const DiscordNative = webpack.getByProps<Types.DiscordNative>("clipboard", "process");

import { webpack } from "replugged";
import Types from "../types";

export const DiscordNative = webpack.getByProps<Types.DiscordNative>("clipboard", "process");

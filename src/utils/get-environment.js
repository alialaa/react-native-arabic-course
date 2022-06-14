import { releaseChannel } from "expo-updates";

export default function getEnvironment() {
    if (releaseChannel.startsWith("prod")) {
        return "PRODUCTION";
    } else if (releaseChannel.startsWith("staging")) {
        return "STAGING";
    } else {
        return "DEVELOPMENT";
    }
}

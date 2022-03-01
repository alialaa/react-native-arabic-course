import { useState } from "react";
import { ScrollView, Switch, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Card, Text, Choices, Button } from "@components";
import { useSettings } from "@contexts";
import i18n from "@langs";
import styles from "./settings.styles";

export default function Settings() {
    const { settings, setSettings } = useSettings();
    const { colors } = useTheme();
    const [useDeviceColorScheme, setUseDeviceColorScheme] = useState(false);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card style={styles.card}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <Text style={styles.label}>{i18n.t("settings.useDeviceColorScheme")}</Text>
                    <Switch
                        trackColor={{
                            false: colors.background,
                            true: colors.primary
                        }}
                        thumbColor="#fff"
                        ios_backgroundColor={colors.background}
                        value={useDeviceColorScheme}
                        onValueChange={value => setUseDeviceColorScheme(value)}
                    />
                </View>
            </Card>
            {!useDeviceColorScheme && (
                <Card style={styles.card}>
                    <Text style={styles.label}>{i18n.t("settings.colorScheme")}</Text>
                    <Choices
                        style={styles.choices}
                        value="light"
                        onValueChange={value => console.log(value)}
                        items={[
                            {
                                label: i18n.t("settings.light"),
                                value: "light"
                            },
                            {
                                label: i18n.t("settings.dark"),
                                value: "dark"
                            }
                        ]}
                    />
                </Card>
            )}
            <Card style={styles.card}>
                <Text style={styles.label}>{i18n.t("settings.units")}</Text>
                <Choices
                    style={styles.choices}
                    value="metric"
                    onValueChange={value => console.log(value)}
                    items={[
                        {
                            label: i18n.t("settings.metric"),
                            value: "metric"
                        },
                        {
                            label: i18n.t("settings.imperial"),
                            value: "imperial"
                        }
                    ]}
                />
            </Card>

            <Card style={styles.card}>
                <Text style={styles.label}>{i18n.t("settings.language")}</Text>
                <Choices
                    style={styles.choices}
                    value="en"
                    onValueChange={value => console.log(value)}
                    items={[
                        {
                            label: i18n.t("settings.english"),
                            value: "en"
                        },
                        {
                            label: i18n.t("settings.arabic"),
                            value: "ar"
                        }
                    ]}
                />
                <View style={{ marginTop: 10 }}>
                    <Text style={{ marginBottom: 10 }}>{i18n.t("settings.languageInfo")}</Text>
                    <Button title={i18n.t("settings.reload")} />
                </View>
            </Card>
        </ScrollView>
    );
}

import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text, theme } from "galio-framework";
import TabBarIcon from "../components/TabBarIcon";
import Colors from "../constants/Colors";

class DrawerItem extends React.Component {
    /*    renderIcon = () => {
            const { title, focused, name } = this.props;
            let src;
            switch (name) {
                case "Health":
                    return (
                        <TabBarIcon
                            src={require("../../assets/icons/healthBlue.png")}
                            size={{ height: 30, width: 30, marginRight: 20 }}
                        />
                    );
                case "Schedule":
                    return (
                        <TabBarIcon
                            src={require("../../assets/icons/scheduleBlue.png")}
                            size={{ height: 30, width: 30, marginRight: 20 }}
                        />
                    );
                case "Consult":
                    return (
                        <TabBarIcon
                            //src={require("../../assets/icons/consultOn.png")}
                            size={{ height: 25, width: 25, marginRight: 20 }}
                        />
                    );
                case "SharedAct":
                    return (
                        <TabBarIcon
                            //src={require("../../assets/icons/sharedActOn.png")}
                            size={{ height: 25, width: 25, marginRight: 20 }}
                        />
                    );
                case "AssignedAct":
                    return (
                        <TabBarIcon
                            //src={require("../../assets/icons/assignedActOn.png")}
                            size={{ height: 25, width: 25, marginRight: 20 }}
                        />
                    );
                case "Emergency":
                    return (
                        <TabBarIcon
                            //src={require("../../assets/icons/emergencyOn.png")}
                            size={{ height: 25, width: 25, marginRight: 20 }}
                        />
                    );
                case "Contacts":
                    return (
                        <TabBarIcon
                            src={require("../../assets/icons/contactsBlue.png")}
                            size={{ height: 25, width: 25, marginRight: 20 }}
                        />
                    );
                case "Profile":
                    return (
                        <TabBarIcon
                            //src={require("../../assets/icons/profileOn.png")}
                            size={{ height: 25, width: 25, marginRight: 20 }}
                        />
                    );
                case "Groups":
                    return (
                        <TabBarIcon
                            //src={require("../../assets/icons/groupsOn.png")}
                            size={{ height: 25, width: 25, marginRight: 20 }}
                        />
                    );
                case "Config":
                    return (
                        <TabBarIcon
                            src={require("../../assets/icons/configBlue.png")}
                            size={{ height: 25, width: 25, marginRight: 20 }}
                        />
                    );
                case "Search":
                    return (
                        <TabBarIcon
                            src={require("../../assets/icons/searchBlue.png")}
                            size={{ height: 25, width: 25, marginRight: 20 }}
                        />
                    );
                default:
                    return null;
            }
        };*/

    render() {
        const { focused, title } = this.props;

        const containerStyles = [styles.defaultStyle];

        return (
            <Block flex row style={containerStyles}>
                {/*<Block middle flex={0.1} style={{ marginRight: 5 }}>
                    {this.renderIcon()}
        </Block>*/}
                <Block row center flex={0.9}>
                    <Text size={15} style={styles.text}>
                        {title}
                    </Text>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    defaultStyle: {
        paddingVertical: 15,
        paddingHorizontal: 14
    },
    activeStyle: {
        borderRadius: 4
    },
    shadow: {
        shadowColor: theme.COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8,
        shadowOpacity: 0.1
    },
    text: {
        color: Colors.mainBlue
    }
});

export default DrawerItem;

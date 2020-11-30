import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Modal, View, Text, TouchableOpacity, ScrollView } from "react-native";

import Colors from "../../data/Colors";
import Terms from "../../data/Terms";
import { styles } from "./styles";

const TermsModal = ({ visible, onPress }) => {
  const [registerVisible, setRegister] = useState(false);
  const [aboutVisible, setAbout] = useState(false);
  const [limitationsVisible, setLimitations] = useState(false);

  return (
    <Modal transparent visible={visible}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          padding: 20,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.title}>Termo de consentimento</Text>
            <TouchableOpacity onPress={onPress}>
              <Icon name="close" color={Colors.mainRed} size={30} />
            </TouchableOpacity>
          </View>
          <Text style={styles.bodyText}>
            Por este termo de uso, você estará ciente e concorda que ao utilizar
            a plataforma do Acolhimento UFPR para anunciar, comprar e vender
            produtos/serviços, automaticamente irá aderir e concordar em se
            submeter integralmente às condições do presente TERMO DE USO e
            qualquer de suas alterações futuras. Leia abaixo para saber mais
            detalhes quanto as condições de uso do aplicativo.
          </Text>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => setRegister(!registerVisible)}
          >
            <Icon
              name={registerVisible ? "caret-down" : "caret-up"}
              color={Colors.mainRed}
              size={25}
            />
            <Text style={styles.buttonText}>Cadastro</Text>
          </TouchableOpacity>
          {registerVisible ? (
            <Text style={styles.bodyText}>{Terms.register}</Text>
          ) : null}
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => setAbout(!aboutVisible)}
          >
            <Icon
              name={aboutVisible ? "caret-down" : "caret-up"}
              color={Colors.mainRed}
              size={25}
            />
            <Text style={styles.buttonText}>Sobre o app</Text>
          </TouchableOpacity>
          {aboutVisible ? (
            <Text style={styles.bodyText}>{Terms.about}</Text>
          ) : null}
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => setLimitations(!limitationsVisible)}
          >
            <Icon
              name={limitationsVisible ? "caret-down" : "caret-up"}
              color={Colors.mainRed}
              size={25}
            />
            <Text style={styles.buttonText}>Vedações de uso</Text>
          </TouchableOpacity>
          {limitationsVisible ? (
            <Text style={styles.bodyText}>{Terms.limitations}</Text>
          ) : null}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default TermsModal;

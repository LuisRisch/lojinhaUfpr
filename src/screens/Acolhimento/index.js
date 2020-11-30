import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  Linking,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../../data/Colors";

import styles from "./styles";

const Acolhimento = () => {
  const timeline = [
    {
      text:
        "O projeto Acolhimento UFPR surgiu no inicio da pandemia, no Curso Superior de Tecnologia em Produção Cênica (TPC) com dois propósitos: Apoiar os estudantes que, com a interrupção das aulas presenciais, ficaram sem o suporte da universidade, e homenagear pessoas cuja continuidade de suas atividades profissionais se fez necessária para que a cidade se mantivesse em movimento.",
      id: 0,
      stage: "Início",
    },
    {
      text:
        "O grupo de professores e estudantes de TPC definiu que seriam criados vídeos de agradecimento as categorias de profissionais, como, entregadores, porteiros, profissionais da saúde, dentre outros, também refletindo sobre a criação de um espaço virtual no qual os estudantes pudessem anuncias produtos e serviços e assim garantir possibilidades complementares de renda frente a crise sanitária.",
      id: 1,
      stage: "Ideia",
    },
    {
      text:
        "Visando atingir tais objetivos a partir de uma aproximação maior entre o TPC e os cursos do Setor de Arte, Comunicação e Design (SACOD), professores e estudantes de Artes Visuais, Música e Desgin foram convidados, e passaram a atuar no proeto como bolsistas ou voluntários, assim como os docentes de seus cursos de origem como orientadores e colaboradores da proposta.",
      id: 2,
      stage: "Cursos",
    },
    {
      text:
        "O projeto cresceu, e o que seria um espaço de anúncios, transformou-se em um APP. Novos professores, estudantes e cursos, como no caso do Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas e do Bacharelado em Ciências da Computação que passaram a integrar o projeto.",
      id: 3,
      stage: "App",
    },
  ];

  const renderList = (item) => (
    <View style={styles.timelineBox}>
      <View style={styles.timelineIndexBox}>
        <Text style={styles.timelineIndexId}>{`0${item.id + 1}`}</Text>
      </View>
      <Text style={styles.timelineText}>{item.text}</Text>
      <View style={styles.stageBox}>
        <View style={styles.dot} />
        <Text style={styles.stageText}>{item.stage}</Text>
      </View>
    </View>
  );

  const handleInstagram = () => {
    Linking.openURL("https://www.instagram.com/acolhimento_ufpr/");
  };

  const handleFacebook = () => {
    Linking.openURL(
      "fb://facewebmodal/f?href=https://www.facebook.com/acolhimentosufpr"
    );
  };

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => renderList(item)}
          data={timeline}
          horizontal
          keyExtractor={(item) => item.id}
        />
        <Text style={styles.title}>Equipe</Text>
        <Text style={styles.bodyText}>
          São ao todo 19 estudantes (12 bolsistas e 7 voluntários) e 15
          professores (8 orientadores e 7 colaboradores), divididos em quatro
          grupos: Poéticas Visuais, Poéticas Sonoras, Comunicação e APP
          Acolhimento. A proposta tem atingido seus objetos iniciais, e para
          além deles, possibilitando integração intersetorial de diversos cursos
          da UFPR, onde a convergência de experiências e a vazão de processos
          coletivos de criação transbordam do universo acadêmico aproximando-o
          da comunidade em geral, prerrogativa fundamental da prática
          extensionista. Todo o material produzido pelo grupo pode ser acessado
          no instagram @acolhimento_UFPR.
        </Text>
        <View style={styles.socialView}>
          <TouchableOpacity onPress={handleInstagram}>
            <Icon name="instagram" color={Colors.mainRed} size={35} />
          </TouchableOpacity>
          <Image
            source={require("../../assets/icon.png")}
            style={styles.logo}
          />
          <TouchableOpacity onPress={handleFacebook}>
            <Icon name="facebook-square" color={Colors.mainRed} size={35} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Acolhimento;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    padding: 90,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 20,
  },
  loginText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#00ff2a",
    textAlign: "center",
    marginBottom: 40,
  },
  formContainer: {
    width: "100%",
  },
  label: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    backgroundColor: "#222222",
    borderColor: "#444444",
    borderWidth: 1,
    borderRadius: 8,
    color: "#ffffff",
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  erro: {
    color: "#ff0000",
    fontSize: 12,
    marginBottom: 10,
    marginTop: 5,
  },
  botaoLogin: {
    backgroundColor: "#00ff2a",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 30,
    width: 300,
  },
  botaoDesabilitado: {
    opacity: 0.6,
  },
  textoBotao: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  botaoCadastro: {
    padding: 14,
    marginTop: 15,
    alignItems: "center",
  },
  textoBotaoCadastro: {
    color: "#f6ff00",
    fontSize: 14,
    fontWeight: "300",
  },
});

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingTop: 90,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#cccccc",
    textAlign: "center",
    marginBottom: 30,
  },
  cardsContainer: {
    alignItems: "center",
    width: "100%",
    paddingBottom: 30,
  },
  scrollArea: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  cardWrapper: {
    alignItems: "center",
    marginBottom: 30,
  },
  cardBox: {
    width: 300,
    height: 300,
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#00ff2a",
    marginBottom: 10,
    overflow: "hidden",
  },
  photoPlaceholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2a2a2a",
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  placeholderText: {
    color: "#666666",
    fontSize: 12,
  },
  cardLabel: {
    color: "#00ff2a",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  cardHint: {
    color: "#cccccc",
    fontSize: 12,
    textAlign: "center",
    marginTop: 4,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 20,
  },
  botao: {
    backgroundColor: "#00ff2a",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  textoBotao: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButton: {
    alignSelf: "center",
    marginTop: 20,
    height: 50,
    minWidth: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00ff2a",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "bold",
  },
});

const QuizCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    margin: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 8,
    marginBottom: 12,
  },
  question: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  options: {
    flexDirection: "column",
  },
  optionButton: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    marginBottom: 8,
  },
  optionText: {
    fontSize: 16,
  },
  optionCorrect: {
    backgroundColor: "#e6ffed",
  },
  optionWrong: {
    backgroundColor: "#ffecec",
  },
  explanation: {
    marginTop: 12,
    padding: 10,
    backgroundColor: "#f9fafb",
    borderRadius: 8,
  },
  explanationTitle: { fontWeight: "700", marginBottom: 4 },
  explanationText: { color: "#333" },
});

const QuizDeckStyles = StyleSheet.create({
  container: { padding: 12 },
  header: { marginBottom: 8, fontWeight: "600" },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
});

const quizJogadoresStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  scrollView: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },

  titulo: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },

  score: {
    color: "#2ECC71",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },

  tentativas: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 15,
  },

  progressContainer: {
    width: "85%",
    height: 12,
    backgroundColor: "#444",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
  },

  progressBar: {
    height: "100%",
    backgroundColor: "#2ECC71",
  },

  imageWrapper: {
    width: 280,
    height: 280,
    overflow: "hidden",
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: "#FFF",
    elevation: 10,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  },

  hintsContainer: {
    width: "90%",
    marginBottom: 15,
    alignItems: "center",
  },

  hintText: {
    color: "#FFD700",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  input: {
    width: 300,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 18,
    marginBottom: 20,
  },

  button: {
    width: 300,
    height: 50,
    backgroundColor: "#2ECC71",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 10,
  },

  hintButton: {
    width: 300,
    height: 50,
    backgroundColor: "#F39C12",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 1,
  },

  nextButton: {
    width: "90%",
    backgroundColor: "#3498DB",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
  },

  backButton: {
    width: 300,
    height: 50,
    backgroundColor: "#E74C3C",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },

  mensagem: {
    marginTop: 15,
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});

const quizSelecaoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  titulo: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  score: {
    color: "#2ECC71",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  tentativas: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 15,
  },
  progressContainer: {
    width: "85%",
    height: 12,
    backgroundColor: "#444",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#2ECC71",
  },
  imageWrapper: {
    width: 280,
    height: 280,
    overflow: "hidden",
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: "#FFF",
    elevation: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  },
  hintsContainer: {
    width: "90%",
    marginBottom: 15,
    alignItems: "center",
  },
  hintText: {
    color: "#FFD700",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 18,
    marginBottom: 15,
  },
  button: {
    width: "90%",
    backgroundColor: "#2ECC71",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 10,
  },
  hintButton: {
    width: "90%",
    backgroundColor: "#F39C12",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 10,
  },
  nextButton: {
    width: "90%",
    backgroundColor: "#3498DB",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
  },
  backButton: {
    width: "90%",
    backgroundColor: "#E74C3C",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  mensagem: {
    marginTop: 15,
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});

const quizPosicaoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A2342",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  titulo: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  score: {
    color: "#2ECC71",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  tentativas: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 15,
  },
  progressContainer: {
    width: "85%",
    height: 12,
    backgroundColor: "#444",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#2ECC71",
  },
  imageWrapper: {
    width: 280,
    height: 280,
    overflow: "hidden",
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: "#FFF",
    elevation: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  },
  input: {
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 18,
    marginBottom: 15,
  },
  button: {
    width: "90%",
    backgroundColor: "#2ECC71",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 10,
  },
  nextButton: {
    width: "90%",
    backgroundColor: "#3498DB",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
  },
  backButton: {
    width: "90%",
    backgroundColor: "#E74C3C",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  mensagem: {
    marginTop: 15,
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default styles;
export {
  loginStyles,
  homeStyles,
  QuizCardStyles,
  QuizDeckStyles,
  quizJogadoresStyles,
  quizSelecaoStyles,
  quizPosicaoStyles,
};

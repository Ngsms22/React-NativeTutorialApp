import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />
      <Spacer height={20} />
      <ThemedText title={true} style={[styles.title]}>
        This is the page
      </ThemedText>
      <Spacer height={10} />
      <ThemedText style={{ fontSize: 18, fontWeight: "bold" }}>
        This is the page entry
      </ThemedText>
      <Spacer height={10} />

      <Link href="/login" style={styles.link}>
        <ThemedText>Go to Login Page</ThemedText>
      </Link>
      <ThemedText>
        <Link href="/register" style={styles.link}>
          Go to register Page
        </Link>
      </ThemedText>
      <ThemedText>
        <Link href="/profile" style={styles.link}>
          Go to Profile Page
        </Link>
      </ThemedText>
      
    </ThemedView>
  );
};

export default Home;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
  },
  box: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 18,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});

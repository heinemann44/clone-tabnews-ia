import Confetti from "./confetti";

async function getPublishedPostsCount() {
  try {
    const response = await fetch(
      "https://www.tabnews.com.br/api/v1/contents?per_page=1&strategy=new",
      { next: { revalidate: 60 } },
    );
    const total = Number(response.headers.get("x-pagination-total-rows"));
    return response.ok && total ? total : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const postsCount = await getPublishedPostsCount();

  return (
    <main style={styles.main}>
      <Confetti />
      <h1 style={styles.title}>🚧 Em construção</h1>
      <p style={styles.text}>
        Este é um clone do TabNews, desenvolvido para o curso.dev com o apoio
        de agentes de IA. Enquanto ele não fica pronto, que tal conhecer o
        original?
      </p>
      {postsCount && (
        <p style={styles.counter}>
          <strong style={styles.counterNumber}>
            {postsCount.toLocaleString("pt-BR")}
          </strong>
          posts já publicados no TabNews
        </p>
      )}
      <a href="https://www.tabnews.com.br" style={styles.button}>
        Acessar o TabNews
      </a>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    padding: 16,
    textAlign: "center",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    color: "#1f2328",
  },
  title: {
    margin: 0,
    fontSize: 40,
  },
  text: {
    margin: 0,
    maxWidth: 520,
    fontSize: 18,
    lineHeight: 1.5,
    color: "#59636e",
  },
  counter: {
    margin: 0,
    display: "flex",
    flexDirection: "column",
    fontSize: 16,
    color: "#59636e",
  },
  counterNumber: {
    fontSize: 48,
    color: "#1f2328",
  },
  button: {
    padding: "10px 20px",
    borderRadius: 6,
    backgroundColor: "#1f883d",
    color: "#ffffff",
    fontWeight: 600,
    textDecoration: "none",
  },
};

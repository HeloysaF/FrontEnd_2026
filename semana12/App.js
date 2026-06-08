// ── DADOS DO PUZZLE ──────────────────────────────────────
const PUZZLE = {
  groups: [
    {
      category: "🌊 Elementos da Natureza",
      color: "#22d3ee",
      bg: "#083344",
      words: ["CHUVA", "VENTO", "NEVE", "RELÂMPAGO"],
    },
    {
      category: "🎸 Gêneros Musicais",
      color: "#a78bfa",
      bg: "#2e1065",
      words: ["ROCK", "SAMBA", "JAZZ", "BLUES"],
    },
    {
      category: "🐾 Animais da Selva",
      color: "#4ade80",
      bg: "#052e16",
      words: ["ONÇA", "MACACO", "TUCANO", "CAPIVARA"],
    },
    {
      category: "🍕 Comidas Italianas",
      color: "#fb923c",
      bg: "#431407",
      words: ["PIZZA", "RISOTO", "LASANHA", "GNOCCHI"],
    },
  ],
};

const ALL_WORDS = PUZZLE.groups.flatMap((g) => g.words);
const MAX_MISTAKES = 4;

// ── UTILITÁRIO: EMBARALHAR ARRAY ──────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── COMPONENTE: BANNER DO GRUPO RESOLVIDO ────────────────
function SolvedBanner({ group }) {
  return (
    <div
      className="solved-banner"
      style={{
        background: group.bg,
        borderColor: group.color,
        color: group.color,
      }}
    >
      <span className="banner-category">{group.category}</span>
      <span className="banner-words">{group.words.join(" · ")}</span>
    </div>
  );
}

// ── COMPONENTE: BOTÃO DE PALAVRA ─────────────────────────
function WordTile({ word, selected, shaking, onClick }) {
  return (
    <button
      className={`tile ${selected ? "selected" : ""} ${shaking && selected ? "shake" : ""}`}
      onClick={onClick}
    >
      {word}
    </button>
  );
}

// ── COMPONENTE PRINCIPAL: JOGO ───────────────────────────
function App() {
  const { useState } = React;

  const [tiles, setTiles]               = useState(() => shuffle(ALL_WORDS));
  const [selected, setSelected]         = useState([]);
  const [solvedGroups, setSolvedGroups] = useState([]);
  const [mistakes, setMistakes]         = useState(0);
  const [message, setMessage]           = useState("Selecione 4 palavras do mesmo grupo!");
  const [shaking, setShaking]           = useState(false);
  const [gameOver, setGameOver]         = useState(false); // false | "won" | "lost"

  const solvedWords = solvedGroups.flatMap((g) => g.words);
  const unsolvedTiles = tiles.filter((w) => !solvedWords.includes(w));

  // Seleciona ou desseleciona uma palavra
  function toggleSelect(word) {
    if (gameOver) return;
    setSelected((prev) =>
      prev.includes(word)
        ? prev.filter((w) => w !== word)
        : prev.length < 4
        ? [...prev, word]
        : prev
    );
  }

  // Valida o envio das 4 palavras selecionadas
  function handleSubmit() {
    if (selected.length !== 4) return;

    const group = PUZZLE.groups.find((g) =>
      selected.every((w) => g.words.includes(w))
    );

    if (group) {
      // Acertou o grupo!
      const newSolved = [...solvedGroups, group];
      setSolvedGroups(newSolved);
      setSelected([]);
      setMessage(`✅ ${group.category} — Correto!`);

      if (newSolved.length === PUZZLE.groups.length) {
        setTimeout(() => setGameOver("won"), 400);
      }
    } else {
      // Errou — calcula se estava "quase lá"
      const best = Math.max(
        ...PUZZLE.groups.map(
          (g) => selected.filter((w) => g.words.includes(w)).length
        )
      );

      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);
      setShaking(true);
      setTimeout(() => setShaking(false), 550);
      setMessage(best === 3 ? "🔥 Quase! Faltou uma palavra..." : "❌ Tente novamente!");

      if (newMistakes >= MAX_MISTAKES) {
        setTimeout(() => setGameOver("lost"), 400);
      }
    }
  }

  // Embaralha apenas as palavras ainda não resolvidas
  function handleShuffle() {
    const unsolved = tiles.filter((w) => !solvedWords.includes(w));
    setTiles([...solvedWords, ...shuffle(unsolved)]);
  }

  // Reinicia o jogo do zero
  function handleReset() {
    setTiles(shuffle(ALL_WORDS));
    setSelected([]);
    setSolvedGroups([]);
    setMistakes(0);
    setMessage("Selecione 4 palavras do mesmo grupo!");
    setShaking(false);
    setGameOver(false);
  }

  return (
    <div className="app">

      {/* Cabeçalho */}
      <header className="header">
        <h1 className="title">CONEXO</h1>
        <p className="subtitle">Encontre os grupos de 4 palavras</p>
      </header>

      {/* Banners dos grupos já resolvidos */}
      <div className="solved-list">
        {solvedGroups.map((g) => (
          <SolvedBanner key={g.category} group={g} />
        ))}
      </div>

      {/* Grade de palavras */}
      <div className="grid">
        {unsolvedTiles.map((word) => (
          <WordTile
            key={word}
            word={word}
            selected={selected.includes(word)}
            shaking={shaking}
            onClick={() => toggleSelect(word)}
          />
        ))}
      </div>

      {/* Mensagem de feedback */}
      <p className="message">{message}</p>

      {/* Contador de erros */}
      <div className="mistakes">
        <span>Erros:</span>
        <div className="dots">
          {Array.from({ length: MAX_MISTAKES }).map((_, i) => (
            <div key={i} className={`dot ${i < mistakes ? "filled" : ""}`} />
          ))}
        </div>
      </div>

      {/* Botões de controle */}
      <div className="controls">
        <button className="btn" onClick={handleShuffle}>
          Embaralhar
        </button>
        <button className="btn" onClick={() => setSelected([])}>
          Limpar
        </button>
        <button
          className="btn btn-submit"
          onClick={handleSubmit}
          disabled={selected.length !== 4}
        >
          Enviar ({selected.length}/4)
        </button>
      </div>

      <button className="btn btn-reset" onClick={handleReset}>
        ↺ Novo Jogo
      </button>

      {/* Modal de fim de jogo */}
      {gameOver && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-emoji">
              {gameOver === "won" ? "🎉" : "😢"}
            </div>
            <div className="modal-title">
              {gameOver === "won" ? "Você Venceu!" : "Fim de Jogo"}
            </div>
            <div className="modal-sub">
              {gameOver === "won"
                ? `${mistakes} erro${mistakes !== 1 ? "s" : ""}. Incrível!`
                : "Não foi dessa vez. Tente novamente!"}
            </div>
            <button className="btn btn-submit" onClick={handleReset}>
              Jogar Novamente
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

// ── RENDERIZA O APP NO DOM ───────────────────────────────
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

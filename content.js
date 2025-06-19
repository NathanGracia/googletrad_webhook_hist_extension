console.log("🌐 Extension Google Translate URL -> Discord Webhook");

let lastUrl = "";

function getFromUrl() {
  const currentUrl = new URL(window.location.href);

  if (currentUrl.href !== lastUrl) {
    lastUrl = currentUrl.href;

    const sourceLang = currentUrl.searchParams.get("sl");
    const targetLang = currentUrl.searchParams.get("tl");
    const sourceText = currentUrl.searchParams.get("text");

    if (sourceText) {
      const decodedText = decodeURIComponent(sourceText);

      const message = {
        content: `${decodedText}`
      };

      console.log("📡 Envoi au webhook Discord...");
	  //ICI METTRE LE LIEN WEBHOOK
      fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
      }).then(res => {
        if (res.ok) {
          console.log("✅ Envoyé avec succès à Discord");
        } else {
          console.error("❌ Échec de l'envoi :", res.status);
        }
      }).catch(err => {
        console.error("💥 Erreur réseau :", err);
      });
    }
  }
}

setInterval(getFromUrl, 2000);

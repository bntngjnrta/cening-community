export const buildWaLinks = (phone, message) => {
  const encoded = encodeURIComponent(message || "Hello");
  return {
    app: `whatsapp://send?phone=${phone}&text=${encoded}`,
    waMe: `https://wa.me/${phone}?text=${encoded}`,
    web: `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`,
  };
};

export const openWhatsApp = (phone, message) => {
  const { app, waMe, web } = buildWaLinks(phone, message);
  const ua = navigator?.userAgent || "";
  const isMobile = /Android|iPhone|iPad|iPod/i.test(ua);

  if (isMobile) {
    window.location.href = app;
    window.setTimeout(() => {
      const w = window.open(waMe, "_blank", "noopener,noreferrer");
      if (!w) window.location.href = waMe;
    }, 650);
    return;
  }

  const w = window.open(web, "_blank", "noopener,noreferrer");
  if (!w) {
    const w2 = window.open(waMe, "_blank", "noopener,noreferrer");
    if (!w2) window.location.href = waMe;
  }
};

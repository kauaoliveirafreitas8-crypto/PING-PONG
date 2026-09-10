/**
 * Utilitário de Rastreamento e Repasse de UTMs / Parâmetros para Checkout
 * Preserva parâmetros de campanha do Facebook Ads, Google Ads, TikTok e plataformas de afiliados (Kiwify).
 */

const STORAGE_KEY = "tracked_utm_params";

/**
 * Salva e recupera todos os parâmetros de busca da URL atual,
 * com fallback para sessionStorage para não perder o rastreamento em caso de recarregamento.
 */
export function getTrackingParams(): URLSearchParams {
  if (typeof window === "undefined") {
    return new URLSearchParams();
  }

  const currentParams = new URLSearchParams(window.location.search);

  // Se houver parâmetros na URL atual, salva no sessionStorage
  if (Array.from(currentParams.keys()).length > 0) {
    try {
      sessionStorage.setItem(STORAGE_KEY, currentParams.toString());
    } catch {
      // Ignora erro de cota ou navegação privada
    }
    return currentParams;
  }

  // Se não houver na URL atual, tenta recuperar do sessionStorage
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      return new URLSearchParams(saved);
    }
  } catch {
    // Ignora erro
  }

  return new URLSearchParams();
}

/**
 * Anexa todos os parâmetros de rastreamento (UTMs, fbclid, src, sck, etc.) a uma URL de checkout.
 */
export function buildCheckoutUrl(baseUrl: string): string {
  if (!baseUrl) return "";

  try {
    const url = new URL(baseUrl, window.location.origin);
    const trackingParams = getTrackingParams();

    // Anexa todos os parâmetros capturados
    trackingParams.forEach((value, key) => {
      // Evita sobrescrever se o link já tiver explicitamente
      if (!url.searchParams.has(key)) {
        url.searchParams.set(key, value);
      }
    });

    // Se tiver utm_content ou utm_campaign mas não tiver src, preenche src para Kiwify
    if (!url.searchParams.has("src")) {
      const srcVal =
        trackingParams.get("src") ||
        trackingParams.get("utm_content") ||
        trackingParams.get("utm_campaign");
      if (srcVal) {
        url.searchParams.set("src", srcVal);
      }
    }

    // Se tiver utm_term ou utm_content mas não tiver sck, preenche sck para Kiwify
    if (!url.searchParams.has("sck")) {
      const sckVal =
        trackingParams.get("sck") ||
        trackingParams.get("utm_term") ||
        trackingParams.get("utm_content");
      if (sckVal) {
        url.searchParams.set("sck", sckVal);
      }
    }

    return url.toString();
  } catch {
    // Se a baseUrl for relativa ou malformada
    const trackingParams = getTrackingParams();
    const query = trackingParams.toString();
    if (!query) return baseUrl;
    return baseUrl.includes("?") ? `${baseUrl}&${query}` : `${baseUrl}?${query}`;
  }
}

/**
 * Inicializador global que monitora e garante que qualquer link
 * de checkout (Kiwify, Hotmart, etc.) na página receba os parâmetros
 * tanto na renderização quanto no momento do clique.
 */
export function initAutoUtmForwarding() {
  if (typeof window === "undefined") return;

  // Atualiza os links presentes no DOM
  const updateCheckoutLinksInDom = () => {
    const trackingParams = getTrackingParams();
    if (Array.from(trackingParams.keys()).length === 0) return;

    const links = document.querySelectorAll<HTMLAnchorElement>(
      'a[href*="pay.kiwify.com.br"], a[href*="kiwify.com.br"], a[href*="hotmart.com"], a[href*="eduzz.com"]'
    );

    links.forEach((link) => {
      const currentHref = link.getAttribute("href");
      if (currentHref) {
        link.setAttribute("href", buildCheckoutUrl(currentHref));
      }
    });
  };

  // Executa logo após carregar e em intervalos para cobrir re-renderizações React
  updateCheckoutLinksInDom();
  window.addEventListener("DOMContentLoaded", updateCheckoutLinksInDom);
  setTimeout(updateCheckoutLinksInDom, 500);
  setTimeout(updateCheckoutLinksInDom, 1500);

  // Intercepta cliques como garantia máxima no momento exato do clique
  document.addEventListener(
    "click",
    (event) => {
      const target = (event.target as HTMLElement)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (
        href &&
        (href.includes("pay.kiwify.com.br") ||
          href.includes("kiwify.com.br") ||
          href.includes("hotmart.com") ||
          href.includes("eduzz.com"))
      ) {
        const enrichedUrl = buildCheckoutUrl(href);
        target.setAttribute("href", enrichedUrl);
      }
    },
    { capture: true }
  );
}

/* Agenda Comercial · Visual Turismo — service worker
   Guarda o app no celular para abrir rápido e funcionar sem internet.
   Os dados continuam no próprio aparelho (localStorage); este arquivo só guarda os arquivos do app. */
const VERSAO = "agenda-v2-2026-10-29c-login";
const ARQUIVOS = ["./", "./index.html", "./manifest.webmanifest", "./icone-192.png", "./icone-512.png", "./icone-maskable-512.png", "./icone-180.png", "./favicon-32.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSAO).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSAO).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return; // mapas, CEP, fontes: sempre pela internet
  if (req.mode === "navigate") {
    // página: tenta a versão nova; sem internet, usa a guardada
    e.respondWith(fetch(req).then((r) => { const cp = r.clone(); caches.open(VERSAO).then((c) => c.put("./index.html", cp)); return r; }).catch(() => caches.match("./index.html")));
    return;
  }
  e.respondWith(caches.match(req).then((r) => r || fetch(req)));
});

// src/proxy.js

// Auth.js yapısından auth fonksiyonunu içe aktarıyoruz.
// Bu fonksiyon, kullanıcı oturumlarını (session) ve kimlik doğrulamayı yönetir.
import { auth } from "@/auth";

// Next.js 16'da middleware yerine artık "proxy" yapısı kullanılıyor.
// Bu fonksiyon, her istekte (GET, POST vs.) çalışır.
// Burada "auth(request)" döndürerek tüm istekleri Auth.js sistemine yönlendiriyoruz.
export async function proxy(request) {
  // Tüm gelen istekleri Auth.js'e yönlendir
  return auth(request);
}

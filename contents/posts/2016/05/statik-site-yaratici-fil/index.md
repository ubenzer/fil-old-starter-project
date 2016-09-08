---
created: 2016-05-23
taxonomy:
  category:
    - Bilgisayar
    - JavaScript
    - Bilgisayar/Programlama
---
# Statik Site Yaratıcı: Fil

Uzun bir süredir Wordpress'i terk etmeyi düşünüyordum. Bu yüzden uzunca bir süredir alternatif arayışındayım.

## Neden Wordpress istemiyorum?

*   PHP ile bir şeyler yazmak zevkli değil.
*   Hosting ihtiyacı: Yazdıklarınızı paylaşmak için para ödemek hoş değil. (Benim kendi VPS'imi kendimin yönettiğimi de düşünürsek) yedek almak, sunucunun güncellemeleri, türlü türlü konfigürasyonlar yapmak çok da mantıklı değil.
*   Çorba gibi veritabanı
*   Karmakarışık bir API: Plugin geliştirmeyi denediğimde enerjimin boşa gittiğini düşünmüştüm.

Bu nedenle alternatifleri araştırmaya başladım. Medium, Blogger, Wordpress.com gibi alternatiflere bakmadım çünkü en ufak detaya kadar her şeyi özelleştirebiliyor olmak _(üretilen web sayfasının %100'ü üzerinde söz sahibi olmak)_ benim için çok önemliydi.

---more---

Wordpress'in kurulum gerektirmesi ve hosting ihtiyacı olmasından şikayet ettikten sonra benzer alternatifler aramak ne kadar saçma olsa da bunu da yaptım. Ben ne kadar sevmesem de, Wordpress gerçekten olup olabilecek en iyi blog/cms motorlarından bir tanesi olduğunu tekrardan görmüş oldum.

## Statik Site Yaratıcılar

Statik site yaratıcılar genel olarak şu şekilde çalışır: Girdi olarak yazılarınızı (içerik) ve görsel şablonunuzu (tema) verirsiniz. Program *sadece bir kere çalışarak *verdiğiniz kurallara uygun olarak statik bir site üretir. Bu statik site, yazılar, kategoriler, arşivler ve diğer aklınıza gelebilecek sayfaların üretilmiş halidir. Bu statik siteyi istediğiniz bir yerde host edebilirsiniz. PHP veya herhangi bir sunucu taraflı dile, veritabanına ihtiyacı olmadığından, sitenizi [github.io](https://pages.github.com/){new}'ya, [Firebase](https://firebase.google.com/){new}'e, AWS S3'e ve hatta evinizdeki Raspberrypi'ye bile koyabilirsiniz!

### Jekyll ve Hexo

[Jekyll](https://jekyllrb.com/){new} statik site yaratıcılarının en popüleri. O kadar popüler ki, Github tarafından destekleniyor. Github Pages'in bütünleşik Jeklyll desteği var. Ruby ile yazılmış bu açık kaynak sistemi doğrudan Github üzerinden kullanabileceğiniz gibi (güvenlik gerekçesi ile bazı kısıtları var) kendi bilgisayarınızda da çalıştırabilirsiniz.

[Hexo](https://hexo.io/){new} da Jekyll'e benzer ancak JavaScript (Node.js) ile yazılmış bir sistem. Eklenti desteği, artırımlı derleme (incremental compiling) ve Wordpress'ten yazıları import etme gibi özellikleri var.

## Fil

*Fil*, benim şu an geliştirmekte olduğum, bir ay içinde bu siteyi host edeceğim Hexo alternatifi yazılım. Hexo'ya göre katbekat hızlı ancak aynı zamanda bir o kadar da az özelliğe sahip! Jekyll ve Hexo'dan en büyük farkı birden fazla koleksiyon tipini destekliyor olması. Örneğin, sitenizdeki yazılarınızı aynı anda hem kategorilere göre,  hem etiketlere göre, hem günlere göre, hem aylara göre, hem de yazıların ilgili oldukları şehirlere göre ayrı ayrı listeleyebilirsiniz. Bunu yapmak için her bir taksonomi için bir koleksiyon tanımlamanız yeterli! Her koleksiyonda sınırsız sayıda kategori ve alt kategori tanımlamanız mümkün!

*Bu projenin blog, çok sık değişmeyen pazarlama siteleri, şirket için wikiler ve dokümantasyonlar için kullanıma uygun olduğunu düşünüyorum.*

### Katkıda Bulunun

Fil, yaklaşık dört aylık bir çalışmanın ürünü. Tamamıyla boş vakitlerimde hobi olarak geliştirdiğim bir proje. Eğer bu proje ilginizi çektiyse, fikir/vizyon paylaşımı ile, UI tasarımı konusunda yardımcı olarak, ana projeye geliştirici (contributer) olarak, testler, dokümantasyon konusunda, early adopter olup sitenizde kullanarak veya ürünün ticari alanda kullanımı konusunda yardımcı olarak katkıda bulunabilirsiniz.

### Şimdi Test Edin

[Proje'nin Github sayfasına gitmek için buraya tıklayın.](https://github.com/ubenzer/fil){new}

[UBenzer'in Fil ile yaratılmış Github Pages ile host edilen sürümünü görmek için buraya tıklayın!](http://beta.ubenzer.com/){new}

![fil](fil.jpg){link}

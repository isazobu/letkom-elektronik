import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/security-control-room.jpg"
                alt="Güvenlik Kontrol Odası"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/security-control-room-dark.jpg"
                alt="Güvenlik Kontrol Odası"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Yüksek Teknoloji Çözümler
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  En son teknoloji ürünleri ve yazılımları kullanarak, ev ve işyerleriniz için maksimum güvenlik sağlıyoruz. 
                  Akıllı kamera sistemleri, gelişmiş alarm sistemleri ve modern geçiş kontrol sistemleri ile mülkünüzü 7/24 koruyoruz.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Profesyonel Destek
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Uzman ekibimiz, kurulum sonrası da yanınızda. 7/24 teknik destek, düzenli bakım hizmetleri ve 
                  hızlı müdahale sürelerimizle sistemlerinizin her zaman sorunsuz çalışmasını sağlıyoruz.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Özelleştirilmiş Çözümler
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Her müşterimizin ihtiyaçları farklıdır. Bu nedenle, her projeyi özenle değerlendirip, 
                  size özel çözümler sunuyoruz. Küçük bir evden büyük bir iş merkezine kadar her ölçekte 
                  güvenlik ve iletişim sistemleri tasarlıyor ve uyguluyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
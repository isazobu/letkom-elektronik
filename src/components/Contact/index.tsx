import NewsLatterBox from "./NewsLatterBox";
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const phoneNumber = "+905301019997"; 
  const whatsappMessage = "Merhaba, fiyat teklifi almak istiyorum."; 
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Ücretsiz Fiyat Al
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Size en kısa sürede geri dönüş yapacağız.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        İsim Soyisim
                      </label>
                      <input
                        type="text"
                        placeholder="İsim ve soyisminizi girin"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Telefon Numarası
                      </label>
                      <input
                        type="tel"
                        placeholder="Telefon numaranızı girin"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Gönder
                    </button>
                  </div>
                </div>
              </form>

              <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-sm hover:bg-green-600 transition duration-300"
                >
                  <FaWhatsapp className="mr-2" />
                  WhatsApp'tan Mesaj Gönder
                </a>
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center justify-center px-8 py-4 bg-blue-500 text-white rounded-sm hover:bg-blue-600 transition duration-300"
                >
                  <FaPhone className="mr-2" />
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Contact;

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Güvenlik ve İletişim Sistemleri Uzmanı",
  description: "20 yıllık deneyimimizle ev ve işyerleriniz için en son teknoloji güvenlik kameraları, alarm sistemleri ve iletişim çözümleri sunuyoruz. Profesyonel kurulum ve 7/24 teknik destek hizmetlerimizle yanınızdayız.",
  keywords: "güvenlik sistemleri, kamera sistemleri, alarm sistemleri, iletişim çözümleri, ev güvenliği, işyeri güvenliği, CCTV, akıllı güvenlik",
  author: "Şirket Adınız",
  openGraph: {
    title: "Güvenlik ve İletişim Sistemleri Uzmanı | Hakkımızda",
    description: "Modern güvenlik ve iletişim çözümleriyle 20 yıldır hizmetinizdeyiz. Ev ve işyeriniz için özel çözümler sunuyoruz.",
    type: "website",
    url: "https://www.sirketiniz.com/hakkimizda",
    image: "https://www.sirketiniz.com/images/og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sirketiniz",
    title: "Güvenlik ve İletişim Sistemleri Uzmanı | Hakkımızda",
    description: "Modern güvenlik ve iletişim çözümleriyle 20 yıldır hizmetinizdeyiz. Ev ve işyeriniz için özel çözümler sunuyoruz.",
    image: "https://www.sirketiniz.com/images/twitter-image.jpg",
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Hakkımızda"
        description="20 yılı aşkın deneyimimizle, modern güvenlik ve iletişim çözümleri sunuyoruz. Ev ve işyerleriniz için en son teknoloji ürünleri ve uzman kadromuzla hizmetinizdeyiz."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};
export default AboutPage;

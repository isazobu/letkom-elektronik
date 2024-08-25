import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Sunduğumuz Hizmetler"
            paragraph="20 yılı aşkın deneyimimizle, ev ve işyerleriniz için en son teknoloji güvenlik ve iletişim çözümleri sunuyoruz. Profesyonel ekibimiz ve 7/24 teknik desteğimizle, sizin huzurunuz için çalışıyoruz."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

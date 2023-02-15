import { bill } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Dinas = () => (
  <section id="dinas" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="gambar dinas"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Silahkan pilih sendiri <br className="sm:block hidden" /> Dinas
        kesukaanmu ya.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Kami memberikan Anda kebebasan dalam hal penentuan Dinas. Bisa memilih
        sesuai dengan minat dan bakat diri masing masing.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button text="Pilih Dinasmu" />
      </div>
    </div>
  </section>
);

export default Dinas;

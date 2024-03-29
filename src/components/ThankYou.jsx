import Header from "./Header";
import styles from "./thankYou.module.css";
import thankYou from "../assets/images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <div className={styles.container}>
      <img src={thankYou} alt="Check"></img>
      <Header
        heading="Thank you!"
        descr="Thank you for confirming your subscription! We hope you have fun using
        our platform. If you ever need support, please feel free to mail us at
        "
      />
      <a href="mailto:support@loremgaming.com">nishantofficial322@gmail.com</a>
    </div>
  );
};

export default ThankYou;

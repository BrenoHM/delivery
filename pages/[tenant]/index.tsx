import { SearchInput } from '../../components/SearchInput';
import Image from "next/image"
import styles from '../../styles/Home.module.css';
import banner from '../../assets/images/banner.jpg';
import { Banner } from '../../components/Banner';
import { ProductItem } from '../../components/ProductItem';
const Home = () => {

  const handleClick = (value: string) => {
    alert(value);
  }

  const dataMocary = {id: 1, image: "/tmp/burguer.png", categoryName: "Tradicional", name: "Texas Burger", price: "25,50"}

  return <div className={styles.container}>
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.headerTopLeft}>
          <div className={styles.headerTitle}>Seja bem vindo (a) 👋</div>
          <div className={styles.headerSubtitle}>O que deseja para hoje</div>
        </div>
        <div className={styles.headerTopRight}>
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z" fill="#FB9400"/>
          </svg>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <SearchInput 
          mainColor="#FB9400"
          onSearch={handleClick} />
      </div>
    </header>

    <Banner />

    <div className={styles.grid}>
      <ProductItem data={dataMocary} mainColor="#FB9400" secondColor="#FFF9F2" />
      <ProductItem data={dataMocary} mainColor="#FB9400" secondColor="#FFF9F2" />
      <ProductItem data={dataMocary} mainColor="#FB9400" secondColor="#FFF9F2" />
    </div>
    
    <main>
      <div className={styles.mainContainer}>
        <div className={styles.banner}>
          <Image src={banner} />
        </div>
      </div>
    </main>
  </div>
}

export default Home;
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";

import styles from "./MainPage.module.scss";

const MainPage = (props) => {
  return (
    <>
      <SectionTitle>Star Wars API</SectionTitle>
      <div className={styles.main__content}>
        <h2>
          Simple website that consumes Star Wars API -
          <a
            href="https://swapi.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://swapi.dev/
          </a>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          eligendi consequuntur distinctio in, illo corrupti laudantium atque,
          fuga minus doloribus fugit facere quaerat iusto consequatur
          aspernatur. Dolores animi, quasi debitis praesentium saepe sit cum
          reiciendis nam deleniti quisquam nostrum facere earum nulla,
          excepturi, labore doloremque vitae temporibus architecto esse omnis
          quod ab! Reprehenderit fugit repudiandae possimus similique culpa
          exercitationem enim esse. Voluptatibus molestiae cumque reiciendis ex
          repudiandae consequuntur quasi quis molestias architecto perferendis
          placeat ipsum voluptatem corrupti, sed veniam tempora incidunt ipsam,
          inventore harum error a accusamus! Ab, ratione ut fuga ipsum iusto
          impedit dicta expedita nisi exercitationem nam eum ea debitis qui
          eligendi autem odio harum cum esse? Commodi pariatur numquam tempora
          dolor ipsa vitae iure quis dicta, nisi sed. Velit, maiores iste?
          Labore dignissimos esse doloremque, quia nesciunt, dolore magnam in
          porro, corporis aliquid hic itaque deserunt iure tempora quisquam qui!
          Dolor exercitationem unde aut ipsum beatae aliquid aperiam inventore,
          quia, et maxime, atque tempora placeat labore quod accusamus illo
          assumenda nostrum animi eligendi itaque similique debitis cupiditate
          corrupti veritatis! Ad voluptate, officiis minima autem eligendi fugit
          obcaecati quaerat qui temporibus corrupti? Ducimus officia ipsa culpa
          recusandae cupiditate obcaecati eligendi enim soluta minima quidem,
          dolorum deleniti dignissimos voluptatem corporis itaque nam mollitia,
          sint ex earum odit necessitatibus suscipit minus aut sequi.
          Consectetur praesentium rerum vel ad deserunt eos voluptates, nisi
          ipsam dolore, ducimus quod, animi obcaecati dicta esse. Repudiandae
          quasi illum fugiat, quaerat aut accusamus nobis eos minus quisquam
          animi odio minima omnis earum tempora inventore sed quidem?
        </p>
      </div>
    </>
  );
};

export default MainPage;

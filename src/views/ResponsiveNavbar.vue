<template>
  <div class="column">
    <div class="section has-background-white">
      <div id="pagina" class="container">
        <div
          class="navegacion is-flex is-flex-wrap-wrap is-align-items-center is-justify-content-space-between has-background-warning p-3"
        >
          <div class="logotipo is-flex is-align-content-center">
            <span>LogoTipo</span>
          </div>
          <div class="navegacion-button">
            <button class="button" @click="toggleMenu">Menu</button>
          </div>
          <div class="menu-enlaces is-hidden">
            <ul>
              <li><a href="#">enlace</a></li>
              <li><a href="#">enlace</a></li>
              <li><a href="#">enlace</a></li>
              <li><a href="#">enlace</a></li>
              <li><a href="#">enlace</a></li>
            </ul>
          </div>
        </div>
        <div id="contenido" class="p-3 content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            rerum tempora id ratione, cumque magnam cum optio nostrum molestias
            asperiores quasi eius dolore iste nobis necessitatibus iusto
            cupiditate, culpa nulla.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eaque
            ab, qui vero amet fugit doloremque ullam nisi natus dicta quisquam
            odit id consequuntur ex numquam at impedit eum veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            aliquam ad molestias iste hic blanditiis rerum facilis sed veritatis
            porro natus soluta asperiores similique, maxime voluptatem numquam
            ratione eius in.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            repellendus, dolorum ea inventore voluptate ad architecto numquam
            expedita, dolores non sapiente culpa ex ipsum incidunt quae
            voluptates ut, unde odio?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus fuga sequi nostrum placeat doloribus dolor. Nobis
            quisquam optio hic facere! Vero, earum? Id officiis modi iste rerum
            praesentium consequatur vitae!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            temporibus, eaque ut porro voluptatibus eum eos tenetur, animi enim
            distinctio non. Ratione sint sit tempore rem, rerum quis illum
            accusamus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            nulla officiis impedit animi in, eligendi ipsam corporis blanditiis
            sapiente, odit ratione aspernatur sunt unde tempora culpa temporibus
            sint velit ut.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            rerum tempora id ratione, cumque magnam cum optio nostrum molestias
            asperiores quasi eius dolore iste nobis necessitatibus iusto
            cupiditate, culpa nulla.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eaque
            ab, qui vero amet fugit doloremque ullam nisi natus dicta quisquam
            odit id consequuntur ex numquam at impedit eum veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            aliquam ad molestias iste hic blanditiis rerum facilis sed veritatis
            porro natus soluta asperiores similique, maxime voluptatem numquam
            ratione eius in.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            repellendus, dolorum ea inventore voluptate ad architecto numquam
            expedita, dolores non sapiente culpa ex ipsum incidunt quae
            voluptates ut, unde odio?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus fuga sequi nostrum placeat doloribus dolor. Nobis
            quisquam optio hic facere! Vero, earum? Id officiis modi iste rerum
            praesentium consequatur vitae!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            temporibus, eaque ut porro voluptatibus eum eos tenetur, animi enim
            distinctio non. Ratione sint sit tempore rem, rerum quis illum
            accusamus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            nulla officiis impedit animi in, eligendi ipsam corporis blanditiis
            sapiente, odit ratione aspernatur sunt unde tempora culpa temporibus
            sint velit ut.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResponsiveNavbar",
  data() {
    return {
      title: "Javascript & Vue",
      subtitle: "Projects",
    };
  },
  methods: {
    toggleMenu() {
      const menu = document.querySelector(".menu-enlaces");
      // Verifica que existen elementos
      if (menu.querySelectorAll("li").length > 0) {
        menu.classList.toggle("is-hidden");
        const buttonMenu = document.querySelector(".navegacion-button button");
        buttonMenu.textContent === "Menu"
          ? (buttonMenu.textContent = "X")
          : (buttonMenu.textContent = "Menu");
      }
    },
  },
};
</script>

<style scoped>
#pagina {
  border: 1px solid #ddd;
}
.menu-enlaces {
  flex-basis: 100%;
}
</style>

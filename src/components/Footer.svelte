<script lang="ts">
  import logo from "../images/logo.svg";
  let clicked = false;
  let copyEmail = () => {
    if (typeof window != "undefined") {
      navigator.clipboard
        .writeText("mayamaze@gmail.com")
        .then(() => {
          clicked = true;
          setTimeout(() => {
            clicked = false;
          }, 2000);
        })
        .catch(() => {
          location.href = "mailto:mayamaze@gmail.com";
        });
    }
  };
</script>

<footer>
  <div class="logo lg:hidden">
    <img src={logo} alt="logo" />
  </div>
  <div class="footer-wrapper-desktop">
    <div class="footer-items">
      <div class="grid">
        <div class="logo hidden lg:block">
          <img src={logo} alt="logo" />
        </div>
      
        <button on:click={copyEmail}>
          {#if clicked}
            copied!
          {:else}
            email maya
          {/if}
        </button>
      </div>
      <a href="/about">
        <button>about maya</button>
      </a>
      <div class="footer-copyright">
        <h4>copyright 2022 maya krishna rao/ vismayah productions</h4>
        <div class="dot">
          <h4><span>&#183;</span></h4>
        </div>
        <h4>all rights reserved.</h4>
      </div>
      <a href="https://www.facebook.com/maya.k.rao">
        <button>facebook</button>
      </a>
      <a href="https://www.instagram.com/maya.k.rao">
        <button>instagram</button>
      </a>
      <div class="website-by">
        <h4>website by</h4>
        <button>tide x tide</button>
      </div>
    </div>
    <div class="website-by-desktop">
      <h4>website by</h4>
      <button>tide x tide</button>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: #020202;
    color: white;
    display: grid;

    justify-content: center;
    padding-bottom: 38px;
  }
  .logo {
    filter: brightness(0) invert(1);
    width: 81px;
    margin: 38px auto;
  }
  .footer-items {
    display: grid;
    justify-content: center;
    justify-items: center;
    text-align: center;
    row-gap: 25px;
  }
  h4 {
    width: 208px;
    font-weight: 469;
    font-size: 10px;
    line-height: 18px;
    letter-spacing: 0.03em;
  }
  .footer-copyright {
    display: grid;
    row-gap: 20px;
  }
  .footer-copyright .dot {
    display: none;
  }
  .website-by {
    margin-top: 10px;
    display: grid;
    justify-items: center;
    row-gap: 10px;
  }
  .website-by h4 {
    line-height: 0px;
  }
  .website-by-desktop {
    display: none;
  }

  @media (min-width: 1024px) {
    footer {
      display: flex;
      justify-content: start;
      justify-items: start;
      padding: 0 75px 74px 75px;
    }
    .logo {
      margin: 59px 0px 38px 0px;
    }
    .footer-wrapper-desktop {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .footer-items {
      display: flex;
      column-gap: 30px;
      align-items: flex-end;
    }
    .footer-items h4 {
      width: fit-content;
    }
    .footer-copyright {
      display: flex;
      column-gap: 8px;
      align-items: center;
    }
    .footer-copyright .dot {
      display: flex;
    }
    .website-by {
      display: none;
    }
    .website-by-desktop {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      column-gap: 10px;
    }
    .website-by-desktop h4 {
      margin-left: 10vw;
      width: fit-content;
    }
  }
</style>

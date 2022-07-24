<template>
 <div id="homePage" class="home-page">
   <div id="headCont" class="head-cont">
      <p id="title" class="title">Welcome to<br>Business Analytics Online</p>
   </div>
   <LoginForm/>
   <div id="bottomCont" class="bottom-cont">
     <p id="bottomTitle" class="bottom-title"><b>Business Analytics</b> — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's</p>
     <ul id="pageList" class="page-list"> <li id="listElement" class="list-element"><b>Interactive Reporting</b><br><br>In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM),<br> E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more<br> systems that reflect different aspects of business activities.</li> <li id="listElement" class="list-element"><b>Automated data updates</b><br><br>The application automatically updates and structures the data in just 60 seconds, saving you time and<br> money.</li> <li id="listElement" class="list-element"><b>Data Security</b><br><br>The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.</li> </ul>
   </div>
 </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";

export default {
  name: "HomePageForm",
  components: {
    LoginForm,
  }
}
</script>

<style scoped lang="scss">
.head-cont {
  width: 100%;
  height: 47vh;
  background-image: url("../assets/headBg.png");
}

.title {
  font-family: "Roboto", sans-serif;
  font-size: 55px;
  text-align: left;
  transform: matrix(1, 0, 0, 1, 371, 215);
  color: #fff;
  line-height: 85px;
}

.bottom-cont {
  width: 100%;
  height: 50vh;
  background: transparent;
  margin-top: -10%;
}

.bottom-title {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  width: 639px;
  text-align: left;
  transform: matrix(1, 0, 0, 1, 380, 48);
  line-height: 25px;
}

.page-list {
  transform: matrix(1, 0, 0, 1, 418, 74);
}

.list-element {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  margin-bottom: 24px;
  line-height: 18px;

  ::v-deep b {
    font-size: 15px;
  }
}
</style>

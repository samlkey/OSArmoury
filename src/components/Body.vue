<template>
  <div id="content">
      <h1 id="title">OSArmoury</h1>

      <img src="../images/game.jpg" id="banner">
 
   
      <img src="../images/icon.png" id="bigman">
    
      

      <div id="text">
      <p>an OSRS companion and account showcase!</p>
      <p>To use this software simply lookup your OSRS username here:</p>
      <p style="font-size: 15px; margin-top: -21px;">(OSArmoury doesn't store any usernames)</p>
      <div class="form__group field">
          <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
          <label for="name" class="form__label">OSRS Name</label>
      </div>


      </div>
  </div>
</template>

<script>
export default {
  name: 'Body'
}
</script>

<style lang="scss" scoped>
#banner {
  object-fit: cover;
  position: absolute;
  width: 100%;
  left: 86px;
  height: 141px;
  top: 42px;
  z-index: -1;
}

#title {
  font-size: 80px;
  color: #ffff00;
  font-family: osrs;
  float: left;
  margin-top: 16px;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
}

#bigman {
  width: 80px;
  height: 80px;
  padding-top: 20px;
}

#text {
  padding-top: 26px;
}

p {
  color: #ffff00;
  font-size: 23px;
}

#icon2 {
  width: 30px;
  height: 30px;
}







$primary: #ffff00;
$secondary: #ffff00;
$white: #fff;
$gray: #9b9b9b;
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 30%;
  width: 50%;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: $white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $gray;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $primary;  
  }
  padding-bottom: 6px;  
  border-width: 3px;
  border-image: linear-gradient(to right, $primary,$secondary);
  border-image-slice: 1;
}
/* reset input */
.form__field{
  &:required,&:invalid { box-shadow:none; }
}
/* demo */
body {
  font-family: 'Poppins', sans-serif; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 10vh;
  font-size: 1.5rem;
  background-color:#222222;
}






</style>

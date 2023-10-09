import React from 'react'
import  './../App.css'
export const Contact = () => {
  return (
    <div class="container">
      <div class="item">
        <div class="contact">
          <div class="firttext">Entrons en contact</div>
          <img src="../images/logo.jpg" alt="image"/>
          <div class="social-links">
            <span class="second-text">Connectez-vous avec nous</span>
            <ul class="social-media">
              <li><a href="https://www.facebook.com/profile.php?id=100094471372043&open_field=website&sk=about_contact_and_basic_info"><i class='bx bxl-facebook'></i></a></li>
              <li> <a href="https://www.linkedin.com/in/mamadou-salifou-malam-issa-61b057209/"><i class='bx bxl-linkedin'></i></a></li>
              <li><a href="https://github.com/Mamadousalifou?tab=repositories"><i class='bx bxl-github'></i></a></li>
            </ul>
          </div>
        </div>
        <div class="submit-form">
          <h4 class="third-text text">Contactez-nous</h4>
          <form action="submit" id="emailForm">
            <div class="input-box">
              <input class="input" type="text" id="FName" name="to_name"  required/>
              <label for="toName">Nom</label>
            </div>
            <div class="input-box">
              <input class="input" type="text" id="SName" name="to_Sname" />
              <label for="">Prenom</label>
            </div>
            
            <div class="input-box">
              <input class="input" type="email" id="user_email" name="from_email" />
              <label for="fromName">Email</label>
            </div>
            <div class="input-box">
              <input class="input" type="text" id="user_phone" name="from_phone" required />
              <label for="phone">téléphone</label>
            </div>
            <div class="input-box">
              <textarea class="input"  required id="message" name="message" cols="30" rows="10"></textarea>
              <label  for="message">Message</label>
            </div>

            <input class="btn" type="submit" value="Envoyer Email"/ >
            
            

          </form>
        </div>
      </div>

    </div>
  )}

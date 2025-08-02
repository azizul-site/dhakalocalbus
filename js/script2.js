  const words = [
'Abdullahpur','Adabor','Agargaon','Airport','Amin Bazar','Ansar Camp','Arambagh','Arambagh Notre Dame College','Asad Gate','Azampur','Azimpur','Babubazar','Badda','Badda Link Road','Bakshi Bazar','Baipayl','Balughat','Banani','Banashree','Banasree','Bangla College','Bangla Motor','Bashtola','Basumati','Bashabo','Bashundhara','Bashundhara (300 Feet Gate)','Bata Signal','Beribadh','Bijoy Sarani','Birulia','Board Bazar','Bosila','Chankhar Pul','Chasara','Chairman Bari','Chiriyakhana','Chittagong Road','City College','College Gate','Dainik Bangla Moor','Darussalam','Demra Staff Quarter','Dhamrai','Dhanmondi 27','Dhanmondi 32','Dhakeshwari','Dhour','Dhupkhola','Dholairpar','ECB Square','Eden College','Elevated Express Way','Fantasy Kingdom','Farmgate','Gabtoli','Gazipur Bypass','Gazipur Chourasta','Ghatar Char','Golap Shah Mazar','GPO','Gulistan','Gulshan 1','Gulshan Bridge','Hazipara','Hemayetpur','High Court','House Building','Ittefaq Moor','Jahangir Gate','Jalkuri','Jamuna Future Park','Japan Garden City','Jashimuddin','Jashimuddin (Uttara)','Jatrabari','Kadamtali','Kakali','Kakrail','Kalabagan','Kalshi','Kallyanpur','Kamalapur','Kamarpara','Katabon','Kawran Bazar','Kazipara','Keraniganj','Khamar Bari','Khejur Bagan','Khilgaon','Khilkhet','Konabari','Kuril Bishwa Road','Kuril Chourasta','Kurmitola','Madhya Badda','Madanpur','Malibaag Moor','Malibagh','Malibagh Railgate','Manik Mia Avenue','Manik Nagar','Matuail','Matsya Bhaban','Mazar Road','Meghna Ghat','Megnagar','Merul Badda','MES','Mill Gate','Mirpur 1','Mirpur 10','Mirpur 11','Mirpur 12','Mirpur 14','Mirpur 2','Moghbazar','Mohakhali','Motijheel','Mouchak','Mohammadpur','Mugdapara','Nabisco','Nadda','Nandan Park','Naya Bazar','New Market','Nila Market','Nilkhet','Nobinagar','Notun Bazar','Palashi','Pallabi','Paltan','Postogola','Press Club','Purobi','Rajarbag','Rajlakshmi','Rampura Bazar','Rampura Bridge','Ray Saheb Bazar','Rayerbag','Ring Road','Rupnagar','Sadarghat','Sainik Club','Sat Rasta','Savar','Sayadabad','Science Lab','Setu Road','Shahbag','Shahjadpur','Shantinagar','Shewra','Shewrapara','Shia Masjid','Shishu Mela','Shonir Akhra','Shyamoli','Sign Board','Sony Cinema Hall','Songsod Bhaban','Sonargao','Staff Road','Star Kabab','Station Road','Sultanpur','Technical','Tejgaon College (Farmgate)','Tolarbag','Tong','Tongi','Uttar Badda','Vashantek','Vulta','Wireless','Zia Uddyan','Zirani Bazar','Zirabo'







    ];

    const from = document.getElementById("from");
    const soggestionsBox = document.getElementById("soggestions");

      from.addEventListener("input", function () {
      const input = this.value.toLowerCase();
      soggestionsBox.innerHTML = "";

      if (input.length === 0) return;

      const matches = words.filter(word => word.toLowerCase().includes(input));

      matches.forEach(match => {
        const div = document.createElement("div");
        div.classList.add("soggestion-item");
        div.textContent = match;

        div.addEventListener("click", () => {
          from.value = match;
          soggestionsBox.innerHTML = "";
        });

        soggestionsBox.appendChild(div);
      });
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".searchForm")) {
        soggestionsBox.innerHTML = "";
      }
    });

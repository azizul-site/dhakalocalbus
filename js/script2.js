  const words = [
 'Abdullahpur', 'Adabor', 'Agargaon', 'Amin Bazar', 'Ansar Camp', 'Arambagh', 'Arambagh Notre Dame College', 'Asad Gate', 'Azampur', 'Azimpur', 'Babubazar', 'Badda', 'Badda Link Road', 'Bakshi Bazar', 'Baipayl', 'Banani', 'Banasree', 'Bangla Motor', 'Bashtola', 'Basumati', 'Bashabo', 'Bashundhara', 'Beribadh', 'Bijoy Sarani', 'Birulia', 'Board Bazar', 'Chankhar Pul', 'Chasara', 'Chairman Bari', 'Chiriyakhana', 'Chittagong Road', 'City College', 'College Gate', 'Demra Staff Quarter', 'Dhanmondi 27', 'Dhanmondi 32', 'Dhour', 'Dhakeshwari', 'Darussalam', 'ECB Square', 'Fantasy Kingdom', 'Farmgate', 'Gabtoli', 'Gazipur Bypass', 'Gazipur Chourasta', 'Golap Shah Mazar', 'GPO', 'Gulistan', 'Gulshan 1', 'Gulshan Bridge', 'Hazipara', 'Hemayetpur', 'High Court', 'House Building', 'Japan Garden City', 'Jahangir Gate', 'Jamuna Future Park', 'Jashimuddin', 'Jashimuddin (Uttara)', 'Jatrabari', 'Kadamtali', 'Kakali', 'Kakrail', 'Kalabagan', 'Kalshi', 'Kallyanpur', 'Kamalapur', 'Kamarpara', 'Kazipara', 'Katabon', 'Kawran Bazar', 'Keraniganj', 'Khamar Bari', 'Khilgaon', 'Khilkhet', 'Kuril Bishwa Road', 'Kurmitola', 'Madhya Badda', 'Malibaag Moor', 'Malibagh', 'Malibagh Railgate', 'Manik Mia Avenue', 'Matuail', 'Matsya Bhaban', 'Meghna Ghat', 'Mazar Road', 'MES', 'Merul Badda', 'Mill Gate', 'Mirpur 1', 'Mirpur 2', 'Mirpur 10', 'Mirpur 11', 'Mirpur 12', 'Mirpur 14', 'Moghbazar', 'Mohakhali', 'Mouchak', 'Motijheel', 'Nadda', 'Nabisco', 'Nandan Park', 'Naya Bazar', 'New Market', 'Nilkhet', 'Nobinagar', 'Notun Bazar', 'Palashi', 'Paltan', 'Pallabi', 'Purobi', 'Press Club', 'Rajlakshmi', 'Rajarbag', 'Rayerbag', 'Rampura Bazar', 'Rampura Bridge', 'Ring Road', 'Rupnagar', 'Sadarghat', 'Sayapabad', 'Sat Rasta', 'Science Lab', 'Sainik Club', 'Savar', 'Setu Road', 'Shahbag', 'Shahjadpur', 'Shantinagar', 'Shewra', 'Shewrapara', 'Shia Masjid', 'Shishu Mela', 'Shyamoli', 'Sign Board', 'Sonargao', 'Sony Cinema Hall', 'Staff Road', 'Station Road', 'Technical', 'Tong', 'Tongi', 'Uttar Badda', 'Wireless', 'Zia Uddyan', 'Zirani Bazar', 'Zirabo'





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

  const words = [
  'Abdullahpur', 'Adabor', 'Agargaon', 'Airport', 'Amin Bazar', 'Ansar Camp', 'Arambagh', 'Ashulia', 'Asad Gate', 'Azampur',
  'Azimpur', 'Baipayl', 'Babubazar', 'Badda', 'Badda Link Road', 'Bakshi Bazar', 'Balughat', 'Banani', 'Banasree', 'Bangla College',
  'Bangla Motor', 'Bangladesh Bank', 'Bashtola', 'Bashabo', 'Bashundhara', 'Bashundhara (300 Feet Gate)', 'Bata Signal',
  'Beribadh', 'Beribadh Tin Rastar Moor', 'Bijoy Sarani', 'Birulia', 'Birma', 'Board Bazar', 'Bosila', 'Bot tola', 'Cantonment',
  'Chairman Bari', 'Chalantika Mor', 'Chandra', 'Chankhar Pul', 'Chasara', 'Chiriyakhana', 'Chittagong Road', 'City College',
  'College Gate', 'Dainik Bangla Moor', 'Darussalam', 'Dayagonj', 'Demra Staff Quarter', 'Dhamrai', 'Dhanmondi', 'Dhanmondi 15',
  'Dhanmondi 27', 'Dhanmondi 32', 'Dhour', 'Dhakeshwari', 'Dipon', 'Dholairpar', 'Dia Bari', 'Eden College', 'ECB Square',
  'Fakirapul', 'Fantasy Kingdom', 'Farmgate', 'Fulbaria', 'Gabtoli', 'Gandaria', 'Gazipur Bypass', 'Gazipur Chourasta',
  'Ghatar Char', 'Golap Shah Mazar', 'Golapbagh Chowrasta', 'Golshan 1', 'Golshan 2', 'GPO', 'Gulistan', 'Hemayetpur',
  'Hazipara', 'Hazaribag', 'Hasnabad', 'High Court', 'House Building', 'IDB', 'Itihash', 'Ittefaq Moor', 'Jahangir Gate',
  'Jakir Hossain Road', 'Jamgora', 'Jamuna Future Park', 'Janapoth Moor', 'Japan Garden City', 'Jashimuddin', 'Jashimuddin (Uttara)',
  'Jarun', 'Jatrabari', 'Jigatola', 'Joydebpur', 'Jurain', 'Kakali', 'Kakrail', 'Kalabagan', 'Kalshi', 'Kallyanpur', 'Kamalapur',
  'Kamarpara', 'Kamrangirchar', 'Kanchan Bridge', 'Kanchpur', 'Kanak', 'Katabon', 'Kawlar', 'Kawran Bazar', 'Kazipara', 'Kazla',
  'Kadamtali', 'Keraniganj', 'Khamar Bari', 'Khilgaon', 'Khilgaon flyover', 'Khilgaon Khidmah Hospital', 'Khilkhet', 'Kochukhet',
  'Kollyanpur', 'Konabari', 'Kuchimura', 'Kuril Bishwa Road', 'Kuril Chourasta', 'Kuril Flyover', 'Madanpur', 'Madhya Badda',
  'Malibaag Moor', 'Malibagh', 'Malibagh Railgate', 'Manik Mia Avenue', 'Manik Nagar', 'Manikganj', 'Matsya Bhaban', 'Matuail',
  'Maowa', 'MES', 'Merul Badda', 'Metro Hall', 'Mill Gate', 'Mirpur 1', 'Mirpur 2', 'Mirpur 6', 'Mirpur 10', 'Mirpur 11',
  'Mirpur 12', 'Mirpur 13', 'Mirpur 14', 'Mirpur (DOHS)', 'Mochak', 'Mohakhali', 'Mohammadpur', 'Mogbazar', 'Motijheel',
  'Mouchak', 'Mugdapara', 'Nabisco', 'Nadda', 'Nandan Park', 'Narsinghapur', 'Naya Bazar', 'New Market', 'Nila Market', 'Nilkhet',
  'Nimtola', 'Nobinagar', 'Notun Bazar', 'Paltan', 'Pallabi', 'Panthopoth', 'Palli Bidyut', 'Police Plaza', 'Postogola',
  'Press Club', 'Purobi', 'Rajendrapur', 'Rajlakshmi', 'Rajarbag', 'Rampura Bazar', 'Rampura Bridge', 'Ray Saheb Bazar',
  'Rayerbag', 'Ring Road', 'Rupnagar', 'Sadarghat', 'Sainik Club', 'Salimullah Road', 'Sanarpar', 'Sat rasta', 'Sayadabad',
  'Sayapabad', 'Science Lab', 'Savar', 'Savar Cantonment', 'Shewra', 'Shewrapara', 'Shahbag', 'Shahjadpur', 'Shampur',
  'Shankar', 'Shantinagar', 'Shia Masjid', 'Shibu Market', 'Shishu Mela', 'Shonbari Sreenagar', 'Shonir Akhra', 'Showari Ghat',
  'Shukrabad', 'Shyamoli', 'Sign Board', 'Sony Cinema Hall', 'South Banasree', 'Sreepur', 'Staff Road', 'Star Kabab',
  'Station Road', 'Suvidha', 'Surabari', 'Tajmahal Road', 'Taltola', 'Technical', 'Tejgaon College (Farmgate)', 'Tikatuli',
  'Tingi', 'Tongi', 'Tolarbag', 'Uttar Badda', 'Uttara', 'Vashantek', 'Victoria Park', 'Vulta', 'Wireless', 'Zia Uddyan',
  'Zarani Bazar', 'Zirani Bazar', 'Zirabo'







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

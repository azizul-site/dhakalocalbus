const suggestions = [
    "Abdullahpur", "Agargaon", "Airport", "Amin_bazar","Ansar_camp", "Asad_gate","Ashulia","Azampur","Badda","Badda_linkroad", "Banani", "Banasree", "Bangabhaban","Bangla_motor", "Basabo", "Bashundhara", "Basila", "Bijoy_sarani", "Cantonment", "Chankharpul", "Chankharpul", "Chiriyakhana","Chandra","Dhanmondi-15","Dhanmondi-27","Dhanmondi-32","EPZ", "Farmgate","Fantasy_kingdom", "Gabtoli", "Gazipur_chowrasta", "GPO", "Gulistan", "Gulshan-1", "Gulshan-2", "Hemayetpur", "High_court", "House_building", "Jahangir_gate", "Jamuna", "Jatrabari","Jirani","Jigatola","Kajipara", "Kakrail", "Kallyanpur", "Kalshi", "Kamlapur", "Kanchpur", "Karwan_bazar", "Keraniganj", "Khamar_bari", "Khilgaon", "Khilkhet", "Kochukhet", "Kolabagan", "Kuril", "Madanpur","Malibagh", "Matsay_bhaban","Mogbazar", "Mirpur-1","Mirpur-2","Mirpur-6","Mirpur-7","Mirpur-10", "Mirpur-11", "Mirpur-12", "Mirpur-13", "Mirpur-14", "Mohakhali", "Mohammadpur", "Motijhel", "Mouchak", "Mugda", "Nabinagar","Nandan_park","New_market", "Notunbazar", "Pallabi", "Palton", "Postogola", "Press_club", "Purobi", "Rajlakshmi", "Rampura", "Rayerbag", "Rupnagar_abashik","Savar","Sadarghat","Saydabad", "Sha_mosjid", "Shahbag", "Shahjadpur", "Shanir_akhra","Shewrapara", "Shyamoli", "Singboard", "Sony_cinemahall", "Titipara", "Tongi", "Uttara", "Wireless"


  ];

  const to = document.getElementById('to');
  const suggestionsList = document.getElementById('suggestions');

  to.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    suggestionsList.innerHTML = '';

    if (query) {
      const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(query));
      filteredSuggestions.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('click', () => {
          to.value = item;
          suggestionsList.innerHTML = '';
        });
        suggestionsList.appendChild(li);
      });
    }
  });

  function check() {
    if (contact.user_name.value == "") {
      alert("名前を入力してください");
    }
    if(contact.gender.value == "") {
      alert("性別を選んでください")
    }
    if (contact.form_box.value == "ここに記入してください" || contact.form_box.value == ""){
      alert("問い合わせ内容を入力してください")
    }

  }
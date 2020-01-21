var
  btnBurg = document.getElementById('burg_btn');

  function btnClickActiv(){
    if( !btnBurg.classList.contains('btn_burg_active'))
    {
      btnBurg.classList.add('btn_burg_active');
    } else {
      btnBurg.classList.remove('btn_burg_active');
    }
  };
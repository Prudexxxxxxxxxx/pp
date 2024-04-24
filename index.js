document.querySelector('body').onclick = function(e) {
    if(e.target.className != 'close') return
    let item = e.target.closest('.box1')
    item.style.display = 'none'
    document.querySelector('.box2').style.display = 'block';
    
    
    if(e.target.id  == 'q2'){
      document.getElementById("defaultOpen2").click();
    } ;
    if(e.target.id == 'q1'){
      document.getElementById("defaultOpen1").click();
    };
     if(e.target.id  == 'q'){ 
       document.getElementById("defaultOpen").click();}
      }

      document.querySelector('.logo1 ').onclick = function(ee) {
       
        let item1 = ee.target.closest('.box2')
        item1.style.display = 'none'
        document.querySelector('.box1').style.display = 'block'
      
      }

document.querySelector('.logo1').onclick = function(ee) {
       
      let item1 = ee.target.closest('.box2')
      item1.style.display = 'none'
      document.querySelector('.box1').style.display = 'block'}

    function openOl(evt, cityName) {
        // Объявить все переменные
        var i, tabcontent, tablinks;
      
        // Получить все элементы с помощью class="tabcontent" и спрятать их
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        // Получить все элементы с помощью class="tablinks" и удалить class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        // Показать текущую вкладку и добавить "active" класс для кнопки, которая открыла вкладку
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
        
      }

    
      
const tabs = document.querySelectorAll('.tabs')
const content = document.querySelectorAll('.content')
let index = 0

tabs.forEach(tab => {
    tab.addEventListener('click',() => {
        if(tab.classList.contains('active')){
            return;
        } else {
            tab.classList.add('active');
        }
        index = tab.getAttribute('data-anim')
        console.log(index);

        for(i = 0; i < tabs.length; i++) {
            if(tabs[i].getAttribute('data-anim')!= index) {
                tabs[i].classList.remove('active');
            }
        }

        for(j = 0; j < tabs.length; j++){

            if(content[j].getAttribute('data-anim') == index) {
                content[j].classList.add('activeContent')
            } else {
                content[j].classList.remove('activeContent')
            }
        }

    })
})

var icon = document.getElementById("icon");

icon.onclick = function() {
  document.body.classList.toggle("dark-theme")
  if(document.body.classList.contains("dark-theme")) {
    icon.src = "sun.png";
  } else {
    icon.src = "moon.png";
  }
}
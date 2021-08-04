
//creted by Anand kumar 18sep2020


alert("i will update soon guys");
function changeLanguage(language) {
                    var element = document.getElementById("url");
                    element.value = language;
                    element.innerHTML = language;
                }

                function showDropdown() {
                    document.getElementById("myDropdown").classList.toggle("show");
                }

                window.onclick = function(event) {
                    if (!event.target.matches('.dropbtn')) {
                        var dropdowns = document.getElementsByClassName("dropdown-content");
                        var i;
                        for (i = 0; i < dropdowns.length; i++) {
                            var openDropdown = dropdowns[i];
                            if (openDropdown.classList.contains('show')) {
                                openDropdown.classList.remove('show');
                            }
                        }
                    }
                }


function openTab(evt, page) 
{
    var i, pages, links;
    //hide all pages
    pages = document.getElementsByClassName("content");
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    fa = document.getElementsByClassName("fa fa-usera");
    for (i = 0; i < fa.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
    }
    document.getElementById(page).style.display = "block";
    evt.currentTarget.className += " active";
}





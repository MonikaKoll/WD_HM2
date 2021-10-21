/*
$(function() {
    $.get("posts.json", function(json_obj) {
        for (obj of json_obj) {
            let div = $('<div class= "post">');
            let title = $('<h1>').text(obj.date);
            let body = $('<p>').text(obj.body);
            div.append(title);
            div.append(body);
            
            $('body').append(div)
        }
    })
});
*/

/* getting posts from online url with jQuery 
$(function () {
    function getPosts() {
        return $.get({
            url: "https://api.jsonbin.io/b/617112c4aa02be1d445c8e70",

            // this online host needs a secret key to access json
            beforeSend: function (xhr) {
                $("getPosts").show();
                xhr.setRequestHeader("secret-key", "$2b$10$PR5PkZbnpZQ16tHtu59mT.v4Ea1wPfx6rQOAygPuqDTXEFFbWvW8S");
            },

            success: function (response) {
                //console.log("jQuery works") //to test that jQuery works
                return response;
            },
            error: function (e) {
                alert(`error retrieving posts: ${
                    JSON.stringify(e)
                }`);
            }
        });
    }

    getPosts().then((res) => {
        for (post of res) {

            let divMain = $('<div class="image-box">');
            let divTop = $('<div class="top">');
            let divAuthor = $('<div class="author">');
            let divImage = $('<div class="image">');
            let divBottom = $('<div class="bottom">');

            let date = $('<h3>').text(post.date);
            let body = $('<p class="comment">').text(post.body);
            let image = $('<img>').attr('src',post.image);
            let profileImage = $('<img>').attr('src',post.profile_image);
            let author = $('<h3 class="comment">').text(post.author);
            let button = $('<button class="btn"><i class="fa fa-thumbs-up"></i></button>');

            divAuthor.append(profileImage)
            divAuthor.append(author)

            divTop.append(divAuthor)
            divTop.append(date)

            divImage.append(image)
            divImage.append(body)

            divBottom.append(button)

            divMain.append(divTop)
            divMain.append(divImage)
            divMain.append(divBottom)

            $('body').append(divMain);
        }
    }).catch(function (e) {
        alert(e);
    });
});
*/


let divPosts = document.getElementById("posts");

$(function () {
    $.get("posts.json", function (json_obj) {
        for (obj of json_obj) {
            let divMain = $('<div class="image-box">');
            let divTop = $('<div class="top">');
            let divAuthor = $('<div class="author">');
            let divImage = $('<div class="image">');
            let divBottom = $('<div class="bottom">');

            let date = $('<h3>').text(obj.date);
            let body = $('<p class="comment">').text(obj.body);
            let image = $('<img>').attr('src', obj.image);
            let profileImage = $('<img>').attr('src', obj.profile_image);
            let author = $('<h3 class="comment">').text(obj.author);
            let button = $('<button class="btn"><i class="fa fa-thumbs-up"></i></button>');

            divAuthor.append(profileImage)
            divAuthor.append(author)

            divTop.append(divAuthor)
            divTop.append(date)

            divImage.append(image)
            divImage.append(body)

            divBottom.append(button)

            divMain.append(divTop)
            divMain.append(divImage)
            divMain.append(divBottom)

            $('body').append(divMain)
        }
    })
});

/*
<div class="image-box">
    <div class="top"> <!-- KASTI ÜLAOSA PILDIMULLI JA KUUPÄEVAGA -->
        <div class="author">
            <img src="../content/profile.png" alt="profile">
            <h3>Annaliis Täheväli</h3>
        </div>
        
        <h3>September 19, 2021 16:23</h3>
    </div>

    <div class="image">
        <img src="../content/bezos_stonks.jpg" alt="bezos">
        <p class="comment">Hihi found my doppelgänger.</p>
    </div>

    <div class="bottom">
        <button class="btn"><i class="fa fa-thumbs-up"></i></button>
    </div>
</div>
*/

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
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

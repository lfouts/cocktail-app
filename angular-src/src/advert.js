$(document).ready(function() {
  //grab data from form
  let adTitle = $("#adTitle")
  //let adCategory = $("adCategory")
  let adBody = $("#adBody")
  let numUsers = $("#numUsers")

  let createAdBtn = $("#createAdBtn")
  let deleteAdBtn = $('.deleteAdBtn')

  createAdBtn.on('click', (event) => {
    event.preventDefault();

    var check_adForm = function() {
      //check all fields
      var flag = true;
      $.each($("section .required"), function(index, field) {
        if ($(this).val() == "") {
          alert('Please enter a value for ' + $(this).attr('name'));
          flag = false;
          return false;
        }
      });

      return flag;
    }

    if (check_adForm()) {
      console.log("ad form fully filled out...");
    }

    let newAdData = {
      title: adTitle.val(),
      category: adCategory.options[adCategory.selectedIndex].value,
      body: adBody.val(),
      taken: false,
      public: true,
    }

    console.log(numUsers.val());

    $.post('/api/ads', newAdData).done(() => {
      console.log(newAdData);
      alert("Successfully created your new ad!")
    })

  })

  //Delete advertisers jQuery portion
  deleteAdBtn.on('click', (event) => {
    $.ajax({
      url: '/api/ads/' + $(event.target).data('id'),
      type: 'DELETE',
      success: function(result) {
        alert('This has been deleted!')
      }
    });
  })
});

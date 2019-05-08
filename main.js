(function () {
  'use strict'

  feather.replace()

}())

$(function () {
  console.log("ready!");

  $.getJSON("api.json",
    function (data) {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        $('#group-' + data[i].group + ' .card-body').append(formatFunction(i, data[i]))
      }
    },
    function (err) {
      console.log(err);
    }
  );


  function formatFunction(fId, f) {
    return '<div class="col-sm-2">' +
      '<div class="f-name">' + f.name.replace(/_/g, " ") + '</div>' +
      '<div class="f-desc">' + f.description + '</div>' +
      '<div class="f-args">' +
      formatParams(fId, f.params) +
      '</div></div>';
  }

  function formatParams(fId, params) {
    fParams = ""
    for (let i = 0; i < params.length; i++) {
      fParams += '<div class="form-group">' +
        '<label for="f-' + fId + '-a-' + i + '">' + params[i].name + '</label>';
      if (params[i].spec.type == "bool") {
        inputType = "checkbox"
      } else {
        inputType = "text"
      }
      if (params[i].spec.type == "list") {
        placeholder = "v1, v2, ..."
      } else {
        placeholder = ""
      }
      fParams += '<input type="' + inputType + '" class="form-control" id="f-' + fId + '-a-' + i + '" data-toggle="tooltip" data-placement="right" title="' + params[i].description + '" placeholder="' + placeholder + '">';
      fParams += '</div>'
    }
    return fParams;
  }

  function ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


});


$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip()
});